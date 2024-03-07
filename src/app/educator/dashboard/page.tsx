'use client'

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useState } from "react";
import { Data } from "@/data/data";
import CardWrapper from "../../../components/general/CardWrapper"
import ProgressStatus from "@/components/graph/ProgressStatus";
import BarChart from "@/components/graph/BarChart";
import InformationButton from "@/components/general/InformationButton";
import EmotionRankChart from "@/components/graph/EmotionRankChart";
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
    <div className="flex flex-col p-20 gap-10">


      <CardWrapper>
        <div className="flex flex-row gap-2 items-center">
          <div className="text-lg">{"Analysis Progress"}</div>
          <InformationButton />
        </div>

        <div className="w-[30rem] h-[20rem] overflow-y-scroll">
          <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-5">
              <div className="flex flex-col gap-5">
                <ProgressStatus courseName="Intro Sto Mod" status="processing" />
                <ProgressStatus courseName="Intro Sto Mod" status="processing" />
                <ProgressStatus courseName="Intro Sto Mod" status="processing" />
                <ProgressStatus courseName="Intro Sto Mod" status="processing" />
                <ProgressStatus courseName="Intro Sto Mod" status="processing" />
                <ProgressStatus courseName="Intro Sto Mod" status="processing" />
              </div>
              <div className="flex flex-col gap-5">
                <ProgressStatus courseName="Intro Sto Mod" status="processing" />
                <ProgressStatus courseName="Intro Sto Mod" status="processing" />
                <ProgressStatus courseName="Intro Sto Mod" status="processing" />
                <ProgressStatus courseName="Intro Sto Mod" status="processing" />
              </div>
            </div>
          </div>

        </div>
      </CardWrapper>

      <CardWrapper>
        <div className="flex flex-row gap-2 items-center mb-4">

          <div className='text-lg'>{"Emotional Summary"}</div>

          <InformationButton />
        </div>
        <div className="w-[30rem] h-[20rem] overflow-y-scroll">
          <div className="flex flex-col gap-8">
            <div className='flex flex-row gap-5'>
              <div className="flex flex-col gap-5">
                <EmotionRankChart percentage={["50%", "40%", "10%"]} course={"2102134"} />
                <EmotionRankChart percentage={["50%", "40%", "10%"]} course={"2102134"} />
                <EmotionRankChart percentage={["50%", "40%", "10%"]} course={"2102134"} />
                <EmotionRankChart percentage={["50%", "40%", "10%"]} course={"2102134"} />
                <EmotionRankChart percentage={["50%", "40%", "10%"]} course={"2102134"} />
                <EmotionRankChart percentage={["40%", "30%", "30%"]} course={"202324"} />
                <EmotionRankChart percentage={["40%", "30%", "30%"]} course={"202324"} />
                <EmotionRankChart percentage={["40%", "30%", "30%"]} course={"202324"} />
                <EmotionRankChart percentage={["50%", "40%", "10%"]} course={"230543"} />

              </div>
            </div>
          </div>
        </div>

      </CardWrapper>
    </div >
  )
}
