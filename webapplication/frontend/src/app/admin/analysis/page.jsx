'use client';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InsideFacilityAnalysis from '@/components/ui/layout/insideFacilityAnalysisCrossSection';
import QuestionAnalysis from '@/components/ui/layout/questionAnalysis';
import Link from 'next/link';

const Page = () => {
    return (
       
            <div className="flex flex-col ">  
                <Tabs defaultValue="inside" className="px-6 p-1">
                        <TabsList>
                            <TabsTrigger value="inside">施設内分析</TabsTrigger>
                            <TabsTrigger value="question">設問分析</TabsTrigger>
                        </TabsList>
                    <TabsContent value="inside">
                        <InsideFacilityAnalysis />
                    </TabsContent>
                    <TabsContent value="question">
                        <QuestionAnalysis />
                    </TabsContent>
                </Tabs>       
            </div>
        
    );
};

export default Page;



