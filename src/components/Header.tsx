import { ReactComponent as ImageLogo } from '@/assets/logo.svg'
import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { IconMenu } from './icons'

const Header = () => {
  const menuId = useId()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const collapsedHandler = () => {
    setIsCollapsed((value) => !value)
  }
  
  return (
    <header className="fixed z-20 backdrop-blur-[0.3281rem] inset-x-0 px-4 pt-[0.625rem] pb-3 bg-white bg-opacity-[.62]">
      <nav className="flex flex-wrap justify-between">
        <h1 className="relative">
          <Link
            to="/"
            className="absolute inset-0 text-transparent text-[0.25rem]">
            FunRoom
          </Link>
          <ImageLogo className="h-[2.1563rem] w-[3.7813rem] sm:w-[7.5625rem] sm:h-[4.3125rem]" />
        </h1>
        <label
          className="px-2 py-1 cursor-pointer sm:hidden"
          htmlFor={menuId}
          onClick={collapsedHandler}>
          <IconMenu isCollapsed={isCollapsed} />
        </label>
        <input
          className="peer absolute -left-full"
          id={menuId}
          type="checkbox"
        />
        <ul className="h-0 py-0 peer-checked:h-[15rem] ease-in-out duration-150 overflow-hidden flex flex-col justify-center gap-[0.9375rem] items-center basis-full sm:flex-row sm:h-auto sm:basis-auto text-center sm:gap-12">
          <li>
            <Link
              className="group block sm:w-[2.9375rem]"
              to="/room?query=single">
              <p className="group-hover:hidden">Single Room</p>
              <p className="hidden group-hover:block whitespace-nowrap">
                單人房
              </p>
            </Link>
          </li>
          <li>
            <Link
              className="group block sm:w-[5.875rem]"
              to="/room?query=deluxe-single">
              <p className="group-hover:hidden">Deluxe Single Room</p>
              <p className="hidden group-hover:block whitespace-nowrap">
                豪華單人房
              </p>
            </Link>
          </li>
          <li>
            <Link
              className="group block sm:w-[3.0625rem]"
              to="/room?query=double">
              <p className="group-hover:hidden">Double Room</p>
              <p className="hidden group-hover:block whitespace-nowrap">
                雙人房
              </p>
            </Link>
          </li>
          <li>
            <Link
              className="group block sm:w-[6.25rem]"
              to="/room?query=deluxe-double-">
              <p className="group-hover:hidden">Deluxe Double Room</p>
              <p className="hidden group-hover:block whitespace-nowrap">
                豪華雙人房
              </p>
            </Link>
          </li>
          <li>
            <Link
              className="group block sm:w-[2.6875rem]"
              to="/room?query=twin">
              <p className="group-hover:hidden">Twin Room</p>
              <p className="hidden group-hover:block whitespace-nowrap">
                雙床房
              </p>
            </Link>
          </li>
          <li>
            <Link className="group block sm:w-[5rem]" to="/room?query=deluxe">
              <p className="group-hover:hidden">Deluxe Twin Room</p>
              <p className="hidden group-hover:block whitespace-nowrap">
                豪華雙床房
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
