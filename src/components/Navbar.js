import React from 'react'
import styles from '../styles/Navbar.module.css'
export default function Navbar({userName}) {
  return (
    <div className={styles.container}>
        <div className={styles.divLeft}>
            <h2>Sou Online</h2>
            <span>{userName}</span>
        </div>
    </div>
  )
}
