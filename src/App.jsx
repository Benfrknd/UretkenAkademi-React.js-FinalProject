import { useState } from 'react'

import SiteRoutes from './SiteRoutes'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Header />
      <SiteRoutes />
    </>
  )
}

export default App
