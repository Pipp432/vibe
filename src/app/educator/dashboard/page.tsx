'use client'

import GraphBox from "./GraphBox";
import useModal from "@/hooks/useModal";
import AnalysisProgress from "./AnalysisProgress";
import EmotionSummary from "./EmotionSummary";
import AnalysisProgressPopUp from "@/components/dashboard/AnalysisProgressPopUp";
import EmotionalSummaryPopUp from "@/components/dashboard/EmotionalSummaryPopup";

export default function DashboardPage() {
  const [isAnalysisModalOpen, toggleAnalysisModal] = useModal()
  const [isEmotionModalOpen, toggleEmotionModal] = useModal()
  return (
    <div className="flex gap-10 pt-32 pl-20 justify-center">
      <div className="flex flex-col gap-10">
        {isAnalysisModalOpen && <AnalysisProgressPopUp closeOverlayHandler={toggleAnalysisModal} />}
        {isEmotionModalOpen && <EmotionalSummaryPopUp closeOverlayHandler={toggleEmotionModal} />}
        <AnalysisProgress toggleModal={toggleAnalysisModal} />
        <EmotionSummary toggleModal={toggleEmotionModal} />
      </div>
<GraphBox/>
    </div>
  )
}
