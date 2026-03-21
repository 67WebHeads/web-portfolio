import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#works' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="top-0 sticky z-50 bg-white text-zinc-800 h-20  px-6 md:px-12 flex items-center justify-between">
        <a href="/" className="text-xl font-bold">{'</>'}</a>
        <ul className='hidden md:flex items-center gap-6'>
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="text-sm text-gray-500 hover:text-black transition-colors">{label}</a>
            </li>
          ))}
          <li>
            <button className='rounded-full flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer'>
              Contact us
            </button>
          </li>
        </ul>
        <button
          className="md:hidden text-zinc-800 cursor-pointer"
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