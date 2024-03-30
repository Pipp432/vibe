import React from 'react'
import EmotionRankChart from '../graph/EmotionRankChart'

function ContextItem({contextName}:{contextName:string}) {
  return (
    <div className='flex flex-col gap-2 text-lg'>
      <div>{contextName}</div>
      <EmotionRankChart percentage={["40%","35%","25%"]}/>
    </div>
  )
}

export default ContextItem
