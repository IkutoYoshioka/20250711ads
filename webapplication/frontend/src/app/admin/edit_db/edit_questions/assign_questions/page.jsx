"use client";
import React, { useEffect, useMemo, useState } from "react";
import { fetchEvaluationCriteria, updateEvaluationCriterion } from "@/lib/services/questions";
import { fetchOccupationGradePairs } from "@/lib/services/others";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Toaster, toast } from "sonner";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import WorkGuidelines from "./workGuidelines";
import PerformanceReviews from "./performanceReviews";
import Confirmation from "./confirmation";

// タブ名
const TAB_GUIDELINES = "workGuidelines";
const TAB_REVIEWS = "performanceReviews";
const TAB_CONFIRM = "confirmation"; // 追加

const AssignQuestionsPage = () => {
  const [criteria, setCriteria] = useState([]);
  const [allPairs, setAllPairs] = useState([]);
  const [allGrades, setAllGrades] = useState([]);
  const [pairIndex, setPairIndex] = useState(0);
  const [gradeIndex, setGradeIndex] = useState(0);
  const [assignMap, setAssignMap] = useState({});
  const [selectedSectionIds, setSelectedSectionIds] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [savedPairs, setSavedPairs] = useState([]);
  const [tab, setTab] = useState(TAB_GUIDELINES);

  // 職種・等級ペア取得
  useEffect(() => {
    const fetchPairs = async () => {
      const pairs = await fetchOccupationGradePairs();
      setAllPairs(pairs);
      // 等級一覧も抽出
      setAllGrades([...new Set(pairs.map(p => p.grade))]);
    };
    fetchPairs();
  }, []);

  // 質問マスター取得
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

  // タブ切り替え時に選択状態をリセット
  useEffect(() => {
    setSelectedSectionIds([]);
  }, [tab, pairIndex, gradeIndex]);

  // --- 働き方の指針（等級のみ切り替え） ---
  const selectedGrade = allGrades[gradeIndex] || "";
  const pairKeyGuidelines = `guidelines_${selectedGrade}`;
  const currentAssignGuidelines = assignMap[pairKeyGuidelines] || {};

  // --- 業務考課（職種×等級で切り替え） ---
  const currentPair = allPairs[pairIndex] || { occupation: "", grade: "" };
  const { occupation: selectedOccupation, grade: selectedGradeReview } = currentPair;
  const pairKeyReviews = `${selectedOccupation}_${selectedGradeReview}`;
  const currentAssignReviews = assignMap[pairKeyReviews] || {};

  // 割り当て状態の切り替え
  const toggleAssign = (sectionId, isGuidelines) => {
    if (isGuidelines) {
      setAssignMap((prev) => ({
        ...prev,
        [pairKeyGuidelines]: {
          ...prev[pairKeyGuidelines],
          [sectionId]: !prev[pairKeyGuidelines]?.[sectionId],
        },
      }));
    } else {
      setAssignMap((prev) => ({
        ...prev,
        [pairKeyReviews]: {
          ...prev[pairKeyReviews],
          [sectionId]: !prev[pairKeyReviews]?.[sectionId],
        },
      }));
    }
    setSelectedSectionIds((prev) =>
      prev.includes(sectionId) ? prev.filter(id => id !== sectionId) : [...prev, sectionId]
    );
  };

  // 保存
  const handleSave = async (isGuidelines) => {
    setIsSaving(true);
    try {
      let assignedSections, saveKey;
      if (isGuidelines) {
        assignedSections = Object.entries(currentAssignGuidelines)
          .filter(([_, assigned]) => assigned)
          .map(([sectionId]) => criteria.find((c) => c.id === Number(sectionId)));
        saveKey = pairKeyGuidelines;
      } else {
        assignedSections = Object.entries(currentAssignReviews)
          .filter(([_, assigned]) => assigned)
          .map(([sectionId]) => criteria.find((c) => c.id === Number(sectionId)));
        saveKey = pairKeyReviews;
      }
      for (const section of assignedSections) {
        if (isGuidelines) {
          // 職種は全て、等級ごとに割り当て
          await updateEvaluationCriterion({
            ...section,
            occupation: [...new Set(allPairs.map(p => p.occupation))], // 全職種
            grade: [selectedGrade],
          });
        } else {
          // 職種・等級ごとに割り当て
          await updateEvaluationCriterion({
            ...section,
            occupation: [selectedOccupation],
            grade: [selectedGradeReview],
          });
        }
      }
      setSavedPairs((prev) => [...prev, saveKey]);
      toast.success("割り当てを保存しました");
    } catch (e) {
      toast.error("保存に失敗しました");
    }
    setIsSaving(false);
  };

  // --- まとめて保存 ---
  const handleFinalSave = async () => {
    setIsSaving(true);
    try {
      // 働き方の指針
      for (const grade of allGrades) {
        const key = `guidelines_${grade}`;
        const assignedIds = Object.entries(assignMap[key] || {})
          .filter(([_, assigned]) => assigned)
          .map(([sectionId]) => Number(sectionId));
        for (const sectionId of assignedIds) {
          const section = (grouped["働き方の指針"] || []).find(s => s.id === sectionId);
          if (section) {
            await updateEvaluationCriterion({
              ...section,
              occupation: [...new Set(allPairs.map(p => p.occupation))],
              grade: [grade],
            });
          }
        }
      }
      // 業務考課
      for (const pair of allPairs) {
        const key = `${pair.occupation}_${pair.grade}`;
        const assignedIds = Object.entries(assignMap[key] || {})
          .filter(([_, assigned]) => assigned)
          .map(([sectionId]) => Number(sectionId));
        for (const sectionId of assignedIds) {
          const section = (grouped["業務考課"] || []).find(s => s.id === sectionId);
          if (section) {
            await updateEvaluationCriterion({
              ...section,
              occupation: [pair.occupation],
              grade: [pair.grade],
            });
          }
        }
      }
      toast.success("全て保存しました");
    } catch (e) {
      toast.error("保存に失敗しました");
    }
    setIsSaving(false);
  };

  // 左右矢印で切り替え
  const handlePrev = (isGuidelines) => {
    if (isGuidelines) {
      setGradeIndex((prev) => (prev === 0 ? allGrades.length - 1 : prev - 1));
    } else {
      setPairIndex((prev) => (prev === 0 ? allPairs.length - 1 : prev - 1));
    }
    setSelectedSectionIds([]);
  };
  const handleNext = (isGuidelines) => {
    if (isGuidelines) {
      setGradeIndex((prev) => (prev === allGrades.length - 1 ? 0 : prev + 1));
    } else {
      setPairIndex((prev) => (prev === allPairs.length - 1 ? 0 : prev + 1));
    }
    setSelectedSectionIds([]);
  };

  // 右側に表示するセクション（複数）
  const selectedSections = (tab === TAB_GUIDELINES
    ? selectedSectionIds.map((id) => grouped["働き方の指針"]?.find((section) => section.id === Number(id)))
    : selectedSectionIds.map((id) => grouped["業務考課"]?.find((section) => section.id === Number(id)))
  ).filter(Boolean);

  return (
    <>
      <Toaster richColors position="top-right" closeButton={false} />
      <Tabs value={tab} onValueChange={setTab} className="w-full h-full pt-2 mx-4">
        <TabsList className="mb-2">
          <TabsTrigger value={TAB_GUIDELINES}>働き方の指針</TabsTrigger>
          <TabsTrigger value={TAB_REVIEWS}>業務考課</TabsTrigger>
          <TabsTrigger value={TAB_CONFIRM}>確認</TabsTrigger>
        </TabsList>

        <TabsContent value={TAB_GUIDELINES} className="h-full">
          <WorkGuidelines
            grouped={grouped}
            selectedGrade={selectedGrade}
            allGrades={allGrades}
            gradeIndex={gradeIndex}
            handlePrev={handlePrev}
            handleNext={handleNext}
            currentAssignGuidelines={currentAssignGuidelines}
            selectedSectionIds={selectedSectionIds}
            toggleAssign={toggleAssign}
            handleSave={handleSave}
            isSaving={isSaving}
            selectedSections={selectedSections}
            setAssignMap={setAssignMap} 
          />
        </TabsContent>

        <TabsContent value={TAB_REVIEWS} className="h-full">
          <PerformanceReviews
            grouped={grouped}
            selectedOccupation={selectedOccupation}
            selectedGradeReview={selectedGradeReview}
            allPairs={allPairs}
            pairIndex={pairIndex}
            handlePrev={handlePrev}
            handleNext={handleNext}
            currentAssignReviews={currentAssignReviews}
            selectedSectionIds={selectedSectionIds}
            toggleAssign={toggleAssign}
            handleSave={handleSave}
            isSaving={isSaving}
            selectedSections={selectedSections}
            setAssignMap={setAssignMap} 
          />
        </TabsContent>

        <TabsContent value={TAB_CONFIRM} className="h-full">
          <Confirmation
            grouped={grouped}
            assignMap={assignMap}
            allGrades={allGrades}
            allPairs={allPairs}
            onConfirm={handleFinalSave}
            isSaving={isSaving}
          />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default AssignQuestionsPage;