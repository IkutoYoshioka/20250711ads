"use client";
import React, { useEffect, useMemo, useState } from "react";
import { fetchEvaluationCriteria, updateEvaluationCriterion } from "@/lib/services/questions";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// データ形式に合わせてtypeでグループ化
const typeOrder = ["働き方の指針", "業務考課"];

// 疑似データ（職種・等級）
const dummyOccupations = ["保育士", "看護師", "調理師", "施設長"];
const dummyGrades = ["G01", "G02", "G03", "G04"];

// 職種×等級の全組み合わせ（実際は全組み合わせが存在するわけではない）
const allPairs = [];
dummyOccupations.forEach((occupation) => {
  dummyGrades.forEach((grade) => {
    allPairs.push({ occupation, grade });
  });
});

const AssignQuestionsPage = () => {
  const [criteria, setCriteria] = useState([]);
  const [pairIndex, setPairIndex] = useState(0); // 現在の職種×等級インデックス
  const [assignMap, setAssignMap] = useState({}); // { [pairKey]: { [sectionId]: true/false } }
  const [selectedSectionIds, setSelectedSectionIds] = useState([]); // 選択中のセクションIDリスト
  const [isSaving, setIsSaving] = useState(false);
  const [savedPairs, setSavedPairs] = useState([]); // [{occupation, grade}]

  // 現在の職種・等級
  const currentPair = allPairs[pairIndex];
  const { occupation: selectedOccupation, grade: selectedGrade } = currentPair;

  // データ取得
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchEvaluationCriteria();
        setCriteria(data);
      } catch (error) {
        toast.error("データの取得に失敗しました");
      }
    };
    fetchData();
  }, []);

  // typeごとにグループ化
  const grouped = useMemo(() => {
    return criteria.reduce((acc, section) => {
      acc[section.type] = acc[section.type] || [];
      acc[section.type].push(section);
      return acc;
    }, {});
  }, [criteria]);

  // 現在の職種×等級の割り当て状態
  const pairKey = `${selectedOccupation}_${selectedGrade}`;
  const currentAssign = assignMap[pairKey] || {};

  // セクション選択時
  const handleSectionSelect = (sectionId) => {
    // 何もしない、または累積しない場合は下記をコメントアウト
    // setSelectedSectionIds([sectionId]);
  };

  // 割り当て状態の切り替え
  const toggleAssign = (sectionId) => {
    setAssignMap((prev) => ({
      ...prev,
      [pairKey]: {
        ...prev[pairKey],
        [sectionId]: !prev[pairKey]?.[sectionId],
      },
    }));
    // 割り当て時に右側へ累積表示
    setSelectedSectionIds((prev) =>
      prev.includes(sectionId) ? prev : [...prev, sectionId]
    );
  };

  // 保存
  const handleSave = async () => {
    setIsSaving(true);
    try {
      const assignedSections = Object.entries(currentAssign)
        .filter(([_, assigned]) => assigned)
        .map(([sectionId]) => criteria.find((c) => c.id === Number(sectionId)));
      for (const section of assignedSections) {
        await updateEvaluationCriterion({
          ...section,
          occupation: [selectedOccupation],
          grade: [selectedGrade],
        });
      }
      setSavedPairs((prev) => [
        ...prev,
        { occupation: selectedOccupation, grade: selectedGrade },
      ]);
      toast.success("割り当てを保存しました");
    } catch (e) {
      toast.error("保存に失敗しました");
    }
    setIsSaving(false);
  };

  // 未保存の組み合わせ
  const unsavedPairs = allPairs.filter(
    (pair) =>
      !savedPairs.some(
        (saved) => saved.occupation === pair.occupation && saved.grade === pair.grade
      )
  );

  // 左右矢印で職種×等級を切り替え
  const handlePrevPair = () => {
    setPairIndex((prev) => (prev === 0 ? allPairs.length - 1 : prev - 1));
    setSelectedSectionIds([]);
  };
  const handleNextPair = () => {
    setPairIndex((prev) => (prev === allPairs.length - 1 ? 0 : prev + 1));
    setSelectedSectionIds([]);
  };

  // 右側に表示するセクション（複数）
  const selectedSections = selectedSectionIds
    .map((id) => criteria.find((section) => section.id === Number(id)))
    .filter(Boolean);

  return (
    <div className="flex h-[90vh] p-6 gap-8">
      <Toaster position="top-right" richColors />
      {/* 左半分：セクション一覧（typeごとに区切り） */}
      <div className="w-1/2 overflow-y-auto border-r pr-6">
        {typeOrder.map((type) =>
          grouped[type]?.length ? (
            <React.Fragment key={type}>
              <div className="text-xl font-bold text-blue-700 mb-2 mt-6">{type}</div>
              <ul className="space-y-4">
                {grouped[type].map((section) => (
                  <li
                    key={section.id}
                    className={`p-4 rounded-lg shadow border cursor-pointer flex flex-col ${
                      currentAssign[section.id] ? "bg-blue-50 border-blue-400" : "bg-white"
                    } ${selectedSectionIds.includes(section.id) ? "ring-2 ring-blue-400" : ""}`}
                    onClick={() => handleSectionSelect(section.id)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-lg">{section.sectionName}</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      {section.questions.map((q) => (
                        <div key={q.questionId}>
                          {q.text} <span className="text-xs text-gray-500">（スコア: {q.score}）</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className={`inline-block px-2 py-1 rounded text-xs ${currentAssign[section.id] ? "bg-blue-200 text-blue-800" : "bg-gray-200 text-gray-600"}`}>
                        {currentAssign[section.id] ? "割り当て済み" : "未割り当て"}
                      </span>
                      <Button
                        size="sm"
                        variant={currentAssign[section.id] ? "default" : "outline"}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleAssign(section.id);
                        }}
                      >
                        {currentAssign[section.id] ? "割り当て解除" : "割り当て"}
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ) : null
        )}
      </div>
      {/* 右半分：職種・等級切り替えと割り当て・選択中セクション表示 */}
      <div className="w-1/2 pl-6 flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <Button size="icon" variant="ghost" onClick={handlePrevPair}>
            <FiChevronLeft />
          </Button>
          <div className="text-lg font-bold">
            {selectedOccupation} × {selectedGrade}
          </div>
          <Button size="icon" variant="ghost" onClick={handleNextPair}>
            <FiChevronRight />
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <h3 className="font-semibold mb-2">この職種・等級で割り当てるセクション</h3>
          <ul className="space-y-2">
            {Object.values(grouped)
              .flat()
              .filter(
                (section) =>
                  section.occupation?.includes(selectedOccupation) &&
                  section.grade?.includes(selectedGrade)
              )
              .map((section) => (
                <li key={section.id} className="flex items-center justify-between p-3 bg-gray-50 rounded border">
                  <span>{section.sectionName}</span>
                  <Button
                    size="sm"
                    variant={currentAssign[section.id] ? "default" : "outline"}
                    onClick={() => {
                      toggleAssign(section.id);
                    }}
                  >
                    {currentAssign[section.id] ? "割り当て解除" : "割り当て"}
                  </Button>
                </li>
              ))}
          </ul>
          {/* 割り当てボタン押したセクションを右にも累積表示 */}
          {selectedSections.length > 0 && (
            <div className="mt-8 space-y-6">
              {selectedSections.map((selectedSection) => (
                <div key={selectedSection.id} className="p-4 border rounded bg-blue-50">
                  <div className="font-bold text-lg mb-2">{selectedSection.sectionName}</div>
                  <div className="mb-2 text-sm text-gray-700">
                    {selectedSection.questions.map((q) => (
                      <div key={q.questionId}>
                        {q.text} <span className="text-xs text-gray-500">（スコア: {q.score}）</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt-6 flex items-center gap-4">
          <Button variant="default" onClick={handleSave} disabled={isSaving}>
            保存
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssignQuestionsPage;