import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ConveyorBelt from './components/ConveyorBelt'
import About from './components/About'
import Services from './components/Services'
import FAQS from './components/FAQS'
import Footer from './components/Footer'
function App() {
  return (
    <div className="flex flex-col  w-full bg-white">
      <Navbar/>
      <div className="container p-4 md:p-0">
        <Hero/>
        <ConveyorBelt/>
        <About/>
        <Services/>
        <FAQS/>
        <Footer/>
      </div>
    </div>
  )
}

export default App