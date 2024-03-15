import React from 'react'

function CoursesPage() {
  return (
    <div className='grid place-items-center h-full w-full ml-4'>
      <table className='w-[80vw] h-[30vh] shadow-black shadow-md table-fixed'>
        <tbody>
          <tr className='bg-primary text-white text-lg'>
            <th>Course ID</th>
            <th>Course Name</th>
            <th className='w-10'>Semester</th>
            <th>Section</th>
            <th>Data</th>
          </tr>
          <tr className='text-center'>
            <td>
              211213
            </td>
            <td>
              OPT APP THEO
            </td>

            <td>
              2023/1
            </td>
            <td>
              1
            </td>
            <td> N/A</td>
          </tr>

        </tbody>
      </table>

    </div>
  )
}

export default CoursesPage
