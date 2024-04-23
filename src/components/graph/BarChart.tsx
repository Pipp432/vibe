
import React from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chart.js-plugin-labels-dv';
import { Chart } from "chart.js";
function BarChart({ chartData,pagename='dashboard' }: { chartData: any,pagename:string }) {
  Chart.register(ChartDataLabels);

  return (
    <div>
      <Bar
        data={chartData}
        height={pagename==="dashboard"?"250%":"125%"}
        plugins={[
          {
            id: "increase-legend-spacing",
            beforeInit(chart) {
              // Get reference to the original fit function
              const originalFit = (chart.legend as any).fit;
              // Override the fit function
              (chart.legend as any).fit = function fit() {
                // Call original function and bind scope in order to use `this` correctly inside it
                originalFit.bind(chart.legend)();
                this.height += 50;
              };
            }
          },
          {
            id: 'addBarLabel',
            beforeDatasetsDraw(chart) {
                if (chart.getDatasetMeta(0).data[0] && chart.data.labels) {
                const imgArr = []
                for(let i =0;i<chart.data.labels.length;i++){
                  const img =new Image(20)
                  img.src = `/images/${chart.data.labels[i]}.jpg`
                  imgArr.push(img)
                }
                const { ctx } = chart
                ctx.save();
                imgArr.forEach((image,index)=>{
                const xPos = chart.getDatasetMeta(0).data[index].x
                const yPos = chart.getDatasetMeta(0).data[index].y   
                ctx.drawImage(image, xPos-17, yPos-40, 35, 35)
                })

              }
            }
          }
        ]}
        options={

          {

            scales: {
              x: { grid: { display: false }, ticks: { color: "black" } },
              y: { grid: { display: false }, ticks: { color: "black" } }
            },
            plugins: {
              datalabels: {
                color:'white',
                backgroundColor:'black',
                borderRadius:20
              },
              title: {
                display: true,
              },
              legend:{
                display:false
              }
            }
          }
        }
      />
    </div>
  );
}
export default BarChart;

