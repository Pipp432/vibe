import React from 'react'

function Card({children}:{children:React.ReactNode}) {
  return (
    <div className='w-fit shadow-black shadow-md p-4 bg-white rounded-xl'>{children}</div>
  )
}

export default Card
