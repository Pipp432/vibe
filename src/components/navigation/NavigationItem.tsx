import React from 'react'

export default function NavigationItem({name, onClick}:{name:string, onClick:()=>void}) {
  return (
    <div className='flex text-white text-header items-center gap-3 w-64' onMouseDown={onClick}>

      <div className='cursor-pointer w-16 h-16 rounded-full bg-white'></div>
      <div className='cursor-pointer'>{name}</div>
    </div>
  )
}
