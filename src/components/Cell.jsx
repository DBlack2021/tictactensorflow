import React from 'react'
import styles from '../style/Cell.module.css'

export default function Cell({turn, onClick}) {
  return (
    <div className={styles.cell} onClick={onClick}>
      <h1 className={styles.heading}>{ turn }</h1>
    </div>
  )
}
