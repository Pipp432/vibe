import React from 'react'
import EmotionRankChartComponent from './EmotionRankChartComponent'
function EmotionRankChart({ data, course }: { data: any, course?: String }) {

  return (
    <div className='flex flex-row gap-10 justify-between '>
      {course && <div className='ml-10 text-xl'>{course}</div>}
      <div className='flex-row flex w-[25vw] h-8 '>
        {data[0][1] !== 0 && <><EmotionRankChartComponent width={`${data[0][1] * 100}%`} part={1} emotion={data[0][0]} />
          <EmotionRankChartComponent width={`${data[1][1] * 100}%`} part={2} emotion={data[1][0]} />
          <EmotionRankChartComponent width={`${data[2][1] * 100}%`} part={3} emotion={data[2][0]} />
          <EmotionRankChartComponent width={`${100 - (data[0][1] + data[2][1] + data[1][1]) * 100}%`} part={4} emotion='Other' />
        </>}
        {
          data[0][1] ===0 && <div className='text-sm'>{"No emotions associated with this context found"}</div>
        }
      </div>

    </div>
  )
}

export default EmotionRankChart
