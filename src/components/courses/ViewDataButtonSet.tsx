
import React from 'react'

function UploadDataButtonSet({toggleModal}:{toggleModal:()=>void}) {
  return (
    <div className='flex flex-row gap-3 items-center justify-end'>
    <button className='w-52 p-2 text-white rounded-full bg-error' onClick={toggleModal}>Delete</button>
    <button className='w-52 p-2 text-white rounded-full bg-primary'>See Comments</button>
    </div>

  )
}

export default UploadDataButtonSet
