import React from 'react'

function CardWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-fit shadow-gray-400 shadow-md p-4 bg-white rounded-xl'>{children}</div>

  )
}

export default CardWrapper
