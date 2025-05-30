'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { login } from '@/lib/services/auth';

export default function LoginPage() {
  const [employeeCode, setEmployeeCode] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!employeeCode || !password) {
      setError('社員IDとパスワードを入力してください');
      return;
    }

    try {
      // 認証APIを呼び出し（cookieで管理）
      const user = await login(employeeCode, password);

      // 等級に応じて遷移先を決定
      switch (user.grade) {
        case "X01":  
        case "G06":
        case "G04":
        case "G05":
        case "T01":
          router.push('/eval'); // 考課者
          break;
        default:
          router.push('/non_eval'); // 非考課者
      }
    } catch (err) {
      console.error("Login error:", err);
      setError('無効な社員IDまたはパスワードです');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* 左側：ログインフォーム */}
      <div className="flex w-full items-center justify-center bg-white">
        <Card className="w-full max-w-md p-8 shadow-lg rounded-lg">
          <CardHeader>
            <h1 className="text-center text-3xl font-bold text-gray-800 mb-2">
              青葉福祉会
            </h1>
            <CardDescription className="text-center text-gray-600">
              社員IDとパスワードを入力してください
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 社員ID入力 */}
              <div>
                <Label htmlFor="employeeId" className="text-gray-700">
                  社員ID
                </Label>
                <Input
                  id="employeeId"
                  type="text"
                  placeholder="R00000"
                  className="mt-1"
                  value={employeeCode}
                  onChange={(e) => setEmployeeCode(e.target.value)}
                  autoComplete="off"
                />
              </div>
              {/* パスワード入力 */}
              <div>
                <Label htmlFor="password" className="text-gray-700">
                  パスワード
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="******"
                  className="mt-1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Link
                  href="./login/forget_form"
                  className="block text-right text-sm text-gray-500 hover:text-gray-800 transition mt-1"
                >
                  パスワードを忘れた方
                </Link>
              </div>
              {/* エラーメッセージ */}
              {error && (
                <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">
                  {error}
                </p>
              )}
              {/* ボタン */}
              <Button
                type="submit"
                className="w-full bg-gray-800 text-white hover:bg-gray-700 transition"
              >
                Login
              </Button>
            </form>
          </CardContent>
          <div className="mt-2 text-center flex flex-col">
            <Link
              href="./login/admin_login"
              className="text-sm text-gray-500 hover:text-gray-800"
            >
              管理者ログインはこちら
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
