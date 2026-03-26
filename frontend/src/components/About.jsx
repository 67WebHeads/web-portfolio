import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay }
  })
}

export default function About() {
  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      id='about'
      className='min-h-dvh gap-5 flex flex-col items-center justify-center text-white'
    >
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
        Who we are
      </motion.div>
      <motion.p variants={fadeUp} custom={0.2}
        className='text-3xl md:text-6xl font-bold text-center'>
        A small team building systems startups can grow on.
      </motion.p>
      <motion.p variants={fadeUp} custom={0.4}
        className='text-sm md:text-lg text-gray-300 text-center max-w-xl leading-relaxed'>
        We focus on building systems that are fast to launch, easy to scale, and ready for real users
      </motion.p>
    </motion.section>
  )
}