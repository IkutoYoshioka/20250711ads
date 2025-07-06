'use client'
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "@/components/ui/table";
import { fetchAssignments, saveAssignments } from "@/lib/services/assignments";
import { Toaster, toast } from "sonner";

const AssignmentPage = () => {
  const [assignments, setAssignments] = useState([]);
  const [evaluators, setEvaluators] = useState([]);
  const [assignmentSelections, setAssignmentSelections] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  // 割り当て一覧と評価者一覧を取得
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAssignments();
        setAssignments(data);
        setEvaluators(data);

        const initialSelections = {};
        data.forEach(emp => {
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
  }, []);

  // ひとりの被考課者に対して同じ人が2回以上考課できないようにする
  const getAvailableEvaluators = (employeeId, level) => {
    const selected = assignmentSelections[employeeId] || {};
    // すでに他の段階で選ばれている人は除外
    const excludeIds = [
      ...(level !== "primary" && selected.primary && selected.primary !== "none" ? [selected.primary] : []),
      ...(level !== "secondary" && selected.secondary && selected.secondary !== "none" ? [selected.secondary] : []),
      ...(level !== "final" && selected.final && selected.final !== "none" ? [selected.final] : []),
      employeeId // 被考課者本人も除外
    ];
    return evaluators.filter(e => !excludeIds.includes(e.employeeId));
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
      <div className="mx-auto p-3 space-y-3">
        {/* 従業員リスト */}
        <div className="bg-white p-2 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">被考課者リスト</h2>
          <div className="overflow-y-auto max-h-[450px]">
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
                  <TableRow key={employee.employeeId}>
                    <TableCell>{employee.lastName}{employee.firstName}</TableCell>
                    <TableCell>{employee.grade}</TableCell>
                    <TableCell>{employee.facility}</TableCell>
                    <TableCell>
                      <Select
                        value={assignmentSelections[employee.employeeId]?.primary || ""}
                        onValueChange={(value) =>
                          handleAssignmentChange(employee.employeeId, "primary", value)
                        }
                      >
                        <SelectTrigger>
                          {assignmentSelections[employee.employeeId]?.primary === "none"
                            ? <span className="text-red-500">この考課段階は実施しない</span>
                            : evaluators.find(
                                (e) => e.employeeId === assignmentSelections[employee.employeeId]?.primary
                              )?.lastName +
                              (evaluators.find(
                                (e) => e.employeeId === assignmentSelections[employee.employeeId]?.primary
                              )?.firstName || "") || "選択してください"}
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">この考課段階は実施しない</SelectItem>
                          {getAvailableEvaluators(employee.employeeId, "primary").map((evaluator) => (
                            <SelectItem key={evaluator.employeeId} value={evaluator.employeeId}>
                              {evaluator.lastName}{evaluator.firstName}・{evaluator.grade}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select
                        value={assignmentSelections[employee.employeeId]?.secondary || ""}
                        onValueChange={(value) =>
                          handleAssignmentChange(employee.employeeId, "secondary", value)
                        }
                      >
                        <SelectTrigger>
                          {assignmentSelections[employee.employeeId]?.secondary === "none"
                            ? <span className="text-red-500">この考課段階は実施しない</span>
                            : evaluators.find(
                                (e) => e.employeeId === assignmentSelections[employee.employeeId]?.secondary
                              )?.lastName +
                              (evaluators.find(
                                (e) => e.employeeId === assignmentSelections[employee.employeeId]?.secondary
                              )?.firstName || "") || "選択してください"}
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">この考課段階は実施しない</SelectItem>
                          {getAvailableEvaluators(employee.employeeId, "secondary").map((evaluator) => (
                            <SelectItem key={evaluator.employeeId} value={evaluator.employeeId}>
                              {evaluator.lastName}{evaluator.firstName}・{evaluator.grade}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select
                        value={assignmentSelections[employee.employeeId]?.final || ""}
                        onValueChange={(value) =>
                          handleAssignmentChange(employee.employeeId, "final", value)
                        }
                      >
                        <SelectTrigger>
                          {assignmentSelections[employee.employeeId]?.final
                            ? evaluators.find(
                                (e) => e.employeeId === assignmentSelections[employee.employeeId]?.final
                              )?.lastName +
                              (evaluators.find(
                                (e) => e.employeeId === assignmentSelections[employee.employeeId]?.final
                              )?.firstName || "") || "選択してください"
                            : "選択してください"}
                        </SelectTrigger>
                        <SelectContent>
                          {getAvailableEvaluators(employee.employeeId, "final").map((evaluator) => (
                            <SelectItem key={evaluator.employeeId} value={evaluator.employeeId}>
                              {evaluator.lastName}{evaluator.firstName}・{evaluator.grade}
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
          <Button className="bg-blue-600 text-white" onClick={handleSaveAssignments} disabled={isSaving}>
            {isSaving ? "保存中..." : "割り当てを保存"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default AssignmentPage;