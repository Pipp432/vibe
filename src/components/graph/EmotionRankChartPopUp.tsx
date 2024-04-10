import React from 'react'

function EmotionRankChartPopUp({emotion}:{emotion:string}) {
  return (
    <div className='z-10 bg-white border-2 border-black shadow-black shadow-md p-2 rounded-lg'>{emotion}</div>
  )
}

export default EmotionRankChartPopUp
