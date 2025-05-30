'use client';

import React, { useEffect, useState } from 'react';
import { fetchNotifications, fetchEvaluationPeriod } from '@/lib/services/others';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/sonner';

export default function EditNotificationsPage() {
  // お知らせ
  const [notifications, setNotifications] = useState([]);
  const [newNotification, setNewNotification] = useState({
    message: '',
    type: 'info',
    targetRole: 'all',
  });

  // 評価期間
  const [evaluationPeriod, setEvaluationPeriod] = useState({
    start: '',
    end: '',
    description: '',
  });

  // 初期データ取得
  useEffect(() => {
    fetchNotifications().then(setNotifications);
    fetchEvaluationPeriod().then(setEvaluationPeriod);
  }, []);

  // お知らせ追加
  const handleAddNotification = () => {
    if (!newNotification.message) return;
    const newId = notifications.length ? Math.max(...notifications.map(n => n.id)) + 1 : 1;
    const updated = [
      ...notifications,
      { ...newNotification, id: newId, createdAt: new Date().toISOString() },
    ];
    setNotifications(updated);
    setNewNotification({ message: '', type: 'info', targetRole: 'all' });
    toast({
      title: 'お知らせを追加しました',
      description: '新しいお知らせが追加されました。',
      variant: 'success',
    });
    // 実際はAPI保存処理を追加
  };

  // お知らせ削除
  const handleDeleteNotification = (id) => {
    const updated = notifications.filter(n => n.id !== id);
    setNotifications(updated);
    toast({
      title: 'お知らせを削除しました',
      description: 'お知らせが削除されました。',
      variant: 'success',
    });
    // 実際はAPI保存処理を追加
  };

  // 評価期間保存
  const handleSavePeriod = () => {
    // 実際はAPI保存処理を追加
    toast({
      title: '評価期間を保存しました',
      description: '評価期間の内容が保存されました。',
      variant: 'success',
    });
  };

  return (
    <div className="max-w-3xl mx-auto py-6 space-y-4 overflow-y-auto h-[560px]">
      <Card>
        <CardHeader>
          <CardTitle>お知らせ管理</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-2 mb-4">
            <Textarea
              placeholder="お知らせ内容"
              value={newNotification.message}
              onChange={e => setNewNotification({ ...newNotification, message: e.target.value })}
              className="flex-1"
            />
            <Select
              value={newNotification.type}
              onValueChange={v => setNewNotification({ ...newNotification, type: v })}
            >
              <SelectTrigger className="w-28">
                <SelectValue placeholder="種別" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="info">info</SelectItem>
                <SelectItem value="warning">warning</SelectItem>
                <SelectItem value="alert">alert</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={newNotification.targetRole}
              onValueChange={v => setNewNotification({ ...newNotification, targetRole: v })}
            >
              <SelectTrigger className="w-32">
                <SelectValue placeholder="対象" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全員</SelectItem>
                <SelectItem value="admin">管理者</SelectItem>
                <SelectItem value="eval">考課者</SelectItem>
                <SelectItem value="non_eval">一般</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleAddNotification}>追加</Button>
          </div>
          <ul className="space-y-2">
            {notifications.map(n => (
              <li key={n.id} className="flex items-center justify-between border rounded px-3 py-2">
                <span>
                  <span className="font-semibold">{n.message}</span>
                  <span className="ml-2 text-xs text-gray-500">[{n.type}] [{Array.isArray(n.targetRole) ? n.targetRole.join(',') : n.targetRole}]</span>
                </span>
                <Button variant="destructive" size="sm" onClick={() => handleDeleteNotification(n.id)}>
                  削除
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>評価期間管理</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1">開始日</label>
              <Input
                type="date"
                value={evaluationPeriod.start}
                onChange={e => setEvaluationPeriod({ ...evaluationPeriod, start: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm mb-1">終了日</label>
              <Input
                type="date"
                value={evaluationPeriod.end}
                onChange={e => setEvaluationPeriod({ ...evaluationPeriod, end: e.target.value })}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">説明</label>
            <Input
              value={evaluationPeriod.description}
              onChange={e => setEvaluationPeriod({ ...evaluationPeriod, description: e.target.value })}
            />
          </div>
          <Button onClick={handleSavePeriod}>評価期間を保存</Button>
        </CardContent>
      </Card>
    </div>
  );
}