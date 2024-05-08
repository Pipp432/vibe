'use client'
import React, { useEffect, useState } from 'react'
import CardWrapper from '@/components/general/CardWrapper'
import { IoSearch } from "react-icons/io5";
import { BiSolidDownload } from "react-icons/bi";
import { CourseSearchFormDataType } from '../../../types';
function SearchBar({ setFilterTable }: { setFilterTable: (filter: CourseSearchFormDataType) => void }) {
  const years = ["2020", "2021", "2022", "2023", "2024"]
  const semesters = ["1", "2", "summer"]
  const [selectedSemester, setSelectedSemester] = useState("")
  const [selectedYear, setSelectedYear] = useState("")
  const [selectedSection, setSelectedSection] = useState(-1)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [formData, setFormData] = useState({} as CourseSearchFormDataType);
  const toggleOpenFilter = () => {
    setIsFilterOpen(!isFilterOpen)
    setFormData({ section: -1, semester: "", year: "" })
    setSelectedSection(-1)
    setSelectedYear("")
    setSelectedSemester("")
  }

  const handleChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    if (value.match(/\d+/g)) setFormData({ ...formData, courseID: value, name: '' })
    else setFormData({ ...formData, name: value, courseID: '' })
  }
  const handleSelectYearSemesterSection = (semester: string, section: number, year: string) => {
    setFormData({ ...formData, section, semester, year })

  }
  useEffect(() => {
    handleSelectYearSemesterSection(selectedSemester, selectedSection, selectedYear)
  }, [selectedSemester, selectedSection, selectedYear])
  return (
    <div className='flex flex-row gap-6 w-[full]'>
      <div className='flex flex-col gap-2 w-[70%]'>
        <input type='text' onChange={(e: React.FormEvent<HTMLInputElement>) => { handleChangeSearch(e) }} className='text-2xl border-8 border-primary rounded-lg  p-2 h-16' placeholder='Search by ID and Name'></input>
        <div className='flex justify-start'>
          <button style={{ color: `${isFilterOpen ? "red" : ""}` }} onClick={toggleOpenFilter}>{isFilterOpen ? "Close & Clear" : "Filter"}</button>
        </div>
        {isFilterOpen && <div className=''>
          <CardWrapper>
            <div className='flex gap-10'>

              <div className='flex flex-col gap-2'>
                {"Years"}
                <div className='grid grid-cols-2 gap-2'>
                  {years.map((year: string) => {
                    return <div onMouseDown={() => { setSelectedYear(year) }} style={{
                      borderColor: `${selectedYear === year ? 'black' : ''}`,
                      color: `${selectedYear === year ? 'black' : ''}`,
                      backgroundColor: `${selectedYear === year ? '#8EBAFF' : ''}`
                    }}
                      key={year} className='flex flex-row border-gray-400
              text-gray-400 justify-center hover:border-black hover:text-black items-center 
            border-2 w-20 h-12 rounded-lg cursor-pointer'>
                      {year}
                    </div>
                  })}
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                {"Semester"}
                {semesters.map((semester: string) => {
                  return <div onMouseDown={() => { setSelectedSemester(semester) }} style={{
                    borderColor: `${selectedSemester === semester ? 'black' : ''}`,
                    color: `${selectedSemester === semester ? 'black' : ''}`,
                    backgroundColor: `${selectedSemester === semester ? '#8EBAFF' : ''}`
                  }}
                    key={semester} className='flex flex-row border-gray-400
              text-gray-400 justify-center hover:border-black hover:text-black items-center 
            border-2 w-20 h-12 rounded-lg cursor-pointer'>
                    {semester}
                  </div>
                })}
              </div>
              <div className='flex flex-col gap-2'>
                {"Section"}
                <input className='rounded-lg border-2 p-2 w-[5vw] border-black' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSelectedSection(Number(e.currentTarget.value)) }} />

              </div>

            </div>

          </CardWrapper>
        </div>}
      </div>
      <button className='w-16 h-16 bg-secondary rounded-lg flex justify-center items-center'
        onClick={() => { setFilterTable(formData);  }}>
        <IoSearch size={'50'} />
      </button>
      <button className='w-52 px-2 h-16 bg-subTab rounded-lg flex gap-2 text-lg justify-center items-center'>
        {'CSV Format'}
        <BiSolidDownload size={'50'} />
      </button>

    </div>
  )
}

export default SearchBar
