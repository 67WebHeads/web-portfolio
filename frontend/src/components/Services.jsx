import React, { useRef } from 'react'
import { Code } from '@mui/icons-material'
import { motion } from 'framer-motion'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import WebAssetIcon from '@mui/icons-material/WebAsset';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import TimelineIcon from '@mui/icons-material/Timeline';


import code from '../assets/code.webp'
import business from '../assets/business.webp'
import custom from '../assets/custom.webp'
import data from '../assets/data.webp'

const services = [
  {
    icon: <WebAssetIcon />,
    title: 'Business Website',
    desc: 'Get a simple, fast website to showcase your business online.',
    image: custom
  },
  {
    icon: <Code />,
    title: 'Custom System Development',
    desc: 'We build systems that fit how your business works.',
    image: code
  },
  {
    icon: <SettingsSuggestIcon />,
    title: 'Business Process Automation',
    desc: 'We help you save time by automating repetitive tasks.',
    image: business
  },
  {
    icon: <TimelineIcon />,
    title: 'Data Analytics & Dashboards',
    desc: 'See your sales and performance clearly in one place.',
    image: data
  },
]
const glassBtn = {
  background: 'linear-gradient(145deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.04) 100%)',
  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.3), 0 2px 8px rgba(0,0,0,0.2)'
}

function ServiceCard({ icon, title, desc, index, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className='relative flex flex-col gap-3 p-4 rounded-2xl shadow-md snap-start
        w-full h-auto min-h-[450px]
        md:shrink-0 md:w-[350px] md:h-[450px]'
      style={{
        backgroundImage: image ? `url(${image})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* <div className="absolute inset-0 bg-black/40 rounded-2xl"></div> */}
      <div 
        className="flex justify-center w-10 h-10 items-center rounded-xl border border-blue-400/40 text-white text-sm font-medium backdrop-blur-xl relative cursor-pointer hover:shadow-lg hover:shadow-blue-500/30 active:translate-y-0 transition-all"
            style={{
              background: 'linear-gradient(145deg, rgba(59,130,246,0.45) 0%, rgba(59,130,246,0.15) 50%, rgba(59,130,246,0.3) 100%)',
              boxShadow: `
                inset 0 1.5px 1px rgba(255,255,255,0.35),
                inset 0 -1px 1px rgba(0,0,0,0.2),
                inset 0 0 16px rgba(59,130,246,0.15),
                0 4px 24px rgba(59,130,246,0.2)
              `,
            }}>
        {icon}
      </div>
      <div className="grow"></div>
      <p className='relative font-bold text-lg'>{title}</p>
      <p className='relative text-sm text-gray-200 leading-relaxed'>{desc}</p>
    </motion.div>
  )
}

function Services() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir * 370, behavior: 'smooth' })
  }


  return (
    <section id='services' className='min-h-dvh flex flex-col justify-center text-white'>
      <div
        className="inline-flex items-center w-fit gap-2 px-4 py-2 mb-4 rounded-full border border-white/20 text-white text-xs font-medium backdrop-blur-xl relative"
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
        What we do
      </div>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div className="flex flex-col md:flex-row flex-1">
          <div className="flex-1 p-2 space-y-4 md:max-w-xl">
            <h2 className='text-4xl md:text-5xl font-bold leading-tight'>
              Quality services <br />
              <span className='font-normal'>built for real results.</span>
            </h2>
          </div>
          <div className="flex-1 p-2 text-base flex items-center md:text-xl md:max-w-xl">
            <p>We provide scalable web systems designed for growing startups.</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 shrink-0 pb-2">
          <button
            onClick={() => scroll(-1)}
            className="w-10 h-10 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
            style={glassBtn}
          >
            <ArrowBackIosNewIcon style={{ fontSize: 14 }} />
          </button>
          <button
            onClick={() => scroll(1)}
            className="w-10 h-10 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
            style={glassBtn}
          >
            <ArrowForwardIosIcon style={{ fontSize: 14 }} />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="
          mt-10 pb-4
          flex flex-col gap-4
          md:flex-row md:overflow-x-auto md:overflow-y-hidden md:snap-x md:snap-mandatory md:scroll-smooth
          md:[&::-webkit-scrollbar]:hidden md:[-ms-overflow-style:none] md:[scrollbar-width:none]
        "
      >
        {services.map(({ icon, title, desc, image }, i) => (
          <ServiceCard key={title} icon={icon} title={title} desc={desc} index={i} image={image} />
        ))}
      </div>
    </section>
  )
}

export default Services