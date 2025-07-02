// 面談関連

// lib/services/interview.js
import api from '@/lib/api';
import { mockInterviewData } from '@/mock_data/mockInterviews';

export async function fetchInterviewData(employeeId) {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    // 本来は employeeId に応じたデータを返すようにしてもよい
    return mockInterviewData.find(item => item.employeeId === employeeId) || null;
  }

  return api(`/api/interview?employeeId=${employeeId}`, { method: 'GET' });
}
export async function saveInterviewData(employeeId, interviewData) {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    // モックデータでは保存処理は不要なので、成功を返す
    return { success: true };
  }

  return api(`/api/interview`, {
    method: 'POST',
    body: { employeeId, interviewData },
  });
}