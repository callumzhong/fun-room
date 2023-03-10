import clsx from 'clsx'
import styles from './IconMenu.module.css'

export const IconMenu = ({
  isCollapsed,
  className
}: {
  isCollapsed: boolean
  className?: string
}) => {
  return (
    <div
      className={clsx(
        'relative flex h-7 w-5 flex-col justify-center',
        isCollapsed && styles.collapsed,
        className
      )}>
      <i
        className={clsx(
          'absolute top-1/2 -mt-1 h-[2px] w-full -translate-y-1/2 bg-black group-hover:bg-white',
          styles.top
        )}
      />
      <i className={clsx('relative h-[2px] w-full bg-black', styles.middle)} />
      <i
        className={clsx(
          'absolute top-1/2 mt-1 h-[2px] w-full -translate-y-1/2 bg-black group-hover:bg-white',
          styles.bottom
        )}
      />
    </div>
  )
}
