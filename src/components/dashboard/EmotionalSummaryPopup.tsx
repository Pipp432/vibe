
import React from 'react'
import OverlayModal from '../general/OverlayModal'

function EmotionalSummaryPopUp({closeOverlayHandler}:{closeOverlayHandler:()=>void}) {
  return (
    <OverlayModal title={"Emotional Summary"} closeOverlayHandler={closeOverlayHandler}>
      <div className='text-sm text-center w-[30rem] h-96 p-4'>{"On average it takes xx minutes to process the evaluations. File size and number of files uploaded to the system can effect processing time"}</div>
      
    </OverlayModal>
  )
}

export default EmotionalSummaryPopUp
