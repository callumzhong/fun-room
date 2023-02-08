import clsx from 'clsx'
import React from 'react'

const classes = {
  common: 'shadow-[1px_4px_9px_rgba(0,0,0,0.13)] px-[1.75rem] py-[0.9375rem]',
  blur: 'px-[0.9688rem] pb-[0.875rem] pt-[0.6875rem] bg-white bg-opacity-[.38] backdrop-blur-[0.1406rem]'
}

const Card = ({
  children,
  className,
  mode = 'common'
}: {
  mode?: 'common' | 'blur'
  children: React.ReactNode
  className?: string
}) => {
  return <div className={clsx(classes[mode], className)}>{children}</div>
}

export default Card
