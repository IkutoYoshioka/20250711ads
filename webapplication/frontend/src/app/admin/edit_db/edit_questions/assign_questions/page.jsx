"use client";
import React, { useEffect, useMemo, useState } from "react";
import { fetchEvaluationCriteria, updateEvaluationCriterion } from "@/lib/services/questions";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Toaster, toast } from "sonner";

const AssignQuestionsPage = () => {
  const [criteria, setCriteria] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState(""); // 今期（最新年度）を自動セット
  const [selectedPrevPeriod, setSelectedPrevPeriod] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [isSaving, setIsSaving] = useState(false);

  // 割り当て済みセクションを管理
  const [assignedSections, setAssignedSections] = useState({});

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

  // period/type/position/grade一覧
  const periods = useMemo(() => [...new Set(criteria.map((c) => c.period))].sort().reverse(), [criteria]);
  const types = useMemo(() => [...new Set(criteria.map((c) => c.type))], [criteria]);
  const positions = useMemo(() => [...new Set(criteria.flatMap((c) => c.position))].filter(Boolean), [criteria]);
  const grades = useMemo(() => [...new Set(criteria.flatMap((c) => c.grade))], [criteria]);

  // 今期（最新年度）を自動セット
  useEffect(() => {
    if (periods.length > 0 && !selectedPeriod) setSelectedPeriod(periods[0]);
  }, [periods, selectedPeriod]);

  // 比較用の前期（今期以外から選択可）
  useEffect(() => {
    if (periods.length > 1 && !selectedPrevPeriod) setSelectedPrevPeriod(periods[1]);
  }, [periods, selectedPrevPeriod]);

  // 他フィルターの初期値
  useEffect(() => {
    if (types.length > 0 && !selectedType) setSelectedType(types[0]);
    if (positions.length > 0 && !selectedPosition) setSelectedPosition(positions[0]);
    if (grades.length > 0 && !selectedGrade) setSelectedGrade(grades[0]);
  }, [types, positions, grades, selectedType, selectedPosition, selectedGrade]);

  // 今期の全セクション（職種・等級ごと）
  const currentSections = useMemo(
    () =>
      criteria.filter(
        (c) =>
          c.period === selectedPeriod &&
          c.type === selectedType &&
          c.position.includes(selectedPosition) &&
          c.grade.includes(selectedGrade)
      ),
    [criteria, selectedPeriod, selectedType, selectedPosition, selectedGrade]
  );

  // 前期の全セクション（職種・等級ごと）
  const prevSections = useMemo(
    () =>
      criteria.filter(
        (c) =>
          c.period === selectedPrevPeriod &&
          c.type === selectedType &&
          c.position.includes(selectedPosition) &&
          c.grade.includes(selectedGrade)
      ),
    [criteria, selectedPrevPeriod, selectedType, selectedPosition, selectedGrade]
  );

  // セクション名一覧（この職種・等級/typeに存在するもの全て）
  const sectionNames = useMemo(
    () => [...new Set([...currentSections, ...prevSections].map((c) => c.sectionName))],
    [currentSections, prevSections]
  );

  // セクションごとの質問リスト（今期）
  const currentSectionQuestions = useMemo(() => {
    const map = {};
    sectionNames.forEach((name) => {
      const section = currentSections.find((c) => c.sectionName === name);
      map[name] = section ? section.questions : [];
    });
    return map;
  }, [currentSections, sectionNames]);

  // セクションごとの質問リスト（前期）
  const prevSectionQuestions = useMemo(() => {
    const map = {};
    sectionNames.forEach((name) => {
      const section = prevSections.find((c) => c.sectionName === name);
      map[name] = section ? section.questions : [];
    });
    return map;
  }, [prevSections, sectionNames]);

  // 全質問リスト（このtype, セクション名から集約）
  const allQuestionsMap = useMemo(() => {
    const map = {};
    sectionNames.forEach((name) => {
      map[name] = [
        ...new Map(
          criteria
            .filter((c) => c.type === selectedType && c.sectionName === name)
            .flatMap((c) => c.questions)
            .map((q) => [q.id, q])
        ).values(),
      ];
    });
    return map;
  }, [criteria, selectedType, sectionNames]);

  // 前期コピー
  const handleCopyPrev = (sectionName) => {
    setCurrentQuestions((prev) => ({
      ...prev,
      [sectionName]: prevSectionQuestions[sectionName]?.map((q) => ({ ...q })) || [],
    }));
    toast.success(`前期の割り当てをコピーしました（${sectionName}）`);
  };

  // 質問追加・削除
  const toggleAssign = (sectionName, question) => {
    setCurrentQuestions((prev) => {
      const prevList = prev[sectionName] || currentSectionQuestions[sectionName] || [];
      if (prevList.some((q) => q.id === question.id)) {
        return {
          ...prev,
          [sectionName]: prevList.filter((q) => q.id !== question.id),
        };
      } else {
        return {
          ...prev,
          [sectionName]: [...prevList, question],
        };
      }
    });
  };

  // 保存
  const handleSave = async (sectionName) => {
    const section = currentSections.find((c) => c.sectionName === sectionName);
    if (!section) {
      toast.error("今期のデータがありません。");
      return;
    }
    setIsSaving(true);
    try {
      await updateEvaluationCriterion({
        ...section,
        questions: currentQuestions[sectionName] ?? section.questions,
      });
      toast.success(`今期の割り当てを保存しました（${sectionName}）`);
      setAssignedSections((prev) => ({
        ...prev,
        [sectionName]: true,
      }));
    } catch (e) {
      toast.error("保存に失敗しました");
    }
    setIsSaving(false);
  };

  // 今期の全組み合わせ
  const allCombinations = useMemo(() => {
    if (!selectedPeriod) return [];
    return criteria
      .filter(c => c.period === selectedPeriod)
      .flatMap(c =>
        c.position.map(pos =>
          c.grade.map(gr => ({
            type: c.type,
            sectionName: c.sectionName,
            position: pos,
            grade: gr,
            questions: c.questions,
          }))
        )
      )
      .flat();
  }, [criteria, selectedPeriod]);

  // 未割り当て（questionsが空）の組み合わせ
  const unassigned = allCombinations.filter(c => !c.questions || c.questions.length === 0);

  return (
    <div className="p-6 h-[90vh] overflow-y-auto">
      <Toaster position="top-right" richColors />
      <h1 className="text-2xl font-bold mb-6">今期の割り当て設定</h1>
      {/* フィルター */}
      <div className="flex flex-wrap gap-4 mb-6">
        {/* 今期は最新年度で固定・選択不可 */}
        <Select value={selectedPeriod} disabled>
          <SelectTrigger className="w-40"><SelectValue placeholder="今期" /></SelectTrigger>
          <SelectContent>
            {periods.length > 0 && (
              <SelectItem key={periods[0]} value={periods[0]}>
                {periods[0]}
              </SelectItem>
            )}
          </SelectContent>
        </Select>
        <Select value={selectedPrevPeriod} onValueChange={setSelectedPrevPeriod}>
          <SelectTrigger className="w-40"><SelectValue placeholder="前期" /></SelectTrigger>
          <SelectContent>
            {periods.filter((p) => p !== selectedPeriod).map((p) => (
              <SelectItem key={p} value={p}>{p}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger className="w-40"><SelectValue placeholder="種類" /></SelectTrigger>
          <SelectContent>
            {types.map((t) => (
              <SelectItem key={t} value={t}>{t}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedPosition} onValueChange={setSelectedPosition}>
          <SelectTrigger className="w-40"><SelectValue placeholder="職種" /></SelectTrigger>
          <SelectContent>
            {positions.map((p) => (
              <SelectItem key={p} value={p}>{p}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedGrade} onValueChange={setSelectedGrade}>
          <SelectTrigger className="w-40"><SelectValue placeholder="等級" /></SelectTrigger>
          <SelectContent>
            {grades.map((g) => (
              <SelectItem key={g} value={g}>{g}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {/* 未割り当ての職種・等級一覧 */}
      {unassigned.length > 0 && (
        <div className="mb-4 p-4 bg-yellow-50 border border-yellow-300 rounded">
          <div className="font-bold mb-2 text-yellow-800">未割り当ての職種・等級一覧</div>
          <ul className="flex flex-wrap gap-2">
            {unassigned.map((c, idx) => (
              <li key={idx}>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setSelectedType(c.type);
                    setSelectedPosition(c.position);
                    setSelectedGrade(c.grade);
                  }}
                >
                  {c.type} / {c.position} / {c.grade}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* セクションごとの割り当て比較テーブル */}
      {sectionNames.map((sectionName) => (
        <div key={sectionName} className="mb-8">
          <h2 className="font-bold mb-2">{sectionName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 前期 */}
            <div className="bg-gray-50 rounded-lg p-4 shadow">
              <h3 className="font-semibold mb-2">前期（{selectedPrevPeriod}）の割り当て</h3>
              {prevSectionQuestions[sectionName]?.length > 0 ? (
                <ul className="list-disc pl-4 space-y-1">
                  {prevSectionQuestions[sectionName].map((q) => (
                    <li key={q.id}>
                      <span className="font-medium">{q.text}</span>
                      <span className="ml-2 text-xs text-gray-500">（スコア: {q.score}）</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-gray-400 text-sm">データがありません</div>
              )}
              <Button
                variant="outline"
                className="mt-2"
                onClick={() => handleCopyPrev(sectionName)}
                disabled={!prevSectionQuestions[sectionName]?.length}
              >
                前期の割り当てをコピー
              </Button>
            </div>
            {/* 今期 */}
            <div className="bg-white rounded-lg p-4 shadow border">
              <h3 className="font-semibold mb-2">今期（{selectedPeriod}）の割り当て</h3>
              <ul className="list-disc pl-4 space-y-1 mb-4">
                {(currentQuestions[sectionName] ?? currentSectionQuestions[sectionName] ?? []).map((q) => (
                  <li key={q.id}>
                    <span className="font-medium">{q.text}</span>
                    <span className="ml-2 text-xs text-gray-500">（スコア: {q.score}）</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="ml-2 text-red-500"
                      onClick={() => toggleAssign(sectionName, q)}
                    >
                      削除
                    </Button>
                  </li>
                ))}
              </ul>
              <div>
                <h4 className="font-semibold mb-1 text-sm">質問を追加</h4>
                <div className="flex flex-wrap gap-2">
                  {allQuestionsMap[sectionName]
                    ?.filter(
                      (q) =>
                        !(
                          (currentQuestions[sectionName] ?? currentSectionQuestions[sectionName] ?? []).some(
                            (cq) => cq.id === q.id
                          )
                        )
                    )
                    .map((q) => (
                      <Button
                        key={q.id}
                        size="sm"
                        variant="outline"
                        onClick={() => toggleAssign(sectionName, q)}
                      >
                        {q.text}（スコア: {q.score}）
                      </Button>
                    ))}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Button
                  variant="default"
                  onClick={() => handleSave(sectionName)}
                  disabled={isSaving || !currentSections.find((c) => c.sectionName === sectionName)}
                >
                  保存
                </Button>
                {assignedSections[sectionName] && (
                  <span className="text-green-600 font-semibold text-sm">割り当て済み</span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssignQuestionsPage;