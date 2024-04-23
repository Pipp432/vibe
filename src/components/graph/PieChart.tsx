// src/components/PieChart.js
import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from "chart.js";
function PieChart({ chartData }: { chartData: any }) {

  Chart.register(ChartDataLabels);
  return (
    <div>
      <Doughnut
        data={chartData}
        plugins={
          [
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
              id: 'add-images',
              afterDatasetDraw(chart) {
                if (chart.getDatasetMeta(0) && chart.data.labels) {

                  const { ctx, data } = chart
                  const angle = Math.PI / 180;
                  const width = 30;
                  ctx.save()
                  const imgArr: any = []
                  for (let i = 0; i < chart.data.labels.length; i++) {
                    if(chart.data.datasets[0].data[i]===0){
                    imgArr.push(new Image())  
                    }else{

                    const img = new Image(20)
                    img.src = `/images/${chart.data.labels[i]}.jpg`
                    imgArr.push(img)
                    }
                  }
                  chart.getDatasetMeta(0).data.forEach((_: any, index: number) => {
                    const x = chart.getDatasetMeta(0).data[index].tooltipPosition(true).x
                    const y = chart.getDatasetMeta(0).data[index].tooltipPosition(true).y
                    ctx.beginPath();
                    ctx.arc(x, y, width / 2, 0, angle * 360, false)
                    ctx.drawImage(imgArr[index], x - (width / 2), y - (width / 2), width, width)
                  })
                }
              }
            }
          ]}
        height="600px"
        width="600px"
        options={{
          maintainAspectRatio: false,
          plugins: {
            datalabels: {
              anchor: 'end',
              backgroundColor: function(context: any) {
                return context.dataset.backgroundColor;
              },
              borderColor: 'black',
              borderRadius: 25,
              borderWidth: 2,
              color: 'black',
              display: function(context: any) {
                var dataset = context.dataset;
                var count = dataset.data.length;
                var value = dataset.data[context.dataIndex];
                return value > count * 0.5;
              },
              formatter: (value: any, ctx: any) => {
                let sum = 0;
                let dataArr = ctx.chart.data.datasets[0].data;
                dataArr.map((data: any) => {
                  sum += parseInt(data);
                });
                let percentage = (value * 100 / sum).toFixed(2) + "%";
                return percentage;
              },
            },
            title: {
              display: true,
            },

            legend: {
              display:false,
              position: 'top',
              labels: {
                padding: 15
              }
            },


          }
        }}
      />
    </div>
  );
}
export default PieChart;
