import { IcSharpStarOutline } from '../icons'
import Modal from '../Modal'
import RoomEvaluation from './RoomEvaluation'
import clsx from 'clsx'
const RoomEvaluationModal = ({
  buttonClassName
}: {
  buttonClassName?: string
}) => {
  return (
    <Modal
      label="Evaluation Modal"
      renderButton={(openHander) => (
        <button className={clsx(buttonClassName)} onClick={openHander}>
          {/* TODO: api 計算評價筆數 */}
          房客評價 (121) <br />
          {/* TODO: API 計算星星數 */}
          {new Array(5).fill(0).map((item, idx) => (
            <IcSharpStarOutline key={idx} className="inline-block h-6 w-6" />
          ))}
        </button>
      )}
      renderContent={(closeHandler) => <RoomEvaluation />}
    />
  )
}

export default RoomEvaluationModal
