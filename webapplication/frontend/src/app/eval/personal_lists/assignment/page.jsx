'use client'
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "@/components/ui/table";
import { fetchAssignments, saveAssignments, fetchAssignmentAuthorities } from "@/lib/services/assignments";
import { Toaster, toast } from "sonner";
import { useUser } from "@/context/UserContext";

// 簡易モーダル
const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-lg shadow-lg p-6 min-w-[320px] max-w-lg">
        {children}
        <div className="flex justify-end mt-6">
          <Button onClick={onClose}>閉じる</Button>
        </div>
      </div>
    </div>
  );
};

const AssignmentPage = () => {
  const user = useUser();
  const [assignments, setAssignments] = useState([]);
  const [evaluators, setEvaluators] = useState([]);
  const [assignmentSelections, setAssignmentSelections] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [unassignedEvaluators, setUnassignedEvaluators] = useState([]);

  // ログインユーザーの施設名を取得
  const facility = user?.facility || "";

  // 割り当て一覧と評価者一覧を取得
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAssignments();
        // ログインユーザーの施設のみ表示
        const filtered = data.filter(emp => emp.facility === facility);
        setAssignments(filtered);

        // 施設ごとの評価者候補を取得
        if (facility) {
          const authorities = await fetchAssignmentAuthorities(facility);
          setEvaluators(authorities);
        } else {
          setEvaluators([]);
        }

        const initialSelections = {};
        filtered.forEach(emp => {
          initialSelections[emp.employeeId] = {
            primary: emp.primaryEvaluatorId || "",
            secondary: emp.secondaryEvaluatorId || "",
            final: emp.finalEvaluatorId || "",
          };
        });
        setAssignmentSelections(initialSelections);
      } catch (error) {
        toast.error("データの取得に失敗しました");
      }
    };
    fetchData();
  }, [facility]);

  const gradeOrder = ["G04", "G05", "G06"]; // 等級の昇順リスト

  // ひとりの被考課者に対して同じ人が2回以上考課できないようにする
  const getAvailableEvaluators = (employeeId, level) => {
    const selected = assignmentSelections[employeeId] || {};
    const employee = assignments.find(a => a.employeeId === employeeId);
    // すでに他の段階で選ばれている人は除外
    const excludeIds = [
      ...(level !== "primary" && selected.primary && selected.primary !== "none" ? [selected.primary] : []),
      ...(level !== "secondary" && selected.secondary && selected.secondary !== "none" ? [selected.secondary] : []),
      ...(level !== "final" && selected.final && selected.final !== "none" ? [selected.final] : []),
      employeeId // 被考課者本人も除外
    ];
    // 等級が高い人のみ候補
    const employeeGradeIndex = gradeOrder.indexOf(employee.grade);
    return evaluators.filter(e =>
      !excludeIds.includes(e.employeeId) &&
      gradeOrder.indexOf(e.grade) > employeeGradeIndex
    );
  };

  const handleAssignmentChange = (employeeId, level, evaluatorId) => {
    setAssignmentSelections((prev) => {
      const updated = {
        ...prev,
        [employeeId]: {
          ...prev[employeeId],
          [level]: evaluatorId,
        },
      };
      // 一次考課が「この考課段階は実施しない」の場合、二次考課も自動的に「この考課段階は実施しない」に設定
      if (level === "primary" && evaluatorId === "none") {
        updated[employeeId].secondary = "none";
      }
      // 二次考課が「この考課段階は実施しない」になったら最終考課も空にする
      if (level === "secondary" && evaluatorId === "none") {
        updated[employeeId].final = "";
      }
      return updated;
    });
  };

  // 割り当てられていない考課者（考課者が誰も非考課者を担当していない）を検出
  const findUnassignedEvaluators = () => {
    // 各考課者(employeeId)が誰かを担当しているか
    const assigned = {};
    Object.entries(assignmentSelections).forEach(([targetId, sel]) => {
      ["primary", "secondary", "final"].forEach(level => {
        const evalId = sel[level];
        if (evalId && evalId !== "none") {
          assigned[evalId] = true;
        }
      });
    });
    // evaluatorsのうち、誰も担当していない人を抽出
    return evaluators.filter(e => !assigned[e.employeeId]);
  };

  const handleSaveAssignments = async () => {
    setIsSaving(true);
    try {
      // バリデーション: 同じ人が複数段階で選ばれていないかチェック
      for (const [employeeId, sel] of Object.entries(assignmentSelections)) {
        const ids = [sel.primary, sel.secondary, sel.final].filter(
          (id, idx, arr) => id && id !== "none" && arr.indexOf(id) !== idx
        );
        if (ids.length > 0) {
          toast.error("同じ評価者を複数段階で選択できません");
          setIsSaving(false);
          return;
        }
      }
      // 割り当てられていない考課者を検出
      const unassigned = findUnassignedEvaluators();
      if (unassigned.length > 0) {
        setUnassignedEvaluators(unassigned);
        setModalOpen(true);
        setIsSaving(false);
        return;
      }
      // 保存処理
      const saveData = Object.entries(assignmentSelections).map(([employeeId, sel]) => ({
        employeeId,
        primaryEvaluatorId: sel.primary,
        secondaryEvaluatorId: sel.secondary,
        finalEvaluatorId: sel.final,
      }));
      await saveAssignments(saveData);
      toast.success("割り当てを保存しました");
    } catch (error) {
      toast.error("保存に失敗しました");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" richColors/>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div>
          <h3 className="text-lg font-bold mb-2">割り当てられていない考課者がいます</h3>
          <p className="mb-2 text-sm text-gray-700">
            下記の考課者は誰も担当していません。<br />
            考課者は非考課者を1人以上担当する必要があります。
          </p>
          <ul className="mb-2 list-disc list-inside text-sm">
            {unassignedEvaluators.map(e => (
              <li key={e.employeeId}>
                {e.lastName}{e.firstName}（{e.grade}）
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-500">割り当てを見直してください。</p>
        </div>
      </Modal>
      <div className="mx-auto p-3 space-y-3 max-w-5xl">
        {/* タイトル・説明 */}
        <div className="mb-2">
          <h2 className="text-2xl font-bold mb-1">人事考課 割り当て設定</h2>
          <p className="text-gray-600 text-sm">
            各被考課者ごとに一次・二次・最終考課者を選択してください。同じ評価者を複数段階で割り当てることはできません。
          </p>
        </div>
        {/* 従業員リスト */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">被考課者リスト（{assignments.length}名）</h3>
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[370px] pb-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell>氏名</TableCell>
                  <TableCell>等級</TableCell>
                  <TableCell>施設名</TableCell>
                  <TableCell>一次考課者</TableCell>
                  <TableCell>二次考課者</TableCell>
                  <TableCell>最終考課者</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assignments.map((employee) => (
                  <TableRow key={employee.employeeId} className="align-top">
                    <TableCell>
                      <div>
                        <span className="font-bold">{employee.lastName}{employee.firstName}</span>
                        <div className="text-xs text-gray-400">{employee.employeeId}</div>
                      </div>
                    </TableCell>
                    <TableCell>{employee.grade}</TableCell>
                    <TableCell>{employee.facility}</TableCell>
                    {/* 一次考課者 */}
                    <TableCell>
                      <Select
                        value={assignmentSelections[employee.employeeId]?.primary || ""}
                        onValueChange={(value) =>
                          handleAssignmentChange(employee.employeeId, "primary", value)
                        }
                      >
                        <SelectTrigger className="w-40">
                          {assignmentSelections[employee.employeeId]?.primary === "none"
                            ? <span className="text-red-500">実施しない</span>
                            : evaluators.find(
                                (e) => e.employeeId === assignmentSelections[employee.employeeId]?.primary
                              )?.lastName +
                              (evaluators.find(
                                (e) => e.employeeId === assignmentSelections[employee.employeeId]?.primary
                              )?.firstName || "") || "選択"}
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">実施しない</SelectItem>
                          {getAvailableEvaluators(employee.employeeId, "primary").map((evaluator) => (
                            <SelectItem key={evaluator.employeeId} value={evaluator.employeeId}>
                              {evaluator.lastName}{evaluator.firstName}・{evaluator.grade}
                              {evaluator.isConcurrent ? "（兼務）" : ""}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    {/* 二次考課者 */}
                    <TableCell>
                      <Select
                        value={assignmentSelections[employee.employeeId]?.secondary || ""}
                        onValueChange={(value) =>
                          handleAssignmentChange(employee.employeeId, "secondary", value)
                        }
                      >
                        <SelectTrigger className="w-40">
                          {assignmentSelections[employee.employeeId]?.secondary === "none"
                            ? <span className="text-red-500">実施しない</span>
                            : evaluators.find(
                                (e) => e.employeeId === assignmentSelections[employee.employeeId]?.secondary
                              )?.lastName +
                              (evaluators.find(
                                (e) => e.employeeId === assignmentSelections[employee.employeeId]?.secondary
                              )?.firstName || "") || "選択"}
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">実施しない</SelectItem>
                          {getAvailableEvaluators(employee.employeeId, "secondary").map((evaluator) => (
                            <SelectItem key={evaluator.employeeId} value={evaluator.employeeId}>
                              {evaluator.lastName}{evaluator.firstName}・{evaluator.grade}
                              {evaluator.isConcurrent ? "（兼務）" : ""}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    {/* 最終考課者 */}
                    <TableCell>
                      <Select
                        value={assignmentSelections[employee.employeeId]?.final || ""}
                        onValueChange={(value) =>
                          handleAssignmentChange(employee.employeeId, "final", value)
                        }
                      >
                        <SelectTrigger className="w-40">
                          {assignmentSelections[employee.employeeId]?.final
                            ? evaluators.find(
                                (e) => e.employeeId === assignmentSelections[employee.employeeId]?.final
                              )?.lastName +
                              (evaluators.find(
                                (e) => e.employeeId === assignmentSelections[employee.employeeId]?.final
                              )?.firstName || "") || "選択"
                            : "選択"}
                        </SelectTrigger>
                        <SelectContent>
                          {getAvailableEvaluators(employee.employeeId, "final").map((evaluator) => (
                            <SelectItem key={evaluator.employeeId} value={evaluator.employeeId}>
                              {evaluator.lastName}{evaluator.firstName}・{evaluator.grade}
                              {evaluator.isConcurrent ? "（兼務）" : ""}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* 保存ボタン */}
        <div className="flex justify-end">
          <Button className="bg-blue-600 text-white px-8 py-2" onClick={handleSaveAssignments} disabled={isSaving}>
            {isSaving ? "保存中..." : "割り当てを保存"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default AssignmentPage;