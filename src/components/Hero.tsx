import clsx from 'clsx'
import { useRef, useState } from 'react'
import SwiperClass from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Card from './Card'

const Buttons = ({
  activeCount,
  activeIndex,
  onSlideNext,
  onSlidePrev
}: {
  activeCount: number
  activeIndex: number
  onSlideNext: () => void
  onSlidePrev: () => void
}) => {
  return (
    <div className="absolute left-[1.125rem] bottom-[2.4375rem] z-10 flex items-center gap-3 flex-col sm:flex-row">
      <button
        className="bg-white rotate-90 md:rotate-0 h-6 w-6 md:h-[1.9081rem] md:w-[1.9081rem] rounded-full hover:bg-black hover:text-white"
        onClick={onSlidePrev}>
        &#60;
      </button>
      {new Array(activeCount).fill(0).map((_, idx) => {
        return (
          <div
            key={idx}
            className={clsx(
              'w-[0.375rem] h-[0.375rem] bg-white rounded-full',
              activeIndex === idx && 'bg-black'
            )}
          />
        )
      })}
      <button
        className="bg-white rotate-90 md:rotate-0 h-6 w-6 md:h-[1.9081rem] md:w-[1.9081rem] rounded-full hover:text-white hover:bg-black"
        onClick={onSlideNext}>
        &#62;
      </button>
    </div>
  )
}

const Hero = () => {
  const swiperRef = useRef<SwiperClass>()
  const [activeIndex, setActiveIndex] = useState(0)

  const slidePrevHandler = () => {
    swiperRef.current?.slidePrev()
  }
  const slideNextHandler = () => {
    swiperRef.current?.slideNext()
  }
  return (
    <>
      {/* //TODO: 替換成 three.js 3Ｄ模型介紹 */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={({ activeIndex }) => setActiveIndex(activeIndex)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}>
        <SwiperSlide>
          <img
            className="-z-10 relative w-screen h-screen object-cover"
            src="https://source.unsplash.com/random"
            alt=""
          />
          <Card className="absolute z-10 top-[17.84vh] right-[7vw] sm:right-auto sm:left-[6.375rem]">
            <h4 className="text-4xl italic text-white sm:text-7xl">05</h4>
            <h3 className="text-2xl sm:text-5xl">Twin Room</h3>
            <p className="text-[0.625rem] text-[#3E3E3E] mb-3 sm:text-sm sm:py-4">
              潔淨白色極簡主義，恣意享受舒適與自在，身心靈極致美好的享受
            </p>
            <div className="flex justify-between">
              <p className="text-[0.9375rem] leading-[1.125rem] sm:text-3xl">
                $3,350
                <span className="text-[0.5rem] leading-[1.125rem] sm:text-base">
                  (假日$3,500)
                </span>
              </p>
              <button className="text-[0.5rem] leading-[1.125rem] bg-black text-white sm:text-base px-4">
                線上訂房
              </button>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="-z-10 relative w-screen h-screen object-cover"
            src="https://source.unsplash.com/random"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <Buttons
        activeCount={6}
        activeIndex={activeIndex}
        onSlideNext={slideNextHandler}
        onSlidePrev={slidePrevHandler}
      />
    </>
  )
}

export default Hero
