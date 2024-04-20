'use client'

import GraphBox from "./GraphBox";
import useModal from "@/hooks/useModal";
import AnalysisProgress from "./AnalysisProgress";
import EmotionSummary from "./EmotionSummary";
import AnalysisProgressPopUp from "@/components/dashboard/AnalysisProgressPopUp";
import EmotionalSummaryPopUp from "@/components/dashboard/EmotionalSummaryPopup";
import ChangeGraphPopUp from '@/components/dashboard/ChangeGraphPopUp'
import { useContext, useEffect, useState } from "react";
import { queryCourses } from "@/services/dashboardService";
import { LoginContext } from "@/app/contexts/LoginContext";
require('dotenv').config()
export default function DashboardPage() {
  const [isAnalysisModalOpen, toggleAnalysisModal] = useModal()
  const [isEmotionModalOpen, toggleEmotionModal] = useModal()
  const [isChangeGraphModalOpen, toggleChangeGraphModal] = useModal()
  const [graph, setGraph] = useState("PIE_CHART");
  const [emotionAndCourseData, setEmotionAndCourseData] = useState([] as any)
  const loginState = useContext(LoginContext)

  useEffect(() => {

    const queryEmotion = async () => {
      const data = await queryCourses(loginState.emailChula);
      setEmotionAndCourseData(data)

    }
    if (emotionAndCourseData.length === 0) {
      queryEmotion();
    }
  }, [])

  return (
    <div className="flex gap-10 pt-32 pl-14 justify-center">
      <div className="flex flex-col gap-10">
        {isAnalysisModalOpen && <AnalysisProgressPopUp closeOverlayHandler={toggleAnalysisModal} />}
        {isEmotionModalOpen && <EmotionalSummaryPopUp closeOverlayHandler={toggleEmotionModal} />}
        {isChangeGraphModalOpen && <ChangeGraphPopUp closeOverlayHandler={toggleChangeGraphModal} changeGraphHandler={setGraph} />}
        <AnalysisProgress emotionAndCourseData={emotionAndCourseData} toggleModal={toggleAnalysisModal} />
        <EmotionSummary emotionAndCourseData={emotionAndCourseData} toggleModal={toggleEmotionModal} />
      </div>
      <GraphBox graphTitle={"Overall Sentiment of Instructor"} toggleModal={toggleChangeGraphModal}
        graph={graph} />
    </div>
  )
}
import { Chart } from 'chart.js'; //Changed import
import * as helpers from 'chart.js/helpers';

