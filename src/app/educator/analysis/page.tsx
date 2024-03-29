'use client'
import React, { useState } from 'react'
import CourseSelector from './CourseSelector'
export default function AnalysisPage() {
  const [isFormComplete,setIsFormComplete] = useState(false)
  return (
    <>
      <CourseSelector  onFormComplete={(e:boolean)=>{setIsFormComplete(e)}}/>

      {isFormComplete && <div>Hello</div>}
    </>
  )
}
