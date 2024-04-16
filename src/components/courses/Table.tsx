
import React from 'react'
import TableRow from './TableRow'
import { CourseType } from '../../../types'
function Table({ tableData, toggleModal }: { tableData: any, toggleModal: () => void }) {

  return (

    <table className='w-[80vw] h-[30vh] shadow-black shadow-md table-fixed'>
      <tbody>
        <tr className='bg-primary text-white text-lg'>
          <th className='w-[10%]'>Course ID</th>
          <th className='w-[15%]'>Course Name</th>
          <th className='w-[15%]'>Semester</th>
          <th className='w-[5%]'>Section</th>
          <th className='w-[60%]'>Data</th>
        </tr>
        {tableData.map((data: any) => {
          return <TableRow courseInformation={{
            courseID: data[0],
            major: data[13],
            faculty: data[14],
            name: data[12],
            semester: data[2],
            year: data[3],
            section: data[1],
            isUploaded: data[15]
          }} toggleModal={toggleModal} />
        })}
      </tbody>
    </table>
  )
}

export default Table
