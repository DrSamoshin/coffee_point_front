import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Navigation } from '@navigation'
import { Layout } from '@layouts'

const App = () => {
  const [activePage, setActivePage] = useState('home')

  return (
    <BrowserRouter>
      <Layout activePage={activePage} setActivePage={setActivePage}>
        <Navigation setActivePage={setActivePage} />
      </Layout>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
