import CAMERA_ANGLES from './CAMERA_ANGLES.json'

const MultiAnglePanel = ({
  annotationHandler
}: {
  annotationHandler: (idx: number) => void
}) => {
  return (
    <ul className="absolute bottom-24 right-5 z-50 flex gap-5 sm:top-60 sm:left-14">
      {CAMERA_ANGLES.map((camera, i) => {
        return (
          <li
            key={i}
            className="flex h-[2.125rem] w-[2.125rem] items-center justify-center rounded-full bg-black bg-opacity-60 text-white shadow-[0_0_0px_3px_white]">
            <button onClick={() => annotationHandler(i)}>{camera.type}</button>
          </li>
        )
      })}
    </ul>
  )
}

export default MultiAnglePanel
