import React from 'react'

function AccountItem({title,info}:{title:string,info:string}) {
  return (
    <div className='  flex flex-col gap-4'>
      <div className='font-bold text-2xl'>{title}</div>

      <div className='font-thin text-xl'>{info}</div>
    </div>
  )
}

export default AccountItem
