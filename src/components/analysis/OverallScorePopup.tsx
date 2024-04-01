import React from 'react'
import OverlayModal from '@/components/general/OverlayModal'
function OverallScorePopup({closeOverlayHandler}:{closeOverlayHandler:()=>void}) {
  return (
    <OverlayModal title={"Analysis Progress"} closeOverlayHandler={closeOverlayHandler}>
      <div className='w-[30rem] h-96 text-sm text-center p-4'>{"On average it takes xx minutes to process the evaluations. File size and number of files uploaded to the system can effect processing time"}</div>
    </OverlayModal>
  )
}

export default OverallScorePopup
