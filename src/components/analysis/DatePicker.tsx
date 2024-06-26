'use client'
import React, { useEffect, useState } from 'react'

const DatePicker = ({ onSubmit, handleSelectDate = () => { }, pageName = 'analysis' }: { onSubmit: (() => void) | ((semester: string, section: number, year: string) => void), pageName?: string, handleSelectDate: (date: string) => void }) => {
  const years = ["2020","2021","2022","2023","2024"]
  const semesters = ["1","2","summer"]
  const [selectedYear, setSelectedYear] = useState("")
  const [selectedSemester, setSelectedSemester] = useState("")
  const [selectSection, setSelectedSection] = useState(-1)
  const handleSelectYear = (key: string) => {
    if (selectedYear === key) {
      setSelectedYear("")
    }
    else {
      setSelectedYear(key)
    }
  }
  const handleSelectSemester = (key: string) => {
    if (selectedSemester === key) {
      setSelectedSemester("")
    }
    else {
      setSelectedSemester(key)
    }
  }
  const handleYearRender = () => {
      return (<div className='flex gap-2'>
        <div className='grid grid-cols-2 gap-x-2 gap-y-2'>
          {years.map((year) => {
            return <div style={{ borderColor: `${selectedYear === year ? 'black' : ''}`, color: `${selectedYear === year ? 'black' : ''}`, backgroundColor:`${selectedYear===year?'#8EBAFF':''}` }} key={year} className='flex flex-row justify-center 
            items-center  border-2 w-20 h-12 border-gray-400 rounded-lg text-gray-400 
            hover:border-black hover:text-black cursor-pointer' onMouseDown={() => { handleSelectYear(year) }}>
              {year}
            </div>
          })}
        </div>
        <div className=' w-1 bg-black rounded-full' />
        <div className='flex flex-col gap-2'>

          {semesters.map((semester:string) => {
            return <div onMouseDown={() => { handleSelectSemester(semester) }} style={{
              borderColor: `${selectedSemester === semester ? 'black' : ''}`,
              color: `${selectedSemester === semester ? 'black' : ''}`,
              backgroundColor:`${selectedSemester===semester?'#8EBAFF':''}`
            }}
              key={semester} className='flex flex-row border-gray-400
              text-gray-400 justify-center hover:border-black hover:text-black items-center 
            border-2 w-20 h-12 rounded-lg cursor-pointer'>
              {semester}
            </div>
          })}
        </div>

      </div>)
  }


  useEffect(() => {
    if (pageName === 'analysis') {
      if (selectedYear === 'all') {
        handleSelectDate(selectedYear)
        onSubmit(selectedSemester, selectSection, selectedYear);
      }
      else if (selectedYear && selectedSemester) {
        if (handleSelectDate !== undefined) handleSelectDate(selectedYear + '/' + selectedSemester)
        onSubmit(selectedSemester, selectSection, selectedYear);
      }
    }
    else {
      if (selectSection) {
        onSubmit(selectedSemester, selectSection, selectedYear);
      }
    }
  }, [selectedYear, selectedSemester, selectSection])
  return (handleYearRender()
  )
}
export default DatePicker
