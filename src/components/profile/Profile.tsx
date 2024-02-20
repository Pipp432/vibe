import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
function Profile() {
  return (
    <div className=' justify-between w-[25vw] h-24 rounded-lg flex items-center p-4'>
      <div className='rounded-full bg-black h-20 w-20'></div>
      <div className='flex flex-col'>
        <div className='text-xl'>{"Johnathan Smith"}</div>
        <div className='text-lg'>{"Course Director"}</div>

      </div>
     <IoMdArrowDropdown size={60}/> 

    </div>
  )
}

export default Profile
