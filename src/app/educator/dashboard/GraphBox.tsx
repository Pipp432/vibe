import React, { useState } from 'react'
import Chart from 'chart.js/auto'
import BarChart from '@/components/graph/BarChart'
import CardWrapper from "@/components/general/CardWrapper"
import { Data } from '@/data/data'
import { CategoryScale } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';

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
function GraphBox({ graphTitle,toggleModal}: { graphTitle: string , toggleModal:()=>void}) {

  Chart.register(CategoryScale);
  Chart.register(ChartDataLabels);
  const [chartData, setChartData] = useState({
    labels: Data.map((data: any) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data: any) => data.userGain),
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
    <CardWrapper>
      <div className='text-xl flex'>{graphTitle}</div>
      <div className='w-[42vw] flex flex-col justify-between h-[95%]'>
        <BarChart chartData={chartData} />

        <div className='flex flex-row justify-end'>
          <button className='w-48 h-16 bg-secondary text-lg  rounded-full' 
            onClick={toggleModal}>Change Graph</button>

        </div>
      </div>
    </CardWrapper>
  )
}

export default GraphBox


