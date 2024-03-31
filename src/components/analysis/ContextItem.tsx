import React from 'react'
import EmotionRankChart from '../graph/EmotionRankChart'

function ContextItem({contextName,percentage}:{contextName:string,percentage:Array<string>}) {
  return (
    <div className='flex flex-col gap-2 text-lg'>
      <div>{contextName}</div>
      <EmotionRankChart percentage={percentage}/>
    </div>
  )
}

export default ContextItem
