import clsx from 'clsx'

type Props = {
  name: string
  tab: string
}

const Tab = ({
  data,
  active,
  onActive
}: {
  data: Props[]
  active: number
  onActive: (value: number) => void
}) => {
  const activeHandler = (value: number) => {
    onActive(value)
  }

  return (
    <ul className="flex md:hidden bg-[#F1F1F1]">
      {data.map((item, idx) => (
        <li
          key={item.tab}
          className={clsx('flex-1 text-center text-sm', {
            'border-black border-b-2': idx === active
          })}>
          <button
            onClick={() => activeHandler(idx)}
            className="leading-[2.1875rem] block w-full">
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Tab
