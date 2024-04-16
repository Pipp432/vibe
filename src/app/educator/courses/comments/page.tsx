'use client'
import React from 'react'
import {useRouter} from 'next/navigation'
function Comments() {
  const router = useRouter()
  return (
    <div className='ml-[20vw] mt-24 grid place-items-center h-[100vh]'>
      <button onClick={()=>{router.back()}} className='bg-secondary p-4 rounded-lg '>Go back</button>
      <div className='overflow-y-scroll h-[70vh]'>
        <div className='flex flex-col gap-4'>
          <div className='border-2 border-black rounded-lg w-[40vw] shadow-md h-40 shadow-black p-4'>{"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."}</div>
          <div className='border-2 border-black rounded-lg w-[40vw] shadow-md h-40 shadow-black p-4'>{"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."}</div>
          <div className='border-2 border-black rounded-lg w-[40vw] shadow-md h-40 shadow-black p-4'>{"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."}</div>
          <div className='border-2 border-black rounded-lg w-[40vw] shadow-md h-40 shadow-black p-4'>{"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."}</div>
          <div className='border-2 border-black rounded-lg w-[40vw] shadow-md h-40 shadow-black p-4'>{"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."}</div>
        </div>
      </div>
    </div>
  )
}

export default Comments
