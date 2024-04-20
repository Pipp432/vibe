import { useRouter } from 'next/navigation'
import React from 'react'
import { CourseType } from '../../../types'
import { deleteCourseUpload } from '@/services/courseService'

function UploadDataButtonSet({ courseData }: { courseData: CourseType }) {
  const router = useRouter()
  const reuploadHandler = async () => {
    await deleteCourseUpload(courseData.courseID, courseData.section, courseData.semester, courseData.year);
  }
  return (
    <div className='flex flex-row gap-3 items-center justify-end'>
      <button className='w-52 p-2 text-white rounded-full bg-error' onClick={reuploadHandler}>Reupload</button>
      <button className='w-52 p-2 text-white rounded-full bg-primary' onClick={() => {
        router.push("/educator/courses/comments")
      }}>See Comments</button>
    </div>

  )
}

export default UploadDataButtonSet
