// 面談関連

// lib/services/interview.js
import api from '@/lib/api';
import { mockInterviewData } from '@/mock_data/mockInterviews';

// 期ごとの面談履歴を取得
export async function fetchInterviewHistory(employeeId) {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    // employeeIdに該当する全期の履歴を返す
    return mockInterviewData.filter(item => item.employeeId === employeeId);
  }
  // 本番API: 全履歴を取得するエンドポイントを用意してください
  return api(`/api/interview/history?employeeId=${employeeId}`, { method: 'GET' });
}

// 既存のfetchInterviewData, saveInterviewDataはそのまま
export async function fetchInterviewData(employeeId) {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    return mockInterviewData.find(item => item.employeeId === employeeId) || null;
  }
  return api(`/api/interview?employeeId=${employeeId}`, { method: 'GET' });
}
export async function saveInterviewData(employeeId, interviewData) {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    return { success: true };
  }
  return api(`/api/interview`, {
    method: 'POST',
    body: { employeeId, interviewData },
  });
}