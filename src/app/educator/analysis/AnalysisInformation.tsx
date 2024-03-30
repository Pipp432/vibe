import React from 'react'
import AnalysisGraphBox from './AnalysisGraphBox'
import ContextBox from './ContextBox'
function AnalysisInformation({ courseName }: { courseName: string }) {
  return (
    <>
      <div className='flex flex-col gap-4'>
        <div className='text-2xl'>{courseName?.toLocaleUpperCase()}</div>
        <div className='flex gap-4'>
          <AnalysisGraphBox graphTitle='evaluations and emotions' />
          <ContextBox />
        </div>
<div className='text-5xl'>Overall Score: 70</div>
      </div>
    </>)
}

export default AnalysisInformation
