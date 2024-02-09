'use client'
import React from 'react'
import Modal from './Modal'
import useModal from '@/hooks/useModal'

function OverlayModal({ title, children }: { title: string, children: React.ReactNode }) {
  const [isModalOpen, toggleModal] = useModal()
  const handleToggleModal = () => {
    toggleModal();
  }
  return (
    <>
        {isModalOpen && <><div className='z-10 absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2'>
          <Modal title={title}>
          {children}
        </Modal>
         </div>
        <div className='bg-black opacity-50 w-[83vw] h-[100vh] z-0 relative' 
        onMouseDown={handleToggleModal}>
        
      </div></>
      }
    </>
  )
}

export default OverlayModal
