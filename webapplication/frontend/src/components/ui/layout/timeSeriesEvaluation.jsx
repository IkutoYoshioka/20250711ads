'use client';

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useParams } from 'next/navigation';
import { fetchFeedbackByEmployeeId } from '@/lib/services/feedbacks';

// Chart.js の登録
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TimeSeriesEvaluation = () => {
  const params = useParams();
  const employeeId = params?.employeeId;
  const [personData, setPersonData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('workGuideline');
  const [selectedSections, setSelectedSections] = useState([]);

  useEffect(() => {
    if (!employeeId) return;
    fetchFeedbackByEmployeeId(employeeId).then(setPersonData);
  }, [employeeId]);

  // personDataが取得できたら、デフォルトで全セクションを選択
  useEffect(() => {
    if (personData && personData.periods && personData.periods.length > 0) {
      const sectionNames = personData.periods[0][selectedCategory]?.sections.map((sec) => sec.section) || [];
      setSelectedSections(sectionNames);
    }
  // selectedCategoryが変わった時も再セット
  }, [personData, selectedCategory]);

  if (!personData) {
    return <p className="text-center text-gray-500">該当するデータが見つかりません</p>;
  }

  const periodsArr = personData.periods;
  // 0番目が一番古いのでreverse不要
  const periods = periodsArr.map((p) => p.period);

  // セクション一覧（最新期のデータから取得）
  const latestPeriod = periodsArr[periodsArr.length - 1];
  const sectionNames = latestPeriod[selectedCategory]?.sections.map((sec) => sec.section) || [];

  // 全体の推移データ
  const overallChartData = {
    labels: periods,
    datasets: [
      {
        label: selectedCategory === 'workGuideline' ? '働き方の指針' : '業務考課',
        data: periodsArr.map((p) => p[selectedCategory]?.score ?? null),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderWidth: 2,
        tension: 0,
        pointRadius: 5,
        pointHoverRadius: 7,
        spanGaps: false,
      },
    ],
  };

  // セクション別推移データ
  const sectionChartData = {
    labels: periods,
    datasets: sectionNames
      .filter((section) => selectedSections.includes(section))
      .map((section, index) => ({
        label: section,
        data: periodsArr.map((p) =>
          p[selectedCategory]?.sections.find((s) => s.section === section)?.score ?? null
        ),
        borderColor: `hsl(${index * 60}, 70%, 50%)`,
        backgroundColor: `hsl(${index * 60}, 70%, 80%)`,
        borderWidth: 2,
        tension: 0,
        pointRadius: 5,
        pointHoverRadius: 7,
        spanGaps: false,
      })),
  };

  // グラフのオプション
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'category',
        ticks: { padding: 10, autoSkip: false },
        grid: { display: true },
      },
      y: {
        min: 0,
        max: 100,
        afterDataLimits: (scale) => { scale.max += 5 },
        ticks: { stepSize: 10 },
      },
    },
    layout: { padding: { left: 10, right: 10 } },
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-2">
      {/* カテゴリー選択 */}
      <div className="col-span-2 flex items-center space-x-4">
        <label className="text-lg font-bold">評価種類:</label>
        <select
          className="p-2 border rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="workGuideline">働き方の指針</option>
          <option value="performanceReview">業務考課</option>
        </select>
      </div>

      {/* 左側: 全体推移の折れ線グラフ */}
      <div className="bg-white p-4 pb-20 rounded-lg shadow-md h-[420px] flex flex-col">
        <h2 className="text-lg font-bold mb-2">{personData.lastName}{personData.firstName} の時系列推移</h2>
        <h3 className="text-md font-semibold mb-2">({selectedCategory === 'workGuideline' ? '働き方の指針' : '業務考課'})</h3>
        <Line data={overallChartData} options={options} />
      </div>

      {/* 右側: セクション別推移の折れ線グラフ */}
      <div className="bg-white p-4 pb-20 rounded-lg shadow-md h-[420px] flex flex-col">
        <h2 className="text-lg font-bold mb-2">セクション別推移</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {sectionNames.map((section, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedSections.includes(section)}
                onChange={() => toggleSection(section)}
              />
              <span>{section}</span>
            </label>
          ))}
        </div>
        <Line data={sectionChartData} options={options} />
      </div>
    </div>
  );
};

export default TimeSeriesEvaluation;
