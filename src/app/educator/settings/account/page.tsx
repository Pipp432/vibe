import AccountItem from '@/components/settings/AccountItem'
import React from 'react'

function AccountSettingsPage() {
  return (
    <>
      <div className='flex mt-32 mx-6 '>
        <div className='flex flex-col'>
          <div className='text-3xl'>Profile</div>
          <div className='flex flex-col'>
            <div className='text-lg '>Photo</div>
            <div className="bg-black w-32 h-32 rounded-full"></div>
          </div>
        </div>
        <div className='w-[40vw] mt-[10vh] ml-[10vw] flex flex-wrap gap-x-72 gap-y-10'>
          <AccountItem title='Firstname' info='Johnathan' />
          <AccountItem title='Surname' info='Smithsonian' />

          <AccountItem title='Contact Email' info='HelloWorld@gmail.com' />
        </div>
      </div>
    </>
  )
}

export default AccountSettingsPage
