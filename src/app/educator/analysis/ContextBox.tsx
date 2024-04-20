import React from 'react'
import CardWrapper from '@/components/general/CardWrapper'
import ContextItem from '@/components/analysis/ContextItem'
import { ContextEmotionObjectType } from '../../../../types'
function ContextBox({ contextData }: { contextData: ContextEmotionObjectType }) {
  const emotionDataAndContext =
    Object.fromEntries(
      [["Assessments", contextData.assessments],
      ["Course Materials", contextData.courseMaterials],
      ["Facilities", contextData.facilities],
      ["Teaching", contextData.teaching],]
    )

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
