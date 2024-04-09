'use client'
import React, { useEffect, useState } from 'react'
import AnalysisInformation from './AnalysisInformation'
import CourseSelector from './CourseSelector'
import useModal from '@/hooks/useModal'
import OverallScorePopup from '@/components/analysis/OverallScorePopup'
export default function AnalysisPage() {
  const [isModalOpen, toggleModal] = useModal()
  const [form, setForm] = useState<Array<string>>([])
  const queryAnalysisData = async (form: Array<string>) => {
    const result = await fetch("http://le",{ method: "POST", body: JSON.stringify(form) })
  }
  useEffect(() => {
    //queryAnalysisData(form)
  }, [form])
  return (
    <>
      <CourseSelector onFormComplete={(e: Array<string>) => { setForm(e) }} />

      {form.length === 2 &&
        <div className='flex flex-col gap-2'>
          <div className='ml-10 mt-12'>
            <AnalysisInformation courseName={form[1]} openModal={toggleModal} />
          </div>

        </div>
      }
      {isModalOpen && <OverallScorePopup closeOverlayHandler={toggleModal} />}
    </>
  )
}
