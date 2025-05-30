'use client';
import React from 'react';
import HomeDashboard from '@/components/ui/layout/HomeDashboard';
import { useUser } from '@/context/UserContext';


export default function AdminHomePage() {
    const user = useUser();
  return <HomeDashboard user={user} />;
}