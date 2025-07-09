"use client";
import React from 'react'
import HomeDashboard from '@/components/ui/layout/HomeDashboard';
import { useUser } from '@/context/UserContext';


const NonEvalPage = () => {
  const user = useUser()
  return (
      <HomeDashboard user={user} />
  )
}

export default NonEvalPage