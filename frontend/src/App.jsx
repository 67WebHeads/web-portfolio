import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="flex justify-center w-full bg-gray-100">
      <div className="container">
        <Navbar/>
        <Hero/>
      </div>
    </div>
  )
}

export default App