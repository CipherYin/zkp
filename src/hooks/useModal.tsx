import { useState } from "react"

type ModalData = {
  title?: React.ReactNode
  content?: React.ReactNode
}

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalData, setModalData] = useState<ModalData>({})

  const openModal = (data: ModalData) => {
    setModalData(data)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setModalData({})
  }

  return {
    isOpen,
    openModal,
    closeModal,
    modalData,
  }
}
