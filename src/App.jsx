import React from 'react'
import { Navbar } from './components'
import { Home } from './pages'

const App = () => {
  return (
    <>
    <div className='w-full h-screen text-white bg-zinc-900'>
      <Navbar/>
      <Home/>
    </div>
    </>
  )
}

export default App