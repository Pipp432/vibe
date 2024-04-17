import React, { useState } from 'react'

import TextToEmojiMap from '@/data/TextToEmojiMap'
import EmotionRankChartPopUp from './EmotionRankChartPopUp'
function EmotionRankChartComponent({ part, width, emotion }: { part: number, emotion: string, width: string }) {
  const [isHover, setIsHover] = useState(false)
  const getStyle = () => {
    switch (part) {
      case 1:
        return 'rounded-tl-full rounded-bl-full bg-blue-800 flex justify-center p-1 w-full '
      case 2:
        return 'bg-sky-600 flex justify-center p-1 w-full'
      case 3:
        return 'bg-sky-400  h-10 flex justify-center p-1 w-full'
      case 4:
        return 'bg-slate-600 h-10 flex justify-center p-1 w-full rounded-tr-full rounded-br-full'
      default:
        break;
    }
  }
  return (
    <div className='flex flex-col items-center' style={{ width: width }} >
      {isHover && <div className='z-10 absolute -translate-y-12 duration-200'><EmotionRankChartPopUp emotion={emotion} width={width}/></div>}
      <div onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }} className={getStyle()}>
        <TextToEmojiMap text={emotion} />

      </div>
    </div>
  )
}

export default EmotionRankChartComponent
