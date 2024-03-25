import React from 'react'
import UploadDataButtonSet from './UploadDataButtonSet'
import ViewDataButtonSet from './ViewDataButtonSet'
type courseInformationType={
  courseID:string,
  courseName:string,
  semester:string,
  section:number,
  dataState:number
}

function TableRow({courseInformation,toggleModal}:{courseInformation:courseInformationType,toggleModal?:()=>void}) {
  const getDataStateComponent = ()=>{
    switch (courseInformation.dataState) {
      case 0:
        return "N/A"
      case 1:
      return <UploadDataButtonSet/>
      case 2:
      return <ViewDataButtonSet toggleModal = {toggleModal!}/>
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
          {courseInformation.courseName}
          </td>

          <td>
          {courseInformation.semester}
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
