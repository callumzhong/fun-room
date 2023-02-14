import { FaFacebook, MaterialSymbolsMail, PhInstagramLogo } from './icons'

const SocialMedia = () => {
  return (
    <ul className="absolute top-[4.5rem] left-[1.1875rem] z-10 flex flex-col gap-2 sm:bottom-[2.4375rem] sm:top-auto sm:right-[1.6875rem] sm:left-auto sm:flex-row">
      <li>
        <a
          href="https://www.google.com.tw/?hl=zh_TW"
          className="block rounded-full bg-black p-2 text-white"
          target={'_blank'}>
          <FaFacebook className="h-[1.125rem] w-[1.125rem]" />
        </a>
      </li>
      <li>
        <a
          href="https://www.google.com.tw/?hl=zh_TW"
          className="block rounded-full bg-black p-2 text-white"
          target={'_blank'}>
          <PhInstagramLogo className="h-[1.125rem] w-[1.125rem]" />
        </a>
      </li>
      <li>
        <a
          href="https://www.google.com.tw/?hl=zh_TW"
          className="block rounded-full bg-black p-2 text-white"
          target={'_blank'}>
          <MaterialSymbolsMail className="h-[1.125rem] w-[1.125rem]" />
        </a>
      </li>
    </ul>
  )
}

export default SocialMedia
