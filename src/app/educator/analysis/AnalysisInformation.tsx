import React from 'react'
import AnalysisGraphBox from './AnalysisGraphBox'
import ContextBox from './ContextBox'
import InformationButton from '@/components/general/InformationButton'
import { ContextEmotionObjectType } from '../../../../types'
 function AnalysisInformation({ analysisData, openModal }: { analysisData: any, openModal: () => void }) {
  
  const contextData:ContextEmotionObjectType= analysisData?.ContextnEmotion?.context
  return (
     <>
      {analysisData.length!==0 &&<div className='flex flex-col gap-10'>
        <div className='text-4xl'>{analysisData?.name?.toLocaleUpperCase()}</div>
        <div className='flex gap-4'>
          <AnalysisGraphBox graphTitle='evaluations and emotions' />
          <ContextBox contextData = {contextData} />
        </div>
        <div className='flex gap-32 items-center mt-10' >
          <div className='flex gap-2 items-center'>
            <div className='text-5xl'>{`Overall Score: ${analysisData?.EmotionScore?.toFixed(2)}`}</div>
            <InformationButton onClick={openModal} />
          </div>
          <button className='rounded-lg bg-subTab p-2 text-items-center2xl'>Print Report</button>
        </div>
      </div>}
      {analysisData.length===0 && <div className='text-red-500 text-3xl'>{"No data avaliable for this course, academic year, or semester"}</div>}
    </>)
}

export default AnalysisInformation
