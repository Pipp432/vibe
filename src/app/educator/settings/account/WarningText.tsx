import React from 'react'

function WarningText({onClick}:{onClick:()=>void}) {
  return (
      <div className='flex flex-col gap-4'>
        <div className='text-3xl text-red-500'>DANGER!!!</div>
        <div className='flex flex-row gap-4 text-2xl '>
          Would you like to delete your account?
          Once done it cannot be undone
          <button className='bg-error w-52 h-10 text-lg text-white rounded-xl hover:bg-error-hover' onClick={onClick}>{"DELETE ACCOUNT"}</button>
        </div>
      </div>
  )
}

export default WarningText
