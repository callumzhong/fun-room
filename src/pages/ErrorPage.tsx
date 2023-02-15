import { RiEmotionUnhappyLine } from '@/components/icons'
import Layout from '@/components/Layout'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <Layout>
      <div className="absolute inset-0 m-auto h-max w-max">
        <RiEmotionUnhappyLine className="h-40 w-40 sm:h-64 sm:w-64" />
        <h2 className="text-center text-4xl">404</h2>
        <p>
          很抱歉，此頁面已經不存在! <br />
          請點擊
          <Link
            to="/"
            className="px-2 text-blue-700 underline hover:text-blue-900">
            回到首頁
          </Link>
        </p>
      </div>
    </Layout>
  )
}

export default ErrorPage
