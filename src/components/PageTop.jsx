import React from 'react'
import styles from '../css/modules/PageTop.module.css'

const GoTop = () => {
  return (
    <div className={styles.pageTop_box}>
      <a href="#" className={styles.pageTop_link}>
      <div className={styles.pageTop_text}>
        <img src="src/images/pageTop_text.svg" alt="" />
      </div>
      <div className={styles.pageTop_finger}>
        <img src="src/images/pageTop_finger.svg" alt="" />
      </div>
      </a>
    </div>
  )
}

export default GoTop