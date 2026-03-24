import React from 'react'
import { motion } from 'framer-motion'

import {
  SiDocker,
  SiReact,
  SiTailwindcss,
  SiGoogle,
  SiSupabase,
  SiPostgresql,
  SiPython,
  SiGit,
  SiGithub,
  SiJavascript,
  SiHtml5,
} from "react-icons/si"




const tools = [
  { label: 'Docker', icon: SiDocker },
  { label: 'React', icon: SiReact },
  { label: 'Tailwind', icon: SiTailwindcss },
  { label: 'Google', icon: SiGoogle },
  { label: 'Supabase', icon: SiSupabase },
  { label: 'PSQL', icon: SiPostgresql },
  { label: 'Python', icon: SiPython },
  { label: 'Git', icon: SiGit },
  { label: 'GitHub', icon: SiGithub },
  { label: 'JavaScript', icon: SiJavascript },
  { label: 'HTML', icon: SiHtml5 },
]
const allTools = [...tools, ...tools]


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay }
  })
}

function ToolChip({ icon: Icon, label }) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      custom={0.15}
      variants={fadeUp}
        className="flex items-center gap-2 px-4 py-2 rounded-full mx-3 shrink-0 select-none text-base md:text-lg">
      <Icon className="text-white text-xl" />
      <span className="font-medium text-white whitespace-nowrap">{label}</span>
    </motion.div>
  )
}

function ConveyorBelt() {
  return (
    <>
      <motion.div 
        initial="hidden"
        animate="show"
        custom={0}
        variants={fadeUp} 
        className="overflow-hidden py-1 relative">
        <div className="conveyor-track py-2">
          {allTools.map((tool, i) => (
            <ToolChip key={i} icon={tool.icon} label={tool.label} />
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default ConveyorBelt