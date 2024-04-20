'use client'
import React, { useContext, useEffect, useState } from 'react'
import AnalysisInformation from './AnalysisInformation'
import CourseSelector from './CourseSelector'
import useModal from '@/hooks/useModal'
import OverallScorePopup from '@/components/analysis/OverallScorePopup'
import { LoginContext } from '@/app/contexts/LoginContext'
import { queryCourseInformation, queryComments } from '@/services/analysisService'
import Spinner from '@/components/loading/Spinner'
export default function AnalysisPage() {
  const [isModalOpen, toggleModal] = useModal()
  const [form, setForm] = useState<Array<string>>([])
  const [data, setData] = useState([] as any)
  const [isLoading, setIsLoading] = useState(false)
  const loginState = useContext(LoginContext)
  const queryData = async () => {
    setIsLoading(true)
    const data = await queryCourseInformation(form, loginState);
    console.log(data)
    setData(data)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);

  }
  const queryComment = async () => { const commentData = await queryComments(loginState, '2190462', 'summer', '2024') }
  useEffect(() => {
    if (form.length === 2) {
      queryData();
      // queryComment();
    }
  }, [form])
  return (
    <>
      <CourseSelector onFormComplete={(e: Array<string>) => { setForm(e) }} />
      {isLoading &&
        <div className='mt-64 ml-[35vw]'>
          <Spinner />
        </div>}
      {form.length === 2 && data.length !== 0 && !isLoading &&
        <div className='flex flex-col gap-2'>
          <div className='ml-10 mt-12'>
            <AnalysisInformation analysisData={data} openModal={toggleModal} />
          </div>

        </div>
      }

      {form.length === 2 && data.length === 0 && !isLoading &&

        <div className='text-red-500 text-3xl ml-10 mt-10'>{"No data avaliable for this course, academic year, or semester"}</div>
      }


      {isModalOpen && <OverallScorePopup closeOverlayHandler={toggleModal} />}
    </>
  )
}
