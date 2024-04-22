import React, { useState, useEffect, useContext } from 'react'
import CoursePicker from '@/components/analysis/CoursePicker'
import DatePicker from "@/components/analysis/DatePicker"
import { queryCourses } from '@/services/analysisService';
import { LoginContext } from '@/app/contexts/LoginContext';
function CourseSelector({ onFormComplete }: { onFormComplete: (e: Array<string>) => void }) {
  const [courses, setCourses] = useState([] as Array<string>)
  const [isSelectCourseOpen, setIsSelectCourseOpen] = useState(false);
  const [isSelectDateOpen, setIsSelectDateOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const toggleSelectCourseHandler = () => { setIsSelectCourseOpen(!isSelectCourseOpen) }
  const toggleSelectDateHandler = () => { setIsSelectDateOpen(!isSelectDateOpen) }
  const loginState = useContext(LoginContext)
  const query = async () => {
    const data = await queryCourses(`SELECT * FROM Oversees WHERE emailChula='${loginState.emailChula}'`)
    const unique:Array<string>= []
    for(let i=0;i<data.courses.length;i++){
      if(!unique.includes(data.courses[i])){
        unique.push(data.courses[i])
      }
    }
    setCourses(unique)
  }
  useEffect(() => {
    query();
    if (selectedDate && selectedCourse) onFormComplete([selectedDate, selectedCourse]);
    else onFormComplete([])

  }, [selectedDate, selectedCourse])
  return (
    <>
      <div className='flex gap-10 ml-10 mt-32'>
        <div className='flex flex-col gap-2 justify-start'>
          <button onClick={toggleSelectCourseHandler} className='flex justify-center bg-secondary text-xl rounded-lg w-[12vw] p-2'>{selectedCourse ? selectedCourse : 'Select Course'}</button>
          {isSelectCourseOpen &&
            <div className='absolute translate-y-12'>
              <div className='rounded-lg shadow-md bg-white shadow-black'>
                <CoursePicker courses={courses} onSubmit={toggleSelectCourseHandler} handleSelectCourse={setSelectedCourse} />
              </div>
            </div>
          }
        </div>
        <div className='flex flex-col gap-2 justify-start'>
          <button onClick={toggleSelectDateHandler} className='flex justify-center bg-secondary text-xl rounded-lg w-[12vw] p-2'>{selectedDate ? selectedDate : 'Select Date'}</button>

          {isSelectDateOpen &&
            <div className='absolute translate-y-12'>
              <div className='p-2 rounded-lg shadow-md bg-white shadow-black'>
                <DatePicker onSubmit={toggleSelectDateHandler} handleSelectDate={setSelectedDate} />
              </div>

            </div>}
          {(selectedDate === '' || selectedCourse === '') &&
            <div className='grid place-items-center h-[70vh] text-3xl ml-[10vw]'>
              {selectedDate === '' && selectedCourse === '' && <div>{"Please select date and course"}</div>}
              {selectedDate === '' && selectedCourse !== '' && <div>{"Please select date"}</div>}
              {selectedCourse === '' && selectedDate !== '' && <div>{"Please select course"}</div>}
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default CourseSelector
