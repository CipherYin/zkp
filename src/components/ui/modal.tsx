import Image from 'next/image'
import React from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?:  React.ReactNode
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null
  const handleBackdropClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === 'modal-backdrop') {
      onClose()
    }
  }
  return (
    <div
     id="modal-backdrop"
     onClick={handleBackdropClick}

     className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 font-modal">
      <div className="bg-[#FFFBF7] rounded-3xl px-8 w-3/5 relative shadow-lg bg-opacity-90"> 
        <div className='flex pt-4 justify-end gap-2'>
          <Image src="/zerobase.svg" alt='zerobase' width={0} height={0} className='w-[9vw]'/>
          <div className="w-px h-10 bg-black mx-4" />
          <Image src="/artwork.svg" alt='attermpt' width={0} height={0} className='w-[6vw]'/>
        </div>
        <div className='flex pt-10 pb-10 text-black'>
          <div className='font-medium text-2xl mr-4'>Guinness</div>
          <div className='flex'>
            <Image src="/images/icon/deadline.svg" alt='deadline' width={0} height={0} className='w-[1vw]'/>
            <div className="w-px h-5 mt-1 bg-black mx-2" />
            <div className='font-medium mt-[0.1vw] text-xl'>2025.04.14-2025.06.14</div>
          </div>
         
        </div>
        {title && <h2 className="text-xl font-bold mb-12">{title}</h2>}
        <div className="text-2xl mb-32">{children}</div>
        {/* <button
          className="absolute text-3xl -top-2 -right-6 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button> */}
      </div>
    </div>
  )
}
