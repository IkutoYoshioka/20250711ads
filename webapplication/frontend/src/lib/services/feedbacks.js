// 人事考課の最終結果関連

import api from '@/lib/api';
import { feedbacks as mockFeedbacks } from '@/mock_data/mockFeedbacks';
import { mockQuestionAnalysis } from '@/mock_data/mockFeedbacksQuestions';
import { facilityScoreDistributions } from '@/mock_data/mockFeedbacks';

// 人事考課の最終結果一覧を取得（一覧ページ・施設分析ページなどで利用）
export async function fetchFeedbacks(params = {}) {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    // 期指定
    let period = params.period;
    // "latest"なら各人の最新periodのみ
    if (!period || period === 'latest') {
      // 各人の最新periodだけ残す
      return mockFeedbacks.map(person => ({
        ...person,
        periods: [person.periods[person.periods.length - 1]],
      }));
    }

    // 期が指定されている場合は、その期だけ残す
    // ただし、全員分のperiodsから「その期だけ」を残す（空でもOK）
    return mockFeedbacks.map(person => ({
      ...person,
      periods: person.periods.filter(p => p.period === period),
    }));
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

// 施設ごとの得点分布集計データ取得API
export async function fetchFacilityScoreDistributions({ facility = '', occupation = '', grade = '', category = '', period = '' } = {}) {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    // 条件でフィルタ
    return facilityScoreDistributions.filter(item =>
      (facility === '' || item.facility === facility) &&
      (occupation === '' || item.occupation === occupation) &&
      (grade === '' || item.grade === grade) &&
      (category === '' || item.category === category) &&
      (period === '' || item.period === period)
    );
  }
  // API利用時
  const query = new URLSearchParams({ facility, occupation, grade, category, period }).toString();
  return api(`/api/feedbacks/facility-score-distributions?${query}`, { method: 'GET' });
}
