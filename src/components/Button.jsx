import React from 'react'
import styles from '../css/modules/Button.module.css'

const Button = () => {
  return (
    <div className={styles.buttonBox}>
        <div className={styles.outerButton}>
        <a href="#" className={styles.innerButton} draggable="false">Read more  →</a>
    </div>
    </div>
    
  )
}

export default Button