import React, { useEffect } from 'react'
import ProgressStatusCircle from './ProgressStatusCircle'

function ProgressStatus({ status,courseName }: { status: string, courseName:string }) {
  const statusToColor = () => {
    switch (status) {
      case "wait":

        return ["#FF0000", "#FFFFFF", "#FFFFFF"]

      case "processing":
        return ["#FFFF00", "#FFFF00", "#FFFFFF"]
      case "done":
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
        {colors.map((color) => { return <ProgressStatusCircle color={color} /> })}
      </div>

    </div>
  )
}

export default ProgressStatus
