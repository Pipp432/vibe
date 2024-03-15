'use client'
import React, { useEffect, useRef, useState } from 'react'
import NavigationItem from './NavigationItem'
import Image from 'next/image'
import logo from "../../../public/images/logo.png"
import SelectionIndicator from './SelectionIndicator'
import { usePathname, useRouter } from 'next/navigation'
function NavigationTab() {
  const [currentSelection, setCurrentSelection] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const pagename: string = pathname.split("/").pop()!

  const changeIndicatorPosition = (changePosition: number) => {

    setCurrentSelection(changePosition)
  }
  const pathDict: any = {
    "dashboard": 0,
    "analysis": 1,
    "courses": 2,
    "settings": 3
  }
  useEffect(() => {
    changeIndicatorPosition(pathDict[pagename])
  })
  return (
    <div className='w-72 h-full bg-primary relative'>
      <div className='translate-y-64'>

      </div>
      <div className='cursor-pointer my-4 flex flex-col gap-20 items-center text-2xl'>

        <Image src={logo} width={160} height={60} alt='logo' />
        <div className='flex flex-row w-full justify-between'>
          {currentSelection === 0 ? <SelectionIndicator /> : <div />}
          <NavigationItem name={"Dashboard"} onClick={() => {
            router.push("/educator/dashboard")

            changeIndicatorPosition(0)
          }} />
        </div>
        <div className='flex flex-row w-full justify-between'>
          {currentSelection === 1 ? <SelectionIndicator /> : <div />}
          <NavigationItem name={"Analysis"} onClick={() => {
            changeIndicatorPosition(1)
            router.push("/educator/analysis")
          }} />
        </div>
        <div className='flex flex-row w-full justify-between'>

          {currentSelection === 2 ? <SelectionIndicator /> : <div />}
          <NavigationItem name={"Courses"} onClick={() => {

            router.push("/educator/courses")
            changeIndicatorPosition(2)
          }} />
        </div>
        <div className='flex flex-row w-full justify-between'>

          {currentSelection === 3 ? <SelectionIndicator /> : <div />}
          <NavigationItem name={"Settings"} onClick={() => {
            changeIndicatorPosition(3)
            router.push("/educator/settings/account")
          }
          } />
        </div>

      </div>

    </div>
  )
}

export default NavigationTab
