import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AboutUs, Catalog } from '@pages'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}
