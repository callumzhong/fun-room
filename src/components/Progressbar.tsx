import styles from './Progressbar.module.css'

const Progressbar = ({ width }: { width: number }) => {
  return (
    <div className={styles.progressbarWrapper}>
      <span style={{ width: `${width}%` }}></span>
    </div>
  )
}

export default Progressbar
