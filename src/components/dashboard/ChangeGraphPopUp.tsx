import React from 'react'

import OverlayModal from '../general/OverlayModal'
function ChangeGraphPopUp({closeOverlayHandler}:{closeOverlayHandler:()=>void}) {
  return (
 
    <OverlayModal title={""} closeOverlayHandler={closeOverlayHandler}>
      <div className='w-[50rem] h-[30rem]'>
      
      </div>
      </OverlayModal>
      )
}

export default ChangeGraphPopUp
