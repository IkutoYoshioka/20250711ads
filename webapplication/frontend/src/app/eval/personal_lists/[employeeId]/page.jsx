'use client';
import React, { useEffect, useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import CommonContent from './content';
import { fetchAssignmentDetailByEmployeeId } from '@/lib/services/assignments';

const calculateScores = (evaluationCriteria, evaluationData) => {
  const groupedScores = evaluationData.reduce(
    (acc, detail) => {
      const section = evaluationCriteria.find((section) =>
        section.questions.some((q) => q.id === detail.questionId)
      );
      if (!section) return acc;
      const question = section.questions.find((q) => q.id === detail.questionId);
      if (!question) return acc;
      const sectionType = section.type;
      if (!acc[sectionType]) {
        acc[sectionType] = { totalScore: 0, obtainedScore: 0 };
      }
      acc[sectionType].totalScore += question.score;
      acc[sectionType].obtainedScore += detail.score;
      acc.total.totalScore += question.score;
      acc.total.obtainedScore += detail.score;
      return acc;
    },
    { total: { totalScore: 0, obtainedScore: 0 } }
  );
  return groupedScores;
};

const PersonEvaluation = () => {
  const params = useParams();
  const { employeeId } = params;
  const [individual, setIndividual] = useState(null);
  const [evaluationResult, setEvaluationResult] = useState([]);
  const [evaluationCriteria, setEvaluationCriteria] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // employeeIdでAPIを呼ぶ
        const detail = await fetchAssignmentDetailByEmployeeId(employeeId);
        if (!detail || !detail.individual) {
          return notFound();
        }
        setIndividual(detail.individual);
        setEvaluationResult(detail.evaluationResult || []);
        setEvaluationCriteria(detail.evaluationCriteria || []);
      } catch (error) {
        console.error('データの取得に失敗しました:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [employeeId]);

  if (isLoading) {
    return <div>読み込み中...</div>;
  }

  if (!individual) {
    return notFound();
  }

  const scores = calculateScores(evaluationCriteria, evaluationResult);

  const workingGuidelinesPercentage =
    scores["働き方の指針"] && scores["働き方の指針"].totalScore > 0
      ? Math.round((scores["働き方の指針"].obtainedScore / scores["働き方の指針"].totalScore) * 100)
      : 0;

  const performanceEvaluationPercentage =
    scores["業務考課"] && scores["業務考課"].totalScore > 0
      ? Math.round((scores["業務考課"].obtainedScore / scores["業務考課"].totalScore) * 100)
      : 0;

  const totalPercentage =
    scores.total.totalScore > 0
      ? Math.round((scores.total.obtainedScore / scores.total.totalScore) * 100)
      : 0;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">個人評価詳細</h1>
      <div className="flex pb-4">
        <table className="border-collapse border w-10/12">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">氏名</th>
              <th className="p-2 border">施設名</th>
              <th className="p-2 border">職種・等級</th>
              <th className="p-2 border">働き方の指針</th>
              <th className="p-2 border">業務考課</th>
              <th className="p-2 border">総合</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border text-center">{individual.lastName} {individual.firstName}</td>
              <td className="p-2 border text-center">{individual.facility}</td>
              <td className="p-2 border text-center">{individual.occupation}・{individual.grade}</td>
              <td className="p-2 border text-center">
                {workingGuidelinesPercentage}%
              </td>
              <td className="p-2 border text-center">
                {performanceEvaluationPercentage}%
              </td>
              <td className="p-2 border text-center">
                {totalPercentage}%
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-col mx-auto pt-2">
          <Link href={`${employeeId}/edit`} className="flex flex-row gap-1 bg-gray-300 rounded-full hover:bg-gray-400 p-1 mb-1 px-3 text-lg font-medium">                 
            編集する
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-pen-line"><path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0-2-2"/><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><path d="M8 18h1"/></svg>
          </Link>
          <button className="flex flex-row gap-1 bg-red-500 text-white rounded-full border-black hover:bg-red-600 p-1 px-3 text-lg font-medium">
            提出する
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
          </button>
        </div>
      </div>

      <CommonContent evaluationData={evaluationResult} individual={individual} evaluationCriteria={evaluationCriteria} />
    </div>
  );
};

export default PersonEvaluation;