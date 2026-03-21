import React from 'react'
import {
  SiGithub,
} from "react-icons/si"

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Works',    href: '#works' },
  { label: 'FAQ',      href: '#faq' },
]

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/67WebHeads',
    icon: (
      <SiGithub/>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
]

function Footer() {
  return (
    <footer className='border-t border-gray-200 text-black pt-12 pb-8 px-6 md:px-12 bg-white'>
      <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-0'>
        <div className='flex flex-col gap-3 max-w-xs'>
          <a href="/" className='text-2xl font-bold'>{"</>"}</a>
          <p className='text-sm text-gray-500 leading-relaxed'>
            Building fast, scalable web systems for startups that want to grow without limits.
          </p>
          <div className='flex items-center gap-3 mt-1'>
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target='_blank'
                rel='noreferrer'
                className='w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-colors'
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <p className='text-xs font-semibold uppercase tracking-widest text-gray-400'>Navigation</p>
          <ul className='flex flex-col gap-2'>
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className='text-sm text-gray-500 hover:text-black transition-colors'>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col gap-3 max-w-xs'>
          <p className='text-xs font-semibold uppercase tracking-widest text-gray-400'>Get in touch</p>
          <p className='text-sm text-gray-500 leading-relaxed'>
            Have a project in mind? We'd love to hear about it!
          </p>
          <button className='rounded-full flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 active:translate-y-0 cursor-pointer w-fit'>
            Inquire now
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer