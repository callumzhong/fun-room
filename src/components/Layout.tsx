import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
const Layout = () => {
  return (
    <>
      <Header />
      <main className="relative pb-8">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
