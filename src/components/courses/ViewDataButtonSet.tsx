import { useRouter } from 'next/navigation'
import React from 'react'

function UploadDataButtonSet({toggleModal}:{toggleModal:()=>void}) {
  const router = useRouter()
  return (
    <div className='flex flex-row gap-3 items-center justify-end'>
    <button className='w-52 p-2 text-white rounded-full bg-error' onClick={toggleModal}>Reupload</button>
    <button className='w-52 p-2 text-white rounded-full bg-primary' onClick={()=>{
        router.push("/educator/courses/comments")
      }}>See Comments</button>
    </div>

  )
}

export default UploadDataButtonSet
