import React, { useState } from 'react'
import styles from './styles.module.css'
import { MobileHeader as MobileHeaderBase } from './mobileHeader'
import { Crown } from 'lucide-react'
import { Sidebar } from './sidebar'

interface LayoutProps {
  children: React.ReactNode
  activePage: string
  setActivePage: (page: string) => void
}

const Logo = React.memo(() => (
  <div className={styles.logo}>
    <Crown className={styles.logoIcon} />
    <span className={styles.logoText}>CoffeePoint</span>
  </div>
))

const Footer = React.memo(() => (
  <footer className={styles.footer}>
    © {new Date().getFullYear()} CoffeePoint. All rights reserved.
  </footer>
))

const MobileHeader = React.memo(MobileHeaderBase)

export const Layout = ({
  children,
  activePage,
  setActivePage,
}: LayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = React.useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
      </div>

      <div className={styles.mainContent}>
        <div className={styles.header}>
          <Logo />
        </div>

        <div className={styles.mobileHeader}>
          <MobileHeader toggleMenu={toggleMobileMenu} />
          <Logo />
        </div>

        <div
          className={
            isMobileMenuOpen ? styles.mobileOverlay : styles.mobileOverlayHidden
          }
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={
            isMobileMenuOpen ? styles.mobileSidebar : styles.mobileSidebarHidden
          }
        >
          <Sidebar
            activePage={activePage}
            setActivePage={(page) => {
              setActivePage(page)
              setIsMobileMenuOpen(false)
            }}
          />
        </div>

        <main className={styles.main}>
          <div className={styles.content}>{children}</div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
