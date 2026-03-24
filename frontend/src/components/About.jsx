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
      <motion.div variants={fadeUp} custom={0}>
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