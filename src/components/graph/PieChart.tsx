// src/components/PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }: { chartData: any }) {
  return (
    <div>
      <Pie
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
            }
          ]}
        height="600px"
        width="600px"
        options={{

          maintainAspectRatio: false,
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
            },
            title: {
              display: true,
            },
            legend:{
              position:'top',
              labels:{
                padding:15
              }
            },
            
            
          }
        }}
      />
    </div>
  );
}
export default PieChart;
