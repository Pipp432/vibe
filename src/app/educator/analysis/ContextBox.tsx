'use client'
import React,{useState, useEffect} from 'react'
import CardWrapper from '@/components/general/CardWrapper'
import ContextItem from '@/components/analysis/ContextItem'
import { ContextEmotionObjectType } from '../../../../types'
function ContextBox({ contextData }: { contextData: ContextEmotionObjectType }) {
  const [data,setData] = useState([] as any)
  useEffect(() => {
    if (contextData) {
      const contexts = (Object.keys(contextData)).filter((context: string) => (context !== 'None'))
      setData(contexts)
    }
  }, [contextData])

  return (
    <CardWrapper>
      <div className='flex flex-col justify-center items-center gap-4 w-[28vw] pt-[4vh]'>
        {data.map((context: string) => { return <ContextItem contextName={context} emotionPercentages={contextData[context]} /> })}
      </div>
    </CardWrapper>
  )
}

export default ContextBox
