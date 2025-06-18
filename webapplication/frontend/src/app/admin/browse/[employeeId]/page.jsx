'use client';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SinglePointEvaluation from '@/components/ui/layout/singlePointEvaluation';
import TimeSeriesEvaluation from '@/components/ui/layout/timeSeriesEvaluation';

const Page = () => {
    return (
        
          <Tabs defaultValue="point" className="px-6 p-1 pb-4">
            <TabsList>
              <TabsTrigger value="point">１時点</TabsTrigger>
              <TabsTrigger value="timeseries">時系列</TabsTrigger>
            </TabsList>
            <TabsContent value="point">
                <SinglePointEvaluation />
            </TabsContent>
            <TabsContent value="timeseries">
                <TimeSeriesEvaluation />
            </TabsContent>
          </Tabs>
        
    );
};

export default Page;