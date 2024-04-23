'use client'
import React, { useState, useContext, useEffect } from 'react'
import Table from '@/components/courses/Table'
import SearchBar from '@/components/courses/SearchBar'
import useModal from '@/hooks/useModal'
import { queryCourses } from '@/services/courseService'
import DataDeletionConfrimationPopup from '@/components/courses/DataDeletionConfrimationPopup'
import { LoginContext } from '@/app/contexts/LoginContext'
import Spinner from '@/components/loading/Spinner'
import { CourseType } from '../../../../types'
function CoursesPage() {
  const loginState = useContext(LoginContext)
  const [isDataDeletionModalOpen, toggleDataDeletionModalOpen] = useModal();
  const [tableData, setTableData] = useState([] as Array<CourseType>)
  const [isLoading, setIsLoading] = useState(true)
  const [tableFilter,setTableFilter] = useState({year:"",semester:"",section:-1,name:"",courseID:""})
  const query = async () => {
    const data = await queryCourses(loginState.emailChula)
    setTableData(data)
    console.log(tableData)
    setIsLoading(false)
  }
  useEffect(() => {
    if (tableData.length === 0 && loginState.emailChula != "") query();
  },[tableData])
  const handleSetFilter= (filter:any)=>{
    setTableFilter(filter)
  }
  return (
    <>
      {isDataDeletionModalOpen && <DataDeletionConfrimationPopup  closeOverlayHandler={toggleDataDeletionModalOpen} />}
      <div className='flex flex-col gap-10 ml-6 mt-40 w-[70vw]'>
        <SearchBar setFilterTable={handleSetFilter}/>
        <Table filter = {tableFilter} tableData={tableData} toggleModal={toggleDataDeletionModalOpen} />
        {isLoading && <div className='flex items-center justify-center  w-[100%]'><Spinner/></div>}
      </div>
    </>
  )
}

export default CoursesPage
