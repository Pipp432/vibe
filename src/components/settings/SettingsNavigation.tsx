'use client'
import React ,{useRef,useState,useEffect}from 'react'
import SelectionIndicator from '../navigation/SelectionIndicator'

import { usePathname, useRouter } from 'next/navigation'
export const SettingsNavigation = () => {
  
  const indicator = useRef<HTMLDivElement>(null);
  const router =  useRouter(); 
  const [currentSelection, setCurrentSelection] = useState(0);
  const [position,setPosition] = useState(10)
  const changeIndicatorPosition = (changePosition: number) => {

    if(currentSelection>changePosition) setPosition(position - 11.5*(currentSelection-changePosition))
    if(currentSelection<changePosition)setPosition(position +11.5*(changePosition-currentSelection))
    console.log(currentSelection,changePosition);
    console.log(position)
    
    setCurrentSelection(changePosition)
  }

  const pathDict: any = {
    "account":0,
    "information":1
  }
  const pathname = usePathname();
  const pagename: string = pathname.split("/").pop()!
  useEffect(() => {
    console.log(pagename)
    changeIndicatorPosition(pathDict[pagename])
   })
  return (
    <div className='relative h-[100vh] bg-subTab w-48'>
      <div className='absolute duration-200'style={{transform:`translateY(${position}vh)`}}>
        <SelectionIndicator />
      </div>
      <div className='p-10 justify-center items-center flex flex-col gap-20 text-2xl text-white'>
        <div className='mt-2'></div>
        <div className='cursor-pointer' onClick={()=>{
         router.push("/educator/settings/account")
          changeIndicatorPosition(0)
        }} >Account</div>
        <div className='cursor-pointer' onClick={()=>{
          router.push("/educator/settings/information")
          changeIndicatorPosition(1)}
        }>Information</div>
      </div>      
    </div>
  )
}
