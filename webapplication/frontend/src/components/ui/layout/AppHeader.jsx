'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Avatar from './AppAvater';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbList } from "@/components/ui/breadcrumb";
import { menuConfig } from '@/config/menuConfig';

const Header = ({ toggleSidebar, isSidebarOpen, user }) => {
    const router = useRouter();
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);

    // 英語URLセグメント → 日本語タイトルの対応表
    const segmentJaTitles = {
        workGuidelines: '働き方の指針',
        performanceReviews: '業務考課',
        edit: '編集',
        edit_employees: '従業員管理',
        edit_questions: '質問管理',
        assign_questions: '今期質問割り当て',
        assignment: '今期従業員割り当て',
        // 必要に応じて追加
    };

    // menuConfigからタイトル対応表を動的生成
    const breadcrumbTitles = {};
    Object.values(menuConfig).flat().forEach(item => {
        const segments = item.path.split('/').filter(Boolean);
        const key = segments[segments.length - 1];
        breadcrumbTitles[key] = item.label;
    });

    // employeeIdかどうか判定する関数（例：数字のみ or UUID形式など）
    const isEmployeeId = (segment) => /^\d+$/.test(segment); // 数字のみの場合
    // UUIDの場合は /^[0-9a-fA-F-]{36}$/.test(segment) など

    // パンくずリストを生成
    const breadcrumbs = [
        <React.Fragment key="home">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href={`/${pathSegments[0] || 'eval'}`} className="hover:underline text-gray-500">
                        ホーム
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {pathSegments.length > 1 && (
                    <BreadcrumbSeparator className="text-gray-400"></BreadcrumbSeparator>
                )}
            </BreadcrumbList>
        </React.Fragment>,
        ...pathSegments.slice(1).map((segment, index) => {
            const href = "/" + pathSegments.slice(0, index + 2).join("/");
            let title =
                breadcrumbTitles[segment] ||
                segmentJaTitles[segment] ||
                (isEmployeeId(segment) ? "ユーザー詳細" : "不明");
            return (
                <React.Fragment key={index}>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={href} className="hover:underline text-gray-500">
                                {title}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        {index < pathSegments.slice(1).length - 1 && (
                            <BreadcrumbSeparator className="text-gray-400"></BreadcrumbSeparator>
                        )}
                    </BreadcrumbList>
                </React.Fragment>
            );
        }),
    ];

    return (
        <header className="bg-white px-6 py-4 border-b flex items-center justify-between">
            {/* 左側のアイコンとパンくずリスト */}
            <div className="flex items-center space-x-4">
                {!isSidebarOpen && (
                    <button
                        onClick={toggleSidebar}
                        className="text-gray-700 hover:text-gray-900 transition-all duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 14v1"/><path d="M9 19v2"/><path d="M9 3v2"/><path d="M9 9v1"/></svg>
                    </button>
                )}

                <Breadcrumb className="flex items-center space-x-2">
                    {breadcrumbs}
                </Breadcrumb>
            </div>

            {/* 右側のアバター */}
            <Avatar user={user} />
        </header>
    );
};

export default Header;

