'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { fetchAssignments } from '@/lib/services/assignments'
import { fetchMe } from '@/lib/services/employees'
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"

export default function AssignmentListPage() {
  const router = useRouter();
  const [assignments, setAssignments] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchMe().then(userData => {
      setUser(userData);
      fetchAssignments().then(setAssignments);
    });
  }, []);

  // ログインユーザーが施設長かどうか
  const isFacilityManager = user && user.grade === 'G06';

  // 働き方の指針ページへ遷移（aを引数に渡す）
  const handleWorkGuidelinesClick = (employeeId) => {
    router.push(
      `/eval/personal_lists/workGuidelines/${employeeId}` 
    );
  };

  // 業務考課ページへ遷移
  const handlePerformanceReviewsClick = (employeeId) => {
    router.push(`/eval/personal_lists/performanceReviews/${employeeId}`
    );
  };

  const handleNavigateToAssignment = () => {
    router.push('/eval/personal_lists/assignment');
  };

  return (
    <div className="px-4 pt-4 pb-2">
      {/* 施設長のみ表示されるボタン */}
      {isFacilityManager && (
        <div className="mb-4">
          <Button
            className="bg-blue-600 text-white hover:bg-blue-500"
            onClick={handleNavigateToAssignment}
          >
            人事考課割り当てページへ
          </Button>
        </div>
      )}

      <Tabs defaultValue="guideline" className="w-full">
        <TabsList className="mb-2">
          <TabsTrigger value="guideline">働き方の指針</TabsTrigger>
          <TabsTrigger value="job">業務考課</TabsTrigger>
        </TabsList>
        <TabsContent value="guideline">
          <div className="overflow-y-auto max-h-[500px] border rounded-lg shadow-md">
            <table className="w-full border-collapse">
              <thead className="bg-gray-100 sticky top-0 z-20">
                <tr>
                  <th className="p-3 border-b text-center">氏名</th>
                  <th className="p-3 border-b text-center">施設名</th>
                  <th className="p-3 border-b text-center">職種</th>
                  <th className="p-3 border-b text-center">等級</th>
                  <th className="p-3 border-b text-center">1次考課者</th>
                  <th className="p-3 border-b text-center">2次考課者</th>
                  <th className="p-3 border-b text-center">3次考課者</th>
                  <th className="p-3 border-b text-center">状態</th>
                </tr>
              </thead>
              <tbody>
                {assignments.map((a) => (
                  <tr
                    key={a.employeeId}
                    className="hover:bg-gray-50 cursor-pointer transition"
                    onClick={() => handleWorkGuidelinesClick(a.employeeId)}
                  >
                    <td className="p-3 border-b text-center">{a.lastName} {a.firstName}</td>
                    <td className="p-3 border-b text-center">{a.facility}</td>
                    <td className="p-3 border-b text-center">{a.occupation}</td>
                    <td className="p-3 border-b text-center">{a.grade}</td>
                    <td className="p-3 border-b text-center">{a.workGuidelinesPrimaryEvaluatorName}</td>
                    <td className="p-3 border-b text-center">{a.workGuidelinesSecondaryEvaluatorName}</td>
                    <td className="p-3 border-b text-center">{a.workGuidelinesFinalEvaluatorName}</td>
                    <td className="p-3 border-b text-center">{a.status}</td>
                  </tr>
                ))}
                {assignments.length === 0 && (
                  <tr>
                    <td colSpan={8} className="text-center py-8 text-gray-500">該当するデータがありません</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </TabsContent>
        <TabsContent value="job">
          <div className="overflow-y-auto max-h-[500px] border rounded-lg shadow-md">
            <table className="w-full border-collapse">
              <thead className="bg-gray-100 sticky top-0 z-20">
                <tr>
                  <th className="p-3 border-b text-center">氏名</th>
                  <th className="p-3 border-b text-center">施設名</th>
                  <th className="p-3 border-b text-center">職種</th>
                  <th className="p-3 border-b text-center">等級</th>
                  <th className="p-3 border-b text-center">1次考課者</th>
                  <th className="p-3 border-b text-center">2次考課者</th>
                  <th className="p-3 border-b text-center">3次考課者</th>
                  <th className="p-3 border-b text-center">状態</th>
                </tr>
              </thead>
              <tbody>
                {assignments.map((a) => (
                  <tr
                    key={a.employeeId}
                    className="hover:bg-gray-50 cursor-pointer transition"
                    onClick={() => handlePerformanceReviewsClick(a.employeeId)}
                  >
                    <td className="p-3 border-b text-center">{a.lastName} {a.firstName}</td>
                    <td className="p-3 border-b text-center">{a.facility}</td>
                    <td className="p-3 border-b text-center">{a.occupation}</td>
                    <td className="p-3 border-b text-center">{a.grade}</td>
                    <td className="p-3 border-b text-center">{a.performanceReviewsPrimaryEvaluatorName}</td>
                    <td className="p-3 border-b text-center">{a.performanceReviewsSecondaryEvaluatorName}</td>
                    <td className="p-3 border-b text-center">{a.performanceReviewsFinalEvaluatorName}</td>
                    <td className="p-3 border-b text-center">{a.status}</td>
                  </tr>
                ))}
                {assignments.length === 0 && (
                  <tr>
                    <td colSpan={8} className="text-center py-8 text-gray-500">該当するデータがありません</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}