'use client'
import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import ProfileMenu from "@/components/profile/ProfileMenu"
function Profile() {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggleMenu = () => {
    setIsOpen(!isOpen)

  }
  return (
    <div className='flex flex-col items-end p-4'>
      <div className=' justify-between w-[25vw] h-24 rounded-lg flex items-center'>
        <div className='rounded-full bg-black h-20 w-20'></div>
        <div className='flex flex-col'>
          <div className='text-xl'>{"Johnathan Smith"}</div>
          <div className='text-lg'>{"Course Director"}</div>

        </div>
        <button className="" onClick={handleToggleMenu}>
          <IoMdArrowDropdown size={60} />
        </button>

      </div>

      {isOpen &&
        
          <ProfileMenu />

      }
    </div>
  )
}

export default Profile
