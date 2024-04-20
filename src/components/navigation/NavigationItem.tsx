import React from 'react'
import { MdDashboard, MdFileUpload } from "react-icons/md";
import { BiSolidBook } from "react-icons/bi";
import { BsGearFill } from "react-icons/bs";
import { BsPieChartFill } from "react-icons/bs";
export default function NavigationItem({name, onClick}:{name:string, onClick:()=>void}) {
  const iconSize="62.5"
  const getIcon = ()=>{
    switch (name){
      case 'Dashboard':
        return <MdDashboard size={iconSize}/>;
      case "Analysis":
        return <BsPieChartFill size={iconSize}/>
      case "Upload":
        return <MdFileUpload size={iconSize}/>
      case "Settings":
        return <BsGearFill size={iconSize}/>;

    }
  }
  return (
    <div className='flex text-white text-header items-center gap-3 w-64' onMouseDown={onClick}>
      <div>{getIcon()}</div>
      <div className='cursor-pointer'>{name}</div>
    </div>
  )
}
