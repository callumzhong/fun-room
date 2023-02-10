import SampleHouse from '@/components/SampleHouse'
import SocialMedia from '@/components/SocialMedia'

const Home = () => {
  return (
    <>
      <div className="fixed inset-0 bg-white">
        <div className="absolute inset-0 z-50" />
        <SampleHouse />
      </div>
      <SocialMedia />
    </>
  )
}

export default Home
