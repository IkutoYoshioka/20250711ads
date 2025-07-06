"use client";

import { useParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import SinglePointEvaluation from "@/components/ui/layout/singlePointEvaluation";
import TimeSeriesEvaluation from "@/components/ui/layout/timeSeriesEvaluation";
import InterviewSheet from "@/components/ui/layout/evaluatorInterviewForm";
import EvaluatorSelfCheck from "@/components/ui/layout/evaluatorSelfCheck";


const PersonDetail = () => {

  return (
    <>
      <div className="p-2 mx-auto">
        <Tabs defaultValue="point" className="px-6 p-1 pb-4">
          
            <TabsList>
              <TabsTrigger value="point">１時点</TabsTrigger>
              <TabsTrigger value="timeseries">時系列</TabsTrigger>
              <TabsTrigger value="interview">面談表</TabsTrigger>
              <TabsTrigger value="selfCheck">セルフチェック</TabsTrigger>
            </TabsList>
          

          {/* タブのコンテンツ */}
          <TabsContent value="point">
            <SinglePointEvaluation/>
          </TabsContent>
          <TabsContent value="timeseries">
            <TimeSeriesEvaluation/>
          </TabsContent>
          <TabsContent value="interview">
            <InterviewSheet/>
          </TabsContent>
          <TabsContent value="selfCheck">
            <EvaluatorSelfCheck/>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default PersonDetail;