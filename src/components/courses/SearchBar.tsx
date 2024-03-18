import React from 'react'
import { IoSearch } from "react-icons/io5";
import { BiSolidDownload } from "react-icons/bi";
function SearchBar() {
  return (
    <div className='flex flex-row gap-6 w-[full]'>
      <input type='text' className='text-2xl border-8 border-primary rounded-lg w-[70%] p-2 h-16' placeholder='Search by ID, Name, Semester, Section '></input>
      
      <button className='w-16 h-16 bg-secondary rounded-lg flex justify-center items-center'>
        <IoSearch size={'50'}/>
      </button>
      <button className='w-52 px-2 h-16 bg-subTab rounded-lg flex gap-2 text-lg justify-center items-center'>
        {'CSV Format'}

        <BiSolidDownload size={'50'}/>
      </button>

    </div>
  )
}

export default SearchBar
