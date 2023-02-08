import {
  RoomEvaluation,
  RoomForm,
  RoomIntroduce,
  RoomPhoto,
  RoomCost
} from '@/components/Room'
import Tab from '@/components/Tab'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import { useEffect, useState } from 'react'

const TABS = [
  {
    name: '房間介紹',
    tab: 'one'
  },
  {
    name: '房客評價(112)',
    tab: 'two'
  }
]

const Introduce = () => (
  <div className="flex flex-col md:flex-row px-8 md:gap-8">
    <section className="w-full md:w-8/12">
      <RoomIntroduce />
    </section>
    <div className="flex flex-col gap-4 w-full md:w-4/12">
      <RoomCost className="hidden md:flex md:mt-[7.5rem]" />
      <RoomForm />
    </div>
  </div>
)

const Evaluation = () => (
  <div className="px-8 py-6">
    <RoomEvaluation />
  </div>
)

const Room = () => {
  const [tab, setTab] = useState(0)
  const tabHandler = (value: number) => {
    setTab(value)
  }
  //使用 useId() 產生，PhotoSwipeLightbox 會有 error
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

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth >= 768 && tab !== 0) {
        setTab(0)
      }
    }
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  return (
    <div className="container mx-auto pb-8">
      <RoomPhoto />
      <Tab data={TABS} active={tab} onActive={tabHandler} />
      {tab === 0 && <Introduce />}
      {tab === 1 && <Evaluation />}
    </div>
  )
}
export default Room
