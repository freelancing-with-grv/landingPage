import React from 'react'
import { Navbar } from './components'
import { Home } from './pages'

const App = () => {
  return (
    <>
    <div className='w-full min-h-screen text-white'>
      <Navbar/>
      <Home/>
    </div>
    </>
  )
}

export default App