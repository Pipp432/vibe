import React from 'react'
import OverlayModal from '@/components/general/OverlayModal'
function DataDeletionConfrimationPopup({closeOverlayHandler}:{closeOverlayHandler:()=>void}) {
  const deleteDataHandler = async ()=>{
    
  }
  return (
    <OverlayModal title={"Confirm reupload"} closeOverlayHandler={closeOverlayHandler}>
      <div className='w-[30rem] h-20 text-sm text-center p-4 flex flex-col justify-center items-center'>
        <div className='flex flex-row gap-10 justify-center items-center'>
          <button onClick={closeOverlayHandler} className='rounded-full h-10 w-32 text-white bg-error'>Cancel</button>
          <button onClick={deleteDataHandler}className='rounded-full h-10 w-32 text-white bg-success'>Reupload</button>
        </div>
      </div>
      
    </OverlayModal>
  )
}

export default DataDeletionConfrimationPopup
