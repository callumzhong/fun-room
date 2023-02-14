import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import DelayedLoading from './Loading'
const Layout = () => {
  return (
    <>
      <Header />
      <main className="relative z-0 h-full">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
