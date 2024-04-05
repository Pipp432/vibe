import React from 'react'
import UploadDataButtonSet from './UploadDataButtonSet'
import ViewDataButtonSet from './ViewDataButtonSet'
import { CourseType } from '../../../types'
function TableRow({ courseInformation, toggleModal }: { courseInformation: CourseType, toggleModal?: () => void }) {
  const getDataStateComponent = () => {
    switch (courseInformation.isUpload) {
      case 0:
        return <UploadDataButtonSet />
      case 1:
        return <ViewDataButtonSet toggleModal={toggleModal!} />
      default:
        break;
    }
  }
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
      <td>
        {courseInformation.section}
      </td>
      <td className='px-2'>{
        getDataStateComponent()
      }
      </td>
    </tr>
  )
}

export default TableRow
