import { Routes, Route, useLocation } from 'react-router-dom'
import { AboutUs, Products } from '@pages'
import { useEffect } from 'react'

interface NavigationProps {
  setActivePage: (page: string) => void
}

export const Navigation = ({ setActivePage }: NavigationProps) => {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname.slice(1) || 'Products'
    setActivePage(path)
  }, [location.pathname, setActivePage])

  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  )
}
