'use client'
import React from 'react'


function Modal({title,children}:{title:string, children:React.ReactNode}) {
  return (
    <div className='rounded-lg w-[30rem] h-96 p-4 bg-white'> 
      <div className='text-2xl text-left text-black'>{title}</div>
      {children}
    </div>
  )
}

export default Modal
