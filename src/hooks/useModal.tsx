import { useState } from 'react'

const useModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const openModalHandler = () => {
    setIsOpen(true)
  }

  const closeModalHandler = () => {
    setIsOpen(false)
  }

  return {
    modalIsOpen,
    openModalHandler,
    closeModalHandler
  }
}

export default useModal
