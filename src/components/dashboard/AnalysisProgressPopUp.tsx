import React from 'react'
import OverlayModal from '../general/OverlayModal'
import ProgressStatus from '../graph/ProgressStatus'

function AnalysisProgressPopUp({closeOverlayHandler}:{closeOverlayHandler:()=>void}) {
  return (
    <OverlayModal title={"Analysis Progress"} closeOverlayHandler={closeOverlayHandler}>
      <div className='flex flex-col gap-4 p-4 items-end justify-end -translate-x-[8vw]'>
      <ProgressStatus status='No' courseName='No Data Uploaded'/>
      <ProgressStatus status='Processing' courseName='Processing'/>
      <ProgressStatus status='Yes' courseName='Analysis Completed'/>
    </div>

      <div className='w-[30rem] text-sm text-center p-4'>{"On average it takes 4-5 minutes to process the evaluations. File size and number of files uploaded to the system can effect processing time"}</div>
    </OverlayModal>
  )
}

export default AnalysisProgressPopUp
