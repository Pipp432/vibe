'use client'
import React, { useState } from 'react'
import CardWrapper from '@/components/general/CardWrapper'
import { IoSearch } from "react-icons/io5";
import { BiSolidDownload } from "react-icons/bi";
import DatePicker from '../analysis/DatePicker';
import { CourseSearchFormDataType } from '../../../types';
function SearchBar() {
  const [isSearchBarFocus, setIsSearchBarFocus] = useState(false)
  const [formData,setFormData] = useState({} as CourseSearchFormDataType );
  const toggleOpenFilter = () => {
    setIsSearchBarFocus(!isSearchBarFocus)
    setFormData({section:-1,semester:"",year:""})
  }

  const handleChangeSearch = (e:React.FormEvent<HTMLInputElement>)=>{
    const value = e.currentTarget.value
    if(value.match(/\d+/g)) setFormData({...formData,courseID:value,name:''})
    else setFormData({...formData,name:value, courseID:''})
  }
  const handleSelectYearSemesterSection =(semester:string, section:number,year:string)=>{
    setFormData({...formData,section,semester,year})

  }
  return (
    <div className='flex flex-row gap-6 w-[full]'>
      <div className='flex flex-col gap-2 w-[70%]'>
        <input type='text' onChange={(e:React.FormEvent<HTMLInputElement>)=>{handleChangeSearch(e)}} className='text-2xl border-8 border-primary rounded-lg  p-2 h-16' placeholder='Search by ID and Name'></input>
        <div className='flex justify-start'>
          <button  onClick={toggleOpenFilter}>Filters</button>
        </div>
        {isSearchBarFocus && <div className=''>
          <CardWrapper>
            <div className='flex gap-10'>
              <div className='flex flex-col gap-2'>
                {"Semester"}
                <DatePicker onSubmit={handleSelectYearSemesterSection} pageName='courses'/>
              </div>
            </div>
          </CardWrapper>
        </div>}
      </div>
      <button className='w-16 h-16 bg-secondary rounded-lg flex justify-center items-center'
      onClick={()=>{console.log(formData)}}>
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
