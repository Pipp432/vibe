'use client'

import GraphBox from "./GraphBox";
import useModal from "@/hooks/useModal";
import AnalysisProgress from "./AnalysisProgress";
import EmotionSummary from "./EmotionSummary";
import AnalysisProgressPopUp from "@/components/dashboard/AnalysisProgressPopUp";
import EmotionalSummaryPopUp from "@/components/dashboard/EmotionalSummaryPopup";
import ChangeGraphPopUp from '@/components/dashboard/ChangeGraphPopUp'
import { useState } from "react";
require('dotenv').config()
export default function DashboardPage() {
  const [isAnalysisModalOpen, toggleAnalysisModal] = useModal()
  const [isEmotionModalOpen, toggleEmotionModal] = useModal()
  const [isChangeGraphModalOpen, toggleChangeGraphModal] = useModal()
  const [graph,setGraph] = useState("PIE_CHART");
  console.log(process.env.FIREBASE_API_KEY)
  
  return (
    <div className="flex gap-10 pt-32 pl-14 justify-center">
      <div className="flex flex-col gap-10">
        {isAnalysisModalOpen && <AnalysisProgressPopUp closeOverlayHandler={toggleAnalysisModal} />}
        {isEmotionModalOpen && <EmotionalSummaryPopUp closeOverlayHandler={toggleEmotionModal} />}
        {isChangeGraphModalOpen && <ChangeGraphPopUp closeOverlayHandler={toggleChangeGraphModal}  changeGraphHandler={setGraph}/>}
        <AnalysisProgress toggleModal={toggleAnalysisModal} />
        <EmotionSummary toggleModal={toggleEmotionModal} />
      </div>
      <GraphBox graphTitle={"Overall Sentiment of Instructor"} toggleModal={toggleChangeGraphModal} 
        graph={graph} />
    </div>
  )
}
