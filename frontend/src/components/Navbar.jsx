import React, { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
]

function Navbar({ heroRef }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!heroRef?.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting)
      },
      { threshold: 0.1 }
    )
    observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [heroRef])

  return (
    <>
      <nav style={scrolled ? { background: 'linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0))'  } : {}}
        className={`top-0 sticky z-50 h-20 px-6 md:px-12 flex items-center justify-between transition-all duration-500
          ${scrolled
            ? 'opacity-100 pointer-events-auto text-white'
            : 'opacity-0 pointer-events-none  text-white'
          }`}
      >
        <a href="/" className="text-xl font-bold">{'</>'}</a>
        <ul className='hidden md:flex items-center gap-6'>
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="text-sm hover:text-blue-400 transition-colors">{label}</a>
            </li>
          ))}
          <li>
            <button className='rounded-full flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer'>
              Contact us
            </button>
          </li>
        </ul>
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold text-zinc-800 hover:text-blue-600 transition-colors"
            >
              {label}
            </a>
          ))}
          <button className='rounded-full px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium transition-all cursor-pointer'>
            Contact us
          </button>
        </div>
      )}
    </>
  )
}

export default Navbar