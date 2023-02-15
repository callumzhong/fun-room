import { DisplayableRates } from '@/types'
import currency from '@/utils/currency'
import clsx from 'clsx'

const RoomCost = ({
  data,
  className
}: {
  data: DisplayableRates
  className: string
}) => {
  const { holiday, weekdays } = data
  return (
    <div className={clsx('mx-auto gap-4', className)}>
      <div>
        <p className="text-sm text-[#949494]">{weekdays.displayPeriod}</p>
        <p className="text-[1.3469rem] md:text-2xl">
          {currency(weekdays.displayPrice)}/<span className="text-sm">日</span>
        </p>
      </div>
      <div>
        <p className="text-sm text-[#949494]">{holiday.displayPeriod}</p>
        <p className="text-[1.3469rem] md:text-2xl">
          {currency(holiday.displayPrice)}/<span className="text-sm">日</span>
        </p>
      </div>
    </div>
  )
}

export default RoomCost
