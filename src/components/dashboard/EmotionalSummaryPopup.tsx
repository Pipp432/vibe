
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
          <div className='flex gap-2'> <TextToEmojiMap text="Gratitude" />{"Gratitude"}</div>
          <div className='flex gap-2'> <TextToEmojiMap text="Approval" />{"Approval"}</div>
          <div className='flex gap-2'> <TextToEmojiMap text="Disapproval" />{"Disapproval"}</div>
          <div className='flex gap-2'> <TextToEmojiMap text="Disappointment" />{"Disappoinment"}</div>
          <div className='flex gap-2'> <TextToEmojiMap text="Admiration" />{"Admiration"}</div>
          <div className='flex gap-2'> <TextToEmojiMap text="Joy" />{"Joy"}</div>
          <div className='flex gap-2'> <TextToEmojiMap text="Anger" />{"Anger"}</div>
          <div className='flex gap-2'> <TextToEmojiMap text="Neutrality" />{"Neutrality"}</div>
          <div className='flex gap-2'> <TextToEmojiMap text="Confusion" />{"Confusion"}</div>
        </div>

        <div className='text-sm w-96'>{"These emoticons are based on apple's emoticon set to convey each emotion at a glance the option to toggle between text and emoticon is in the settings page"}</div>
      </div>

    </OverlayModal>
  )
}

export default EmotionalSummaryPopUp
