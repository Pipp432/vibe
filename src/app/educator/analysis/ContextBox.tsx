import React from 'react'
import CardWrapper from '@/components/general/CardWrapper'
import ContextItem from '@/components/analysis/ContextItem'
function ContextBox() {

  return (
    <CardWrapper>
      <div className='flex flex-col justify-center items-center gap-4 w-[28vw] pt-[4vh]'>
        <ContextItem contextName='Teaching' percentage={['50%', '30%', '20%']} />
        <ContextItem contextName='Course Materials' percentage={['50%', '30%', '20%']} />
        <ContextItem contextName='Assessments' percentage={['50%', '30%', '20%']} />
        <ContextItem contextName='Facility' percentage={['50%', '30%', '20%']} />
      </div>
    </CardWrapper>
  )
}

export default ContextBox
