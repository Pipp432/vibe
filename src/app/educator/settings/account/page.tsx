'use client'
import AccountItem from '@/components/settings/AccountItem'
import React from 'react'
import WarningText from './WarningText'
import useModal from '@/hooks/useModal'
import AccountDeletionConfirmationPopUp from '@/components/settings/AccountDeletionConfirmationPopUp'

function AccountSettingsPage() {
  const [isConfirmationModalOpen, toggleOpenModal] = useModal()
  return (
    <>
      {isConfirmationModalOpen && <AccountDeletionConfirmationPopUp closeOverlayHandler={toggleOpenModal} />}
      <div className='flex flex-col gap-10 mx-4'>
        <div className='flex mt-32 '>
          <div className='flex flex-col'>
            <div className='text-3xl'>Profile</div>
            <div className='flex flex-col'>
              <div className='text-lg '>Photo</div>
              <div className="bg-black w-32 h-32 rounded-full"></div>
            </div>
          </div>
          <div className='flex mt-[10vh] ml-[10vw] gap-x-48'>
            <div className=' flex flex-col item-start  gap-y-10'>
              <AccountItem title='Firstname' info='Pipp' />
              <AccountItem title='Contact Email' info='pipp.n@chula.ac.th.com' />
              <AccountItem title='University' info='Chulalongkorn University' />
              <AccountItem title='Department' info='Electrical Engineering' />
            </div>
            <div className=' flex flex-col item-start gap-x-72 gap-y-10'>
              <AccountItem title='Surname' info='Narva' />
              <AccountItem title='Phone Number' info='+66892245258' />

              <AccountItem title='Faculty' info='Engineering' />
              <button className='h-10 w-52 bg-secondary rounded-full text-lg'>Edit Profile</button>
            </div>
          </div>
        </div>
        <WarningText onClick={toggleOpenModal} />
      </div>
    </>
  )
}

export default AccountSettingsPage
