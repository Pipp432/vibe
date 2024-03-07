'use client'

import GraphBox from "./GraphBox";
import Chart from "chart.js/auto";
import useModal from "@/hooks/useModal";
import { CategoryScale } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useState } from "react";
import { Data } from "@/data/data";
import AnalysisProgress from "./AnalysisProgress";
import EmotionSummary from "./EmotionSummary";
import AnalysisProgressPopUp from "@/components/dashboard/AnalysisProgressPopUp";
import EmotionalSummaryPopUp from "@/components/dashboard/EmotionalSummaryPopup";

const options = {
  tooltips: {
    enabled: false
  },
  plugins: {
    datalabels: {
      formatter: (value: any, ctx: any) => {
        let sum = 0;
        let dataArr = ctx.chart.data.datasets[0].data;
        dataArr.map((data: any) => {
          sum += parseInt(data);
        });
        let percentage = (value * 100 / sum).toFixed(2) + "%";
        return percentage;
      },
      color: '#fff',
    }
  }
};
export default function DashboardPage() {
  const [isAnalysisModalOpen, toggleAnalysisModal] = useModal()
  const [isEmotionModalOpen, toggleEmotionModal] = useModal()
  Chart.register(CategoryScale);
  Chart.register(ChartDataLabels);
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,0.5)",
          "#50AF95",
          "#FF0000",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ], options: options
  });
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
