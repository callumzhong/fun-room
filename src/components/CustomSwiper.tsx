import clsx from 'clsx'
import { useRef, useState } from 'react'
import SwiperClass from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const Buttons = ({
  className,
  buttonLeftClassName,
  buttonRightClassName,
  activeCount,
  activeIndex,
  onSlideNext,
  onSlidePrev
}: {
  className: string
  buttonLeftClassName?: string
  buttonRightClassName?: string
  activeCount: number
  activeIndex: number
  onSlideNext: () => void
  onSlidePrev: () => void
}) => {
  return (
    <div
      className={clsx(
        'absolute left-[1.125rem] bottom-[2.4375rem] z-10 flex items-center gap-3',
        className
      )}>
      <button
        className={clsx(
          'h-6 w-6 rounded-full bg-white hover:bg-black hover:text-white md:h-[1.9081rem] md:w-[1.9081rem] md:rotate-0',
          buttonLeftClassName
        )}
        onClick={onSlidePrev}>
        &#60;
      </button>
      {new Array(activeCount).fill(0).map((_, idx) => {
        return (
          <div
            key={idx}
            className={clsx(
              'h-[0.375rem] w-[0.375rem] rounded-full bg-white',
              activeIndex === idx && 'bg-black'
            )}
          />
        )
      })}
      <button
        className={clsx(
          'h-6 w-6 rounded-full bg-white hover:bg-black hover:text-white md:h-[1.9081rem] md:w-[1.9081rem] md:rotate-0',
          buttonRightClassName
        )}
        onClick={onSlideNext}>
        &#62;
      </button>
    </div>
  )
}

const CustomSwiper = ({
  images,
  imagesClassName,
  className,
  buttonsClassName,
  buttonLeftClassName,
  buttonRightClassName
}: {
  images: Array<string>
  imagesClassName: string
  className?: string
  buttonsClassName: string
  buttonLeftClassName?: string
  buttonRightClassName?: string
}) => {
  const swiperRef = useRef<SwiperClass>()
  const [activeIndex, setActiveIndex] = useState(0)

  const slidePrevHandler = () => {
    swiperRef.current?.slidePrev()
  }
  const slideNextHandler = () => {
    swiperRef.current?.slideNext()
  }
  return (
    <div className={clsx('relative', className)}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={({ activeIndex }) => setActiveIndex(activeIndex)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}>
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <img src={image} className={imagesClassName} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Buttons
        buttonLeftClassName={buttonLeftClassName}
        buttonRightClassName={buttonRightClassName}
        className={buttonsClassName}
        activeCount={images.length}
        activeIndex={activeIndex}
        onSlideNext={slideNextHandler}
        onSlidePrev={slidePrevHandler}
      />
    </div>
  )
}

export default CustomSwiper
