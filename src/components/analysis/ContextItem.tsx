import React from 'react'
import EmotionRankChart from '../graph/EmotionRankChart'

function ContextItem({contextName,emotionPercentages}:{contextName:string,emotionPercentages:any}) {
 const dataArr = Object.entries(emotionPercentages) 
  dataArr.forEach((percentage:any)=>{
  percentage[0] = percentage[0].replace("assessments","").replace("coursematerials","").replace("facilities","").replace("teaching",'')
  })
  const dataObj=Object.fromEntries(dataArr)


  return (
    <div className='flex flex-col gap-2 text-lg'>
      <div>{contextName}</div>
      <EmotionRankChart data={dataObj}/>
    </div>
  )
}

export default ContextItem
