'use client';
import React, { useState } from 'react';
import { logout } from '@/lib/services/auth';

const Avatar = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (!user) return null; // user がいない場合は何も表示しない

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleLogout = async () => {
        await logout();
        // ページリロードやルート遷移など、必要に応じて追加
        window.location.href = '/login';
    };

    return (
        <div className="relative">
            {/* アバター本体 */}
            <div
                onClick={toggleDropdown}
                className="flex items-center space-x-2 p-1 bg-white shadow rounded-full cursor-pointer"
            >
                {/* アバターアイコン */}
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 text-gray-600"
                    >
                        <path d="M18 20a6 6 0 0 0-12 0" />
                        <circle cx="12" cy="10" r="4" />
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </div>
                {/* ユーザー情報 */}
                <div className="flex flex-col">
                    <span className="font-semibold text-gray-900">{user.lastName} {user.firstName}</span>
                </div>
                {/* ドロップダウンアイコン */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </div>

            {/* 詳細情報ドロップダウン */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg z-30">
                    <div className="p-4 space-y-3">
                        <div className="border-b pb-2">
                            <p className="text-sm text-gray-700">
                                <strong>アカウント:</strong> {user.isAdmin ? '管理者' : '一般ユーザー'}
                            </p>
                            <p className="text-sm text-gray-700">
                                <strong>社員ID:</strong> {user.employeeCode}
                            </p>
                            <p className="text-sm text-gray-700">
                                <strong>職種:</strong> {user.occupation}
                            </p>
                            <p className="text-sm text-gray-700">
                                <strong>等級:</strong> {user.grade}
                            </p>
                            <p className="text-sm text-gray-700">
                                <strong>施設:</strong> {user.facility}
                            </p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="w-full text-sm font-semibold text-red-600 hover:text-red-800 hover:bg-red-100 transition-colors rounded-md py-2 text-center"
                        >
                            ログアウト
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Avatar;