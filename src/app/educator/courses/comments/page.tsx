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
          <div className='border-2 border-black rounded-lg w-[40vw] shadow-md h-40 shadow-black p-4'>{"Looking back, that one course that I took was one that I did not regret."}</div>
          <div className='border-2 border-black rounded-lg w-[40vw] shadow-md h-40 shadow-black p-4'>{"Although there were a lot of assignments and even a final presentation at the end, and the criteria to get A for the course was pretty high and group based."}</div>
          <div className='border-2 border-black rounded-lg w-[40vw] shadow-md h-40 shadow-black p-4'>{"Still, it was overall enjoyable with a professor that is enthusiastic towards his subject."}</div>
          <div className='border-2 border-black rounded-lg w-[40vw] shadow-md h-40 shadow-black p-4'>{"Taking this course with no prior background was a complete disappointment."}</div>
          <div className='border-2 border-black rounded-lg w-[40vw] shadow-md h-40 shadow-black p-4'>{"The grading criteria were absurdly strict, and it felt like the content was intentionally designed to be difficult."}</div>
          <div className='border-2 border-black rounded-lg w-[40vw] shadow-md h-40 shadow-black p-4'>{"I often left the lectures feeling confused and demotivated, and it made me angry that the teaching style didn't cater to students with no experience in the subject."}</div>
          <div className='border-2 border-black rounded-lg w-[40vw] shadow-md h-40 shadow-black p-4'>{"This course provided a comprehensive overview of the subject matter, covering a wide range of topics."}</div>
          <div className='border-2 border-black rounded-lg w-[40vw] shadow-md h-40 shadow-black p-4'>{"While the teaching style was not particularly engaging, the material was well-organized, and the professor's expertise was evident."}</div>
          <div className='border-2 border-black rounded-lg w-[40vw] shadow-md h-40 shadow-black p-4'>{"This course was a true joy."}</div>
          <div className='border-2 border-black rounded-lg w-[40vw] shadow-md h-40 shadow-black p-4'>{"This course was a true joy."}</div>
          <div className='border-2 border-black rounded-lg w-[40vw] shadow-md h-40 shadow-black p-4'>{"The sense of accomplishment I felt after mastering the material brought immense joy into my learning journey."}</div>
          <div className='border-2 border-black rounded-lg w-[40vw] shadow-md h-40 shadow-black p-4'>{"I found this course to be informative and suitable for beginners."}</div>
        </div>
      </div>
    </div>
  )
}

export default Comments
