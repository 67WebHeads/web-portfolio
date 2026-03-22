import React from 'react'
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

function ToolChip({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full mx-3 shrink-0 select-none text-base md:text-lg">
      <Icon className="text-white text-xl" />
      <span className="font-medium text-white whitespace-nowrap">{label}</span>
    </div>
  )
}

function ConveyorBelt() {
  return (
    <>
      <div className="overflow-hidden py-1 relative">
        <div className="conveyor-track py-2">
          {allTools.map((tool, i) => (
            <ToolChip key={i} icon={tool.icon} label={tool.label} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ConveyorBelt