import React from 'react'
import AnalysisGraphBox from './AnalysisGraphBox'
import ContextBox from './ContextBox'
import InformationButton from '@/components/general/InformationButton'
 function AnalysisInformation({ analysisData, openModal }: { analysisData: any, openModal: () => void }) {
  return (
     <>
      {analysisData.length!==0 &&<div className='flex flex-col gap-10'>
        <div className='text-4xl'>{analysisData?.name?.toLocaleUpperCase()}</div>
        <div className='flex gap-4'>
          <AnalysisGraphBox courseID = {analysisData.courseID} graphTitle='Evaluations and Emotions' />
          <ContextBox contextData = {analysisData} />
        </div>
        <div className='flex gap-32 items-center mt-10' >
          <div className='flex gap-2 items-center'>
            <div className='text-5xl'>{`Overall Score: ${analysisData?.EmotionScore?.toFixed(2)}`}</div>
            <InformationButton onClick={openModal} />
          </div>
          <button className='rounded-lg bg-subTab p-2 text-items-center2xl'>Print Report</button>
        </div>
      </div>}
    </>)
}

export default AnalysisInformation
