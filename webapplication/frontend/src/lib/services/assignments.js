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
    // mockEvaluationResults は配列
    const evaluationData = mockEvaluationResults.find(
      data => data.individual.employeeId === evaluateeId
    );

    if (!evaluationData) return null;

    return {
      individual: evaluationData.individual,
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
        a.workingGuidelinesPrimaryEvaluatorName,
        a.performanceEvaluationPrimaryEvaluatorName,
      ],
      secondEvaluators: [
        a.workingGuidelinesSecondaryEvaluatorName,
        a.performanceEvaluationSecondaryEvaluatorName,
      ],
      finalEvaluators: [
        a.workingGuidelinesFinalEvaluatorName,
        a.performanceEvaluationFinalEvaluatorName,
      ],
      status: a.status,
    }));
  }
  const query = new URLSearchParams(params).toString();
  const url = query ? `/api/assignments/progress?${query}` : '/api/assignments/progress';
  return api(url, { method: 'GET' });
}