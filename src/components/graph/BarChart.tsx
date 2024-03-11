
import React from "react";
import { Bar} from "react-chartjs-2";

function BarChart({ chartData}:{chartData:any}) {
  return (
    <div>
      <Bar
        data={chartData}
        options={{
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
