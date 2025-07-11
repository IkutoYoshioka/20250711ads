import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const page = () => {
  return (
    
        <div className="grid grid-cols-3 gap-4 p-4">
            <Card className="relative bg-white shadow-lg hover:z-10 hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                    <CardTitle>従業員情報管理</CardTitle>
                    <CardDescription>職種、等級、個人情報の管理</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>編集ログ</p>
                </CardContent>

                {/* 右下に固定配置ボタン */}
                <Button
                asChild
                className="absolute bottom-4 right-4"
                >
                    <Link href="/admin/edit_db/edit_employees">
                        編集画面へ
                    </Link>
                </Button>
            </Card>

            <Card className="relative bg-white shadow-lg hover:z-10 hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                    <CardTitle>設問情報管理</CardTitle>
                    <CardDescription>人事考課の質問内容の管理</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>編集ログ</p>
                </CardContent>

                {/* 右下に固定配置ボタン */}
                <Button
                asChild
                className="absolute bottom-4 right-4"
                >
                    <Link href="/admin/edit_db/edit_questions">
                        編集画面へ
                    </Link>
                </Button>
            </Card>

            <Card className="relative bg-white shadow-lg hover:z-10 hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                    <CardTitle>アンケート管理</CardTitle>
                    <CardDescription>アンケートの作成</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>編集ログ</p>
                </CardContent>

                {/* 右下に固定配置ボタン */}
                <Button
                asChild
                className="absolute bottom-4 right-4 pointer-events-none opacity-50 disabled:pointer-events-none disabled:opacity-50"
                >
                    <Link href="/admin/edit_db/edit_surveys">
                        編集画面へ
                    </Link>
                </Button>
            </Card>

            <Card className="relative bg-white shadow-lg hover:z-10 hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                    <CardTitle>通知管理</CardTitle>
                    <CardDescription>お知らせ・評価期間等の作成</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>編集ログ</p>
                </CardContent>

                {/* 右下に固定配置ボタン */}
                <Button
                asChild
                className="absolute bottom-4 right-4 pointer-events-none opacity-50 disabled:pointer-events-none disabled:opacity-50"
                >
                    <Link href="/admin/edit_db/edit_notifications">
                        編集画面へ
                    </Link>
                </Button>
            </Card>
        </div>

        
    
  )
}

export default page