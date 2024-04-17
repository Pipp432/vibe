'use client'
import React, { useContext, useEffect, useReducer, useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import ProfileMenu from "@/components/profile/ProfileMenu"
import { getAuth } from 'firebase/auth';
import { LoginContext } from '@/app/contexts/LoginContext';
import { ProfessorType } from '../../../types';
function Profile() {
  
  const loginState:ProfessorType = useContext(LoginContext)
  const currentUser = localStorage.getItem('emailChula')||""
  console.log(currentUser.length!==0)
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(currentUser.length!==0)
  const handleToggleMenu = () => {
    setIsOpen(!isOpen)

  }
  return (
    <div className='flex flex-col items-end p-4'>
      <div className=' justify-between w-[25vw] h-24 rounded-lg flex items-center'>
        <div className='rounded-full bg-black h-20 w-20'></div>
        <div className='flex flex-col'>
          <div className='text-xl'>{isLoggedIn ? `${loginState?.firstName} ${loginState?.lastName}` : "Please login"}</div>
          {isLoggedIn && <div className='text-lg'>{loginState?.role}</div>}   
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
