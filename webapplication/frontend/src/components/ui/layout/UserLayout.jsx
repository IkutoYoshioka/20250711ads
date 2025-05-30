import React from 'react';
import { cookies } from 'next/headers';
import { fetchMe } from '@/lib/services/employees';
import UserProvider from '@/components/ui/layout/UserProvider';

export default async function UserLayout({ children }) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  const user = await fetchMe(token);

  // 本番用リダイレクト
  // if (!token || !user) {
  //   redirect('/login');
  // }

  return (
    <UserProvider user={user}>
      {children}
    </UserProvider>
  );
}