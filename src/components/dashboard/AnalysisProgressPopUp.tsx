import React from 'react'
import OverlayModal from '../general/OverlayModal'

function AnalysisProgressPopUp() {
  return (
    <OverlayModal title={"Analysis Progress"}>
      <div className='text-sm text-center'>{"On average it takes xx minutes to process the evaluations. File size and number of files uploaded to the system can effect processing time"}</div>
    </OverlayModal>
  )
}

export default AnalysisProgressPopUp