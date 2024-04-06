'use client'
import React, { useState } from 'react'

function UploadDataButtonSet() {
  const [file, setFile] = useState<File>();
  const handleFileUpload = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      setFile(e.currentTarget.files[0])
      console.log(e.currentTarget.files[0].name)
    }
  }
  return (
    <div className='flex flex-row gap-10 items-center justify-end'>
      <div className='text-black text-lg'>No Data Found</div>
      <label className='w-52 p-2 text-white rounded-full bg-success cursor-pointer' htmlFor='file-upload'>
        {"Upload"}
      </label>
      <input id='file-upload' className='hidden' onChange={handleFileUpload} type='file'></input>
    </div>

  )
}

export default UploadDataButtonSet
