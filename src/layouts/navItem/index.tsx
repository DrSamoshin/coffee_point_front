import React from 'react'
import styles from './styles.module.css'

interface INavItemProps {
  icon: React.ReactNode
  label: string
  isActive: boolean
  onClick: () => void
  disabled?: boolean
}

export const NavItem = ({
  icon,
  label,
  isActive,
  onClick,
  disabled = false,
}: INavItemProps) => {
  const buttonClass = disabled
    ? styles.disabled
    : isActive
      ? styles.active
      : styles.inactive

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      <div className={styles.indicator} />
      <div className={styles.icon}>{icon}</div>
      <span className={isActive ? styles.labelActive : styles.label}>
        {label}
      </span>
    </button>
  )
}
