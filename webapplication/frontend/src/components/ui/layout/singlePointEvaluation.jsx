'use client';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2'; 
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useParams } from 'next/navigation';
import { fetchFeedbackByEmployeeId } from '@/lib/services/feedbacks';
import React, { useState, useEffect } from 'react';

// Chart.js の登録
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const getDiffInfo = (current, prev) => {
  if (prev == null) return null;
  const diff = current - prev;
  if (diff > 0) return { diff, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f70202" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up-icon lucide-trending-up"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg>, color: "text-red-600" };
  if (diff < 0) return { diff, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1f02f7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-down-icon lucide-trending-down"><path d="M16 17h6v-6"/><path d="m22 17-8.5-8.5-5 5L2 7"/></svg>, color: "text-blue-600" };
  return { diff, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8d8d91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>, color: "text-gray-500" };
};

const SinglePointEvaluation = () => {
  const params = useParams();
  const employeeId = params?.employeeId;
  const [personData, setPersonData] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('workGuideline');

  useEffect(() => {
    if (!employeeId) return;
    fetchFeedbackByEmployeeId(employeeId).then(setPersonData);
  }, [employeeId]);

  useEffect(() => {
    if (personData && personData.periods && personData.periods.length > 0) {
      // 0番目が一番古いので、最新期は末尾
      setSelectedPeriod(personData.periods[personData.periods.length - 1]);
    }
  }, [personData]);

  if (!personData || !selectedPeriod) {
    return <p className="text-center text-gray-500">該当するデータが見つかりません</p>;
  }

  const periods = personData.periods;
  const currentIdx = periods.findIndex(p => p.period === selectedPeriod.period);
  const prevPeriod = periods[currentIdx - 1]; // 1つ前が前期

  // 前期比情報を取得
  const workGuidelineDiff = prevPeriod
    ? getDiffInfo(selectedPeriod.workGuideline.score, prevPeriod.workGuideline.score)
    : null;
  const performanceReviewDiff = prevPeriod
    ? getDiffInfo(selectedPeriod.performanceReview.score, prevPeriod.performanceReview.score)
    : null;
  const totalScoreDiff = prevPeriod
    ? getDiffInfo(selectedPeriod.totalScore, prevPeriod.totalScore)
    : null;

  // 選択されたカテゴリーのデータ
  const selectedData = selectedCategory === 'workGuideline'
    ? selectedPeriod.workGuideline
    : selectedPeriod.performanceReview;

  // グラフデータ
  const chartData = {
    labels: selectedData.sections.map(sec => sec.section),
    datasets: [
      {
        label: selectedCategory === 'workGuideline' ? '働き方の指針 - セクション得点率' : '業務考課 - セクション得点率',
        data: selectedData.sections.map(sec => sec.score),
        backgroundColor: selectedCategory === 'workGuideline' ? 'rgba(54, 162, 235, 0.6)' : 'rgba(255, 99, 132, 0.6)',
        borderColor: selectedCategory === 'workGuideline' ? 'rgba(54, 162, 235, 1)' : 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="grid grid-cols-2 gap-6 p-0">
      {/* 左側エリア */}
      <div className="flex flex-col space-y-3">
        {/* 得点率表示 */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle>{selectedPeriod.period} - {personData.lastName}{personData.firstName} の評価</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold flex items-center gap-2">
              働き方の指針: {selectedPeriod.workGuideline.score}
              {workGuidelineDiff && (
                <span className={`ml-2 flex items-center ${workGuidelineDiff.color}`}>
                  {workGuidelineDiff.icon}
                  <span className="ml-1 text-base">{Math.abs(workGuidelineDiff.diff)}pt</span>
                </span>
              )}
            </p>
            <p className="text-xl font-semibold flex items-center gap-2">
              業務考課: {selectedPeriod.performanceReview.score}
              {performanceReviewDiff && (
                <span className={`ml-2 flex items-center ${performanceReviewDiff.color}`}>
                  {performanceReviewDiff.icon}
                  <span className="ml-1 text-base">{Math.abs(performanceReviewDiff.diff)}pt</span>
                </span>
              )}
            </p>
            <p className="text-xl font-semibold flex items-center gap-2">
              総合: {selectedPeriod.totalScore}
              {totalScoreDiff && (
                <span className={`ml-2 flex items-center ${totalScoreDiff.color}`}>
                  {totalScoreDiff.icon}
                  <span className="ml-1 text-base">{Math.abs(totalScoreDiff.diff)}pt</span>
                </span>
              )}
            </p>
          </CardContent>
        </Card>

        {/* グラフ（選択された評価種別） */}
        <Card className="bg-white shadow-lg h-[320px]">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center justify-between">
                <span>
                  {selectedCategory === 'workGuideline' ? '働き方の指針' : '業務考課'} - セクション得点率
                </span>
                {/* タブの右側に選択UI */}
                <div className="flex items-center space-x-2">
                  {/* 評価期間選択 */}
                  <select
                    className="p-1 border rounded"
                    value={selectedPeriod.period}
                    onChange={(e) => {
                      const newPeriod = periods.find(p => p.period === e.target.value);
                      setSelectedPeriod(newPeriod);
                    }}
                  >
                    {periods.map((p) => (
                      <option key={p.period} value={p.period}>{p.period}</option>
                    ))}
                  </select>
                  {/* カテゴリー選択 */}
                  <select
                    className="p-1 border rounded"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="workGuideline">働き方の指針</option>
                    <option value="performanceReview">業務考課</option>
                  </select>
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Bar
              data={chartData}
              height={220}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: { min: 0, max: 100, ticks: { stepSize: 10 } }
                }
              }}
            />
          </CardContent>
        </Card>
      </div>

      {/* 右側エリア */}
      <div className="flex flex-col space-y-3">
        {/* 素点の詳細 */}
        <Card className="bg-white shadow-lg overflow-y-auto max-h-[505px]">
          <CardHeader>
            <CardTitle>素点の詳細</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" className="w-full">
              {selectedData.sections.map((sec, index) => (
                <AccordionItem key={index} value={`section-${index}`}>
                  <AccordionTrigger>
                    <span className="text-lg font-bold pl-4">
                      {sec.section}
                      <span className='text-sm'>（セクション得点率：{sec.score}）</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead className="sticky top-0 bg-gray-200">
                          <tr>
                            <th className="border border-gray-300 px-2 py-1 text-left">質問</th>
                            <th className="border border-gray-300 px-2 py-1 text-center">満点</th>
                            <th className="border border-gray-300 px-2 py-1 text-center">得点</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sec.questions.map((q, qIndex) => (
                            <tr key={qIndex} className="hover:bg-gray-100">
                              <td className="border border-gray-300 px-2 py-1">{q.question}</td>
                              <td className="border border-gray-300 px-2 py-1 text-center">{q.maxScore}</td>
                              <td className="border border-gray-300 px-2 py-1 text-center">{q.obtainedScore}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SinglePointEvaluation;
