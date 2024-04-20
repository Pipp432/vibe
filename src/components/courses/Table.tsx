'use client'
import React, { useState, useEffect } from 'react'
import TableRow from './TableRow'
import { CourseSearchFormDataType, CourseType } from '../../../types'
function Table({ filter, tableData, toggleModal }: { filter: CourseSearchFormDataType, tableData: any, toggleModal: () => void }) {
  const [filtered, setFiltered] = useState([])
  
  useEffect(() => {

    if (filter.courseID !== "" && filter.name === "") {
      const filtered = tableData.filter((data: CourseType) => (data.courseID === filter.courseID))
      setFiltered(filtered)
      return;
    }

    else if (filter.courseID === "" && filter.name !== "") {
      const filtered = tableData.filter((data: CourseType) => (data.name=== filter.name))
      setFiltered(filtered)
      return;
    }
    else{
      setFiltered(tableData)
      return;
    }
  }, [filter])
  return (
    <>
      {tableData.length !== 0 && <table className='w-[80vw] h-[30vh] shadow-black shadow-md table-fixed'>
        <tbody>
          <tr className='bg-primary text-white text-lg'>
            <th className='w-[10%]'>Course ID</th>
            <th className='w-[15%]'>Course Name</th>
            <th className='w-[15%]'>Semester</th>
            <th className='w-[5%]'>Section</th>
            <th className='w-[60%]'>Data</th>
          </tr>
          {tableData.map((data: CourseType, index: number) => {
            return <TableRow key={index} courseInformation={{
              courseID: data.courseID,
              major: data.major,
              faculty: data.faculty,
              name: data.name,
              semester: data.semester,
              year: data.year,
              section: data.section,
              isUploaded: data.isUploaded
            }} index={index} toggleModal={toggleModal} />
          })}
        </tbody>
      </table>}
    </>
  )
}

export default Table
