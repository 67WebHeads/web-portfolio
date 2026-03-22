import React from 'react'

function About() {
  return (
    <section id='about' className='min-h-dvh gap-5 flex flex-col items-center justify-center text-white '>
      <div className="inline-flex w-fit items-center gap-2 px-3 py-2 rounded-full bg-blue-200 border border-blue-400 text-blue-700 text-xs font-medium shadow-xs">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
        Who we are
      </div>
      <p className='text-3xl md:text-6xl font-bold  text-center '>
        A  small team building systems startups can grow on.
      </p>
      <p className='text-sm md:text-lg text-gray-300 text-center max-w-xl leading-relaxed'>
        We focus on building systems that are fast to launch, easy to scale, and ready for real users
      </p>

    </section>
  )
}

export default About