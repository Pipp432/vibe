import React from 'react'

function CoursesPage() {
  return (
    <div className='grid place-items-center h-full w-full ml-4'>
      <table className='w-[80vw] h-[30vh] shadow-black shadow-md table-fixed'>
       <tbody> <tr className='bg-primary text-white text-lg'>
          <th>Course ID</th>
          <th>Course Name</th>
          <th>Semester</th>
          <th>Section</th>
          <th>Data</th>
        </tr></tbody>
      </table>

    </div>
  )
}

export default CoursesPage
