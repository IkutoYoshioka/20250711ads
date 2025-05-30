import React from 'react'
import AppLayout from '@/components/ui/layout/AppLayout'
import HomeDashboard from '@/components/ui/layout/HomeDashboard';
import { mockUsers } from '@/mock_data/mockUsers'

const mockUser = mockUsers[3];

const NonEvalPage = () => {
  return (
    <AppLayout user={mockUser}>
      <HomeDashboard user={mockUser} />
    </AppLayout>
  )
}

export default NonEvalPage