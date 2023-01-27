import ImageRoom01 from '@/assets/room-1.png'
import ImageRoom02 from '@/assets/room-2.png'
import ImageRoom03 from '@/assets/room-3.png'
import CustomSwiper from '@/components/CustomSwiper'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import { useEffect } from 'react'

const IMAGE_ROOM = [ImageRoom01, ImageRoom02, ImageRoom03]

const RoomPhoto = () => {
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
    <>
      <div id={id} className="hidden gap-3 mb-[2.125rem] md:flex">
        <div className="basis-2/3">
          <a href={IMAGE_ROOM[0]} data-pswp-width={702} data-pswp-height={567}>
            <img src={IMAGE_ROOM[0]} className="w-full" alt="" />
          </a>
        </div>
        <div className="flex flex-col gap-3 basis-1/3 self-end">
          <a href={IMAGE_ROOM[1]} data-pswp-width={320} data-pswp-height={224}>
            <img src={IMAGE_ROOM[1]} className="w-full" alt="" />
          </a>
          <a href={IMAGE_ROOM[2]} data-pswp-width={320} data-pswp-height={224}>
            <img src={IMAGE_ROOM[2]} className="w-full" alt="" />
          </a>
        </div>
      </div>
      <CustomSwiper
        buttonsClassName="flex-row left-1/2 -translate-x-1/2 bottom-3"
        className="block md:hidden"
        images={IMAGE_ROOM}
        imagesClassName="h-[18.75rem] w-full object-cover"
      />
    </>
  )
}

export default RoomPhoto
