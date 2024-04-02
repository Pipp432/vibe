import React from 'react'
import OverlayModal from '@/components/general/OverlayModal'
function OverallScorePopup({ closeOverlayHandler }: { closeOverlayHandler: () => void }) {
  return (
    <OverlayModal title={"Emotional Score"} closeOverlayHandler={closeOverlayHandler}>
      <div className='flex flex-col h-96 gap-4 p-4'>
        <div className='w-[30rem] text-sm'>
          {"Emotional score provides a general numerical value to interpret. The higher the value the more positive the students feel towards the course. The score is calulcated by aggregating all emotions using the PAD model."}
        </div>
        <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
          <div className='flex gap-4 items-center'>
            <div className='bg-green-500 text-white p-2 text-center w-20'>100-81</div>
            <div>Very positive</div>
          </div>
          <div className='flex gap-4 items-center'>
            <div className='bg-yellow-300 text-white p-2 text-center w-20'>80-61</div>
            <div>Positive</div>
          </div>
          <div className='flex gap-4 items-center'>
            <div className='bg-orange-500 text-white p-2 text-center w-20'>60-41</div>
            <div>Negative</div>
          </div>
          <div className='flex gap-4 items-center'>
            <div className='bg-red-500 text-white p-2 text-center w-20'>{"<40"}</div>
            <div>Very negative</div>
          </div>
        </div>

      </div>

    </OverlayModal>
  )
}

export default OverallScorePopup
