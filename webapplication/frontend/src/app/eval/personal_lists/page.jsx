'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FiRefreshCw } from 'react-icons/fi'
import { fetchAssignments } from '@/lib/services/assignments'
import { fetchMe } from '@/lib/services/employees'
import { Button } from "@/components/ui/button"

const StepProgress = ({ progress }) => (
  <div className="w-full bg-gray-200 rounded h-2">
    <div
      className="bg-blue-500 h-2 rounded"
      style={{ width: `${progress}%` }}
    />
  </div>
);

export default function AssignmentListPage() {
  const router = useRouter();
  const [isJobListActive, setIsJobListActive] = useState(false);
  const [assignments, setAssignments] = useState([]);
  const [user, setUser] = useState(null);

  // フィルタ用
  const [period, setPeriod] = useState('');
  const [status, setStatus] = useState('');
  const [facility, setFacility] = useState('');

  useEffect(() => {
    // ログインユーザー情報を取得
    fetchMe().then(userData => {
      setUser(userData);
      fetchAssignments({ period, status, facility }).then(setAssignments);
    });
  }, [period, status, facility]);

  // assignmentId → employeeId で遷移
  const handleRowClick = (employeeId) => {
    router.push(`/eval/personal_lists/${employeeId}`);
  };

  const handleNavigateToAssignment = () => {
    router.push('/eval/personal_lists/assignment');
  };

  // 選択肢生成
  const periodOptions = Array.from(new Set(assignments.map(a => a.period)));
  const statusOptions = Array.from(new Set(assignments.map(a => a.status)));
  const facilityOptions = Array.from(new Set(assignments.map(a => a.facility)));

  // ログインユーザーが施設長かどうか
  const isFacilityManager = user && user.grade === 'G06';

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

      {/* フィルタ */}
      <div className="flex gap-4 mb-4">
        <select
          className="border rounded px-2 py-1"
          value={period}
          onChange={e => setPeriod(e.target.value)}
        >
          <option value="">全ての期</option>
          {periodOptions.map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        <select
          className="border rounded px-2 py-1"
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option value="">全ての状態</option>
          {statusOptions.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select
          className="border rounded px-2 py-1"
          value={facility}
          onChange={e => setFacility(e.target.value)}
        >
          <option value="">全ての施設</option>
          {facilityOptions.map(f => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
      </div>

      <div className="overflow-y-auto max-h-[500px] border rounded-lg shadow-md">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 sticky top-0 z-20">
            <tr>
              <th className="p-3 border-b text-center">氏名</th>
              <th className="p-3 border-b text-center">施設名</th>
              <th className="p-3 border-b text-center">職種</th>
              <th className="p-3 border-b text-center">等級</th>
              <th className="p-3 border-b text-center">期</th>
              <th className="p-3 border-b text-center">評価者</th>
              <th className="p-3 border-b text-center">状態</th>
              <th className="p-3 border-b text-center">
                <div className="flex items-center justify-center space-x-2">
                  <span>進行状況</span>
                  <button
                    onClick={() => setIsJobListActive(!isJobListActive)}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                  >
                    <FiRefreshCw className="text-gray-600 text-lg" />
                  </button>
                  <span className="text-sm text-gray-600 font-medium">
                    {isJobListActive ? "業務考課" : "働き方の指針"}
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((a) => (
              <tr
                key={a.employeeId}
                className="hover:bg-gray-50 cursor-pointer transition"
                onClick={() => handleRowClick(a.employeeId)}
              >
                <td className="p-3 border-b text-center">{a.lastName} {a.firstName}</td>
                <td className="p-3 border-b text-center">{a.facility}</td>
                <td className="p-3 border-b text-center">{a.occupation}</td>
                <td className="p-3 border-b text-center">{a.grade}</td>
                <td className="p-3 border-b text-center">{a.period}</td>
                <td className="p-3 border-b text-center">{a.evaluator}</td>
                <td className="p-3 border-b text-center">{a.status}</td>
                <td className="p-3 border-b">
                  <StepProgress progress={a.status === '完了' ? 100 : a.status === '進行中' ? 50 : 0} />
                </td>
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
    </div>
  );
}