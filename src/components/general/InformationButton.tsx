import React from 'react'

function InformationButton({onClick}:{onClick:()=>void}) {
  return (
    <button className='z-10' onClick={onClick}>
      <div className='rounded-full flex justify-center items-center w-10 h-10 
      border-4 border-black text-3xl cursor-pointer'>{"?"}
      </div>

    </button>
  )
}

export default InformationButton
