import React from 'react'

import OverlayModal from '../general/OverlayModal'
function ChangeGraphPopUp({ closeOverlayHandler }: { closeOverlayHandler: () => void }) {
  return (

    <OverlayModal title={""} closeOverlayHandler={closeOverlayHandler}>
      <div className='w-[50rem] h-[30rem] flex'>
       <div className='h-full w-32 bg-subTab rounded-tl-lg rounded-bl-lg '></div> 
      </div>
    </OverlayModal>
  )
}

export default ChangeGraphPopUp
