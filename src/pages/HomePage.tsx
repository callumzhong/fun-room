// import rooms from '@/apis/rooms'
import GuideText from '@/components/GuideText'
import Loading from '@/components/Loading'
import SampleHouse from '@/components/SampleHouse'
import SocialMedia from '@/components/SocialMedia'
import { useProgress } from '@react-three/drei'

const HomePage = () => {
  const { progress } = useProgress()

  return (
    <>
      <SampleHouse />
      <SocialMedia />
      <GuideText />
      <Loading progress={progress} />
    </>
  )
}

export default HomePage
