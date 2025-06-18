// 施設内分析

"use client";

import { useEffect, useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchFacilityFeedbacks } from "@/lib/services/feedbacks";

// Chart.js の設定を有効化
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const categories = [
  { key: "workGuideline", label: "働き方の指針" },
  { key: "performanceReview", label: "業務考課" },
  { key: "totalScore", label: "総合評価" },
];

// 得点分布を計算する関数
const calculateScoreDistribution = (employees, scoreType) => {
  const distribution = {
    "0-9": 0,
    "10-19": 0,
    "20-29": 0,
    "30-39": 0,
    "40-49": 0,
    "50-59": 0,
    "60-69": 0,
    "70-79": 0,
    "80-89": 0,
    "90-100": 0,
  };

  employees.forEach((person) => {
    const score = scoreType === "totalScore"
      ? person.periods[0]?.totalScore
      : person.periods[0]?.[scoreType]?.score;
    if (score == null) return;
    if (score >= 90) {
      distribution["90-100"]++;
    } else if (score >= 80) {
      distribution["80-89"]++;
    } else if (score >= 70) {
      distribution["70-79"]++;
    } else if (score >= 60) {
      distribution["60-69"]++;
    } else if (score >= 50) {
      distribution["50-59"]++;
    } else if (score >= 40) {
      distribution["40-49"]++;
    } else if (score >= 30) {
      distribution["30-39"]++;
    } else if (score >= 20) {
      distribution["20-29"]++;
    } else if (score >= 10) {
      distribution["10-19"]++;
    } else if (score >= 0) {
      distribution["0-9"]++;
    }
  });

  return distribution;
};

const InsideFacilityAnalysis = () => {
  const [facilityOptions, setFacilityOptions] = useState(["全施設"]);
  const [periodOptions, setPeriodOptions] = useState([]);
  const [selectedFacility, setSelectedFacility] = useState("全施設");
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("workGuideline");
  const [employees, setEmployees] = useState([]);

  // 初期ロード時に全施設・全期を取得
  useEffect(() => {
    fetchFacilityFeedbacks({ facility: "all" }).then((data) => {
      setEmployees(data);
      // 施設一覧
      const facilities = Array.from(new Set(data.map(p => p.facility)));
      setFacilityOptions(["全施設", ...facilities]);
      // 期一覧
      const allPeriods = data.flatMap(p => p.periods.map(per => per.period));
      const uniquePeriods = Array.from(new Set(allPeriods));
      // 新しい順にソート
      uniquePeriods.sort((a, b) => b.localeCompare(a, 'ja', { numeric: true }));
      setPeriodOptions(uniquePeriods);
      setSelectedPeriod(uniquePeriods[0] || "");
    });
  }, []);

  // フィルター変更時に再取得
  useEffect(() => {
    fetchFacilityFeedbacks({
      facility: selectedFacility === "全施設" ? "all" : selectedFacility,
      period: selectedPeriod,
    }).then(setEmployees);
  }, [selectedFacility, selectedPeriod]);

  // 得点分布
  const scoreDistribution = calculateScoreDistribution(employees, selectedCategory);
  const labels = Object.keys(scoreDistribution);
  const values = Object.values(scoreDistribution);

  // グラフデータ
  const data = {
    labels,
    datasets: [
      {
        label: categories.find((c) => c.key === selectedCategory).label + " (人数)",
        data: values,
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        barPercentage: 0.8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "得点帯",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "人数",
        },
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="p-2 mx-auto max-w-6xl flex gap-8">
      <div className="w-1/2">
        {/* 施設 & 評価期間 & 評価種別の選択 */}
        <div className="flex space-x-4 mb-4">
          <Select value={selectedFacility} onValueChange={setSelectedFacility}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="施設を選択" />
            </SelectTrigger>
            <SelectContent>
              {facilityOptions.map((facility) => (
                <SelectItem key={facility} value={facility}>
                  {facility}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="評価期間を選択" />
            </SelectTrigger>
            <SelectContent>
              {periodOptions.map((period) => (
                <SelectItem key={period} value={period}>
                  {period}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* 評価種別の選択 */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="評価種別を選択" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.key} value={category.key}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* グラフエリア */}
        <div className="bg-white p-2 rounded-lg shadow-md w-full">
          <h3 className="text-lg font-bold mb-3">{categories.find((c) => c.key === selectedCategory).label} - 得点分布</h3>
          <div className="relative max-w-[600px] h-[370px] mx-auto">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>

      {/* 施設内の職員リスト */}
      <div className="bg-white p-2 rounded-lg shadow-md w-1/2 ">
        <h3 className="text-lg font-bold mb-3">施設内の職員一覧</h3>
        <div className="overflow-y-auto max-h-[400px]">
          <table className="w-full border-collapse border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">名前</th>
                <th className="border border-gray-300 px-4 py-2 text-left">職種</th>
                <th className="border border-gray-300 px-4 py-2 text-left">働き方の指針</th>
                <th className="border border-gray-300 px-4 py-2 text-left">業務考課</th>
                <th className="border border-gray-300 px-4 py-2 text-left">総合評価</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((person) => {
                const periodData = person.periods[0];
                return (
                  <tr key={person.employeeId} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">{person.lastName}{person.firstName}</td>
                    <td className="border border-gray-300 px-4 py-2">{person.occupation}</td>
                    <td className="border border-gray-300 px-4 py-2">{periodData?.workGuideline?.score ?? "-"}</td>
                    <td className="border border-gray-300 px-4 py-2">{periodData?.performanceReview?.score ?? "-"}</td>
                    <td className="border border-gray-300 px-4 py-2">{periodData?.totalScore ?? "-"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InsideFacilityAnalysis;






