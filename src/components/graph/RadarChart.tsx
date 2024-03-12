
import React from "react";
import {Radar} from "react-chartjs-2";

function RadarChart({ chartData}:{chartData:any}) {
  return (
    <div>
      <Radar
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
export default RadarChart;
