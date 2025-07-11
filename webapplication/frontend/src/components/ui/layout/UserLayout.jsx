import React from 'react';
import { cookies } from 'next/headers';
import { fetchMe } from '@/lib/services/employees';
import UserProvider from '@/components/ui/layout/UserProvider';

export default async function UserLayout({ children }) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  const loginType = cookieStore.get('loginType')?.value; // ←ここで取得
  const user = await fetchMe(token);

  // loginTypeをuserにセット
  if (user) user.loginType = loginType;

  return (
    <UserProvider user={user}>
      {children}
    </UserProvider>
  );
}