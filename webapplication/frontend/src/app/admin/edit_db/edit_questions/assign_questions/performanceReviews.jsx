"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { fetchPastAssignments } from "@/lib/services/questions";

const PerformanceReviews = ({
  grouped,
  selectedOccupation,
  selectedGradeReview,
  allPairs,
  pairIndex,
  handlePrev,
  handleNext,
  currentAssignReviews,
  selectedSectionIds,
  toggleAssign,
  handleSave,
  isSaving,
  selectedSections,
  setAssignMap,
}) => {
  const [pastSections, setPastSections] = useState([]);
  const [periods, setPeriods] = useState([]); // 期リスト
  const [selectedPeriod, setSelectedPeriod] = useState(""); // 選択中の期
  const [pastAssignments, setPastAssignments] = useState({}); // 全過去データ

  // 職種×等級キー
  const pairKey = `${selectedOccupation}_${selectedGradeReview}`;

  useEffect(() => {
    const loadPast = async () => {
      const past = await fetchPastAssignments();
      setPastAssignments(past);
      const periodKeys = Object.keys(past);
      setPeriods(periodKeys);
      // デフォルトは最新（最初のキー）
      if (!selectedPeriod && periodKeys.length > 0) {
        setSelectedPeriod(periodKeys[0]);
      }
      // 期が選択されていれば、その期のデータをセット
      if ((selectedPeriod || periodKeys[0]) && past[selectedPeriod || periodKeys[0]]) {
        const ids = past[selectedPeriod || periodKeys[0]].reviews[pairKey] || [];
        setPastSections((grouped["業務考課"] || []).filter(s => ids.includes(s.id)));
      }
    };
    loadPast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOccupation, selectedGradeReview, grouped, selectedPeriod]);

  // 期が変わった時に過去割り当てを再取得
  useEffect(() => {
    const fetchSections = async () => {
      const past = pastAssignments;
      if (selectedPeriod && past[selectedPeriod]) {
        const ids = past[selectedPeriod].reviews[pairKey] || [];
        setPastSections((grouped["業務考課"] || []).filter(s => ids.includes(s.id)));
      }
    };
    if (Object.keys(pastAssignments).length > 0) {
      fetchSections();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPeriod, selectedOccupation, selectedGradeReview, grouped, pastAssignments]);

  // 「コピー」ボタンで選択中の期の割り当てをコピー
  const handleCopySelectedPeriod = () => {
    if (!selectedPeriod || !pastAssignments[selectedPeriod]) return;
    const copyIds = pastAssignments[selectedPeriod].reviews[pairKey] || [];
    setAssignMap(prev => ({
      ...prev,
      [pairKey]: Object.fromEntries(
        (grouped["業務考課"] || []).map(section => [
          section.id,
          copyIds.includes(section.id),
        ])
      ),
    }));
  };

  return (
    <div className="flex h-[80vh] p-4 gap-8">
      {/* 左：今期のセクション割り当て */}
      <div className="w-1/2 overflow-y-auto border-r pr-6 pl-3">
        <div className="flex items-center gap-4 mb-4">
          <Button size="icon" variant="ghost" onClick={() => handlePrev(false)} disabled={allPairs.length === 0}>
            <FiChevronLeft />
          </Button>
          <div className="text-lg font-bold">
            {selectedOccupation} × {selectedGradeReview}
          </div>
          <Button size="icon" variant="ghost" onClick={() => handleNext(false)} disabled={allPairs.length === 0}>
            <FiChevronRight />
          </Button>
        </div>
        {/* 選択中の期のコピー */}
        {selectedPeriod && (
          <div className="mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopySelectedPeriod}
              className="text-blue-700 border-blue-300"
            >
              {selectedPeriod}の割り当てをコピー
            </Button>
          </div>
        )}
        <ul className="space-y-4">
          {(grouped["業務考課"] || []).map((section) => (
            <li
              key={section.id}
              className={`p-4 rounded-lg shadow border flex flex-col bg-white ${
                currentAssignReviews[section.id] ? "ring-2 ring-blue-400" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-lg">{section.sectionName}</span>
                <Button
                  size="sm"
                  variant={currentAssignReviews[section.id] ? "default" : "outline"}
                  onClick={() => toggleAssign(section.id, false)}
                >
                  {currentAssignReviews[section.id] ? "割り当て解除" : "割り当て"}
                </Button>
              </div>
              <div className="mt-2 text-sm text-gray-700">
                {section.questions.map((q) => (
                  <div key={q.questionId}>
                    {q.text} <span className="text-xs text-gray-500">（スコア: {q.score}）</span>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-4">
          <Button variant="default" onClick={() => handleSave(false)} disabled={isSaving}>
            保存
          </Button>
        </div>
      </div>
      {/* 右：過去の割り当て（参考用） */}
      <div className="w-1/2 pl-6 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-semibold text-blue-800">過去の割り当て</h3>
          {periods.length > 0 && (
            <select
              className="ml-2 border rounded px-2 py-1 text-sm"
              value={selectedPeriod}
              onChange={e => setSelectedPeriod(e.target.value)}
            >
              {periods.map(period => (
                <option key={period} value={period}>{period}</option>
              ))}
            </select>
          )}
          <span className="ml-2 text-sm text-gray-600">
            {selectedOccupation} × {selectedGradeReview}
          </span>
        </div>
        <div className="flex-1 overflow-y-auto">
          {pastSections.length === 0 ? (
            <div className="text-gray-400 text-sm">過去の割り当てはありません</div>
          ) : (
            <ul className="space-y-2">
              {pastSections.map((section) => (
                <li key={section.id} className="flex items-center justify-between p-3 bg-blue-50 rounded border">
                  <span>{section.sectionName}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default PerformanceReviews;