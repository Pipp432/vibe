'use client'
import React, { useState, useEffect } from 'react'
import CardWrapper from '@/components/general/CardWrapper'
import ContextItem from '@/components/analysis/ContextItem'
import { ContextEmotionObjectType } from '../../../../types'
function ContextBox({ contextData }: { contextData: ContextEmotionObjectType }) {
  console.log(contextData)
  const emotionDataAndContext =
    Object.fromEntries(
      [["Assessments", contextData.assessments],
      ["Course Materials", contextData.courseMaterials],
      ["Facilities", contextData.facilities],
      ["Teaching", contextData.teaching],]
    )
  console.log(emotionDataAndContext)
  const [data, setData] = useState([] as any)
  useEffect(() => {
    if (contextData) {
      const contexts = (Object.keys(contextData)).filter((context: string) => (context !== 'None'))
      setData(contexts)
    }
  }, [contextData])

  return (
    <CardWrapper>
      <div className='flex flex-col justify-center items-center gap-4 w-[28vw] pt-[4vh]'>
        {Object.keys(emotionDataAndContext).map((context: string, index: number) => {
          return <ContextItem key={index}
            contextName={context} emotionPercentages={emotionDataAndContext[context]} />
        })}

      </div>
    </CardWrapper>
  )
}

export default ContextBox
