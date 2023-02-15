import CustomSwiper from '@/components/CustomSwiper'
import { ResponsiveImage } from '@/types'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import { useEffect } from 'react'

const RoomPhoto = ({ images }: { images: ResponsiveImage[] }) => {
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
      <div id={id} className="mb-[2.125rem] hidden gap-3 md:flex">
        <div className="basis-2/3">
          <a
            href={images[0].largeUrl}
            data-pswp-width={1024}
            data-pswp-height={683}>
            <img
              srcSet={`${images[0].mediumUrl} 480w, ${images[0].largeUrl} 800w`}
              src={images[0].largeUrl}
              sizes="(max-width:600px) 480px, 800px"
              className="w-full"
              alt=""
            />
          </a>
        </div>
        <div className="flex basis-1/3 flex-col gap-3 self-end">
          <a
            href={images[1].mediumUrl}
            data-pswp-width={819}
            data-pswp-height={1024}>
            <img
              src={images[1].mediumUrl}
              className="h-[14rem] w-full object-cover"
              alt=""
            />
          </a>
          <a
            href={images[2].mediumUrl}
            data-pswp-width={819}
            data-pswp-height={1024}>
            <img
              src={images[2].mediumUrl}
              className="h-[14rem] w-full object-cover"
              alt=""
            />
          </a>
        </div>
      </div>
      <CustomSwiper
        buttonsClassName="bottom-3"
        className="block md:hidden"
        images={images}
        imagesClassName="h-[18.75rem] w-full object-cover"
      />
    </>
  )
}

export default RoomPhoto
