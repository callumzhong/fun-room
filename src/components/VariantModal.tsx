import useModal from '@/hooks/useModal'
import Modal from 'react-modal'
import { IconMenu } from './icons'

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#react-modal')

const VariantModal = ({
  label,
  renderButton,
  renderContent
}: {
  label: string
  renderButton: (event: () => void) => React.ReactNode
  renderContent: (event: () => void) => React.ReactNode
}) => {
  const { modalIsOpen, closeModalHandler, openModalHandler } = useModal()

  return (
    <>
      {renderButton(openModalHandler)}
      <Modal
        shouldCloseOnOverlayClick={false}
        isOpen={modalIsOpen}
        overlayClassName="fixed inset-0 bg-black bg-opacity-[0.78] z-20"
        className="-mr-1/2 absolute top-[5%] left-[50%] h-max w-[min(66.16vw,49.625rem)] -translate-x-1/2 outline-none"
        // style={customStyles}
        onRequestClose={closeModalHandler}
        contentLabel={label}>
        <div className="h-full overflow-auto bg-[#F5F5F5] p-5">
          {renderContent(closeModalHandler)}
        </div>
        <button
          onClick={closeModalHandler}
          className="group absolute top-0 -right-14 bg-white px-2 py-1 text-4xl hover:bg-gray-800">
          <IconMenu isCollapsed={true} />
        </button>
      </Modal>
    </>
  )
}

export default VariantModal
