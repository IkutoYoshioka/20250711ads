'use client';
import React, { useEffect, useState } from 'react';
import { fetchNotifications, fetchEvaluationPeriod } from '@/lib/services/others';

// お知らせのtypeに応じた色クラスを返す関数
const getNotificationClass = (type) => {
  switch (type) {
    case 'info':
      return 'bg-blue-50 border-blue-400';
    case 'warning':
      return 'bg-yellow-50 border-yellow-400';
    case 'alert':
      return 'bg-red-50 border-red-400';
    default:
      return 'bg-gray-50 border-gray-400';
  }
};

// 管理者用ダッシュボード
const AdminDashboard = ({ user, notifications }) => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold">管理者ホーム</h1>
    {notifications.length > 0 && (
      <div className="space-y-2">
        {notifications.map(n => (
          <div
            key={n.id}
            className={`${getNotificationClass(n.type)} border-l-4 p-4`}
          >
            <p>{n.message}</p>
          </div>
        ))}
      </div>
    )}
    
  </div>
);

// 考課者用ダッシュボード
const EvalDashboard = ({ user, notifications, evaluationPeriod }) => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold">ようこそ、{user.lastName} {user.firstName} さん</h1>
    {notifications.length > 0 && (
      <div className="space-y-2">
        {notifications.map(n => (
          <div
            key={n.id}
            className={`${getNotificationClass(n.type)} border-l-4 p-4`}
          >
            <p>{n.message}</p>
          </div>
        ))}
      </div>
    )}
    {evaluationPeriod && (
      <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
        <p>評価期間: {evaluationPeriod.start} 〜 {evaluationPeriod.end}</p>
        <p>{evaluationPeriod.description}</p>
      </div>
    )}
    <div className="mt-6">
      <a href="/eval/manual" className="text-blue-600 underline">評価マニュアルを見る</a>
    </div>
  </div>
);

// 非考課者用ダッシュボード
const NonEvalDashboard = ({ user, notifications }) => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold">ようこそ、{user.lastName} {user.firstName} さん</h1>
    {notifications.length > 0 && (
      <div className="space-y-2">
        {notifications.map(n => (
          <div
            key={n.id}
            className={`${getNotificationClass(n.type)} border-l-4 p-4`}
          >
            <p>{n.message}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);

const HomeDashboard = ({ user }) => {
  const [notifications, setNotifications] = useState([]);
  const [evaluationPeriod, setEvaluationPeriod] = useState(null);

  useEffect(() => {
    fetchNotifications().then(data => {
      let role = user.isAdmin
        ? 'admin'
        : ['G06', 'G05', 'G04', 'X01'].includes(user.grade)
        ? 'eval'
        : 'non_eval';
      setNotifications(
        data.filter(n =>
          n.targetRole === role ||
          n.targetRole === 'all' ||
          (Array.isArray(n.targetRole) && n.targetRole.includes(role))
        )
      );
    });
    if (['G06', 'G05', 'G04', 'X01'].includes(user.grade)) {
      fetchEvaluationPeriod().then(setEvaluationPeriod);
    }
  }, [user]);

  if (user.isAdmin) return <AdminDashboard user={user} notifications={notifications} />;
  if (['G06', 'G05', 'G04', 'X01'].includes(user.grade))
    return <EvalDashboard user={user} notifications={notifications} evaluationPeriod={evaluationPeriod} />;
  return <NonEvalDashboard user={user} notifications={notifications} />;
};

export default HomeDashboard;