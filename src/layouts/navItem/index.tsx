import React from 'react'
import styles from './styles.module.css'

interface INavItemProps {
  icon: React.ReactNode
  label: string
  isActive: boolean
  disabled?: boolean
  onClick: () => void
}

export const NavItem = ({
  icon,
  label,
  isActive,
  disabled,
  onClick,
}: INavItemProps) => {
  return (
    <button
      onClick={onClick}
      className={isActive ? styles.active : styles.inactive}
      disabled={disabled}
    >
      {isActive && <div className={styles.indicator} />}
      <span className={styles.icon}>{icon}</span>
      <span className={isActive ? styles.labelActive : styles.label}>
        {label}
      </span>
      {disabled && <div className={styles.disabled} />}
    </button>
  )
}
