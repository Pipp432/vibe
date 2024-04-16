'use client'
import React, { useContext, useEffect, useState } from 'react'
import AnalysisInformation from './AnalysisInformation'
import CourseSelector from './CourseSelector'
import useModal from '@/hooks/useModal'
import OverallScorePopup from '@/components/analysis/OverallScorePopup'
import { LoginContext } from '@/app/contexts/LoginContext'
import { queryCourseInformation, queryComments } from '@/services/analysisService'
export default function AnalysisPage() {
  const [isModalOpen, toggleModal] = useModal()
  const [form, setForm] = useState<Array<string>>([])
  const [data, setData] = useState([] as any)
  const loginState = useContext(LoginContext)
  const queryData = async () => { const data = await queryCourseInformation(form, loginState); setData(data) }
  const queryComment = async () => { const commentData = await queryComments(loginState,'2190462' ,'summer', '2024') }
  useEffect(() => {
    if (form.length === 2) {
      queryData();
      queryComment();
    }
  }, [form])
  return (
    <>
      <CourseSelector onFormComplete={(e: Array<string>) => { setForm(e) }} />

      {form.length === 2 &&
        <div className='flex flex-col gap-2'>
          <div className='ml-10 mt-12'>
            <AnalysisInformation analysisData={data} openModal={toggleModal} />
          </div>

        </div>
      }
      {isModalOpen && <OverallScorePopup closeOverlayHandler={toggleModal} />}
    </>
  )
}
