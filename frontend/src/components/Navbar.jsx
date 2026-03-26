import React, { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logoFull from '../assets/logo-full.png'
import logoIcon from '../assets/logo-icon.png'
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
        <a href="/" >
          <img src={logoFull} alt="Logo" className="h-24 object-contain image-full" />
        </a>
        <ul className='hidden md:flex items-center gap-6'>
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="text-sm hover:text-blue-400 transition-colors">{label}</a>
            </li>
          ))}
          <li className='flex items-center justify-center'>
            <button
              className="btn active:scale-98 hover:scale-101 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white text-xs font-medium backdrop-blur-xl relative"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.12) 100%)',
                boxShadow: `
                  inset 0 1.5px 1px rgba(255,255,255,0.55),
                  inset 0 -1px 1px rgba(0,0,0,0.2),
                  inset 0 0 16px rgba(255,255,255,0.08),
                  0 4px 24px rgba(0,0,0,0.25)
                `,
              }}
            >
              <span className="absolute top-0 left-[12%] right-[12%] h-px rounded-full"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0.7) 60%, transparent)' }}
              />
              <div className=' text-white text-sm font-medium transition-all cursor-pointer'>
                Contact us
              </div>
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
        <div
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden backdrop-blur-xl
            ${menuOpen ? 'animate-fade-down pointer-events-auto' : 'animate-fade-up pointer-events-none'}`}
          style={{ background: 'linear-gradient(160deg, rgba(0,0,0,0.92) 0%, rgba(10,15,40,0.95) 100%)' }}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              {label}
            </a>
          ))}
          <button
            className="btn active:scale-98 hover:scale-101 inline-flex items-center px-8 py-3 rounded-full border border-white/20 text-white text-base font-medium backdrop-blur-xl relative cursor-pointer"
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.12) 100%)',
              boxShadow: `
                inset 0 1.5px 1px rgba(255,255,255,0.55),
                inset 0 -1px 1px rgba(0,0,0,0.2),
                inset 0 0 16px rgba(255,255,255,0.08),
                0 4px 24px rgba(0,0,0,0.25)
              `,
            }}
          >
            <span className="absolute top-0 left-[12%] right-[12%] h-px rounded-full"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0.7) 60%, transparent)' }}
            />
            Contact us
          </button>
        </div>
      )}
    </>
  )
}

export default Navbar