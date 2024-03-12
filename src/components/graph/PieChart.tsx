// src/components/PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }: { chartData: any }) {
  return (
    <div>
      <Pie
        data={chartData}

        height="600px"
        width="600px"
        options={{
          maintainAspectRatio: false,
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
export default PieChart;
