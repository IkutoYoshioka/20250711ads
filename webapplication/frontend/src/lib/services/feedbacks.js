// 人事考課の最終結果関連

import api from '@/lib/api';
import { feedbacks as mockFeedbacks } from '@/mock_data/mockFeedbacks';
import { mockQuestionAnalysis } from '@/mock_data/mockFeedbacksQuestions';

// 人事考課の最終結果一覧を取得（一覧ページ・施設分析ページなどで利用）
export async function fetchFeedbacks(params = {}) {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    // 期の一覧を取得
    const allPeriods = Array.from(
      new Set(mockFeedbacks.flatMap(f => f.periods.map(p => p.period)))
    );
    // 期の降順（新しい順）でソート
    allPeriods.sort((a, b) => b.localeCompare(a, 'ja', { numeric: true }));

    // 期指定
    let period = params.period;
    if (!period || period === 'latest') {
      period = allPeriods[0];
    }

    // 期・その他フィルタで絞り込み
    let data = mockFeedbacks
      .map(person => ({
        ...person,
        periods: person.periods.filter(p => p.period === period),
      }))
      .filter(person => person.periods.length > 0);

    // 他のフィルタ
    data = data.filter(person => {
      return Object.entries(params).every(([key, value]) => {
        if (key === 'period') return true;
        if (value === '' || value === 'all') return true;
        if (key === 'achievement') return person.periods[0]?.totalScore === Number(value);
        if (['facility', 'occupation', 'grade'].includes(key)) {
          return person[key] === value;
        }
        return true;
      });
    });

    return data;
  }

  // API利用時
  const query = new URLSearchParams(params).toString();
  const url = query ? `/api/feedbacks?${query}` : '/api/feedbacks';
  return api(url, { method: 'GET' });
}

// 個人の評価詳細データ取得
export async function fetchFeedbackByEmployeeId(employeeId) {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    return mockFeedbacks.find(f => f.employeeId === employeeId);
  }
  return api(`/api/feedbacks/${employeeId}`, { method: 'GET' });
}

// 施設・期ごとの全員分データ取得（施設分析ページ用）
export async function fetchFacilityFeedbacks({ facility = 'all', period = '' } = {}) {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    // 施設・期で絞り込み
    return mockFeedbacks
      .filter(person =>
        (facility === 'all' || person.facility === facility) &&
        (period === '' || person.periods.some(p => p.period === period))
      )
      .map(person => ({
        ...person,
        periods: person.periods.filter(p => period === '' || p.period === period),
      }))
      .filter(person => person.periods.length > 0);
  }
  // API利用時
  const query = new URLSearchParams({ facility, period }).toString();
  return api(`/api/feedbacks/facility?${query}`, { method: 'GET' });
}

// 設問分析用データ取得
export async function fetchQuestionAnalysisData() {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    return mockQuestionAnalysis;
  }
  return api("/api/feedbacks/question-analysis", { method: "GET" });
}
