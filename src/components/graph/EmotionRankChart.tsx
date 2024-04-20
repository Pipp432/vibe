import React from 'react'
import EmotionRankChartComponent from './EmotionRankChartComponent'
function EmotionRankChart({ data, course }: { data: any, course?: String }) {
  const dataEntries: Array<Array<any>> = Object.entries(data)
  const filteredData = dataEntries.filter((a)=>(a[0]!=='Other'))
  const dataArr=filteredData.sort((a,b)=>(b[1]-a[1]))
  
  return (
    <div className='flex flex-row gap-10 justify-between '>
      {course && <div className='ml-10 text-xl'>{course}</div>}
      <div className='flex-row flex w-[25vw] h-8 '>
        {dataArr[0][1] !== 0 && <><EmotionRankChartComponent width={`${dataArr[0][1] * 100}%`} part={1} emotion={dataArr[0][0]} />
          <EmotionRankChartComponent width={`${dataArr[1][1] * 100}%`} part={2} emotion={dataArr[1][0]} />
          <EmotionRankChartComponent width={`${dataArr[2][1] * 100}%`} part={3} emotion={dataArr[2][0]} />
          <EmotionRankChartComponent width={`${(1-dataArr[0][1]-dataArr[1][1]-dataArr[2][1]) * 100}%`} part={4} emotion='Other' />
        </>}
        {
          dataArr[0][1] === 0 && <div className='text-sm'>{"No emotions associated with this context found"}</div>
        }
      </div>

    </div>
  )
}

export default EmotionRankChart
