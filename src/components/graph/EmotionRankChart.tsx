import React from 'react'
import TextToEmojiMap from '@/data/TextToEmojiMap'
import EmotionRankChartComponent from './EmotionRankChartComponent'
function EmotionRankChart({ data, course }: { data: any, course?: String }) {
  return (
    <div className='flex flex-row gap-10 justify-between '>
      {course && <div className='ml-10 text-xl'>{course}</div>}
      <div className='flex-row flex w-[25vw] h-8 '>
        <EmotionRankChartComponent width={"60%"} part={1} emotion='joy' />
        <EmotionRankChartComponent width={"20%"} part={2} emotion='anger' />
        <EmotionRankChartComponent width={"20%"} part={3} emotion='approval' />
      </div>

    </div>
  )
}

export default EmotionRankChart
