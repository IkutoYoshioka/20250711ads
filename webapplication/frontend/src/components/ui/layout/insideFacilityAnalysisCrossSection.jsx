// 施設内分析
// 要修正
"use client";

import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchFacilityScoreDistributions } from "@/lib/services/feedbacks";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const categories = [
  { key: "workGuidelines", label: "働き方の指針" },
  { key: "performanceReviews", label: "業務考課" },
];

const scoreBands = [
  "0-9", "10-19", "20-29", "30-39", "40-49",
  "50-59", "60-69", "70-79", "80-89", "90-100"
];

const InsideFacilityAnalysis = () => {
  const [facilityOptions, setFacilityOptions] = useState([]);
  const [occupationOptions, setOccupationOptions] = useState([]);
  const [gradeOptions, setGradeOptions] = useState([]);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("workGuidelines");
  const [selectedOccupations, setSelectedOccupations] = useState([]);
  const [selectedGrades, setSelectedGrades] = useState([]);
  const [distributionData, setDistributionData] = useState([]);
  const [latestPeriod, setLatestPeriod] = useState("");

  // 初期ロード時に全施設・職種・等級・期の選択肢を取得し、最新期を決定
  useEffect(() => {
    const loadOptions = async () => {
      const all = await fetchFacilityScoreDistributions({});
      // 最新期を決定
      const periods = Array.from(new Set(all.map(d => d.period).filter(Boolean)));
      // 期を降順ソート（例: "2024年度前期" > "2023年度後期"）
      periods.sort((a, b) => b.localeCompare(a, "ja", { numeric: true }));
      const latest = periods[0] || "";
      setLatestPeriod(latest);

      // 最新期のみで選択肢を作成
      const latestData = all.filter(d => d.period === latest);
      const facilities = Array.from(new Set(latestData.map(d => d.facility).filter(f => typeof f === "string" && f.trim() !== "")));
      setFacilityOptions(facilities);
      setSelectedFacilities(facilities.slice(0, 1));
      const occupations = Array.from(new Set(latestData.map(d => d.occupation).filter(Boolean)));
      setOccupationOptions(occupations);
      setSelectedOccupations(occupations.slice(0, 1));
      const grades = Array.from(new Set(latestData.map(d => d.grade).filter(Boolean)));
      setGradeOptions(grades);
      setSelectedGrades(grades.slice(0, 1));
    };
    loadOptions();
  }, []);

  // チェックボックスで施設選択
  const handleFacilityCheck = (facility) => {
    setSelectedFacilities((prev) =>
      prev.includes(facility)
        ? prev.filter(f => f !== facility)
        : [...prev, facility]
    );
  };

  // チェックボックスで職種選択
  const handleOccupationCheck = (occupation) => {
    setSelectedOccupations((prev) =>
      prev.includes(occupation)
        ? prev.filter(o => o !== occupation)
        : [...prev, occupation]
    );
  };

  // チェックボックスで等級選択
  const handleGradeCheck = (grade) => {
    setSelectedGrades((prev) =>
      prev.includes(grade)
        ? prev.filter(g => g !== grade)
        : [...prev, grade]
    );
  };

  // 最新期のみで合算した分布を1本の折れ線として表示
  useEffect(() => {
    const load = async () => {
      if (!latestPeriod) {
        setDistributionData([]);
        return;
      }
      // 施設×職種ごとにまとめて取得し、等級は複数選択なら合算
      const queries = [];
      for (const facility of selectedFacilities) {
        for (const occupation of selectedOccupations) {
          for (const grade of selectedGrades) {
            queries.push(
              fetchFacilityScoreDistributions({
                facility,
                occupation,
                grade,
                category: selectedCategory,
                period: latestPeriod,
              })
            );
          }
        }
      }
      const results = await Promise.all(queries);
      // 合算処理
      const groupMap = {};
      results.flat().forEach(item => {
        if (!item) return;
        const key = `${item.facility}・${item.occupation}`;
        if (!groupMap[key]) {
          groupMap[key] = {
            facility: item.facility,
            occupation: item.occupation,
            grades: [],
            bands: Object.fromEntries(scoreBands.map(b => [b, 0])),
            total: 0,
          };
        }
        groupMap[key].grades.push(item.grade);
        scoreBands.forEach(band => {
          groupMap[key].bands[band] += item.bands[band] || 0;
        });
        groupMap[key].total += item.total || 0;
      });
      // ラベルに選択した等級をまとめて表示
      const merged = Object.values(groupMap).map(item => ({
        ...item,
        label: `${item.facility}・${item.occupation}・${item.grades.join("・")}`,
      }));
      setDistributionData(merged);
    };
    if (
      selectedFacilities.length > 0 &&
      selectedOccupations.length > 0 &&
      selectedGrades.length > 0 &&
      latestPeriod
    ) {
      load();
    } else {
      setDistributionData([]);
    }
  }, [selectedFacilities, selectedOccupations, selectedGrades, selectedCategory, latestPeriod]);

  // グラフ用データ
  const chartData = {
    labels: scoreBands,
    datasets: distributionData.map((item, idx) => ({
      label: item.label,
      data: scoreBands.map(band =>
        item.total > 0 ? Math.round((item.bands[band] / item.total) * 100) : 0
      ),
      borderColor: [
        "#2563eb", "#16a34a", "#f59e42", "#e11d48", "#a21caf", "#64748b", "#f43f5e", "#0ea5e9", "#fbbf24", "#22d3ee"
      ][idx % 10],
      backgroundColor: "rgba(0,0,0,0)",
      tension: 0.3,
      spanGaps: true,
      pointRadius: 4,
      pointHoverRadius: 6,
    })),
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "right" },
      title: { display: true, text: `施設ごとの得点分布（％）【${latestPeriod}】` },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const item = distributionData[ctx.datasetIndex];
            const band = ctx.label;
            const count = item?.bands?.[band] ?? 0;
            const percent = ctx.parsed.y ?? 0;
            return `${ctx.dataset.label}: ${percent}%（${count}人）`;
          }
        }
      }
    },
    scales: {
      x: { title: { display: true, text: "得点帯" } },
      y: {
        min: 0,
        max: 100,
        title: { display: true, text: "割合（％）" },
        ticks: { stepSize: 10, callback: v => `${v}%` },
      },
    },
  };

  return (
    <div className="p-2 mx-auto max-w-5xl flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-3/4">
        <div className="bg-white p-2 rounded-lg shadow-md w-full">
          <h3 className="text-lg font-bold mb-3">
            {categories.find(c => c.key === selectedCategory).label} - 得点分布比較
          </h3>
          <div className="relative h-[420px]">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4 flex flex-col gap-4 overflow-y-auto h-[500px]">
        <div className="bg-white p-3 rounded-lg shadow-md">
          <div className="mb-2 font-semibold">表示する施設</div>
          <div className="flex flex-col gap-1 max-h-48 overflow-y-auto">
            {facilityOptions.map(f => (
              <label key={f} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedFacilities.includes(f)}
                  onChange={() => handleFacilityCheck(f)}
                  className="accent-blue-600"
                />
                <span>{f}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-md">
          <div className="mb-2 font-semibold">評価種別</div>
          <select
            className="w-full border rounded px-2 py-1"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            {categories.map(c => (
              <option key={c.key} value={c.key}>{c.label}</option>
            ))}
          </select>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-md">
          <div className="mb-2 font-semibold">職種</div>
          <div className="flex flex-col gap-1 max-h-48 overflow-y-auto">
            {occupationOptions.map(o => (
              <label key={o} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedOccupations.includes(o)}
                  onChange={() => handleOccupationCheck(o)}
                  className="accent-blue-600"
                />
                <span>{o}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-md">
          <div className="mb-2 font-semibold">等級</div>
          <div className="flex flex-col gap-1 max-h-48 overflow-y-auto">
            {gradeOptions.map(g => (
              <label key={g} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedGrades.includes(g)}
                  onChange={() => handleGradeCheck(g)}
                  className="accent-blue-600"
                />
                <span>{g}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideFacilityAnalysis;
