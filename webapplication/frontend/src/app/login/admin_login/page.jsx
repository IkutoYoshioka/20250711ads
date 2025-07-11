'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { login } from '@/lib/services/auth';

export default function AdminLoginPage() {
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
      const user = await login(employeeCode, password);

      if (!user.isAdmin) {
        setError('管理者権限がありません');
        return;
      }

      // 管理者ログインフラグをセット
      user.loginType = "admin";
      document.cookie = `token=${user.employeeId}; path=/`;
      document.cookie = `loginType=admin; path=/`; // ←追加

      router.push('/admin');
    } catch (err) {
      setError('無効な社員IDまたはパスワードです');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex w-full items-center justify-center bg-white">
        <Card className="w-full max-w-md p-8 shadow-lg rounded-lg">
          <CardHeader>
            <h1 className="text-center text-3xl font-bold text-gray-800 mb-2">
              管理者ログイン
            </h1>
            <CardDescription className="text-center text-gray-600">
              社員IDとパスワードを入力してください
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="employeeCode" className="text-gray-700">
                  社員ID
                </Label>
                <Input
                  id="employeeCode"
                  type="text"
                  placeholder="R00000"
                  className="mt-1"
                  value={employeeCode}
                  onChange={(e) => setEmployeeCode(e.target.value)}
                  autoComplete="off"
                />
              </div>
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
              </div>
              {error && (
                <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">
                  {error}
                </p>
              )}
              <Button type="submit" className="w-full bg-gray-800 text-white hover:bg-gray-700 transition">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}







