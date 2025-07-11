'use client';
import React from 'react';
import HomeDashboard from '@/components/ui/layout/HomeDashboard';
import { useUser } from '@/context/UserContext';


export default function EvalHomePage() {
    const user = useUser();
    console.log("EvalHomePage user:", user);
  return <HomeDashboard user={user} />;
}