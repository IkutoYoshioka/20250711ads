// ログインユーザーの結果を取得

"use client";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2'; 
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { fetchFeedbackByEmployeeId } from '@/lib/services/feedbacks';
import { useUser } from '@/context/UserContext';
import React, { useState, useEffect } from 'react';

// Chart.js の登録
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const getDiffInfo = (current, prev) => {
  if (prev == null) return null;
  const diff = current - prev;
  if (diff > 0) return { diff, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f70202" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg>, color: "text-red-600" };
  if (diff < 0) return { diff, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1f02f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 17h6v-6"/><path d="m22 17-8.5-8.5-5 5L2 7"/></svg>, color: "text-blue-600" };
  return { diff, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8d8d91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>, color: "text-gray-500" };
};

const SinglePointEvaluation = () => {
  const user = useUser();
  const [personData, setPersonData] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('workGuidelines');

  useEffect(() => {
    const loadData = async () => {
      try {
        const employeeId = user?.employeeId;
        if (!employeeId) throw new Error("employeeId が取得できません");

        const data = await fetchFeedbackByEmployeeId(employeeId);
        setPersonData(data);
      } catch (error) {
        console.error("データ取得エラー:", error);
      }
    };

    if (user) {
      loadData();
    }
  }, [user]);

  useEffect(() => {
    if (personData?.periods?.length > 0) {
      setSelectedPeriod(personData.periods[personData.periods.length - 1]);
    }
  }, [personData]);

  if (!personData || !selectedPeriod) {
    return <p className="text-center text-gray-500">該当するデータが見つかりません</p>;
  }

  const periods = personData.periods;
  const currentIdx = periods.findIndex(p => p.period === selectedPeriod.period);
  const prevPeriod = periods[currentIdx - 1];

  const workGuidelinesDiff = prevPeriod
    ? getDiffInfo(selectedPeriod.workGuidelines.score, prevPeriod.workGuidelines.score)
    : null;
  const performanceReviewsDiff = prevPeriod
    ? getDiffInfo(selectedPeriod.performanceReviews.score, prevPeriod.performanceReviews.score)
    : null;
  const totalScoreDiff = prevPeriod
    ? getDiffInfo(selectedPeriod.totalScore, prevPeriod.totalScore)
    : null;

  const selectedData = selectedCategory === 'workGuidelines'
    ? selectedPeriod.workGuidelines
    : selectedPeriod.performanceReviews;

  const chartData = {
    labels: selectedData.sections.map(sec => sec.section),
    datasets: [
      {
        label: selectedCategory === 'workGuidelines' ? '働き方の指針 - セクション得点率' : '業務考課 - セクション得点率',
        data: selectedData.sections.map(sec => sec.score),
        backgroundColor: selectedCategory === 'workGuidelines' ? 'rgba(54, 162, 235, 0.6)' : 'rgba(255, 99, 132, 0.6)',
        borderColor: selectedCategory === 'workGuidelines' ? 'rgba(54, 162, 235, 1)' : 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="grid grid-cols-2 gap-6 p-0">
      <div className="flex flex-col space-y-3">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle>{selectedPeriod.period} - {personData.lastName}{personData.firstName} の評価</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold flex items-center gap-2">
              働き方の指針: {selectedPeriod.workGuidelines.score}
              {workGuidelinesDiff && (
                <span className={`ml-2 flex items-center ${workGuidelinesDiff.color}`}>
                  {workGuidelinesDiff.icon}
                  <span className="ml-1 text-base">{Math.abs(workGuidelinesDiff.diff)}pt</span>
                </span>
              )}
            </p>
            <p className="text-xl font-semibold flex items-center gap-2">
              業務考課: {selectedPeriod.performanceReviews.score}
              {performanceReviewsDiff && (
                <span className={`ml-2 flex items-center ${performanceReviewsDiff.color}`}>
                  {performanceReviewsDiff.icon}
                  <span className="ml-1 text-base">{Math.abs(performanceReviewsDiff.diff)}pt</span>
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

        <Card className="bg-white shadow-lg h-[320px]">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center justify-between">
                <span>
                  {selectedCategory === 'workGuidelines' ? '働き方の指針' : '業務考課'} - セクション得点率
                </span>
                <div className="flex items-center space-x-2">
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
                  <select
                    className="p-1 border rounded"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="workGuidelines">働き方の指針</option>
                    <option value="performanceReviews">業務考課</option>
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

      <div className="flex flex-col space-y-3">
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
