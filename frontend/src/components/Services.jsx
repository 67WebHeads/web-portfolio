import React from 'react'
import { Code, Monitor, Storage, Security } from '@mui/icons-material'
import { motion } from 'framer-motion'

const services = [
  {
    icon: <Code />,
    title: 'Web development',
    desc: 'Full-stack apps built with React, Node, and modern tools.',
    image: null
  },
  {
    icon: <Monitor />,
    title: 'System Delivery',
    desc: 'Launch your system fast without sacrificing quality.',
    image: null
  },
  {
    icon: <Storage />,
    title: 'Backend & APIs',
    desc: 'Scalable server logic, databases, and REST or APIs.',
    image: null
  },
  {
    icon: <Security />,
    title: 'System architecture',
    desc: 'Designed to scale from day one with clean, maintainable structure.',
    image: null
  },
]

function ServiceCard({ icon, title, desc, index ,image}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className='relative flex flex-col gap-3 p-6 rounded-2xl bg-gray-50 border border-gray-100 snap-start shrink-0 w-[350px] h-[450px]'
      style={{ backgroundImage: image ? `url(${image})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center', }}
    >
      <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
      <div className='w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600'>
        {icon}
      </div>
      <div className="grow"></div>
      <p className='font-bold text-lg '>{title}</p>
      <p className='text-sm text-gray-500 leading-relaxed'>{desc}</p>
    </motion.div>
  )
}

function Services() {
  return (
    <div className='h-fit my-8 text-black'>
      <div className="inline-flex w-fit items-center gap-2 px-3 py-2 rounded-full bg-blue-200 border border-blue-400 text-blue-700 text-xs font-medium shadow-xs">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
        What we do
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-2 space-y-4 text-base md:text-4xl w-xs md:max-w-xl">
          <h2 className='text-4xl md:text-5xl font-bold leading-tight'>
            Quality services <br />
            <span className='font-normal'>built for real results.</span>
          </h2>
        </div>
        <div className="flex-1 p-2 text-base flex items-center md:text-xl w-xs md:max-w-xl">
          <p>We provide scalable web systems designed for growing startups.</p>
        </div>
      </div>
      @salmo, provide gradient lang again from bottom (lgihter) to top (darker (not too much))
      <div className="flex flex-row gap-4 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth mt-10 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {services.map(({ icon, title, desc, image }, i) => (
          <ServiceCard key={title} icon={icon} title={title} desc={desc} index={i} image={image}/>
        ))}
      </div>

    </div>
  )
}

export default Services