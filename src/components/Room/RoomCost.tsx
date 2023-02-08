import clsx from 'clsx'

const RoomCost = ({ className }: { className: string }) => {
  return (
    <div className={clsx('gap-4 mx-auto', className)}>
      <div>
        <p className="text-sm text-[#949494]">平日(週一 ~週四)</p>
        <p className="text-[1.3469rem] md:text-2xl">
          $2,888/<span className="text-sm">日</span>
        </p>
      </div>
      <div>
        <p className="text-sm text-[#949494]">假日(週五~週日)</p>
        <p className="text-[1.3469rem] md:text-2xl">
          $3,000/<span className="text-sm">日</span>
        </p>
      </div>
    </div>
  )
}

export default RoomCost
