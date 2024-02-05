'use client'
import React ,{useRef,useState}from 'react'
import SelectionIndicator from '../navigation/SelectionIndicator'

export const SettingsNavigation = () => {
  
  const indicator = useRef<HTMLDivElement>(null);
  
  const [currentSelection, setCurrentSelection] = useState(0);
  const changeIndicatorPosition = (changePosition: number) => {

    if (indicator.current) {
      console.log(changePosition);
      if (currentSelection < changePosition) {
        indicator.current.style.top = parseFloat(indicator.current.style.top.replace("rem", "")) +
          (7.5 * (changePosition - currentSelection)) + "rem"
        setCurrentSelection(changePosition)
      }
      if (currentSelection > changePosition) {

        indicator.current.style.top = parseFloat(indicator.current.style.top.replace("rem", ""))
          + (8 * (changePosition - currentSelection)) + "rem"
        setCurrentSelection(changePosition)
      }
    }

  }
  return (
    <div className='relative h-[100vh] bg-subTab w-48'>
      <div className='translate-y-24'>
        <SelectionIndicator reference={indicator}/>
      </div>
      <div className='p-10 justify-center items-center flex flex-col gap-20 text-2xl text-white'>
        <div className='mt-2'></div>
        <div className='cursor-pointer' onClick={()=>{
          changeIndicatorPosition(0)
        }} >Account</div>
        <div className='cursor-pointer' onClick={()=>{
          
          changeIndicatorPosition(1)}
        }>Information</div>
      </div>      
    </div>
  )
}
