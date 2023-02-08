import { IcOutlineStar } from '../icons'

const RoomEvaluation = () => {
  return (
    <ul className="flex flex-col gap-6">
      <li>
        <div className="mb-4 flex gap-5">
          <p>y****mst</p>
          <p className="flex items-center text-yellow-300">
            <IcOutlineStar />
            <IcOutlineStar />
            <IcOutlineStar />
            <IcOutlineStar />
            <IcOutlineStar />
          </p>
        </div>
        <p className="leading-[2.125rem]">
          旅館服務人員很親切，離車站只要3~5分鐘。
        </p>
        <ul className="flex flex-row gap-4">
          <li className="rounded-lg border p-2">服務讚</li>
          <li className="rounded-lg border p-2">清潔讚</li>
          <li className="rounded-lg border p-2">衛生讚</li>
          <li className="rounded-lg border p-2">安全讚</li>
          <li className="rounded-lg border p-2">設施讚</li>
        </ul>
      </li>
    </ul>
  )
}

export default RoomEvaluation
