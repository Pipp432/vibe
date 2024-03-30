import React from 'react'
import CardWrapper from '@/components/general/CardWrapper'
import ContextItem from '@/components/analysis/ContextItem'
function ContextBox() {
  
  return (
  <CardWrapper>
      <div className='flex flex-col gap-4 w-[20vw]'>
      <ContextItem contextName='Teaching'/>
      </div>
    </CardWrapper>
  )
}

export default ContextBox
