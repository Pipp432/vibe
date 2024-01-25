'use client'
import React, { useRef, useState } from 'react'
import NavigationItem from './NavigationItem'
import Image from 'next/image'
import logo from "../../../public/images/logo.png"
import SelectionIndicator from './SelectionIndicator'
function NavigationTab() {
  const [currentSelection, setCurrentSelection] = useState(0);
  const indicator = useRef<HTMLDivElement>(null);
  const changeIndicatorPosition = (changePosition: number) => {
    
    if (indicator.current) {
    console.log(changePosition);
      if(currentSelection<changePosition){
        indicator.current.style.top = parseFloat(indicator.current.style.top.replace("rem", "")) +
          (9*(changePosition-currentSelection)) + "rem"
        setCurrentSelection(changePosition)
      }
      if(currentSelection>changePosition){

        indicator.current.style.top = parseFloat(indicator.current.style.top.replace("rem", "")) 
          + (9*(changePosition-currentSelection)) + "rem"
        setCurrentSelection(changePosition)
      }
    }

  }
  return (
    <div className='w-72 h-full bg-primary absolute'>
      <SelectionIndicator position={"0"} reference={indicator} />
      <div className='cursor-pointer my-4 flex flex-col gap-20 items-center text-2xl'>

        <Image src={logo} width={160} height={60} alt='logo' />
        <NavigationItem name={"Dashboard"} onClick={() => {
          
          changeIndicatorPosition(0) }} />
        <NavigationItem name={"Analysis"} onClick={() => {
          changeIndicatorPosition(1) }} />
        <NavigationItem name={"Courses"} onClick={() => {changeIndicatorPosition(2)}} />
        <NavigationItem name={"Settings"} onClick={() => changeIndicatorPosition(3)} />

      </div>

    </div>
  )
}

export default NavigationTab
