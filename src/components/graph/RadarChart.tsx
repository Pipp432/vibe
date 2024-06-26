
import React from "react";
import { Radar } from "react-chartjs-2";

function RadarChart({ chartData }: { chartData: any }) {

  return (
    <div>
      <Radar
        data={chartData}
        height="600px"
        width="600px"
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
                this.height += 25;
              };
            }
          },
          {
            id: 'custom-labels',
            afterDatasetDraw(chart) {
              if (chart.getDatasetMeta(0).data[0] && chart.data.labels) {
                const imgArr = []
                for (let i = 0; i < chart.data.labels.length; i++) {
                  const img = new Image(20)
                  img.src = `/images/${chart.data.labels[i]}.jpg`
                  imgArr.push(img)
                }
                const { ctx, data, scales: { r } } = chart
                const xCenter = (r as any).xCenter
                const yCenter = (r as any).yCenter
                const drawingArea = (r as any).drawingArea
                const angleLines = data.datasets[0].data.length
                const angle = 360 / angleLines

                const degToRad = (deg: number) => {
                  return deg * (Math.PI / 180);
                }


                for (let i = 0; i < imgArr.length; i++) {
                  ctx.save()
                  const deg = angle * i
                  const rad = degToRad(deg)
                  const xCoor = Math.cos(rad)
                  console.log(deg)
                  const yCoor = Math.sin(rad)
                  ctx.translate(xCenter, yCenter)
                  ctx.rotate(rad)
                  ctx.drawImage(imgArr[i], xCoor - 20, yCoor - 290, 30, 30)

                  ctx.restore();
                }

              }
            }
          }]}
        options={{

          scales: {
            r: {
              pointLabels: {
                display: false
              }
            }
          },
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top'
            },
            title: {
              display: false,
            },
            datalabels: {
              color: 'white',
              backgroundColor:'black',
              borderRadius:40
            
            }
          }
        }}
      />
    </div>
  );
}
export default RadarChart;
