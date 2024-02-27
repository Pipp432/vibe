import React from 'react'

function ProgressStatusCircle({color}:{color:string}) {
  return (
    <div className='rounded-full w-8 h-8 border-4 border-black' style={{backgroundColor:color}}></div>
  )
}

export default ProgressStatusCircle
