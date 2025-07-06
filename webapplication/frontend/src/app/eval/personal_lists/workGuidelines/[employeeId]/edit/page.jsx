"use client";

import React, { useState, useEffect, useRef } from "react";
import ProgressBar from "./progressbar";
import { useParams, useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { fetchSavedEvaluation, saveEvaluation } from "@/lib/services/assignments";
import { fetchMe } from "@/lib/services/employees";

export default function EditPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [sectionNames, setSectionNames] = useState([]);
  const [sections, setSections] = useState([]);
  const [individual, setIndividual] = useState(null);
  const [evaluatorId, setEvaluatorId] = useState("");

  const router = useRouter();
  const params = useParams();
  const evaluateeId = params.employeeId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await fetchMe();
        setEvaluatorId(user.employeeId);

        const detail = await fetchSavedEvaluation(evaluateeId, user.employeeId);
        if (!detail || !detail.sections) throw new Error("被考課者データが見つかりません");

        setIndividual(detail);

        // 「働き方の指針」だけを抽出
        const filteredSections = (detail.sections || []).filter(
          (section) => section.type === "働き方の指針"
        );
        if (filteredSections.length === 0) throw new Error("該当するセクションが見つかりません");

        setSections(filteredSections);
        setSectionNames(filteredSections.map((section) => section.sectionName));

        // 既存の回答データを復元
        const restoredFormData = {};
        filteredSections.forEach(section => {
          section.questions.forEach(q => {
            restoredFormData[q.id] = q.obtainedScore !== undefined ? q.obtainedScore : null;
          });
        });
        setFormData(restoredFormData);

        toast.success("データを取得しました。");
      } catch (error) {
        console.error("データの取得に失敗しました:", error);
        toast.error("データの取得に失敗しました。");
      }
    };
    fetchData();
  }, [evaluateeId]);

  const handleAnswerChange = (questionId, value) => {
    let score;
    if (value === "可") {
      const question = sections[currentStep].questions.find((q) => q.id === questionId);
      score = question ? question.score : 0;
    } else if (value === "不可") {
      score = 0;
    } else if (value === "除外") {
      score = null;
    }
    setFormData((prevData) => ({ ...prevData, [questionId]: score }));
  };

  const saveTemporary = async () => {
    try {
      const evaluationDetails = sections.flatMap(section =>
        section.questions.map(q => ({
          evaluatorId,
          evaluateeId,
          questionId: q.id,
          score: formData[q.id],
        }))
      );
      await saveEvaluation(evaluateeId, evaluatorId, evaluationDetails);
      toast.success("一時保存しました。");
    } catch (error) {
      console.error("一時保存に失敗しました:", error);
      toast.error("一時保存に失敗しました。");
    }
  };

  const handleSave = async () => {
    if (!individual) {
      toast.error("個人情報が取得できていません。");
      return;
    }
    const unanswered = sections.flatMap((section) =>
      section.questions.filter((q) => !(q.id in formData))
    );
    if (unanswered.length > 0) {
      toast.error("すべての設問に回答してください。");
      return;
    }
    const evaluationDetails = sections.flatMap(section =>
      section.questions.map(q => ({
        evaluatorId,
        evaluateeId,
        questionId: q.id,
        score: formData[q.id],
      }))
    );
    try {
      await saveEvaluation(evaluateeId, evaluatorId, evaluationDetails);
      toast.success("データが保存されました。");
      // クエリパラメータ不要、シンプルに遷移
      router.push(`/eval/personal_lists/workGuidelines/${evaluateeId}`);
    } catch (error) {
      console.error("保存失敗:", error);
      toast.error("保存に失敗しました。");
    }
  };

  const contentRef = useRef(null);
  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  return (
    <>
      <Toaster position="top-right" richColors />
      <div className="flex">
        <div className="flex h-screen">
          <div className="w-60 h-full sticky top-0">
            <ProgressBar
              currentStep={currentStep}
              sections={sections}
              sectionScores={sections.map((section) => {
                const filtered = section.questions.filter(q => formData[q.id] !== null);
                const total = filtered.reduce((sum, q) => sum + q.score, 0);
                const obtained = filtered.reduce((sum, q) => sum + (formData[q.id] || 0), 0);
                const percentage = total > 0 ? Math.round((obtained / total) * 100) : 0;
                return { percentage };
              })}
            />
          </div>
          <div className="bg-white overflow-y-auto" style={{ width: 600, minWidth: 300, maxWidth: 600 }}>
            <div ref={contentRef} className="flex-1 overflow-y-auto p-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">{sectionNames[currentStep]}</h2>
              <form>
                {sections[currentStep]?.questions.length > 0 ? (
                  sections[currentStep].questions.map((question) => (
                    <div key={question.id} className="mb-6 p-4 border rounded-lg shadow-sm bg-white">
                      <p className="text-lg font-medium text-gray-700 mb-4">{question.text}</p>
                      <div className="flex space-x-6">
                        {["可", "不可", "除外"].map((option) => (
                          <label
                            key={option}
                            className={`flex items-center px-4 py-2 border rounded-lg cursor-pointer ${
                              (formData[question.id] === null && option === "除外") ||
                              (formData[question.id] === 0 && option === "不可") ||
                              (formData[question.id] === question.score && option === "可")
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-300"
                            }`}
                          >
                            <input
                              type="radio"
                              name={`question-${question.id}`}
                              value={option}
                              checked={
                                (option === "除外" && formData[question.id] === null) ||
                                (option === "不可" && formData[question.id] === 0) ||
                                (option === "可" && formData[question.id] === question.score)
                              }
                              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                              className="hidden"
                            />
                            <span className="text-gray-700 font-medium">{option === "可" ? question.score : option === "不可" ? 0 : "除外"}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-500 text-center py-8">設問がありません</div>
                )}
              </form>
              <div className="flex justify-between mt-8 mb-20">
                <button
                  onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
                  disabled={currentStep === 0}
                  className={`px-6 py-3 rounded-lg font-medium ${currentStep === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"}`}
                >
                  戻る
                </button>
                <button
                  onClick={saveTemporary}
                  className="px-6 py-3 rounded-lg font-medium bg-yellow-500 text-white"
                  type="button"
                >
                  一時保存
                </button>
                {currentStep === sectionNames.length - 1 ? (
                  <button
                    onClick={handleSave}
                    className="px-6 py-3 rounded-lg font-medium bg-green-500 text-white"
                    type="button"
                  >
                    保存
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentStep((prev) => Math.min(prev + 1, sectionNames.length - 1))}
                    className="px-6 py-3 rounded-lg font-medium bg-blue-500 text-white"
                    type="button"
                  >
                    次へ
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
