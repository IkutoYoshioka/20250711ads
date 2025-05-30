'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Suspense } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { fetchFacilities } from '@/lib/services/auth';
import { requestPasswordReset } from '@/lib/services/employees';
import Loading from '@/app/loading';

export default function ForgotPasswordPage() {
  const [employeeCode, setEmployeeCode] = useState('');
  const [facility, setFacility] = useState('');
  const [facilities, setFacilities] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 施設一覧をAPIから取得
    fetchFacilities()
      .then((data) => setFacilities(data))
      .catch(() => setFacilities([]));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!employeeCode || !facility) {
      setError('社員IDと施設名を入力してください');
      return;
    }

    setLoading(true);
    try {
      await requestPasswordReset(employeeCode, facility);
      setMessage('送信が完了しました。本部からの連絡をお待ちください。');
    } catch (err) {
      setError('送信に失敗しました。入力内容をご確認ください。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex h-screen bg-gray-100">
        {/* 左側：パスワードリセットフォーム */}
        <div className="flex w-1/2 items-center justify-center bg-white">
          <Card className="w-full max-w-md p-6 shadow-xl rounded-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
                青葉福祉会
              </CardTitle>
              <CardDescription className="text-gray-600">
                以下の項目を入力して本部へ送信してください。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* 社員ID 入力 */}
                <div>
                  <Label htmlFor="employeeCode" className="text-gray-700">
                    社員ID
                  </Label>
                  <Input
                    id="employeeCode"
                    type="text"
                    placeholder="R00000"
                    className="mt-1"
                    required
                    value={employeeCode}
                    onChange={e => setEmployeeCode(e.target.value)}
                  />
                </div>
                {/* 施設名 入力 */}
                <div>
                  <Label htmlFor="workplace" className="text-gray-700">
                    施設名
                  </Label>
                  <Select value={facility} onValueChange={setFacility}>
                    <SelectTrigger id="workplace" className="mt-1">
                      <SelectValue placeholder="施設を選択してください" />
                    </SelectTrigger>
                    <SelectContent>
                      {facilities.length > 0 ? (
                        facilities.map((f) => (
                          <SelectItem key={f.value} value={f.value}>
                            {f.label}
                          </SelectItem>
                        ))
                      ) : (
                        <div className="px-3 py-2 text-gray-400 text-sm">
                          施設情報を取得できません
                        </div>
                      )}
                    </SelectContent>
                  </Select>
                </div>

                {/* メッセージ表示 */}
                {error && (
                  <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">{error}</p>
                )}
                {message && (
                  <p className="text-green-600 text-sm text-center bg-green-50 p-2 rounded">{message}</p>
                )}

                {/* 送信ボタン */}
                <Button
                  type="submit"
                  className="w-full bg-gray-800 text-white hover:bg-gray-700 transition"
                  disabled={loading}
                >
                  {loading ? '送信中...' : '送信する'}
                </Button>
              </form>
              <div className="mt-4 text-center">
                <Link
                  href="/"
                  className="text-sm text-gray-500 hover:text-gray-800 transition"
                >
                  ログイン画面へ戻る
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 右側：説明セクション */}
        <div className="flex w-1/2 items-center justify-center bg-gray-800 px-10 text-gray-300">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">パスワードを忘れた方へ</h2>
            <p className="text-lg leading-relaxed">
              パスワードを忘れた場合は、<br />
              社員ID（社員番号）と所属施設名を入力して送信してください。<br />
              本部担当者が確認後、パスワードリセットの手続きを行います。
            </p>
            <p className="text-sm text-gray-400">
              ※ 通常、確認には1営業日程度かかります。
            </p>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

