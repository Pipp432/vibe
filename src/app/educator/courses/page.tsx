import React from 'react'
import Table from '@/components/courses/Table'
import SearchBar from '@/components/courses/SearchBar'

function CoursesPage() {
  return (
    <div className='flex flex-col gap-10 ml-6 mt-40'>
      <SearchBar/>
      <Table />
    </div>
  )
}

export default CoursesPage
