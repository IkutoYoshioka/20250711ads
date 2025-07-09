"use client";
import React from "react";
import { Button } from "@/components/ui/button";

const Confirmation = ({
  grouped,
  assignMap,
  allGrades,
  allPairs,
  onConfirm,
  isSaving,
}) => {
  // 働き方の指針: 等級ごと
  const guidelinesAssignments = allGrades.map((grade) => {
    const key = `guidelines_${grade}`;
    const assignedIds = Object.entries(assignMap[key] || {})
      .filter(([_, assigned]) => assigned)
      .map(([sectionId]) => Number(sectionId));
    return {
      grade,
      sections: (grouped["働き方の指針"] || []).filter((section) =>
        assignedIds.includes(section.id)
      ),
    };
  });

  // 業務考課: 職種×等級ごと
  const reviewsAssignments = allPairs.map((pair) => {
    const key = `${pair.occupation}_${pair.grade}`;
    const assignedIds = Object.entries(assignMap[key] || {})
      .filter(([_, assigned]) => assigned)
      .map(([sectionId]) => Number(sectionId));
    return {
      occupation: pair.occupation,
      grade: pair.grade,
      sections: (grouped["業務考課"] || []).filter((section) =>
        assignedIds.includes(section.id)
      ),
    };
  });

  // 未割り当てリスト
  const unassignedGuidelines = guidelinesAssignments.filter((a) => a.sections.length === 0);
  const unassignedReviews = reviewsAssignments.filter((a) => a.sections.length === 0);

  return (
    <div className="p-4 max-w-6xl mx-auto h-[500px] bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-xl shadow-lg overflow-y-auto">
      <h2 className="text-3xl font-extrabold mb-8 text-blue-900 tracking-tight flex items-center gap-3">
        <span className="inline-block w-2 h-8 bg-blue-500 rounded-full mr-2" />
        割り当て内容の確認
      </h2>

      {/* 未割り当て警告 */}
      {(unassignedGuidelines.length > 0 || unassignedReviews.length > 0) && (
        <div className="mb-10 p-5 bg-yellow-50 border-l-8 border-yellow-400 rounded-lg flex flex-col gap-2 shadow">
          <div className="font-bold text-yellow-800 text-lg flex items-center gap-2">
            <svg width="20" height="20" fill="currentColor" className="text-yellow-500"><circle cx="10" cy="10" r="10" /></svg>
            未割り当ての項目があります
          </div>
          {unassignedGuidelines.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="font-semibold text-yellow-900">働き方の指針（等級）:</span>
              <div className="flex flex-wrap gap-2">
                {unassignedGuidelines.map((a) => (
                  <span key={a.grade} className="px-2 py-0.5 rounded bg-yellow-200 text-yellow-900 text-xs font-bold border border-yellow-400">
                    {a.grade}
                  </span>
                ))}
              </div>
            </div>
          )}
          {unassignedReviews.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="font-semibold text-yellow-900">業務考課（職種×等級）:</span>
              <div className="flex flex-wrap gap-2">
                {unassignedReviews.map((a) => (
                  <span key={`${a.occupation}_${a.grade}`} className="px-2 py-0.5 rounded bg-yellow-200 text-yellow-900 text-xs font-bold border border-yellow-400">
                    {a.occupation}×{a.grade}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-10">
        {/* 働き方の指針 */}
        <div className="bg-white rounded-lg shadow p-6 border border-blue-100">
          <h3 className="text-xl font-semibold mb-4 border-b pb-2 text-blue-800 flex items-center gap-2">
            <span className="inline-block w-2 h-5 bg-blue-400 rounded-full" />
            働き方の指針（等級ごと）
          </h3>
          <ul>
            {guidelinesAssignments.map(({ grade, sections }) => (
              <li key={grade} className="mb-6">
                <div className={`font-bold mb-1 flex items-center gap-2 ${sections.length === 0 ? "text-red-600" : "text-blue-900"}`}>
                  <span className="inline-block px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-xs font-bold border border-blue-200">{grade}</span>
                  {sections.length === 0 && (
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded ml-2">未割り当て</span>
                  )}
                </div>
                {sections.length > 0 && (
                  <ul className="list-disc ml-6 text-sm mt-1">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <span className="font-semibold">{section.sectionName}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* 業務考課 */}
        <div className="bg-white rounded-lg shadow p-6 border border-blue-100">
          <h3 className="text-xl font-semibold mb-4 border-b pb-2 text-blue-800 flex items-center gap-2">
            <span className="inline-block w-2 h-5 bg-blue-400 rounded-full" />
            業務考課（職種×等級ごと）
          </h3>
          <ul>
            {reviewsAssignments.map(({ occupation, grade, sections }) => (
              <li key={`${occupation}_${grade}`} className="mb-6">
                <div className={`font-bold mb-1 flex items-center gap-2 ${sections.length === 0 ? "text-red-600" : "text-blue-900"}`}>
                  <span className="inline-block px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-xs font-bold border border-blue-200">{occupation} × {grade}</span>
                  {sections.length === 0 && (
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded ml-2">未割り当て</span>
                  )}
                </div>
                {sections.length > 0 && (
                  <ul className="list-disc ml-6 text-sm mt-1">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <span className="font-semibold">{section.sectionName}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12 flex gap-4 justify-center">
        <Button variant="default" size="lg" className="px-8 py-3 text-lg font-bold" onClick={onConfirm} disabled={isSaving}>
          この内容で確定して保存
        </Button>
      </div>
    </div>
  );
};

export default Confirmation;