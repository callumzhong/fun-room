import { ReactComponent as ImageLogo } from '@/assets/logo.svg'
import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconMenu } from './icons'

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const collapsedHandler = (value?: boolean) => {
    if (typeof value === 'undefined') {
      setIsCollapsed((state) => !state)
      return
    }
    setIsCollapsed(value)
  }

  return (
    <header className="fixed inset-x-0 z-10 bg-white bg-opacity-[.62] px-4 pt-[0.625rem] pb-3 backdrop-blur-[0.3281rem]">
      <nav className="container mx-auto flex flex-wrap justify-between">
        <h1 className="relative">
          <Link
            onClick={() => collapsedHandler(false)}
            to="/"
            className="absolute inset-0 text-[0.25rem] text-transparent">
            FunRoom
          </Link>
          <ImageLogo className="h-[2.1563rem] w-[3.7813rem] sm:h-[4.3125rem] sm:w-[7.5625rem]" />
        </h1>
        <button
          className="cursor-pointer px-2 py-1 sm:hidden"
          onClick={() => collapsedHandler()}>
          <IconMenu isCollapsed={isCollapsed} />
        </button>
        <ul
          className={clsx(
            'flex h-0 basis-full flex-col gap-[0.9375rem] overflow-hidden py-0 duration-150 ease-in-out sm:h-auto sm:basis-auto sm:flex-row sm:gap-12',
            isCollapsed && 'h-6',
            !isCollapsed && 'h-0'
          )}>
          <li className="group flex h-full items-center justify-center">
            <Link
              className="block sm:w-[2.9375rem]"
              to="/room/single"
              onClick={() => collapsedHandler(false)}>
              <p className="group-hover:hidden">Single Room</p>
              <p className="hidden whitespace-nowrap group-hover:block">
                單人房
              </p>
            </Link>
          </li>
          {/* TODO:後續補資料 */}
          {/* <li className="group flex h-full items-center justify-center">
            <Link
              onClick={() => collapsedHandler(false)}
              className="block sm:w-[5.875rem]"
              to="/room/deluxe-single">
              <p className="group-hover:hidden">Deluxe Single Room</p>
              <p className="hidden whitespace-nowrap group-hover:block">
                豪華單人房
              </p>
            </Link>
          </li>
          <li className="group flex h-full items-center justify-center">
            <Link
              className="block sm:w-[3.0625rem]"
              to="/room/double"
              onClick={() => collapsedHandler(false)}>
              <p className="group-hover:hidden">Double Room</p>
              <p className="hidden whitespace-nowrap group-hover:block">
                雙人房
              </p>
            </Link>
          </li>
          <li className="group flex h-full items-center justify-center">
            <Link
              onClick={() => collapsedHandler(false)}
              className="block sm:w-[6.25rem]"
              to="/room/deluxe-double">
              <p className="group-hover:hidden">Deluxe Double Room</p>
              <p className="hidden whitespace-nowrap group-hover:block">
                豪華雙人房
              </p>
            </Link>
          </li>
          <li className="group flex h-full items-center justify-center">
            <Link
              className="block sm:w-[2.6875rem]"
              to="/room/twin"
              onClick={() => collapsedHandler(false)}>
              <p className="group-hover:hidden">Twin Room</p>
              <p className="hidden whitespace-nowrap group-hover:block">
                雙床房
              </p>
            </Link>
          </li>
          <li className="group flex h-full items-center justify-center">
            <Link
              className="block sm:w-[5rem]"
              to="/room/deluxe-twin"
              onClick={() => collapsedHandler(false)}>
              <p className="group-hover:hidden">Deluxe Twin Room</p>
              <p className="hidden whitespace-nowrap group-hover:block">
                豪華雙床房
              </p>
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}
export default Header
