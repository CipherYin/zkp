// components/ui/GlobalModal.tsx

import Modal from "./modal"

interface Props {
  isOpen: boolean
  title?: React.ReactNode
  content?: React.ReactNode
  onClose: () => void
}

export default function GlobalModal({ isOpen, title, content, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      {content}
    </Modal>
  )
}
