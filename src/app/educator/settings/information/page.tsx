import SelectOption from '@/components/settings/SelectOption'
import DropdownOption from '@/components/settings/DropdownOption'
import React from 'react'

function InformationSettingsPage() {
  return (
    <div className='mt-36 p-4'>

      <div className='text-2xl'>Information Formatting</div>
      <div className='flex flex-col gap-2 mt-4'>
        <div className='text-md text-slate-500'>How emotions are represented</div>
        <SelectOption text={'text'} />
        <SelectOption text={'Emoji'} />
      </div>
      <div className='flex flex-col gap-2 mt-5'>
        <div className='text-md text-slate-500'>How courses are displayed</div>
        <DropdownOption text={'Full Name'} />
      </div>
      <div className='flex flex-col mt-5 gap-4' >
        <div className='text-2xl'>Language</div>

        <DropdownOption text={'English'} />

      </div>

      <div className='flex flex-col mt-5 gap-4' >
        <div className='text-2xl'>Theme</div>

        <div className='text-md text-slate-500'>Manage how the web's represented</div>
        <div className='flex'>
        </div>
      </div>
    </div>
  )
}

export default InformationSettingsPage
