import React, { useEffect, useState } from 'react'
import Chart from 'chart.js/auto'
import BarChart from '@/components/graph/BarChart'
import CardWrapper from "@/components/general/CardWrapper"
import { CategoryScale } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { queryAnalysisChartData } from '@/services/analysisService'
function AnalysisGraphBox({ courseID, graphTitle }: { courseID: string, graphTitle: string }) {
  
  const [chartData, setChartData] = useState({datasets:[]} as any)
  useEffect(() => {
    const queryData = async () => {
      const resultEmotions = []
      const resultEvaluations = []
      const data= await queryAnalysisChartData(courseID)
      for (let i = 0; i < data.length; i++) {
        const emotion = data[i]
        resultEmotions.push(emotion[0])
        resultEvaluations.push(emotion[1])
      }
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
    if(chartData.datasets.length===0) queryData();

  }, [chartData])

  Chart.register(CategoryScale);
  Chart.register(ChartDataLabels);
  return (
    <CardWrapper>
      <div className='p-2'>
        <div className='text-xl flex'>{graphTitle}</div>
        <div className='w-[45vw] flex flex-col justify-center item-center h-[35vh]'>
          <BarChart chartData={chartData} />
        </div>
      </div>
    </CardWrapper>
  )
}

export default AnalysisGraphBox




