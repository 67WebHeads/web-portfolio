import React, { useState } from 'react'
import { motion } from 'framer-motion'
import InstagramIcon from '@mui/icons-material/Instagram'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay }
  })
}

const glassInput = {
  background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.12), 0 2px 8px rgba(0,0,0,0.15)',
}

const glassPill = {
  background: 'linear-gradient(145deg, rgba(59,130,246,0.45) 0%, rgba(59,130,246,0.15) 50%, rgba(59,130,246,0.3) 100%)',
  boxShadow: `
    inset 0 1.5px 1px rgba(255,255,255,0.35),
    inset 0 -1px 1px rgba(0,0,0,0.2),
    inset 0 0 16px rgba(59,130,246,0.15),
    0 4px 24px rgba(59,130,246,0.2)
  `,
}

const BUDGET_MIN = 15000
const BUDGET_MAX = 100000

function Form() {
  const [budget, setBudget] = useState(50000)
  const [submitted, setSubmitted] = useState(false)

  const budgetPercent = ((budget - BUDGET_MIN) / (BUDGET_MAX - BUDGET_MIN)) * 100

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact-us" className='min-h-dvh flex flex-col md:flex-row items-center justify-center text-white gap-12 py-20'>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col flex-1 space-y-6 md:max-w-md"
      >
        <motion.div
          custom={0} variants={fadeUp}
          className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white text-xs font-medium backdrop-blur-xl relative"
          style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.12) 100%)',
            boxShadow: `inset 0 1.5px 1px rgba(255,255,255,0.55), inset 0 -1px 1px rgba(0,0,0,0.2), 0 4px 24px rgba(0,0,0,0.25)`,
          }}
        >
          <span className="absolute top-0 left-[12%] right-[12%] h-px rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0.7) 60%, transparent)' }}
          />
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block shadow-[0_0_6px_rgba(59,130,246,0.6)]" />
          Get in touch
        </motion.div>

        <motion.h2 custom={0.15} variants={fadeUp} className='text-4xl md:text-5xl font-bold leading-tight'>
          Let's Build Something <span className='font-normal'>Together.</span>
        </motion.h2>

        <motion.p custom={0.3} variants={fadeUp} className='text-white/60 text-base md:text-lg leading-relaxed'>
          Have a website or app in mind? Tell us about your project and we'll get back to you.
        </motion.p>

        <motion.p custom={0.4} variants={fadeUp} className='text-white/40 text-sm'>
          You can also reach us on social media.
        </motion.p>

        <motion.a
          custom={0.5} variants={fadeUp}
          href="https://instagram.com/webheads.67"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-white/70 text-sm backdrop-blur-md hover:text-white transition-all"
          style={glassInput}
        >
          <InstagramIcon style={{ fontSize: 18 }} />
           Webheads
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        className="flex-1 w-full md:max-w-md rounded-3xl backdrop-blur-xl p-8 relative shadow-sm"
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%)',
        }}
      >
        {submitted ? (
          <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 text-2xl">✓</div>
            <p className="text-white font-semibold text-lg">Message sent!</p>
            <p className="text-white/50 text-sm">We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-white/50 font-medium tracking-wide uppercase">Name</label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-white/10 text-white text-sm placeholder:text-white/25 outline-none focus:border-blue-400/50 transition-all bg-transparent backdrop-blur-md"
                style={glassInput}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-white/50 font-medium tracking-wide uppercase">Email</label>
              <input
                type="email"
                required
                placeholder="example@email.com"
                className="w-full px-4 py-3 rounded-xl border border-white/10 text-white text-sm placeholder:text-white/25 outline-none focus:border-blue-400/50 transition-all bg-transparent backdrop-blur-md"
                style={glassInput}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-white/50 font-medium tracking-wide uppercase">Project Type</label>
              <select
                required
                defaultValue=""
                className="w-full px-4 py-3 rounded-xl border border-white/10 text-white text-sm outline-none focus:border-blue-400/50 transition-all backdrop-blur-md appearance-none cursor-pointer"
                style={{ ...glassInput, background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)' }}
              >
                <option value="" disabled className="bg-zinc-900">Select a type</option>
                <option value="website" className="bg-zinc-900">Website</option>
                <option value="mobile" className="bg-zinc-900">Mobile App</option>
                <option value="webapp" className="bg-zinc-900">Web App</option>
                <option value="other" className="bg-zinc-900">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label className="text-xs text-white/50 font-medium tracking-wide uppercase">Budget Range</label>
                <span className="text-sm font-semibold text-white">
                  ₱{budget.toLocaleString()}
                  {budget === BUDGET_MAX && <span className="text-white/40 text-xs ml-1">+</span>}
                </span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min={BUDGET_MIN}
                  max={BUDGET_MAX}
                  step={5000}
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, rgba(59,130,246,0.8) ${budgetPercent}%, rgba(255,255,255,0.15) ${budgetPercent}%)`,
                  }}
                />
              </div>
              <div className="flex justify-between text-xs text-white/30">
                <span>₱15,000</span>
                <span>₱100,000+</span>
              </div>
              <span className="text-white/20 text-center text-[12px]">Final pricing based on features & complexity</span>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-white/50 font-medium tracking-wide uppercase">Project Details</label>
              <textarea
                rows={4}
                placeholder="Tell us about your project "
                className="w-full px-4 py-3 rounded-xl border border-white/10 text-white text-sm placeholder:text-white/25 outline-none focus:border-blue-400/50 transition-all bg-transparent backdrop-blur-md resize-none"
                style={glassInput}
              />
              <p className="text-[11px] text-white/25">Details will be discussed further when in contact.</p>
            </div>

            <button
              type="submit"
              className="relative inline-flex items-center justify-center px-6 py-3 rounded-full border border-blue-400/40 text-white text-sm font-medium backdrop-blur-xl cursor-pointer hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all mt-2"
              style={glassPill}
            >
              <span className="absolute top-0 left-[12%] right-[12%] h-px rounded-full"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.6) 60%, transparent)' }}
              />
              Submit
            </button>

          </form>
        )}
      </motion.div>

    </section>
  )
}

export default Form