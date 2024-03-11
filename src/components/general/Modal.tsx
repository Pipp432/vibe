'use client'
import React from 'react'


function Modal({title,children}:{title:string, children:React.ReactNode}) {
  return (
    <div className='rounded-lg   bg-white'> 
      <div className='text-2xl text-left text-black'>{title}</div>
      {children}
    </div>
  )
}

export default Modal
