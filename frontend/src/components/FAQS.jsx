import React, { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y:0 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay }
  })
}

const faqs = [
  {
    q: 'How long does it take to build a project?',
    a: 'Most projects take between 1-2 months, depending on complexity. We focus on delivering fast without compromising quality.',
  },
  {
    q: 'Do you only work with startups?',
    a: "We primarily work with startups, but we're open to any business that needs a custom web system or scalable solution.",
  },
  {
    q: 'Can you help refine my idea before building?',
    a: "Yes. we can help you plan, structure, and validate your idea before development starts, so you're building the right product from the beginning.",
  },
  {
    q: 'What technologies do you use?',
    a: 'We use modern technologies like React, Node.js, and scalable databases to build fast and reliable systems tailored to your needs.',
  },
]

function FAQItem({ q, a, isOpen, onClick, delay }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      custom={delay}
      variants={fadeUp}
      className="rounded-2xl overflow-hidden cursor-pointer border border-white/15 backdrop-blur-md transition-all duration-300"
      style={{
        background: isOpen
          ? 'linear-gradient(145deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 100%)'
          : 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.2), 0 2px 12px rgba(0,0,0,0.15)'
      }}
      onClick={onClick}
    >
      <div className="flex items-center justify-between p-5">
        <p className="font-semibold text-sm md:text-base pr-4 text-white">{q}</p>
        <span className={`text-blue-400 text-xl font-light shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </div>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-sm text-white/70 leading-relaxed px-5 pb-5">{a}</p>
      </div>
    </motion.div>
  )
}

function FAQS() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faqs" className='min-h-dvh flex flex-col items-center justify-center text-white gap-4'>
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
        FAQs
      </motion.div>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        custom={0.1}
        variants={fadeUp}
        className='text-4xl md:text-5xl font-bold leading-tight text-center'
      >
        Frequently Asked Questions
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        custom={0.2}
        variants={fadeUp}
        className='text-white/60 text-base md:text-lg text-center'
      >
        Everything you need to know before getting started.
      </motion.p>

      <div className="mt-4 w-full max-w-2xl flex flex-col gap-3">
        {faqs.map(({ q, a }, i) => (
          <FAQItem
            key={i}
            q={q}
            a={a}
            isOpen={openIndex === i}
            onClick={() => toggle(i)}
            delay={i * 0.1}
          />
        ))}
      </div>
    </section>
  )
}

export default FAQS