'use client'
import React, { useState, useEffect } from 'react'
import TableRow from './TableRow'
import { CourseSearchFormDataType, CourseType } from '../../../types'
function Table({ filter, tableData, toggleModal }: { filter: CourseSearchFormDataType, tableData: any, toggleModal: () => void }) {
  const [filtered, setFiltered] = useState([])
  console.log(tableData)
  const filterBySem = (arr: any) => {
    if (filter.semester !== "") {
      const filterSem = arr.filter((data: any) => (data.semester === filter.semester))
      filterByYear(filterSem)
    } else {
      filterByYear(arr)
    }
  }
  const filterByYear = (arr: any) => {
    if (filter.year !== "") {
      const filterYear = arr.filter((data: any) => (data.year === filter.year))
      filterBySec(filterYear)
    }
    else {

      filterBySec(arr)
    }
  }
  const filterBySec = (arr: any) => {
    if (filter.section !== -1) {
      const filterSec = arr.filter((data: any) => (data.section === filter.section))
      setFiltered(filterSec)
    } else {

      setFiltered(arr)
    }

  }
  const filterCourses = () => {
    if (filter.courseID !== "" && filter.name === "") {
      const filtered = tableData.filter((data: CourseType) => {
        const length = filter.courseID?.length
        return data.courseID.slice(0, length) === filter.courseID
      })
      filterBySem(filtered)
      return;
    }

    else if (filter.courseID === "" && filter.name !== "") {
      const filtered = tableData.filter((data: CourseType) => {
        const length = filter.name?.length
        return data.name.slice(0, length) === filter.name

      })

      filterBySem(filtered)
      return;
    }
    else {

      filterBySem(tableData)
    }
  }

  useEffect(() => {
    filterCourses();
  }, [filter, tableData])
  return (
    <>
      {filtered.length !== 0 && <table className='w-[80vw]  shadow-black shadow-md table-fixed'>
        <tbody>
          <tr className='bg-primary text-white text-lg h-12'>
            <th className='w-[10%]'>Course ID</th>
            <th className='w-[15%]'>Course Name</th>
            <th className='w-[15%]'>Semester</th>
            <th className='w-[5%]'>Section</th>
            <th className='w-[60%]'>Data</th>
          </tr>
          {filtered.map((data: CourseType, index: number) => {
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
