import React from 'react'

function UploadDataButtonSet() {
  return (
    <div className='flex flex-row gap-10 items-center justify-end'>
      <div className='text-black text-lg'>No Data Found</div>
      <label className='w-52 p-2 text-white rounded-full bg-success cursor-pointer' htmlFor='file-upload'>

      Upload
      </label>

        <input id ='file-upload'className='hidden'  type='file'></input>
    </div>

  )
}

export default UploadDataButtonSet
