import React from 'react'
import OverlayModal from '../general/OverlayModal'
import ProgressStatus from '../graph/ProgressStatus'

function AnalysisProgressPopUp({closeOverlayHandler}:{closeOverlayHandler:()=>void}) {
  return (
    <OverlayModal title={"Analysis Progress"} closeOverlayHandler={closeOverlayHandler}>
      <div className='flex flex-col gap-4 p-4 items-end justify-end -translate-x-[8vw]'>
      <ProgressStatus status='wait' courseName='Waiting'/>
      <ProgressStatus status='processing' courseName='Processing'/>
      <ProgressStatus status='done' courseName='Done'/>
    </div>

      <div className='w-[30rem] text-sm text-center p-4'>{"On average it takes xx minutes to process the evaluations. File size and number of files uploaded to the system can effect processing time"}</div>
    </OverlayModal>
  )
}

export default AnalysisProgressPopUp
