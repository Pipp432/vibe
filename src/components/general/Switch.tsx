'use client'
import React, { useState } from 'react'

function Switch({isOn,setIsOn}:{isOn:boolean, setIsOn:()=>void}) {
  return (
    <div className='bg-subTab rounded-full p-1 w-16 h-8 flex items-center duration-300'
    style={{backgroundColor:`${isOn?'black':''}`}}
    onMouseDown={setIsOn}>
      <div className='w-6 h-6 rounded-full bg-white shadow-gray-50 duration-300' style={{translate:`${isOn?'125%':'0'}`}}></div>
    </div>
  )
}

export default Switch
