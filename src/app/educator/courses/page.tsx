'use client'
import React, { useContext, useEffect } from 'react'
import Table from '@/components/courses/Table'
import SearchBar from '@/components/courses/SearchBar'
import useModal from '@/hooks/useModal'
import { queryCourses } from '@/services/courseService'
import DataDeletionConfrimationPopup from '@/components/courses/DataDeletionConfrimationPopup'
import { LoginContext } from '@/app/contexts/LoginContext'
function CoursesPage() {
  const loginState = useContext(LoginContext)
  const [isDataDeletionModalOpen, toggleDataDeletionModalOpen] = useModal();
  const query = async () => {
    const data = await queryCourses(loginState.emailChula)
    console.log(data)
  }
  useEffect(() => {
    query();
  })
  return (
    <>
      {isDataDeletionModalOpen && <DataDeletionConfrimationPopup closeOverlayHandler={toggleDataDeletionModalOpen} />}
      <div className='flex flex-col gap-10 ml-6 mt-40'>
        <SearchBar />
        <Table toggleModal={toggleDataDeletionModalOpen} />
      </div>
    </>
  )
}

export default CoursesPage
