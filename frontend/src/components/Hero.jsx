import React from 'react'

function Hero() {
  return (
    <section id='hero' className='min-h-[calc(90dvh-80px)]  text-white  flex justify-center md:justify-normal items-center '>
      <div className=" space-y-4 text-center md:text-start ">
        <div className="inline-flex items-center gap-2 px-3 py-2 mb-4 rounded-full bg-blue-200 border border-blue-400 text-blue-700 text-xs font-medium shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
          Available for new projects
        </div>
        <p className='text-4xl md:text-7xl font-extrabold '>Launch your system, <br /> Scale your startup.</p>
        <p className='text-base md:text-lg lg:text-xl text-gray-200 w-xs md:max-w-xl '>Building powerful, scalable, and built for real-world use.</p>
        <div className="flex mt-2 md:mt-10 gap-2 justify-center md:justify-start">
          <button className='rounded-full hover:cursor-pointer flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 active:translate-y-0 active:shadow-none'>
            Inquire now
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero