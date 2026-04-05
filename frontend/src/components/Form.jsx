import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import InstagramIcon from '@mui/icons-material/Instagram'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = 'service_0wivdfa'
const EMAILJS_NOTIFY_TEMPLATE_ID = 'template_0cnnwdw'
const EMAILJS_AUTOREPLY_TEMPLATE_ID = 'template_cyhdtsk'
const EMAILJS_PUBLIC_KEY = 'XbMJ_3DOJi9cZY_I4'

const BOOKING_LINK = 'https://calendly.com/webheadsph/30min'

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

const PROJECT_OPTIONS = [
  { value: 'business-website', label: 'Business Website' },
  { value: 'custom-system', label: 'Custom System' },
  { value: 'bp-automation', label: 'Business Process Automation' },
  { value: 'data-analytics', label: 'Data Analytics & Dashboard' },
  { value: 'other', label: 'Other' },
]

const PROJECT_LABELS = Object.fromEntries(PROJECT_OPTIONS.map(o => [o.value, o.label]))

function Form() {
  const formRef = useRef(null)
  const isSubmitting = useRef(false)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)
  const [projectType, setProjectType] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting.current) return
    isSubmitting.current = true
    setSending(true)
    setError(null)

    const formData = new FormData(formRef.current)
    const name = formData.get('from_name')
    const email = formData.get('from_email')
    const details = formData.get('message')

    const templateParams = {
      from_name: name,
      from_email: email,
      project_type: PROJECT_LABELS[projectType] || projectType,
      message: details || 'No additional details provided.',
      booking_link: BOOKING_LINK,
    }

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_NOTIFY_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_AUTOREPLY_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      setSubmitted(true)
    } catch (err) {
      console.error('EmailJS error:', err)
      setError('Something went wrong. Please try again or reach out on Instagram.')
    } finally {
      isSubmitting.current = false
      setSending(false)
    }
  }

  return (
    <section id="contact" className='min-h-dvh flex flex-col md:flex-row items-center justify-center text-white gap-12 py-20'>
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
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-white/50 font-medium tracking-wide uppercase">Name</label>
              <input
                name="from_name"
                type="text"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-white/10 text-white text-sm outline-none focus:border-blue-400/50 transition-all"
                style={glassInput}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-white/50 font-medium tracking-wide uppercase">Email</label>
              <input
                name="from_email"
                type="email"
                required
                placeholder="example@email.com"
                className="w-full px-4 py-3 rounded-xl border border-white/10 text-white text-sm outline-none focus:border-blue-400/50 transition-all"
                style={glassInput}
              />
            </div>

            <div className="flex flex-col gap-1.5 relative">
              <label className="text-xs text-white/50 font-medium tracking-wide uppercase">Project Type</label>

              <input type="hidden" name="project_type" value={projectType} />

              <button
                type="button"
                onClick={() => setDropdownOpen(o => !o)}
                className="w-full px-4 py-3 rounded-xl border border-white/10 text-sm text-left transition-all"
                style={{ ...glassInput, color: projectType ? 'white' : 'rgba(255,255,255,0.25)' }}
              >
                {projectType ? PROJECT_OPTIONS.find(o => o.value === projectType)?.label : 'Select a type'}
              </button>

              {dropdownOpen && (
                <div
                  className="absolute top-full left-0 right-0 mt-1 rounded-xl border border-white/10 overflow-hidden z-50"
                  style={{ background: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(12px)' }}
                >
                  {PROJECT_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => { setProjectType(opt.value); setDropdownOpen(false) }}
                      className="dropdown-option w-full px-4 py-3 text-left text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all"
                      style={{ background: 'transparent' }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-white/50 font-medium tracking-wide uppercase">Project Details</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your project"
                className="w-full px-4 py-3 rounded-xl border border-white/10 text-white text-sm outline-none focus:border-blue-400/50 transition-all resize-none"
                style={glassInput}
              />
              <p className="text-[11px] text-white/60">Details & price will be discussed further when in contact.</p>
            </div>

            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="relative inline-flex items-center justify-center px-6 py-3 rounded-full border border-blue-400/40 text-white text-sm font-medium backdrop-blur-xl cursor-pointer hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              style={glassPill}
            >
              <span className="absolute top-0 left-[12%] right-[12%] h-px rounded-full"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.6) 60%, transparent)' }}
              />
              {sending ? 'Sending...' : 'Submit'}
            </button>

          </form>
        )}
      </motion.div>
    </section>
  )
}

export default Form