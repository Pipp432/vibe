'use client'
import React, { useEffect,  useState } from 'react'
import NavigationItem from './NavigationItem'
import Image from 'next/image'
import logo from "../../../public/images/logo.png"
import SelectionIndicator from './SelectionIndicator'
import { usePathname, useRouter } from 'next/navigation'
function NavigationTab() {
  const [position,setPosition] = useState(28);
  const [currentSelection, setCurrentSelection] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const pagename: string = pathname.split("/").pop()!

  const changeIndicatorPosition = (changePosition: number) => {

    if(currentSelection>changePosition) setPosition(position - 16.5*(currentSelection-changePosition))
    if(currentSelection<changePosition)setPosition(position +16.5*(changePosition-currentSelection))
    
    setCurrentSelection(changePosition)
    
  }
  const pathDict: any = {
    "dashboard": 0,
    "analysis": 1,
    "courses": 2,
    "settings": 3,
    "account":3,
    "information":3
  }
  useEffect(() => {
    changeIndicatorPosition(pathDict[pagename])
   },[pagename])
  return (
    <>
    <div className='w-72 h-full bg-primary relative'>

      <div className='absolute top-0 duration-200'style={{transform:`translateY(${position}vh)`}}><SelectionIndicator/></div>
      <div className='cursor-pointer my-4 flex flex-col justify-center gap-[10vh] items-center text-2xl'>

        <Image src={logo} width={160} height={60} alt='logo' />
          <NavigationItem name={"Dashboard"} onClick={() => {
            router.push("/educator/dashboard")

            changeIndicatorPosition(0)
          }} />
          <NavigationItem name={"Analysis"} onClick={() => {
            changeIndicatorPosition(1)
            router.push("/educator/analysis")
          }} />

          <NavigationItem name={"Courses"} onClick={() => {

            router.push("/educator/courses")
            changeIndicatorPosition(2)
          }} />

          <NavigationItem name={"Settings"} onClick={() => {
            changeIndicatorPosition(3)
            router.push("/educator/settings/account")
          }
          } />

      </div>

    </div>
  </>
  )
}

export default NavigationTab
