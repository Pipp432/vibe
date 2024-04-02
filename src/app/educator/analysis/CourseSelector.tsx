import React, { useState, useEffect } from 'react'
import CoursePicker from '@/components/analysis/CoursePicker'
import DatePicker from "@/components/analysis/DatePicker"
function CourseSelector({ onFormComplete }: { onFormComplete: (e: Array<string>) => void }) {

  const [isSelectCourseOpen, setIsSelectCourseOpen] = useState(false);
  const [isSelectDateOpen, setIsSelectDateOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const toggleSelectCourseHandler = () => { setIsSelectCourseOpen(!isSelectCourseOpen) }
  const toggleSelectDateHandler = () => { setIsSelectDateOpen(!isSelectDateOpen) }

  useEffect(() => {
    if (selectedDate && selectedCourse) onFormComplete([selectedDate,selectedCourse]);
    else onFormComplete([])

  }, [selectedDate, selectedCourse])
  return (
    <>
      <div className='flex gap-10 ml-10 mt-32'>
        <div className='flex flex-col gap-2 justify-start'>
          <button onClick={toggleSelectCourseHandler} className='flex justify-center bg-secondary text-xl rounded-lg w-[12vw] p-2'>{selectedCourse ? selectedCourse : 'Select Course'}</button>
          {isSelectCourseOpen &&
            <div className='absolute translate-y-12'>
              <CoursePicker onSubmit={toggleSelectCourseHandler} handleSelectCourse={setSelectedCourse} />
            </div>
          }
        </div>
        <div className='flex flex-col gap-2 justify-start'>
          <button onClick={toggleSelectDateHandler} className='flex justify-center bg-secondary text-xl rounded-lg w-[12vw] p-2'>{selectedDate ? selectedDate : 'Select Date'}</button>

          {isSelectDateOpen &&
            <div className='absolute translate-y-12'>
              <DatePicker onSubmit={toggleSelectDateHandler} handleSelectDate={setSelectedDate} />
            </div>}

        </div>
      </div>
    </>
  )
}

export default CourseSelector
