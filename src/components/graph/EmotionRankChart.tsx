import React from 'react'
import TextToEmojiMap from '@/data/TextToEmojiMap'
function EmotionRankChart({ data, course }: { data: any, course?: String }) {
  return (
    <div className='flex flex-row gap-10 justify-between '>
      {course && <div className='ml-10 text-xl'>{course}</div>}
      <div className='flex-row flex w-[25vw] h-8 justify-end'>
        <div className='rounded-tl-full rounded-bl-full bg-blue-800 flex justify-center p-1 '
          style={{ width: "60%" }}><TextToEmojiMap text="disapproval"/></div>
        <div style={{ width: "20%" }} className='bg-sky-600 flex justify-center p-1'><TextToEmojiMap text='joy'/></div>
        <div style={{ width: "20%" }} className='bg-slate-600  flex justify-center p-1 rounded-tr-full rounded-br-full'><TextToEmojiMap text='gratitude'/></div>

      </div>

    </div>
  )
}

export default EmotionRankChart
