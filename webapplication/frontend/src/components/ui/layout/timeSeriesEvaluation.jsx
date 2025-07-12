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
  const [selectedCategory, setSelectedCategory] = useState('workGuidelines');
  const [selectedSections, setSelectedSections] = useState([]);
  const [activeTab, setActiveTab] = useState("overall"); // ← 追加

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
        label: selectedCategory === 'workGuidelines' ? '働き方の指針' : '業務考課',
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
        min: 50,
        max: 100,
        afterDataLimits: (scale) => { scale.max += 5 },
        ticks: { stepSize: 10 },
      },
    },
    layout: { padding: { left: 10, right: 10 } },
  };

  // セクションのチェック切り替え関数を追加
  const toggleSection = (section) => {
    setSelectedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  return (
    <div className="flex flex-col gap-6 p-6" style={{ height: "100vh", background: "#f7f7fa" }}>

      {/* タブ切り替え */}
      <div className="flex space-x-2 mb-0">
        <button
          className={`px-4 py-2 rounded-t-lg font-bold border-b-2 ${activeTab === "overall" ? "border-blue-500 bg-white" : "border-transparent bg-gray-100 text-gray-500"}`}
          onClick={() => setActiveTab("overall")}
        >
          時系列推移
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg font-bold border-b-2 ${activeTab === "section" ? "border-blue-500 bg-white" : "border-transparent bg-gray-100 text-gray-500"}`}
          onClick={() => setActiveTab("section")}
        >
          セクション別推移
        </button>
      </div>

      {/* グラフ表示部分（切り替え） */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === "overall" && (
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col" style={{ minHeight: 420 }}>
            <h2 className="text-xl font-bold mb-2 text-blue-900">{personData.lastName}{personData.firstName} の時系列推移</h2>
            <h3 className="text-md font-semibold mb-4 text-blue-700">
              ({selectedCategory === 'workGuidelines' ? '働き方の指針' : '業務考課'})
            </h3>
            {/* カテゴリー選択 */}
            <div className="flex items-center space-x-4 mb-0">
              <label className="text-lg font-bold">評価種類:</label>
              <select
                className="p-2 border rounded bg-white shadow"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="workGuidelines">働き方の指針</option>
                <option value="performanceReviews">業務考課</option>
              </select>
            </div>
            <div style={{ height: 250 }}>
              <Line data={overallChartData} options={options} />
            </div>
          </div>
        )}
        {activeTab === "section" && (
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col overflow-y-auto h-[400px]" >
            <h2 className="text-xl font-bold mb-2 text-blue-900">セクション別推移</h2>
            <div className="flex flex-wrap gap-3 mb-4 py-2">
              {sectionNames.map((section, index) => (
                <label key={index} className="flex items-center px-3 py-1 bg-blue-50 rounded-lg border border-blue-200 cursor-pointer transition hover:bg-blue-100">
                  <input
                    type="checkbox"
                    checked={selectedSections.includes(section)}
                    onChange={() => toggleSection(section)}
                    className="mr-2 accent-blue-500"
                  />
                  <span className="text-blue-900 text-sm">{section}</span>
                </label>
              ))}
            </div>
            {/* カテゴリー選択 */}
            <div className="flex items-center space-x-4 mb-4">
              <label className="text-lg font-bold">評価種類:</label>
              <select
                className="p-2 border rounded bg-white shadow"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="workGuidelines">働き方の指針</option>
                <option value="performanceReviews">業務考課</option>
              </select>
            </div>
            <div style={{ height: 320 }}>
              <Line data={sectionChartData} options={options} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeSeriesEvaluation;
