'use client'
import React, { useState } from 'react'
import { RiArrowDropDownFill } from "react-icons/ri";
function DropdownOption({text}:{text:string}) {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <>
    <div  onMouseDown={()=>{setIsOpen(!isOpen)}} className='border-4 pl-2 border-black flex flex-row justify-between items-center w-[40vw] rounded-2xl'>
      <div className='text-2xl'>{text}</div> 
      <div><RiArrowDropDownFill size={"50"}/></div>
    </div>

      {isOpen&& <div className='w-[40vw] rounded-2xl bg-white h-[20vh] absolute translate-y-28 shadow-subtab shadow-md'></div>}
      
  </>
  )
}

export default DropdownOption
