'use client'
import React, { useRef } from 'react'

function UploadDataButtonSet() {
  const formElement = useRef(null);
  const sendFileToML = async (e: any) => {
    e.preventDefault();
    try {
      if (formElement.current) {
        const data = new FormData(formElement.current)
        console.log("Run")
        const result = await fetch("http://127.0.0.1:5000/test_csv", { method: "POST", body: data})
      }
    }
    catch {
      console.log("Error")
    }
  }
  return (
    <div className='flex flex-row gap-10 items-center justify-end'>
      <form method="POST" className='w-full flex gap-2 justify-center items-center' ref={formElement} onSubmit={sendFileToML} action="" encType="multipart/form-data">
        <div className='text-black text-lg'>No Data Found</div>
        <label className='w-52 p-2 text-white rounded-full bg-success cursor-pointer' htmlFor='file-upload'>
          {"Upload"}
        </label>
        <input id='file-upload' name='file' className='hidden' type='file'></input>
        <button type='submit'>Test</button>
      </form>
    </div>

  )
}

export default UploadDataButtonSet
