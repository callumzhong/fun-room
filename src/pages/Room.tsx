import ImageRoom01 from '@/assets/room-1.png'
import ImageRoom02 from '@/assets/room-2.png'
import ImageRoom03 from '@/assets/room-3.png'
import { Fa6SolidWifi } from '@/components/icons'
import RoomCost from '@/components/Room/RoomCost'
import RoomPhoto from '@/components/Room/RoomPhoto'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const IMAGE_ROOM = [ImageRoom01, ImageRoom02, ImageRoom03]

const RoomIntroduce = () => {
  return (
    <section className="px-8">
      <div className="flex mb-[1.3406rem] gap-[2.0625rem] justify-between py-6">
        <h2 className="text-3xl w-[11.4375rem] md:basis-auto font-abhaya-libre self-end">
          Deluxe Double Room
        </h2>
        <RoomCost className="flex-col md:hidden basis-1/3" />
      </div>
      <p className="break-all text-[#656565] text-sm mb-[1.9375rem]">
        Single Room is only reserved for one guest. There is a bedroom with a
        single size bed and a private bathroom. Everything you need prepared for
        you: sheets and blankets, towels, soap and shampoo, hairdryer are
        provided. In the room there is AC and of course WiFi.
      </p>
      <div className="flex mb-[1.5625rem]">
        <div className="flex-1 flex flex-wrap">
          <h3 className="font-medium w-full mb-[0.6875rem]">房間資訊</h3>
          <div className="w-1/2 text-sm inline-flex flex-col gap-2">
            <p>人數限制</p>
            <p>床型</p>
            <p>衛浴數量</p>
            <p>房間太小</p>
          </div>
          <div className="w-1/2 text-sm inline-flex flex-col gap-2">
            <p>1</p>
            <p>單人床</p>
            <p>1</p>
            <p>18平方公尺</p>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-medium w-full mb-[0.6875rem]">入住/退房時間</h3>
          <div className="inline-flex flex-col w-1/2 text-sm gap-2">
            <p>入住時間</p>
            <p>退房時間</p>
          </div>
          <div className="inline-flex text-sm w-1/2 flex-col gap-2">
            <p>15:00~21:00</p>
            <p>10:00 以前</p>
          </div>
        </div>
      </div>
      <h3 className="font-medium mb-[0.6875rem]">客房設施</h3>
      <div className="flex gap-5">
        <div>
          <Fa6SolidWifi className="mx-auto" />
          <p>wifi</p>
        </div>
      </div>
    </section>
  )
}

const Title = ({ className }: { className: string }) => (
  <h2 className={className}></h2>
)

const Room = () => {
  const params = useSearchParams()
  const id = 'A' + Math.floor(Math.random() * 1000) + 1
  useEffect(() => {
    let lightBox = new PhotoSwipeLightbox({
      gallery: `#${id}`,
      children: 'a',
      pswpModule: () => import('photoswipe')
    })
    lightBox.init()

    return () => {
      lightBox.destroy()
    }
  }, [])

  return (
    <div className="container mx-auto">
      <RoomPhoto />
      <div>
        <RoomIntroduce />
      </div>
    </div>
  )
}
export default Room



