'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FiMenu } from 'react-icons/fi';
import { useMenu } from '@/hooks/useMenu';

// user情報はpropsで受け取る想定
const AppSidebar = ({ isSidebarOpen, toggleSidebar, user }) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const menu = useMenu(user);

  useEffect(() => {
    if (isSidebarOpen) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isSidebarOpen]);

  // アクティブリンク判定
  const isActive = (path) => {
    if (path === '/' || path === '/eval' || path === '/admin' || path === '/non_eval') {
      // トップページは完全一致のみアクティブ
      return pathname === path;
    }
    // それ以外は「そのパスで始まる」もアクティブ
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  if (!isSidebarOpen) {
    return null;
  }

  return (
    <aside className="h-screen shadow-lg transition-all duration-300 fixed top-0 left-0 w-64 bg-gray-100 flex flex-col">
      <div className='flex pt-2'>
        {/* サイドバーを閉じるアイコン */}
        <button
          onClick={toggleSidebar}
          className="mx-5 text-gray-700 hover:text-gray-900 transition-all duration-200 z-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 14v1"/><path d="M9 19v2"/><path d="M9 3v2"/><path d="M9 9v1"/></svg>
        </button>
        {/* ロゴ */}
        <div className="flex items-center justify-center px-4 py-4 border-b">
          <Link href="/eval" className="mb-1 text-green-500 text-xl font-semibold font-serif">
            青葉福祉会
          </Link>
        </div>
      </div>
      {/* ナビゲーション */}
      <nav className="flex-1 mt-4 px-2">
        <ul className="space-y-4">
          {menu.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`flex items-center px-3 py-2 rounded-lg transition ${
                  isActive(item.path) ? 'bg-gray-300 text-black font-semibold' : 'hover:bg-gray-200'
                }`}
              >
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger>
                      {/* アイコンがあれば表示 */}
                      {item.icon ? (
                        <span className="w-6 h-6">{item.icon}</span>
                      ) : (
                        <FiMenu className="w-6 h-6" />
                      )}
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                {isSidebarOpen ? (
                  loading ? (
                    <Skeleton className="ml-3 w-24 h-4" />
                  ) : (
                    <span className="ml-3">{item.label}</span>
                  )
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AppSidebar;