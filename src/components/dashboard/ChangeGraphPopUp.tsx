import { Dispatch,SetStateAction } from 'react'
import OverlayModal from '../general/OverlayModal'
function ChangeGraphPopUp({ closeOverlayHandler,changeGraphHandler }:
  { closeOverlayHandler: () => void, changeGraphHandler:Dispatch<SetStateAction<string>> }) {
  return (

    <OverlayModal title={""} closeOverlayHandler={closeOverlayHandler}>
      <div className='w-[50rem] h-[30rem] flex gap-12'>
        <div className='h-full w-48 bg-subTab rounded-tl-lg rounded-bl-lg flex flex-col gap-10'></div>

        <div className='grid grid-cols-2 gap-5 p-4'>
          <div className='rounded-lg bg-subTab h-52 w-52'>
            <button className='text-center text-lg h-full w-full'
              onClick={()=>{changeGraphHandler("BAR_CHART");closeOverlayHandler()}}>Bar Chart</button>
          </div>
          <div className='rounded-lg bg-subTab h-52 w-52'></div>
          <div className='rounded-lg bg-subTab h-52 w-52'></div>
          <div className='rounded-lg bg-subTab h-52 w-52'></div>
        </div>
      </div>
    </OverlayModal>
  )
}

export default ChangeGraphPopUp
