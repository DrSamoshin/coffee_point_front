import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AboutUs, Products } from '@pages'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}
