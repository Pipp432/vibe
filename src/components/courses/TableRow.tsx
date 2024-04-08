import React from 'react'
import UploadDataButtonSet from './UploadDataButtonSet'
import ViewDataButtonSet from './ViewDataButtonSet'
import { CourseType } from '../../../types'
function TableRow({ courseInformation, toggleModal }: { courseInformation: CourseType, toggleModal?: () => void }) {
  return (

    <tr className='text-center'>
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
        <UploadDataButtonSet isUpload={courseInformation.isUpload}/>
      }
      </td>
    </tr>
  )
}

export default TableRow
