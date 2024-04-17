import React from 'react'

function EmotionRankChartPopUp({emotion,width}:{emotion:string,width:string}) {
  const percentage = parseFloat(width.substring(0,width.length-1)).toFixed(1)
  return (
    <div className='z-10 bg-white border-2 border-black shadow-black shadow-md p-2 rounded-lg'>{emotion[0].toLocaleUpperCase() + emotion.substring(1,emotion.length) +` (${percentage}%)`}</div>
  )
}

export default EmotionRankChartPopUp
