
import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart({ chartData }: { chartData: any }) {
  return (
    <div>
      <Bar
        data={chartData}
        height={"200%"} 
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
          }
        ]}
        options={{
          
          scales: {
            x: { grid: { display: false } },
            y: { grid: { display: false } }
          },
          plugins: {
            title: {
              display: true,
            }
          }
        }}
      />
    </div>
  );
}
export default BarChart;
