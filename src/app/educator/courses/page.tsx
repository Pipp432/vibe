import React from 'react'

function CoursesPage() {
  return (
    <div className='grid place-items-center h-full w-full ml-4'>
      <table className='w-[80vw] h-[30vh] shadow-black shadow-md table-fixed'>
        <tr className='bg-primary text-white text-lg'>
          <th>Course ID</th>
          <th>Course Name</th>
          <th>Semester</th>
          <th>Section</th>
          <th>Data</th>
        </tr>
        <tr className=''>
          <td className='text-center'>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Germany</td>
        </tr>
      </table>

    </div>
  )
}

export default CoursesPage
