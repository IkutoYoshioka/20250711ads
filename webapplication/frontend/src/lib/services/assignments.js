import api from '@/lib/api';
import { mockAssignments } from '@/mock_data/mockAssignments';
import { mockEvaluationResults, mockEvaluationCriteria } from '@/mock_data/mockEvaluationDetails';

// 進行中の人事考課関連

// 進行中の人事考課一覧取得（モック対応）
export async function fetchAssignments(params = {}) {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    let data = mockAssignments;
    if (params.period) {
      data = data.filter(a => a.period === params.period);
    }
    if (params.status) {
      data = data.filter(a => a.status === params.status);
    }
    if (params.facility) {
      data = data.filter(a => a.facility === params.facility);
    }
    return data;
  }
  const query = new URLSearchParams(params).toString();
  const url = query ? `/api/assignments?${query}` : '/api/assignments';
  return api(url, { method: 'GET' });
}

// 個別割り当て詳細取得API
export async function fetchAssignmentDetail(assignmentId) {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    // 疑似データから取得
    const assignment = mockAssignments.find(a => a.assignmentId === assignmentId);
    if (!assignment) return null;
    // 評価データ・評価基準もモックから取得
    const evaluationResult = mockEvaluationResults[assignmentId] || [];
    const evaluationCriteria = mockEvaluationCriteria || [];
    return {
      individual: assignment,
      evaluationResult,
      evaluationCriteria,
    };
  }
  // 本番API
  return api(`/api/assignments/${assignmentId}`, { method: 'GET' });
}

// 個別割り当て詳細取得API（employeeIdで取得）
export async function fetchAssignmentDetailByEmployeeId(employeeId) {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    const assignment = mockAssignments.find(a => a.employeeId === employeeId);
    if (!assignment) return null;
    const evaluationResult = mockEvaluationResults[employeeId] || [];
    const evaluationCriteria = mockEvaluationCriteria || [];
    return {
      individual: assignment,
      evaluationResult,
      evaluationCriteria,
    };
  }
  // 本番API
  return api(`/api/assignments/employee/${employeeId}`, { method: 'GET' });
}