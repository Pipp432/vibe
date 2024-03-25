'use client'
import React from 'react'
import Table from '@/components/courses/Table'
import SearchBar from '@/components/courses/SearchBar'
import useModal from '@/hooks/useModal'
import DataDeletionConfrimationPopup from '@/components/courses/DataDeletionConfrimationPopup'
function CoursesPage() {
  const [isDataDeletionModalOpen, toggleDataDeletionModalOpen] = useModal();
  return (
    <>
      {isDataDeletionModalOpen && <DataDeletionConfrimationPopup closeOverlayHandler={toggleDataDeletionModalOpen}/>}
      <div className='flex flex-col gap-10 ml-6 mt-40'>
        <SearchBar />
        <Table toggleModal={toggleDataDeletionModalOpen}/>
      </div>
    </>
  )
}

export default CoursesPage
