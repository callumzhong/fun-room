import Card from '@/components/Card'
import { RoomIntroduce, RoomPhoto, RoomCost } from '@/components/Room'
import useGetRoomApi from '@/hooks/useGetRoomApi'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import { useEffect } from 'react'
import { redirect, useParams } from 'react-router-dom'
import ImageSeller from '@/assets/seller.jpg'

const GeneratorSeller = () => {
  return (
    <Card className="w-full">
      <div className="mb-6 flex items-center gap-6">
        <img className="rounded-full" src={ImageSeller} />
        <div>
          <p className="text-lg">Ethan Simmmons</p>
          <p>FunRoom 股份有限公司</p>
        </div>
      </div>
      <a
        href="tel:555-555-5555"
        className="block border-2 text-center leading-9 hover:bg-black hover:text-white">
        <img src="path/to/phone/icon.jpg" alt="Call 555-555-5555" />
      </a>
    </Card>
  )
}

const RoomPage = () => {
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

  const params = useParams()
  if (!params.id) {
    redirect('/')
  }

  const { isLoading, roomData } = useGetRoomApi({ type: params.id! })
  if (isLoading) return <></>

  return (
    <div className="container mx-auto pb-8">
      <RoomPhoto images={roomData.images} />
      <div className="flex flex-col px-8 md:flex-row md:gap-8">
        <section className="w-full md:w-8/12">
          <RoomIntroduce room={roomData} />
        </section>
        <div className="flex w-full flex-col gap-4 md:w-4/12">
          <RoomCost
            data={roomData.roomFeatures.displayableRates}
            className="hidden md:mt-[6.5rem] md:flex"
          />
          <GeneratorSeller />
          {/* <RoomForm /> */}
        </div>
      </div>
    </div>
  )
}
export default RoomPage
