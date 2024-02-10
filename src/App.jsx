import React from 'react'
import { Navbar } from './components'
import { Home } from './pages'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

const locomotiveScroll = new LocomotiveScroll();

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