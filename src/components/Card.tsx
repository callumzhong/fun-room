import clsx from 'clsx'
import React from 'react'

const Card = ({
  children,
  className
}: {
  children: React.ReactNode
  className: string
}) => {
  return (
    <div
      className={clsx(
        'px-[0.9688rem] pb-[0.875rem] pt-[0.6875rem] bg-white bg-opacity-[.38] backdrop-blur-[0.1406rem]',
        className
      )}>
      {children}
    </div>
  )
}

export default Card
