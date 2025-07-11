import api from '@/lib/api';
import { mockAssignments } from '@/mock_data/mockAssignments';
import { mockEvaluationResults } from '@/mock_data/mockEvaluationDetails';

// 割り当て一覧取得
export async function fetchAssignments(params = {}) {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    let data = mockAssignments;
    if (params.period) data = data.filter(a => a.period === params.period);
    if (params.status) data = data.filter(a => a.status === params.status);
    if (params.facility) data = data.filter(a => a.facility === params.facility);
    return data;
  }
  const query = new URLSearchParams(params).toString();
  const url = query ? `/api/assignments?${query}` : '/api/assignments';
  return api(url, { method: 'GET' });
}

// 既存評価取得API（評価結果・点数・評価基準もここで返す設計にする）
export async function fetchSavedEvaluation(evaluateeId, evaluatorId) {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    const evaluationData = mockEvaluationResults.find(
      data => data.employeeId === evaluateeId
    );

    if (!evaluationData) return null;

    return {
      firstName: evaluationData.firstName,
      lastName: evaluationData.lastName,
      employeeId: evaluationData.employeeId,
      facility: evaluationData.facility,
      occupation: evaluationData.occupation,
      grade: evaluationData.grade,
      workGuidelinesPrimaryEvaluatorName: evaluationData.workGuidelinesPrimaryEvaluatorName,
      workGuidelinesSecondaryEvaluatorName: evaluationData.workGuidelinesSecondaryEvaluatorName,
      workGuidelinesFinalEvaluatorName: evaluationData.workGuidelinesFinalEvaluatorName,
      performanceReviewsPrimaryEvaluatorName: evaluationData.performanceReviewsPrimaryEvaluatorName,
      performanceReviewsSecondaryEvaluatorName: evaluationData.performanceReviewsSecondaryEvaluatorName,
      performanceReviewsFinalEvaluatorName: evaluationData.performanceReviewsFinalEvaluatorName,
      status: evaluationData.status,
      updatedAt: evaluationData.updatedAt,
      // 評価基準と点数を返す
      sections: evaluationData.sections,
      sectionScores: evaluationData.sectionScores,
      scores: evaluationData.scores,
    };
  }

  return api(`/api/assignments/evaluation/result?savedBy=${evaluatorId}&target=${evaluateeId}`, { method: 'GET' });
}

// 評価保存
export async function saveEvaluation(evaluateeId, evaluatorId, evaluationDetails) {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    return { success: true };
  }
  return api(`/api/assignments/evaluation`, {
    method: 'POST',
    body: { evaluatorId, evaluateeId, evaluationDetails },
  });
}

// 進行状況一覧取得API
export async function fetchProgress(params = {}) {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    let data = mockAssignments;
    if (params.period) data = data.filter(a => a.period === params.period);
    if (params.facility) data = data.filter(a => a.facility === params.facility);

    // テーブル用に整形（各考課段階で2人ずつ表示）
    return data.map(a => ({
      employeeId: a.employeeId,
      name: a.lastName + ' ' + a.firstName,
      facility: a.facility,
      firstEvaluators: [
        a.workGuidelinesPrimaryEvaluatorName,
        a.performanceReviewsPrimaryEvaluatorName,
      ],
      secondEvaluators: [
        a.workGuidelinesSecondaryEvaluatorName,
        a.performanceReviewsSecondaryEvaluatorName,
      ],
      finalEvaluators: [
        a.workGuidelinesFinalEvaluatorName,
        a.performanceReviewsFinalEvaluatorName,
      ],
      status: a.status,
    }));
  }
  const query = new URLSearchParams(params).toString();
  const url = query ? `/api/assignments/progress?${query}` : '/api/assignments/progress';
  return api(url, { method: 'GET' });
}

// 評価提出API（次の考課段階の人が編集できるようにする）
export async function submitEvaluation(evaluateeId, evaluatorId, type) {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    // モック: ステータスを進める処理をここで実装（実際はバックエンドで管理）
    return { success: true };
  }
  return api(`/api/assignments/evaluation/submit`, {
    method: 'POST',
    body: { evaluateeId, evaluatorId, type },
  });
}

// 施設長割り当て候補取得API（mockAssignmentsから抽出するよう修正）
export async function fetchAssignmentAuthorities(facility) {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    // facilityに所属 or 兼務している従業員を抽出
    return mockAssignments.filter(
      e =>
        e.facility === facility ||
        (e.isConcurrent && e.concurrentFacilities && e.concurrentFacilities.includes(facility))
    );
  }
  return api(`/api/assignments/authorities?facility=${encodeURIComponent(facility)}`, { method: 'GET' });
}