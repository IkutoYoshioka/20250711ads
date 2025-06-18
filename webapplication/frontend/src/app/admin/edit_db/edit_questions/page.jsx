"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FiEdit } from "react-icons/fi";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Toaster, toast } from "sonner";
import { fetchEvaluationCriteria, updateEvaluationCriterion } from "@/lib/services/questions";
import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from "@/components/ui/alert-dialog";
import EditModal from "./EditModal";

const CriteriaTable = ({ items, onEdit }) => (
  <div className="overflow-x-auto rounded-lg shadow border bg-white">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">セクション名</th>
          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">セクションID</th>
          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">等級</th>
          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">職種</th>
          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">質問数</th>
          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">質問内容</th>
          <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700">操作</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {items.length === 0 ? (
          <tr>
            <td colSpan={7} className="text-center py-6 text-gray-400">
              データがありません
            </td>
          </tr>
        ) : (
          items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 transition">
              <td className="px-4 py-2">{item.sectionName}</td>
              <td className="px-4 py-2">{item.sectionId}</td>
              <td className="px-4 py-2">
                {item.grade.map((g) => (
                  <span key={g} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1 mb-1">{g}</span>
                ))}
              </td>
              <td className="px-4 py-2">
                {item.position.length > 0
                  ? item.position.map((p) => (
                      <span key={p} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-1 mb-1">{p}</span>
                    ))
                  : <span className="text-gray-400">全職種</span>
                }
              </td>
              <td className="px-4 py-2">{item.questions.length}</td>
              <td className="px-4 py-2">
                <ul className="list-disc pl-4 space-y-1">
                  {item.questions.map((q) => (
                    <li key={q.id} className="text-sm">
                      <span className="font-medium">{q.text}</span>
                      <span className="ml-2 text-xs text-gray-500">（スコア: {q.score}）</span>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="px-4 py-2 text-center">
                <Button size="sm" variant="outline" onClick={() => onEdit(item)}>
                  <FiEdit className="mr-1" /> 編集
                </Button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);

const EvaluationSetup = () => {
  const [criteria, setCriteria] = useState([]);
  const [editingCriterion, setEditingCriterion] = useState(null);
  const [selectedType, setSelectedType] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("all");
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [period, setPeriod] = useState(""); // 最新期をデフォルトに
  const [selectedSectionName, setSelectedSectionName] = useState("");
  const router = useRouter();

  // データ取得
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchEvaluationCriteria();
        setCriteria(data);
        // 最新のperiodを自動選択
        const periods = [...new Set(data.map((item) => item.period))];
        const latest = periods.sort().reverse()[0];
        setPeriod(latest);
      } catch (error) {
        console.error("データの取得に失敗しました:", error);
      }
    };
    fetchData();
  }, []);

  // type一覧
  const uniqueTypes = useMemo(() => [...new Set(criteria.map((item) => item.type))], [criteria]);
  // type選択初期値
  useEffect(() => {
    if (uniqueTypes.length > 0 && !selectedType) setSelectedType(uniqueTypes[0]);
  }, [uniqueTypes, selectedType]);

  // period一覧
  const uniquePeriods = useMemo(() => [...new Set(criteria.map((item) => item.period))].sort().reverse(), [criteria]);

  // type, 職種, 等級で該当する全セクション（時系列比較用）
  const matchedSections = useMemo(
    () =>
      criteria.filter(
        (item) =>
          item.type === selectedType &&
          (selectedPosition === "all" ? true : item.position.includes(selectedPosition)) &&
          (selectedGrade === "all" ? true : item.grade.includes(selectedGrade))
      ),
    [criteria, selectedType, selectedPosition, selectedGrade]
  );

  // セクション名一覧（該当するものだけ）
  const sectionNames = useMemo(
    () => [...new Set(matchedSections.map((item) => item.sectionName))],
    [matchedSections]
  );

  // セクション名選択初期値
  useEffect(() => {
    if (sectionNames.length > 0 && !selectedSectionName) setSelectedSectionName(sectionNames[0]);
  }, [sectionNames, selectedSectionName]);

  // 選択されたセクションの時系列データ
  const sectionHistory = useMemo(
    () =>
      matchedSections
        .filter((item) => item.sectionName === selectedSectionName)
        .sort((a, b) => (a.period < b.period ? 1 : -1)), // 新しい順
    [matchedSections, selectedSectionName]
  );

  // 現在編集対象のデータ（最新期）
  const currentCriterion = sectionHistory.find((item) => item.period === period);

  // 編集モーダルの保存処理
  const handleSave = async (updatedCriterion) => {
    try {
      await updateEvaluationCriterion(updatedCriterion);
      setCriteria((prev) =>
        prev.map((item) =>
          item.id === updatedCriterion.id && item.period === updatedCriterion.period
            ? updatedCriterion
            : item
        )
      );
      setEditingCriterion(null);
      toast.success("データを保存しました。");
    } catch (error) {
      console.error("データの保存に失敗しました:", error);
      toast.error("データの保存に失敗しました。");
    }
  };

  return (
    <>
      <Toaster position="top-right" richColors />
      <div className="p-6 overflow-y-auto h-[580px]">
        {/* type/period/職種/等級/セクション名切り替え */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold">考課内容管理</h1>
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-56">
              <SelectValue placeholder="種類を選択" />
            </SelectTrigger>
            <SelectContent>
              {uniqueTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedPosition} onValueChange={setSelectedPosition}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="職種を選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">すべて</SelectItem>
              {[...new Set(criteria.flatMap((c) => c.position))].filter(Boolean).map((position) => (
                <SelectItem key={position} value={position}>
                  {position}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedGrade} onValueChange={setSelectedGrade}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="等級を選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">すべて</SelectItem>
              {[...new Set(criteria.flatMap((c) => c.grade))].map((grade) => (
                <SelectItem key={grade} value={grade}>
                  {grade}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedSectionName} onValueChange={setSelectedSectionName}>
            <SelectTrigger className="w-56">
              <SelectValue placeholder="セクションを選択" />
            </SelectTrigger>
            <SelectContent>
              {sectionNames.map((name) => (
                <SelectItem key={name} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          {/* 今期の割り当てボタンを追加 */}
          <Button
            className="ml-4"
            variant="default"
            onClick={() => router.push("/admin/edit_db/edit_questions/assign_questions")}
          >
            今期の割り当て
          </Button>
        </div>

        {/* 時系列比較テーブル */}
        <div className="overflow-x-auto rounded-lg shadow border bg-white mb-8">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">期</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">質問内容</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sectionHistory.length === 0 ? (
                <tr>
                  <td colSpan={3} className="text-center py-6 text-gray-400">
                    データがありません
                  </td>
                </tr>
              ) : (
                sectionHistory.map((item) => (
                  <tr key={item.period} className={item.period === period ? "bg-blue-50" : ""}>
                    <td className="px-4 py-2 font-bold">{item.period}</td>
                    <td className="px-4 py-2">
                      <ul className="list-disc pl-4 space-y-1">
                        {item.questions.map((q) => (
                          <li key={q.id} className="text-sm">
                            <span className="font-medium">{q.text}</span>
                            <span className="ml-2 text-xs text-gray-500">（スコア: {q.score}）</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-2 text-center">
                      {item.period === period && (
                        <Button size="sm" variant="outline" onClick={() => setEditingCriterion(item)}>
                          <FiEdit className="mr-1" /> 編集
                        </Button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* 編集モーダル */}
        {editingCriterion && (
          <EditModal
            criterion={editingCriterion}
            onSave={handleSave}
            onClose={() => setEditingCriterion(null)}
            pastQuestions={sectionHistory.filter((h) => h.period !== period).flatMap((h) => h.questions)}
          />
        )}
      </div>
    </>
  );
};

export default EvaluationSetup;