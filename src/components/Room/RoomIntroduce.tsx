import {
  Fa6SolidWifi,
  FaRegularSnowflake,
  FaSolidCat,
  FaSolidChild,
  FaSolidCouch,
  FaSolidHeadset,
  FaSolidMountain,
  FaSolidPhoneAlt,
  FaSolidSmokingBan,
  FaSolidUtensils,
  FaSolidWineGlassAlt,
  IconFridge
} from '@/components/icons'
import RoomCost from '@/components/Room/RoomCost'
import RoomEvaluationModal from './RoomEvaluationModal'

const RoomIntroduce = () => {
  return (
    <>
      <div className="mb-[1.3406rem] flex justify-between gap-[2.0625rem] py-6">
        <div className="flex flex-1 justify-between">
          <h2 className="w-[11.4375rem] self-end font-abhaya-libre text-3xl md:basis-auto">
            Deluxe Double Room
          </h2>
          <RoomEvaluationModal buttonClassName="hidden md:block" />
        </div>
        <RoomCost className="basis-1/3 flex-col md:hidden" />
      </div>
      <p className="mb-[1.9375rem] break-all text-sm text-[#656565]">
        Single Room is only reserved for one guest. There is a bedroom with a
        single size bed and a private bathroom. Everything you need prepared for
        you: sheets and blankets, towels, soap and shampoo, hairdryer are
        provided. In the room there is AC and of course WiFi.
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
            <p>1</p>
            <p>單人床</p>
            <p>1</p>
            <p>18平方公尺</p>
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
      <div className="mb-8 flex flex-wrap gap-8 text-sm">
        <div>
          <Fa6SolidWifi className="mx-auto mb-1 h-[1.125rem]" />
          <p>wifi</p>
        </div>
        <div>
          <FaSolidUtensils className="mx-auto mb-1 h-[1.125rem]" />
          <p>早餐</p>
        </div>
        <div>
          <FaSolidWineGlassAlt className="mx-auto mb-1 h-[1.125rem]" />
          <p>Mini Bar</p>
        </div>
        <div>
          <FaSolidHeadset className="mx-auto mb-1 h-[1.125rem]" />
          <p>Room Service</p>
        </div>
        <div>
          <FaSolidPhoneAlt className="mx-auto mb-1 h-[1.125rem]" />
          <p>電話</p>
        </div>
        <div>
          <IconFridge className="mx-auto mb-1 h-[1.125rem]" />
          <p>冰箱</p>
        </div>
        <div>
          <FaSolidCouch className="mx-auto mb-1 h-[1.125rem]" />
          <p>沙發</p>
        </div>
        <div>
          <FaSolidMountain className="mx-auto mb-1 h-[1.125rem]" />
          <p>View</p>
        </div>
        <div>
          <FaSolidSmokingBan className="mx-auto mb-1 h-[1.125rem]" />
          <p>禁止吸煙</p>
        </div>
        <div>
          <FaSolidChild className="mx-auto mb-1 h-[1.125rem]" />
          <p>適合兒童</p>
        </div>
        <div>
          <FaRegularSnowflake className="mx-auto mb-1 h-[1.125rem]" />
          <p>空調</p>
        </div>
        <div>
          <FaSolidCat className="mx-auto mb-1 h-[1.125rem]" />
          <p>寵物攜帶</p>
        </div>
      </div>
    </>
  )
}

export default RoomIntroduce
