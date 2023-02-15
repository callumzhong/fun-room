import clsx from 'clsx'
import { createPortal } from 'react-dom'
import styles from './Loading.module.css'
import { CSSTransition } from 'react-transition-group'
import { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react'

const LOADING_OVERLAYS = document.getElementById('overlays-root')

interface WavePercentProps {
  progress: number
}

const WavePercent = forwardRef(
  ({ progress }: WavePercentProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        className="fixed inset-0 z-[999999] bg-gradient-to-t from-vulcan-300 to-vulcan-500 text-white">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          style={{ display: 'none' }}>
          <symbol id="wave">
            <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
            <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
            <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
            <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
          </symbol>
        </svg>
        <div className={styles.box}>
          <div className={styles.percent}>
            <div className="percentNum" id="count">
              {Math.floor(progress)}
            </div>
            <div className="percentB">%</div>
          </div>
          <div
            id="water"
            className={styles.water}
            style={{
              transform: `translate(0px,${100 - progress}%)`
            }}>
            <svg
              viewBox="0 0 560 20"
              className={clsx(styles.water__wave, styles['water__wave--back'])}>
              <use xlinkHref="#wave"></use>
            </svg>
            <svg
              viewBox="0 0 560 20"
              className={clsx(
                styles.water__wave,
                styles['water__wave--front']
              )}>
              <use xlinkHref="#wave"></use>
            </svg>
          </div>
        </div>
      </div>
    )
  }
)

const Loading = ({ progress }: { progress: number }) => {
  const [inProp, setInProp] = useState(false)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setInProp(true)
    if (progress === 100) {
      setInProp(false)
    }
  }, [progress])

  return (
    <>
      {createPortal(
        <CSSTransition
          nodeRef={divRef}
          in={inProp}
          timeout={800}
          unmountOnExit
          classNames={{
            enter: styles['my-node-enter'],
            enterActive: styles['my-node-enter-active'],
            exit: styles['my-node-exit'],
            exitActive: styles['my-node-exit-active']
          }}>
          <WavePercent ref={divRef} progress={progress} />
        </CSSTransition>,
        LOADING_OVERLAYS!
      )}
    </>
  )
}

export default Loading
