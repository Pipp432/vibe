
import React from 'react'
import TableRow from './TableRow'
import { CourseType } from '../../../types'
function Table({ toggleModal }: { toggleModal: () => void }) {
  const courses: Array<CourseType> = [

    {
      name: 'MLDL',
      courseID: '123456',
      section: 1,
      semester: '1',
      year: "2020",
      major: "ICE",
      faculty: 'Enigneering',
      isUpload: 0

    },
    {
      name: 'Intro Mod Sto',
      courseID: '12378',
      section: 2,
      semester: '2',
      year: "2023",
      major: "ICE",
      faculty: 'Enigneering',
      isUpload: 1

    }
  ]
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
        {courses.map((course:CourseType)=>{return <TableRow courseInformation={course} toggleModal={toggleModal} />})}
      </tbody>
    </table>
  )
}

export default Table
