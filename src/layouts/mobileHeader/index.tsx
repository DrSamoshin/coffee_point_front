import React from 'react'
import styles from './styles.module.css'

interface IMobileHeaderProps {
  toggleMenu: () => void
}

export const MobileHeader = ({ toggleMenu }: IMobileHeaderProps) => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <button className={styles.menuButton} onClick={toggleMenu}>
          <div className={styles.menuIcon} />
          <div className={styles.menuIcon} />
          <div className={styles.menuIcon} />
        </button>
      </div>
    </div>
  )
}
