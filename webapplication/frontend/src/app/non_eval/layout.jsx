import React from 'react';
import AppLayout from '@/components/ui/layout/AppLayout';
import UserLayout from '@/components/ui/layout/UserLayout';

export default async function NonEvalLayout({ children }) {
  return (
    <UserLayout>
      <AppLayout>
        {children}
      </AppLayout>
    </UserLayout>
  );
}