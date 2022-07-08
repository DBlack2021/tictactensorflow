import React from 'react'
import styles from '../style/Cell.module.css'

export default function Cell({state, onClick}) {
  return (
    <div className={styles.cell} onClick={onClick}>
      { state }
    </div>
  )
}
