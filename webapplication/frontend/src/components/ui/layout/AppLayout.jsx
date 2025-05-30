'use client';
import React, { useState } from 'react';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';
import { useUser } from '@/context/UserContext';

// user情報は親コンポーネントやContextから渡す想定
const AppLayout = ({ children }) => {
    const user = useUser();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <div className="flex h-screen">
            {/* サイドバー */}
            <AppSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} user={user} />
            {/* メインコンテンツ */}
            <div
                className={`flex-1 flex flex-col transition-all duration-300 ${
                    isSidebarOpen ? 'ml-64' : 'ml-0'
                }`}
            >
                {/* ヘッダー */}
                <AppHeader isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} user={user} />
                {/* メインコンテンツ */}
                <main className="flex-1 p-2 overflow-hidden">{children}</main>
            </div>
        </div>
    );
};

export default AppLayout;