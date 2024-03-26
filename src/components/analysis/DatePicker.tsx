'use client'
import React, { useState } from 'react'

const DatePicker = () => {
  const [selectedYear, setSelectedYear] = useState("")
  const [selectedSemester, setSelectedSemester] = useState("")
  const years = ["2020", "2021", "2022", "2023", "2024"]
  const semesters = ["1", "2", "summer"]
  const handleSelectYear = (key: string) => {
    if (selectedYear === key) {
      setSelectedYear("")
    }
    else {
      setSelectedYear(key)
    }
  }
  const handleSelectSemester= (key: string) => {
    if (selectedSemester=== key) {
      setSelectedSemester("")
    }
    else {
      setSelectedSemester(key)
    }
  }
  return (
    <div className='flex gap-2  rounded-lg p-2 shadow-black shadow-md mt-24'>
      <div className='grid grid-cols-2 gap-x-2 gap-y-2'>
        {years.map((year) => {
          return <div style={{ borderColor: `${selectedYear === year ? 'black' : ''}`, color: `${selectedYear === year ? 'black' : ''}` }} key={year} className='flex flex-row justify-center 
            items-center  border-2 w-20 h-12 border-gray-400 rounded-lg text-gray-400 
            hover:border-black hover:text-black cursor-pointer' onMouseDown={() => { handleSelectYear(year) }}>
            {year}
          </div>
        })}
      </div>
      <div className=' w-1 bg-black rounded-full' />
      <div className='flex flex-col gap-2'>

        {semesters.map((semester) => {
          return <div onMouseDown={() => { handleSelectSemester(semester) }} style={{ borderColor: `${selectedSemester=== semester? 'black' : ''}`, 
            color: `${selectedSemester === semester? 'black' : ''}` }} 
            key={semester} className='flex flex-row border-gray-400
              text-gray-400 justify-center hover:border-black hover:text-black items-center border-2 w-20 h-12 rounded-lg cursor-pointer '>
            {semester}
          </div>
        })}
      </div>

    </div>
  )
}

export default DatePicker
