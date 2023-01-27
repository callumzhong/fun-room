import { FaFacebook, MaterialSymbolsMail, PhInstagramLogo } from './icons'

const SocialMedia = () => {
  return (
    <ul className="absolute z-10 top-[4.5rem] flex flex-col gap-2 left-[1.1875rem] sm:bottom-[2.4375rem] sm:top-auto sm:right-[1.6875rem] sm:left-auto sm:flex-row">
      <li>
        <a
          href="https://www.google.com.tw/?hl=zh_TW"
          className="bg-black text-white p-2 block rounded-full"
          target={'_blank'}>
          <FaFacebook className="w-[1.125rem] h-[1.125rem]" />
        </a>
      </li>
      <li>
        <a
          href="https://www.google.com.tw/?hl=zh_TW"
          className="bg-black text-white p-2 block rounded-full"
          target={'_blank'}>
          <PhInstagramLogo className="w-[1.125rem] h-[1.125rem]" />
        </a>
      </li>
      <li>
        <a
          href="https://www.google.com.tw/?hl=zh_TW"
          className="bg-black text-white p-2 block rounded-full"
          target={'_blank'}>
          <MaterialSymbolsMail className="w-[1.125rem] h-[1.125rem]" />
        </a>
      </li>
    </ul>
  )
}

export default SocialMedia
