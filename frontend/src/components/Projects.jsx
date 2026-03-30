import React from 'react'
import { motion } from 'framer-motion'
import akimi from '../assets/mock/akimi.webp'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay }
  })
}

const projects = [
  {
    url: 'akimistudio.cloud',
    title: 'Akimi Studio',
    desc: 'An appointment booking system for Akimi Studio. Clients browse services, pick a time slot, enter their info, and pay online.',
    image: akimi,
    redirectLink: 'https://akimistudio.cloud'
  },
  {
    url: '',
    title: 'RAngeles',
    desc: 'A custom CRM for RAngeles, a property leasing company. It manages properties, tenants, and sales in one place.',
    image: null,
    redirectLink: null
  },
]

function ProjectCard({ url, title, desc, index, image ,redirectLink }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      custom={index * 0.15}
      variants={fadeUp}
      className="flex flex-col gap-3"
    >
      <div className="mockup-browser bg-zinc-800 flex flex-col shadow-sm h-fit md:h-87.5 w-full">
        <div className="mockup-browser-toolbar">
          <div className="input">{url}</div>
        </div>
        <div className="flex items-center justify-center grow text-white/20 text-sm">
          <a href={redirectLink} target="_blank" rel="noopener noreferrer" className='w-full h-full'>
            <img src={image} className="w-full h-full object-contain object-top" alt={title} />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-1 px-1">
        <p className="font-semibold text-white text-base">
          {title}
        </p>
        <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

function Projects() {
  return (
    <section id="projects" className='min-h-dvh flex flex-col items-center justify-center text-white gap-4 mt-10 md:mt-0'>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        custom={0}
        variants={fadeUp}
        className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border border-white/20 text-white text-xs font-medium backdrop-blur-xl relative"
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
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block shadow-[0_0_6px_rgba(59,130,246,0.6)]" />
        What we've built
      </motion.div>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        custom={0.15}
        variants={fadeUp}
        className='text-4xl md:text-5xl font-bold leading-tight text-center'
      >
        Our Works <span className="font-normal">in the Wild.</span>
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        custom={0.25}
        variants={fadeUp}
        className='text-white/50 text-base md:text-lg text-center max-w-md'
      >
        A look at what we've shipped.
      </motion.p>

      <div className="w-full mt-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
          {projects.map(({ url, title, desc, image, redirectLink }, i) => (
            <ProjectCard key={i} url={url} title={title} desc={desc} index={i} image={image} redirectLink={redirectLink} />
          ))}
        </div>
      </div>

    </section>
  )
}

export default Projects