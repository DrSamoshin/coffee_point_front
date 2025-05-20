import { Menu, Coffee } from 'lucide-react'

import styles from './styles.module.css'

interface IMobileHeaderProps {
  toggleMenu: () => void
}

export const MobileHeader = ({ toggleMenu }: IMobileHeaderProps) => {
  return (
    <div className={styles.header}>
      <button
        onClick={toggleMenu}
        className={styles.menuButton}
        aria-label="Toggle menu"
      >
        <Menu className={styles.menuIcon} />
      </button>
    </div>
  )
}
