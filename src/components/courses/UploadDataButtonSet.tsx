'use client'
import React, { useState, useRef } from 'react'
import ViewDataButtonSet from './ViewDataButtonSet'
import { CourseType } from '../../../types';
function UploadDataButtonSet({index,courseData,isUploaded,toggleModal}:{index:number,courseData:CourseType,isUploaded:string,toggleModal:()=>void}) {
  const formElement = useRef(null);
  const [isProcessing, setIsProcessing] = useState(isUploaded==='Processing')
  const [isSuccess,setIsSuccess] = useState(isUploaded==="Yes")
  const [filename, setFilename] = useState("No Data")
  const sendFileToML = async (e: any) => {
    e.preventDefault();
    try {
      if (formElement.current) {
        const data = new FormData(formElement.current)
        const result = await fetch("http://127.0.0.1:5000/ml", { method: "POST",body: data})
        if (result.status === 200) { setIsProcessing(false);  setIsSuccess(true)}
      }
    }
    catch {
      console.log("Error")
    }
  }
  return (
    <>
     {!isSuccess&& <form style={{justifyContent:`${isProcessing?'center':''}`,transform:`${isProcessing?"translate(2rem,0rem)":""}`}} method="POST" className='w-full flex gap-8 justify-end items-center' ref={formElement} onSubmit={sendFileToML} action="" encType="multipart/form-data">
        <div className='text-black text-lg '>{isProcessing ? "Processing..." : filename}</div>
        <div className='flex gap-2'>
          <label className='w-52 p-2 text-black rounded-full bg-secondary cursor-pointer' hidden={isProcessing} htmlFor={`file-upload-${index}`}>
            {"Upload"}
          </label>
          <input id={`file-upload-${index}`} name='file' className='hidden' type='file' onChange={(e:any) => { setFilename(e.target.files[0].name) }}></input>
          <button type='submit' style={{backgroundColor:`${filename!=='No Data'?"":"#B8B8B8"}`}} disabled={filename==='No Data'} className='text-white rounded-full bg-success p-2 w-52' hidden={isProcessing} onClick={() => { setIsProcessing(true) }}>Submit</button>
          
        </div>
      </form>}
      {isSuccess && <ViewDataButtonSet courseData={courseData}/>}
    </>
  )
}

export default UploadDataButtonSet
