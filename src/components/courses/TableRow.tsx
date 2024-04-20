import React from 'react'
import UploadDataButtonSet from './UploadDataButtonSet'
import { CourseType } from '../../../types'
function TableRow({ index,courseInformation, toggleModal }: {index:number, courseInformation: CourseType, toggleModal: () => void }) {
  return (

    <tr className='text-center p-2'>
      <td>
        {courseInformation.courseID}
      </td>
      <td>
        {courseInformation.name}
      </td>

      <td>
        {`${courseInformation.year}/${courseInformation.semester}`}
      </td>
      <td className='w-2'>
        {courseInformation.section}
      </td>
      <td className='px-2' >{
        <UploadDataButtonSet index ={index} courseData = {courseInformation} isUploaded={courseInformation.isUploaded} toggleModal={toggleModal}/>
      }
      </td>
    </tr>
  )
}

export default TableRow
