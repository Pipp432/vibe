'use client'
import React, { useState } from 'react'
import Switch from '../general/Switch'
function SelectOption({text, icon}:{text:String, icon?:any}) {
  const toggleOn=()=>{
    setIsOn(!isOn)
  } 
  const [isOn,setIsOn]=useState(false);
  return (
    <div className='border-4 p-2 border-subTab flex flex-row justify-between w-[40vw] rounded-2xl'
    style={{borderColor:`${isOn ? 'black':''}`}}>
      <div className='text-2xl'>{text}</div>
      <Switch isOn={isOn} setIsOn={toggleOn}/>
    </div>
  )
}

export default SelectOption
