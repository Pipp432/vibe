import React, { useEffect } from 'react'
import ProgressStatusCircle from './ProgressStatusCircle'

function ProgressStatus({ status,courseName }: { status: string, courseName:string }) {
  const statusToColor = () => {
    switch (status) {
      case "No":

        return ["#FF0000", "#FFFFFF", "#FFFFFF"]

      case "Processing":
        return ["#FFFF00", "#FFFF00", "#FFFFFF"]
      case "Yes":
        return ["#00FF00", "#00FF00", "#00FF00"]
      default:
        return ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
    }
  }
  const colors = statusToColor();
  return (
    <div className='flex flex-row gap-6 text-md items-center '>
      {courseName}
      <div className='flex flex-row gap-2'>
        {colors.map((color,index) => { return <ProgressStatusCircle color={color} key={index}  /> })}
        
      </div>

    </div>
  )
}

export default ProgressStatus
