'use client';

import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import InsideFacilityAnalysis from "@/components/ui/layout/insideFacilityAnalysisCrossSection";
import InsideFacilityAnalysisTimeSeries from "@/components/ui/layout/insideFacilityAnalysisTimeSeries";

const FeedbacksPage = () => {
  return (
    <div className="p-4">
      <Tabs defaultValue="insideAnalysis" className="mb-4">
        <TabsList>
          <TabsTrigger value="insideAnalysis">横断的分析</TabsTrigger>
          <TabsTrigger value="crossSectionAnalysis">時系列分析</TabsTrigger>
        </TabsList>
        <TabsContent value="insideAnalysis">
          <InsideFacilityAnalysis />
        </TabsContent>
        <TabsContent value="crossSectionAnalysis">
          <InsideFacilityAnalysisTimeSeries />
        </TabsContent>
      </Tabs>
      
    </div>
  );
};
export default FeedbacksPage;
