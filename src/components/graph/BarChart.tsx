
import React from "react";
import { Bar} from "react-chartjs-2";

function BarChart({ chartData}:{chartData:any}) {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
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
export default BarChart;
