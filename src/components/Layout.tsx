import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="relative z-0 h-full">{children ?? <Outlet />}</main>
      <Footer />
    </>
  )
}

export default Layout
