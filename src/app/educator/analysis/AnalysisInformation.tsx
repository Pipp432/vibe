import React from 'react'
import AnalysisGraphBox from './AnalysisGraphBox'
import ContextBox from './ContextBox'
import InformationButton from '@/components/general/InformationButton'
function AnalysisInformation({ courseName,openModal }: { courseName: string,openModal:()=>void }) {
  return (
    <>
      <div className='flex flex-col gap-10'>
        <div className='text-4xl'>{courseName?.toLocaleUpperCase()}</div>
        <div className='flex gap-4'>
          <AnalysisGraphBox graphTitle='evaluations and emotions' />
          <ContextBox />
        </div>
        <div className='flex gap-32 items-center mt-10' >
          <div className='flex gap-2 items-center'>
            <div className='text-5xl'>Overall Score: 70</div>
            <InformationButton onClick={openModal} />
          </div>
          <button className='rounded-lg bg-subTab p-2 text-items-center2xl'>Print Report</button>
        </div>
      </div>
    </>)
}

export default AnalysisInformation
