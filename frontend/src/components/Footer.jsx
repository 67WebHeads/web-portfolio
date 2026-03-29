import React from 'react'
import { motion } from 'framer-motion'
import { SiGithub } from "react-icons/si"
import InstagramIcon from '@mui/icons-material/Instagram'
import logoIcon from '../assets/logo-icon.png'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay }
  })
}

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'FAQs', href: '#faqs' },
]

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/67WebHeads',
    icon: <SiGithub />,
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
  {
    label: 'Instagram',
    href: 'https://instagram.com/webheads.67',
    icon: <InstagramIcon />,
  },
]

function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className='text-white pt-12 pb-8 px-6 md:px-12 bg-transparent'
    >
      <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-0'>
        <motion.div variants={fadeUp} custom={0} className='flex flex-col gap-3 max-w-xs'>
          {/* <a href="/" className='text-2xl font-bold'>
            <img src={logoIcon} alt="Logo" className="h-18 object-contain image-full" />
          </a> */}
          <p className='text-sm text-white-200 leading-relaxed'>
            Building fast, scalable web systems for startups that want to grow without limits.
          </p>
          <div className='flex items-center gap-3 mt-1'>
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target='_blank'
                rel='noreferrer'
                className='w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-200 hover:text-blue-600 hover:border-blue-300 transition-colors'
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} custom={0.2} className='flex flex-col gap-3'>
          <p className='text-xs font-semibold uppercase tracking-widest text-gray-100'>Navigation</p>
          <ul className='flex flex-col gap-2'>
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className='text-sm text-gray-200 hover:text-black transition-colors'>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeUp} custom={0.4} className='flex flex-col max-w-xs'>
          <p className='text-xs font-semibold uppercase tracking-widest text-gray-100 mb-2'>Get in touch</p>
          <p className='text-sm text-gray-200 leading-relaxed mb-5 md:mb-0'>
            Have a project in mind? We'd love to hear about it!
          </p>
          <div className="grow"></div>
          <a
            className="btn active:scale-98 hover:scale-101 inline-flex w-fit items-center gap-2 px-5 py-2.5 rounded-full border border-blue-400/40 text-white text-sm font-medium backdrop-blur-xl relative cursor-pointer hover:shadow-lg hover:shadow-blue-500/30 active:translate-y-0 transition-all"
            style={{
              background: 'linear-gradient(145deg, rgba(59,130,246,0.45) 0%, rgba(59,130,246,0.15) 50%, rgba(59,130,246,0.3) 100%)',
              boxShadow: `
                inset 0 1.5px 1px rgba(255,255,255,0.35),
                inset 0 -1px 1px rgba(0,0,0,0.2),
                inset 0 0 16px rgba(59,130,246,0.15),
                0 4px 24px rgba(59,130,246,0.2)
              `,
            }}
            href='#contact'
          >
            <span className="absolute top-0 left-[12%] right-[12%] h-px rounded-full"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.6) 60%, transparent)' }}
            />
            Inquire now
          </a>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer