import React from 'react'
import { Coffee, Info, Music, Palette } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import { NavItem } from '../navItem'

interface ISidebarProps {
  activePage: string
  setActivePage: (page: string) => void
}

export const Sidebar = ({ activePage, setActivePage }: ISidebarProps) => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Menu</h2>
      </div>

      <nav className={styles.nav}>
        <NavItem
          icon={<Coffee />}
          label="Products"
          isActive={activePage === 'Products'}
          onClick={() => {
            setActivePage('Products')
            navigate('/')
          }}
        />
        <NavItem
          icon={<Palette />}
          label="Art"
          isActive={activePage === 'art'}
          onClick={() => setActivePage('art')}
          disabled={true}
        />
        <NavItem
          icon={<Music />}
          label="Music"
          isActive={activePage === 'music'}
          onClick={() => setActivePage('music')}
          disabled={true}
        />
      </nav>

      <div className={styles.footer}>
        <NavItem
          icon={<Info />}
          label="About Us"
          isActive={activePage === 'about'}
          onClick={() => {
            setActivePage('about')
            navigate('/about')
          }}
        />
      </div>
    </div>
  )
}
