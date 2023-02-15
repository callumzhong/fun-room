import useModal from '@/hooks/useModal'
import Modal from 'react-modal'

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('#root')!)

const VariantModal = ({
  label,
  onAfterClose,
  renderButton,
  renderContent
}: {
  label: string
  onAfterClose: () => void
  renderButton: (event: () => void) => React.ReactNode
  renderContent: (event: () => void) => React.ReactNode
}) => {
  const { modalIsOpen, closeModalHandler, openModalHandler } = useModal()

  return (
    <>
      {renderButton(openModalHandler)}
      <Modal
        onAfterClose={onAfterClose}
        isOpen={modalIsOpen}
        overlayClassName="fixed inset-0 bg-black bg-opacity-[0.78] z-20"
        className="absolute top-[5%] left-[50%] max-h-[90vh] w-[90vw] -translate-x-1/2 overflow-auto bg-[#F5F5F5] px-[1.6875rem] pb-14 pt-12 outline-none sm:w-[31.25rem] md:w-[40rem] lg:w-[50rem]"
        onRequestClose={closeModalHandler}
        contentLabel={label}>
        {renderContent(closeModalHandler)}
      </Modal>
    </>
  )
}

export default VariantModal
