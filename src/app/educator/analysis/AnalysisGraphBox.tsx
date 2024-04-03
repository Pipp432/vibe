import React, { useState } from 'react'
import Chart from 'chart.js/auto'
import BarChart from '@/components/graph/BarChart'
import CardWrapper from "@/components/general/CardWrapper"
import { analysisData } from '@/data/analysisData'
import { CategoryScale } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
function AnalysisGraphBox({ graphTitle }: { graphTitle: string }) {

  const options = {
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
  Chart.register(CategoryScale);
  Chart.register(ChartDataLabels);
  const [chartData, setChartData] = useState({
    labels: analysisData.map((data: any) => data.emotion),
    datasets: [
      {
        label: "Number of evaluations ",
        data: analysisData.map((data: any) => data.evaluations),
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
    ], options: options
  });
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



