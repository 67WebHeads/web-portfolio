import React from 'react'

function Hero() {
  return (
    <section id='hero' className='min-h-[calc(90dvh-80px)]  text-white  flex justify-center md:justify-normal items-center '>
      <div className=" space-y-4 text-center md:text-start ">
        <div
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
          Available for new projects
        </div>
        <p className='text-4xl md:text-7xl font-extrabold '>Launch your system, <br /> Scale your startup.</p>
        <p className='text-base md:text-lg lg:text-xl text-gray-200 w-xs md:max-w-xl '>Building powerful, scalable, and built for real-world use.</p>
        <div className="flex mt-2 md:mt-10 gap-2 justify-center md:justify-start">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-400/40 text-white text-sm font-medium backdrop-blur-xl relative cursor-pointer hover:shadow-lg hover:shadow-blue-500/30 active:translate-y-0 transition-all"
          style={{
            background: 'linear-gradient(145deg, rgba(59,130,246,0.45) 0%, rgba(59,130,246,0.15) 50%, rgba(59,130,246,0.3) 100%)',
            boxShadow: `
              inset 0 1.5px 1px rgba(255,255,255,0.35),
              inset 0 -1px 1px rgba(0,0,0,0.2),
              inset 0 0 16px rgba(59,130,246,0.15),
              0 4px 24px rgba(59,130,246,0.2)
            `,
          }}
        >
          <span className="absolute top-0 left-[12%] right-[12%] h-px rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.6) 60%, transparent)' }}
          />
          Inquire now
        </div>
        </div>
      </div>
    </section>
  )
}

export default Hero