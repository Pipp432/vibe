'use client'
import React from 'react'
import Modal from './Modal'

function OverlayModal({ title, children, closeOverlayHandler }: { title: string, children: React.ReactNode, closeOverlayHandler: () => void }) {
  return (
    <>
      <>
        <div className='z-50 absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2 animate-fade-in'>
          <Modal title={title}>
            {children}
          </Modal>
        </div>
        <div className='bg-black opacity-50 w-[100vw] h-[100vh] z-30 top-0 left-0 absolute' onMouseDown={closeOverlayHandler}>
        </div>

      </>

    </>
  )
}

export default OverlayModal
