import {
  Fa6SolidWifi,
  FaRegularSnowflake,
  FaSolidCat,
  FaSolidChild,
  FaSolidCouch,
  FaSolidHeadset,
  FaSolidPhoneAlt,
  FaSolidSmokingBan,
  FaSolidUtensils,
  FaSolidWineGlassAlt,
  IconFridge
} from '@/components/icons'
import RoomCost from '@/components/Room/RoomCost'
import { HighlightedRoomAmenity, Room } from '@/types'

const renderRoomAmenitiesIcon = (state: HighlightedRoomAmenity) => {
  switch (state.type) {
    case 'INTERNET':
      return <Fa6SolidWifi className="mx-auto mb-1 h-[1.125rem]" />
    case 'BREAKFAST':
      return <FaSolidUtensils className="mx-auto mb-1 h-[1.125rem]" />
    case 'MINI_BAR':
      return <FaSolidWineGlassAlt className="mx-auto mb-1 h-[1.125rem]" />
    case 'ROOM_SERVICE':
      return <FaSolidHeadset className="mx-auto mb-1 h-[1.125rem]" />
    case 'PHONE':
      return <FaSolidPhoneAlt className="mx-auto mb-1 h-[1.125rem]" />
    case 'PETS':
      return <FaSolidCat className="mx-auto mb-1 h-[1.125rem]" />
    case 'REFRIGERATOR':
      return <IconFridge className="mx-auto mb-1 h-[1.125rem]" />
    case 'SOFA':
      return <FaSolidCouch className="mx-auto mb-1 h-[1.125rem]" />
    case 'NO_SMOKING':
      return <FaSolidSmokingBan className="mx-auto mb-1 h-[1.125rem]" />
    case 'PARENT_CHILD':
      return <FaSolidChild className="mx-auto mb-1 h-[1.125rem]" />
    case 'AIR_CONDITIONER':
      return <FaRegularSnowflake className="mx-auto mb-1 h-[1.125rem]" />
  }
}

const RoomIntroduce = ({ room }: { room: Room }) => {
  const { roomFeatures, roomFacilities, displayNameEN } = room
  return (
    <>
      <div className="mb-[1.3406rem] flex justify-between gap-[2.0625rem] py-6">
        <h2 className="w-[11.4375rem] self-end font-abhaya-libre text-3xl md:basis-auto">
          {displayNameEN}
        </h2>
        <RoomCost
          data={roomFeatures.displayableRates}
          className="basis-1/3 flex-col md:hidden"
        />
      </div>
      <p className="mb-[1.9375rem] break-all text-sm text-[#656565]">
        {roomFacilities}
      </p>
      <div className="mb-[1.5625rem] flex">
        <div className="flex flex-1 flex-wrap">
          <h3 className="mb-6 w-full font-medium">房間資訊</h3>
          <div className="inline-flex w-1/2 flex-col gap-2 text-sm">
            <p>人數限制</p>
            <p>床型</p>
            <p>衛浴數量</p>
            <p>房間太小</p>
          </div>
          <div className="inline-flex w-1/2 flex-col gap-2 text-sm">
            <p>{roomFeatures.guestLimit}</p>
            <p>{roomFeatures.beddingOption}</p>
            <p>{roomFeatures.bathroomNumber}</p>
            <p>{roomFeatures.roomSquare} 平方公尺</p>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="mb-6 w-full font-medium">入住/退房時間</h3>
          <div className="inline-flex w-1/2 flex-col gap-2 text-sm">
            <p>入住時間</p>
            <p>退房時間</p>
          </div>
          <div className="inline-flex w-1/2 flex-col gap-2 text-sm">
            <p>15:00~21:00</p>
            <p>10:00 以前</p>
          </div>
        </div>
      </div>
      <h3 className="mb-6 font-medium">客房設施</h3>
      <div className="mb-8 flex flex-wrap gap-6 text-sm">
        {roomFeatures.highlightedRoomAmenities.map((amenity, idx) => (
          <div key={idx} className="w-14 text-center">
            {renderRoomAmenitiesIcon(amenity)}
            <p>{amenity.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default RoomIntroduce
