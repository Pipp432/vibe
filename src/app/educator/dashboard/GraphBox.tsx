import React, { ReactNode, useEffect, useState } from 'react'
import Chart from 'chart.js/auto'
import PieChart from '@/components/graph/PieChart'
import BarChart from '@/components/graph/BarChart'
import CardWrapper from "@/components/general/CardWrapper"
import { CategoryScale } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import RadarChart from '@/components/graph/RadarChart';
import {analysisData} from '@/data/analysisData'
function GraphBox({ graphTitle, toggleModal, graph }:
  {
    graphTitle: string, toggleModal: () => void, graph: string,
  }) {

  
  Chart.register(CategoryScale);
  Chart.register(ChartDataLabels);
  const [chart, setChart] = useState<ReactNode>();
  const [chartData, setChartData] = useState({
    labels: analysisData.map((data: any) => data.emotion),
    datasets: [
      {
        label: "Number of evaluations ",
        data: analysisData.map((data: any) => data.evaluations),
        backgroundColor: [
          "rgba(75,192,192,0.5)",
          "#50AF95",
          "#FF0000",
          "#f3ba2f",
          "#2a71d0",

        ],
        borderColor: "black",
        borderWidth: 2
      }
    ], 
  });

  const handleRenderChart = () => {
    switch (graph) {
      case "BAR_CHART": return <BarChart chartData={chartData} />;
      case "PIE_CHART": return <PieChart chartData={chartData} />;
      case "RADAR_CHART": return <RadarChart chartData={chartData} />;
      default: <PieChart chartData={chartData} />;
    }
  }
  useEffect(() => {
    setChart(handleRenderChart())
  }, [graph])
  return (
    <CardWrapper>
      <div className='text-xl flex'>{graphTitle}</div>
      <div className='w-[42vw] flex flex-col justify-center h-[85%]'>

        {chart}
      </div>
      <div className='flex flex-row justify-end'>
        <button className='w-48 h-16 bg-secondary text-lg  rounded-full'
          onClick={toggleModal}>Change Graph</button>

      </div>
    </CardWrapper>
  )
}

export default GraphBox


