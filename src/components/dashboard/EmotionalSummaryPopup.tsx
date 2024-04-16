
import React from 'react'
import OverlayModal from '../general/OverlayModal'
import TextToEmojiMap from '@/data/TextToEmojiMap'
function EmotionalSummaryPopUp({ closeOverlayHandler }: { closeOverlayHandler: () => void }) {
  return (
    <OverlayModal title={"Emotional Summary"} closeOverlayHandler={closeOverlayHandler}>
      <div className='flex flex-col gap-2 p-4'>
        <div className='text-sm text-center '>{
          "Emotion Representation"
        }</div>
        <div className='grid grid-cols-2 gap-x-8 gap-y-4 p-4'>
          <div className='flex gap-2'> <TextToEmojiMap text="gratitude" />{"Gratitude"}</div>
          <div className='flex gap-2'> <TextToEmojiMap text="approval" />{"Approval"}</div>
          <div className='flex gap-2'> <TextToEmojiMap text="disapproval" />{"Disapproval"}</div>
          <div className='flex gap-2'> <TextToEmojiMap text="disappointment" />{"Disappoinment"}</div>
          <div className='flex gap-2'> <TextToEmojiMap text="admiration" />{"Admiration"}</div>
          <div className='flex gap-2'> <TextToEmojiMap text="joy" />{"Joy"}</div>
          <div className='flex gap-2'> <TextToEmojiMap text="anger" />{"Anger"}</div>
          <div className='flex gap-2'> <TextToEmojiMap text="neutrality" />{"Neutrality"}</div>
          <div className='flex gap-2'> <TextToEmojiMap text="confusion" />{"Confusion"}</div>
        </div>

        <div className='text-sm w-96'>{"These emoticons are based on apple's emoticon set to convey each emotion at a glance the option to toggle between text and emoticon is in the settings page"}</div>
      </div>

    </OverlayModal>
  )
}

export default EmotionalSummaryPopUp
