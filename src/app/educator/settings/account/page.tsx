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
        <div className='flex mt-[10vh] ml-[10vw] gap-x-48'>
          <div className=' flex flex-col item-start  gap-y-10'>
            <AccountItem title='Firstname' info='Johnathan' />
            <AccountItem title='Contact Email' info='HelloWorld@gmail.com' />
            <AccountItem title='University' info='Chulalongkorn University' />
            <AccountItem title='Department' info='Electrical Engineering' />
          </div>
          <div className=' flex flex-col item-start gap-x-72 gap-y-10'>
            <AccountItem title='Surname' info='Smithsonian' />
            <AccountItem title='Phone Number' info='+66892245258' />

            <AccountItem title='Faculty' info='Engineering' />
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountSettingsPage
