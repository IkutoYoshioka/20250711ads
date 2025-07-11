'use client';
import React, { useEffect, useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import CommonContent from './content';
import { fetchSavedEvaluation, submitEvaluation } from '@/lib/services/assignments';
import { fetchMe } from '@/lib/services/employees';
import { toast, Toaster } from 'sonner';
import { useRouter } from 'next/navigation';

export default function PersonEvaluation() {
  const params = useParams();
  const employeeId = Array.isArray(params.employeeId) ? params.employeeId[0] : params.employeeId;

  const [individual, setIndividual] = useState({});
  const [sections, setSections] = useState([]);
  const [scores, setScores] = useState({
    workGuidelines: 0,
    performanceReviews: 0,
    total: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [evaluatorId, setEvaluatorId] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        // evaluatorId取得
        const user = await fetchMe();
        setEvaluatorId(user.employeeId);

        // 評価情報を取得
        const detail = await fetchSavedEvaluation(employeeId, null);
        if (!detail) {
          return notFound();
        }
        setIndividual({
          employeeId: detail.employeeId,
          lastName: detail.lastName,
          firstName: detail.firstName,
          facility: detail.facility,
          occupation: detail.occupation,
          grade: detail.grade,
          performanceReviewsPrimaryEvaluatorName: detail.performanceReviewsPrimaryEvaluatorName,
          performanceReviewsSecondaryEvaluatorName: detail.performanceReviewsSecondaryEvaluatorName,
          performanceReviewsFinalEvaluatorName: detail.performanceReviewsFinalEvaluatorName,
        });
        setSections(detail.sections || []);
        setScores(detail.scores || { workGuidelines: 0, performanceReviews: 0, total: 0 });
      } catch (error) {
        console.error('データ取得エラー:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [employeeId]);

  // 提出ボタン押下時（確認ダイアログ表示）
  const handleSubmit = () => {
    setShowConfirm(true);
  };

  // 確認ダイアログで「はい」を押した時
  const handleConfirmSubmit = async () => {
    setIsSubmitting(true);
    setShowConfirm(false);
    try {
      await submitEvaluation(employeeId, evaluatorId, "performanceReviews");
      toast.success("提出が完了しました。");
      setTimeout(() => {
        router.push("/eval/personal_lists"); // 数秒後に前のページへ遷移
      }, 4000); // 2秒後に遷移（必要に応じて時間を調整）
    } catch (error) {
      toast.error("提出に失敗しました。");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 確認ダイアログで「キャンセル」
  const handleCancel = () => {
    setShowConfirm(false);
  };

  if (isLoading) return <div>読み込み中...</div>;

  return (
    <div className="p-4">
      <Toaster position="top-right" richColors />
      <h1 className="text-xl font-bold mb-4">個人評価詳細：業務考課</h1>
      <div className="flex pb-4">
        <table className="border-collapse border w-10/12">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">氏名</th>
              <th className="p-2 border">施設名</th>
              <th className="p-2 border">職種・等級</th>
              <th className="p-2 border">1次考課者</th>
              <th className="p-2 border">2次考課者</th>
              <th className="p-2 border">最終考課者</th>
              <th className="p-2 border">業務考課</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border text-center">{individual.lastName} {individual.firstName}</td>
              <td className="p-2 border text-center">{individual.facility}</td>
              <td className="p-2 border text-center">{individual.occupation}・{individual.grade}</td>
              <td className="p-2 border text-center">{individual.performanceReviewsPrimaryEvaluatorName}</td>
              <td className="p-2 border text-center">{individual.performanceReviewsSecondaryEvaluatorName}</td>
              <td className="p-2 border text-center">{individual.performanceReviewsFinalEvaluatorName}</td>
              <td className="p-2 border text-center">{scores.performanceReviews}%</td>
            </tr>
          </tbody>
        </table>

        <div className="flex flex-col mx-auto pt-2">
          <Link href={`${employeeId}/edit`} className="flex flex-row gap-1 bg-gray-300 rounded-full hover:bg-gray-400 p-1 mb-1 px-3 text-lg font-medium">
            編集する
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-pen-line">
              <path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0-2-2" />
              <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
              <path d="M8 18h1" />
            </svg>
          </Link>

          <button
            className="flex flex-row gap-1 bg-red-500 text-white rounded-full hover:bg-red-600 p-1 px-3 text-lg font-medium"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            提出する
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" x2="12" y1="3" y2="15" />
            </svg>
          </button>
        </div>
      </div>

      <CommonContent sections={sections} individual={individual} />

      {/* 確認ダイアログ */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
            <div className="mb-4 text-lg font-semibold">本当に提出しますか？提出した後は編集ができません。</div>
            <div className="flex gap-6">
              <button
                onClick={handleConfirmSubmit}
                className="px-6 py-2 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600"
                disabled={isSubmitting}
              >
                はい
              </button>
              <button
                onClick={handleCancel}
                className="px-6 py-2 bg-gray-300 rounded-lg font-bold hover:bg-gray-400"
                disabled={isSubmitting}
              >
                キャンセル
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
