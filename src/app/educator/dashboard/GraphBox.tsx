import React, { ReactNode, useContext, useEffect, useState } from 'react'
import Chart from 'chart.js/auto'
import PieChart from '@/components/graph/PieChart'
import BarChart from '@/components/graph/BarChart'
import CardWrapper from "@/components/general/CardWrapper"
import { CategoryScale } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import RadarChart from '@/components/graph/RadarChart';
import { analysisData } from '@/data/analysisData'
import { queryProfessorChartData } from '@/services/dashboardService'
import { LoginContext } from '@/app/contexts/LoginContext'
function GraphBox({ graphTitle, toggleModal, graph }:
  {
    graphTitle: string, toggleModal: () => void, graph: string,
  }) {


  Chart.register(CategoryScale);
  Chart.register(ChartDataLabels);
  const [chart, setChart] = useState<ReactNode>();
  const loginState = useContext(LoginContext)
  const queryEmotionProfessor = async () => {
    const resultEmotions = []
    const resultEvaluations = []
    const res = await queryProfessorChartData(loginState.emailChula);
    for (let i = 0; i < res.length; i++) {
      const emotion = res[i]
      resultEmotions.push(emotion[0])
      resultEvaluations.push(emotion[1])
    }
  console.log(resultEmotions)
    setChartData({
      labels: resultEmotions,
      datasets: [
        {
          label: "Number of evaluations ",
          data: resultEvaluations,
          backgroundColor: [
            "#9CBEFF",
            "#9CBEFF",
            "#9CBEFF",
            "#9CBEFF",
            "#D9D9D9",
            "#D23333",
            "#D23333",
            "#D23333",
            "#D23333",
          ],
          borderColor: "black",
          borderWidth: 2
        }
      ],
    })
  }
  const [chartData, setChartData] = useState({
    datasets: [],
  } as any);

  const handleRenderChart = () => {
    switch (graph) {
      case "BAR_CHART": return <BarChart chartData={chartData} />;
      case "PIE_CHART": return <PieChart chartData={chartData} />;
      case "RADAR_CHART": return <RadarChart chartData={chartData} />;
      default: <PieChart chartData={chartData} />;
    }
  }
  useEffect(() => {
    if(chartData.datasets.length===0)queryEmotionProfessor();
    setChart(handleRenderChart())
  }, [chartData,graph])
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


