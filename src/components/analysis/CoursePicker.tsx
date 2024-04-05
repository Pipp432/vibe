'use client'
import React, { useEffect, useState } from 'react'

function CoursePicker({onSubmit,handleSelectCourse}:{onSubmit:()=>void,handleSelectCourse:(course:string)=>void}) {

  const courses = ['123456', '234567', '124325', '234354']
  const [filter, setFilter] = useState("")
  const [filteredCourses, setFilteredCourses] = useState(courses)
  useEffect(() => {
    if (filter === "") setFilteredCourses(courses)
    else {
      const regex = new RegExp(`^${filter}`)
      setFilteredCourses(courses.filter((course) => (course.match(regex))))
    }
  }, [filter])
  return (
    <>
      <div className='flex w-full '>
        <input placeholder='find your course' type='text'
          className='rounded-lg p-2' onChange={e=>{setFilter(e.target.value)}} />
      </div>

        {filteredCourses.map((course,index) => {
          return <div key={index} onMouseDown={()=>{onSubmit();handleSelectCourse(course)}}
          className='flex flex-row justify-center 
            items-center  border-2  h-12 border-gray-400 rounded-lg text-gray-400 
            hover:border-black hover:text-black cursor-pointer'>{course}</div>
        })}

    </>
  )
}

export default CoursePicker
