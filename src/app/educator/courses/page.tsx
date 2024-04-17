'use client'
import React, { useState, useContext, useEffect } from 'react'
import Table from '@/components/courses/Table'
import SearchBar from '@/components/courses/SearchBar'
import useModal from '@/hooks/useModal'
import { queryCourses } from '@/services/courseService'
import DataDeletionConfrimationPopup from '@/components/courses/DataDeletionConfrimationPopup'
import { LoginContext } from '@/app/contexts/LoginContext'
import Spinner from '@/components/loading/Spinner'
function CoursesPage() {
  const loginState = useContext(LoginContext)
  const [isDataDeletionModalOpen, toggleDataDeletionModalOpen] = useModal();
  const [tableData, setTableData] = useState([] as any)
  const [isLoading, setIsLoading] = useState(true)
  const query = async () => {
    const data = await queryCourses(loginState.emailChula)
    setTableData(data)
    setIsLoading(false)
  }
  useEffect(() => {
    if (tableData.length === 0 && loginState.emailChula != "") query();
  })
  return (
    <>
      {isDataDeletionModalOpen && <DataDeletionConfrimationPopup closeOverlayHandler={toggleDataDeletionModalOpen} />}
      <div className='flex flex-col gap-10 ml-6 mt-40 w-[70vw]'>
        <SearchBar />
        <Table tableData={tableData} toggleModal={toggleDataDeletionModalOpen} />
        {isLoading && <div className='flex items-center justify-center mt-20 w-[100%]'><Spinner/></div>}
      </div>
    </>
  )
}

export default CoursesPage
