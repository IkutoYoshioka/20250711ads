import React from "react";

export default function ProgressBar({ currentStep, sections, sectionScores = [] }) {
  return (
    <div className="flex flex-col items-start w-60 h-full overflow-y-auto p-4 pb-20 bg-white shadow-md rounded-lg">
      {sections.map((section, index) => {
        // セクションごとの得点率を取得（存在しない場合は0%）
        const score = sectionScores?.[index]?.percentage ?? 0;

        return (
          <div key={index} className="relative flex items-center mb-6">
            {/* 縦線（最後のステップには線を描画しない） */}
            {index < sections.length - 1 && (
              <div
                className={`absolute left-[19px] top-[45px] h-[45px] w-[4px] ${
                  index < currentStep ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></div>
            )}

            {/* ステップの円 */}
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-4 ${
                index <= currentStep
                  ? "border-blue-500 bg-blue-100"
                  : "border-gray-300 bg-white"
              }`}
            >
              <span
                className={`font-bold ${
                  index <= currentStep ? "text-blue-500" : "text-gray-500"
                }`}
              >
                {index + 1}
              </span>
            </div>

            {/* セクション名と得点率 */}
            <div
              className={`ml-4 p-2 rounded-lg ${
                index === currentStep
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-500"
              }`}
            >
              <h3 className="text-sm font-semibold">{section.sectionName || section}</h3>
              <p className="text-xs">得点率：{score}%</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}





