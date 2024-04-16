import React from 'react'
import EmotionRankChart from '../graph/EmotionRankChart'
import { sortObject } from '@/app/helper/sortObject'

function ContextItem({contextName,emotionPercentages}:{contextName:string,emotionPercentages:any}) {
 const sortedPercentage = sortObject(emotionPercentages) 
  return (
    <div className='flex flex-col gap-2 text-lg'>
      <div>{contextName}</div>
      <EmotionRankChart data={sortedPercentage}/>
    </div>
  )
}

export default ContextItem
