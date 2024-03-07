import React from 'react'

function EmotionRankChart({ percentage, course }: { percentage: Array<any>, course: String }) {
  return (
    <div className='flex flex-row gap-10 justify-between'>
      <div className='ml-10 text-xl'>{course}</div>
      <div className='flex-row flex w-72 h-6 justify-end'>
        <div className='rounded-tl-full rounded-bl-full bg-blue-800 '
          style={{ width: percentage[0] }}></div>
        <div style={{ width: percentage[1] }} className='bg-sky-600 '></div>
        <div style={{ width: percentage[2] }} className='bg-slate-600   rounded-tr-full rounded-br-full'></div>

      </div>

    </div>
  )
}

export default EmotionRankChart
