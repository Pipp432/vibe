
import React from "react";
import {Radar} from "react-chartjs-2";

function RadarChart({ chartData}:{chartData:any}) {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Radar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "title"
            }
          }
        }}
      />
    </div>
  );
}
export default RadarChart;
