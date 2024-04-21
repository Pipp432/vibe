
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
            beforeDatasetsDraw(chart, args, options) {
                if (chart.getDatasetMeta(0).data[0]) {
                const image1 = new Image(20);
                image1.src = '/images/joy.jpg'
                const image2 = new Image(20);
                image2.src = '/images/approval.jpg'
                const image3 = new Image(20);
                image3.src = '/images/admiration.jpg'
                const image4 = new Image(20);
                image4.src = '/images/gratitude.jpg'
                const image5 = new Image(20);
                image5.src = '/images/neutrality.jpg'
                const image6 = new Image(20);
                image6.src = '/images/disapproval.jpg'
                const image7 = new Image(20);
                image7.src = '/images/disappointment.jpg'
                const image8 = new Image(20);
                image8.src = '/images/anger.jpg'
                const image9 = new Image(20);
                image9.src = '/images/confusion.jpg'
                const imgArr = [image1,image2,image3,image4,image5,image6,image7,image8,image9]
                const { ctx, chartArea: { top, bottom, left, right, width, height }, scales: { x, y } } = chart
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
              },
              title: {
                display: true,
              },
            }
          }
        }
      />
    </div>
  );
}
export default BarChart;

