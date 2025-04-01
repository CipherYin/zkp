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
      <div className="bg-[#FFFBF7] rounded-xl px-8 py-12 w-3/5 relative shadow-lg bg-opacity-90"> 
        {title && <h2 className="text-xl font-bold mb-12">{title}</h2>}
        <div className="text-2xl font-medium mb-32">{children}</div>
        <button
          className="absolute text-3xl top-3 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  )
}
