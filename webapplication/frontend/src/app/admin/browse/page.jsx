'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
    Select,
    SelectItem,
    SelectContent,
    SelectTrigger,
} from "@/components/ui/select";
import { fetchFeedbacks } from "@/lib/services/feedbacks";
import ProgressTable from './progress'; // 追加

const Personal = () => {
  const router = useRouter();
  const [admin, setAdmin] = useState([]);
  const [periods, setPeriods] = useState([]); // 全periodリスト
  const [selectedPeriod, setSelectedPeriod] = useState('latest'); // 選択中の期 or "progress"
  const [filters, setFilters] = useState({
    facility: 'all',
    occupation: 'all',
    grade: 'all',
    rating: 'all',
    search: '',
  });

  // データ取得時に period を指定
  useEffect(() => {
    if (selectedPeriod === 'progress') return; // 進行状況表示時はデータ取得しない
    const fetchData = async () => {
      try {
        let allPeriods = [];
        if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
          const { feedbacks: mockFeedbacks } = await import('@/mock_data/mockFeedbacks');
          const allPeriodsSet = new Set();
          mockFeedbacks.forEach(person => {
            person.periods.forEach(p => allPeriodsSet.add(p.period));
          });
          allPeriods = Array.from(allPeriodsSet).sort();
        } else {
          const allData = await fetchFeedbacks({});
          const allPeriodsSet = new Set();
          allData.forEach(person => {
            person.periods.forEach(p => allPeriodsSet.add(p.period));
          });
          allPeriods = Array.from(allPeriodsSet).sort();
        }
        setPeriods(allPeriods);

        // 期をパラメータで渡して再取得
        const data = await fetchFeedbacks({ period: selectedPeriod });

        // 選択した期のperiodデータをflattenして一覧用に整形
        const flat = data.map(person => {
          const periodData = person.periods[0];
          return {
            employeeId: person.employeeId,
            lastName: person.lastName,
            firstName: person.firstName,
            facility: person.facility,
            occupation: person.occupation,
            grade: person.grade,
            workGuidelineScore: periodData?.workGuideline?.score ?? "-",
            performanceReviewScore: periodData?.performanceReview?.score ?? "-",
            totalScore: periodData?.totalScore ?? "-",
            period: periodData?.period ?? "-",
          };
        }).filter(row => row.period !== "-");
        setAdmin(flat);
      } catch (e) {
        // エラー処理
      }
    };
    fetchData();
  }, [selectedPeriod]);

  const handleFilterChange = (name, value) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const uniqueValues = (key) => {
    return ['all', ...new Set(admin.map(person => person[key]))];
  };

  const getRating = (score) => {
    if (score >= 90) return 'S';
    if (score >= 81) return 'A';
    if (score >= 71) return 'B';
    if (score >= 61) return 'C';
    return 'D';
  };

  // フィルタリングされたデータ
  const filteredAdmin = admin.filter((person) => {
    const rating = getRating(person.totalScore);
    return (
      (filters.facility === 'all' || person.facility === filters.facility) &&
      (filters.occupation === 'all' || person.occupation === filters.occupation) &&
      (filters.grade === 'all' || person.grade === filters.grade) &&
      (filters.rating === 'all' || rating === filters.rating) &&
      (filters.search === '' ||
        `${person.lastName}${person.firstName}`.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  return (
    <div className="space-y-1">
      {/* フィルター部分 */}
      <div className="flex flex-col gap-6 sm:flex-row sm:justify-between items-center p-2 bg-white rounded-lg">
        {/* Period 表示・選択 */}
        <div className="flex items-center gap-2 text-lg font-semibold">
          <span>表示:</span>
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-38">
              {selectedPeriod === 'progress'
                ? '進行状況'
                : selectedPeriod === 'latest'
                  ? (periods.length > 0 ? `最新 (${periods[periods.length - 1]})` : '最新')
                  : selectedPeriod}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="progress">進行状況</SelectItem>
              <SelectItem value="latest">最新</SelectItem>
              {periods.map((p) => (
                <SelectItem key={p} value={p}>{p}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* その他のフィルターと検索ボックス（進行状況以外のときのみ表示） */}
        {selectedPeriod !== 'progress' && (
          <div className="flex flex-wrap gap-4 items-center justify-end w-full sm:w-auto">
            <label className="flex flex-col sm:flex-row items-center gap-2">
              <span className="text-sm font-medium">施設：</span>
              <Select value={filters.facility} onValueChange={(value) => handleFilterChange('facility', value)}>
                <SelectTrigger>{filters.facility === 'all' ? '全て' : filters.facility}</SelectTrigger>
                <SelectContent>
                  {uniqueValues('facility').map((value) => (
                    <SelectItem key={value} value={value}>
                      {value === 'all' ? '全て' : value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>
            <label className="flex flex-col sm:flex-row items-center gap-2">
              <span className="text-sm font-medium">職種：</span>
              <Select value={filters.occupation} onValueChange={(value) => handleFilterChange('occupation', value)}>
                <SelectTrigger>{filters.occupation === 'all' ? '全て' : filters.occupation}</SelectTrigger>
                <SelectContent>
                  {uniqueValues('occupation').map((value) => (
                    <SelectItem key={value} value={value}>
                      {value === 'all' ? '全て' : value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>
            <label className="flex flex-col sm:flex-row items-center gap-2">
              <span className="text-sm font-medium">等級：</span>
              <Select value={filters.grade} onValueChange={(value) => handleFilterChange('grade', value)}>
                <SelectTrigger>{filters.grade === 'all' ? '全て' : filters.grade}</SelectTrigger>
                <SelectContent>
                  {uniqueValues('grade').map((value) => (
                    <SelectItem key={value} value={value}>
                      {value === 'all' ? '全て' : value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>
            <label className="flex flex-col sm:flex-row items-center gap-2">
              <span className="text-sm font-medium">評価</span>
              <Select value={filters.rating} onValueChange={(value) => handleFilterChange('rating', value)}>
                <SelectTrigger>{filters.rating === 'all' ? '全て' : filters.rating}</SelectTrigger>
                <SelectContent>
                  {['all', 'S', 'A', 'B', 'C', 'D'].map((value) => (
                    <SelectItem key={value} value={value}>
                      {value === 'all' ? '全て' : value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>
          </div>
        )}
      </div>

      {/* テーブル部分 */}
      {selectedPeriod === 'progress' ? (
        <ProgressTable />
      ) : (
        <div className="overflow-x-auto border border-gray-200 shadow-sm rounded-lg">
          <div className="max-h-[500px] overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200 bg-white">
              <thead className="bg-gray-50 sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">名前</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">施設</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">職種</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">等級</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">働き方の指針</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">業務考課</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">総合</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">評価</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredAdmin.map((person) => (
                  <tr
                    key={person.employeeId}
                    className="hover:bg-gray-100 transition duration-200 cursor-pointer"
                    onClick={() => router.push(`/admin/browse/${person.employeeId}`)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.lastName}{person.firstName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{person.facility}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{person.occupation}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{person.grade}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{person.workGuidelineScore}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{person.performanceReviewScore}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{person.totalScore}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">{getRating(person.totalScore)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Personal;





