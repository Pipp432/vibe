'use client'
import React, { useState } from 'react'
import AnalysisInformation from './AnalysisInformation'
import CourseSelector from './CourseSelector'
export default function AnalysisPage() {
  const [isFormComplete, setIsFormComplete] = useState(false)
  return (
    <>
      <CourseSelector onFormComplete={(e: boolean) => { setIsFormComplete(e) }} />

      {isFormComplete &&
        <div className='flex flex-col gap-2'>
          <div className='ml-10 mt-12'>
            <AnalysisInformation courseName='data structure and algorithms' />
          </div>

        </div>
      }
    </>
  )
}
