import React, { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ConveyorBelt from './components/ConveyorBelt'
import About from './components/About'
import Services from './components/Services'
import FAQS from './components/FAQS'
import Footer from './components/Footer'
import background from './assets/Background.webp'

function App() {
  const heroRef = useRef(null)

  return (
    <div className="flex flex-col w-full bg-white bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <Navbar heroRef={heroRef} />
      <div className="container p-4 md:p-0">
        <div ref={heroRef}>
          <Hero />
        </div>
        <div className=" flex items-center justify-center">
          <div className="flex flex-col items-center gap-1">
            <div className="w-2 h-2 border-r-2 border-b-2 border-white/40 rotate-45 animate-bounce" />
            <div className="w-2 h-2 border-r-2 border-b-2 border-white/70 rotate-45 animate-bounce" />
          </div>
        </div>
        <ConveyorBelt />
        <About />
        <Services />
        <FAQS />
        <Footer />
      </div>
    </div>
  )
}

export default App