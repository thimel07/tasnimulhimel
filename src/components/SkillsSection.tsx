import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Palette, Sliders, CheckCircle2, Award, Zap } from 'lucide-react';
import { Skill } from '../types';

const programmingSkills: Skill[] = [
  { name: 'C#', level: 85, category: 'programming', description: 'Windows Forms, Object-Oriented software engineering' },
  { name: 'Java', level: 80, category: 'programming', description: 'Swing framework, MVC logic, multi-threaded algorithms' },
  { name: 'Python', level: 78, category: 'programming', description: 'Automation, data manipulation, algorithm engineering' },
  { name: 'MySQL', level: 82, category: 'programming', description: 'Relational logic, transaction optimization, JDBC query integration' },
  { name: 'HTML & CSS', level: 88, category: 'programming', description: 'Modern semantic grids, flex layouts, dynamic keyframe animation' },
];

const techCreativeSkills: Skill[] = [
  { name: 'Graphic Design', level: 92, category: 'creative', description: 'Holographic, visual art layout, vector design composition' },
  { name: 'Branding & Identity', level: 90, category: 'creative', description: 'Luxury brand development, visual systems design' },
  { name: 'Typography', level: 85, category: 'creative', description: 'Type pairing, layout hierarchies, grid alignments' },
  { name: 'Project Management', level: 84, category: 'technical', description: 'Sprint tracking, team resource allocation, agile collaboration' },
  { name: 'Event Coordination', level: 88, category: 'technical', description: 'Campaign directing, competitive program planning, tech forums' },
  { name: 'Photography', level: 86, category: 'creative', description: 'Cinematic visual capturing, studio light rendering' },
];

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto relative content-section">
      {/* Decorative vector ring */}
      <div className="absolute right-0 top-1/4 w-72 h-72 border border-purple-500/5 rounded-full pointer-events-none -translate-y-1/2" />

      {/* Header Info */}
      <div className="space-y-4 mb-16 text-center md:text-left">
        <div className="inline-flex items-center gap-2 font-mono text-purple-400 text-xs tracking-widest uppercase">
          <Sliders className="w-3.5 h-3.5" />
          <span>[02] TECHNICAL_CAPABILITIES</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Futuristic Tech{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Dashboard
          </span>
        </h2>
        <p className="font-sans text-xs sm:text-sm text-gray-400 max-w-xl font-light">
          A granular visualization of structural developer expertise mixed with creative visual and executive management capabilities.
        </p>
      </div>

      {/* Grid Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Programming Skills Board */}
        <div className="relative border border-[#22d3ee]/25 bg-slate-900/50 p-6 rounded-lg backdrop-blur-md space-y-6 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:border-[#22d3ee]/40 transition-colors duration-300">
          <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#020617] border border-[#22d3ee]/30 px-3 py-1 rounded font-mono text-[9px] text-cyan-400 tracking-wider">
            [CORE_RUNTIME_LANGUAGES]
          </div>

          <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800">
            <Cpu className="w-5 h-5 text-cyan-400" />
            <h3 className="font-display font-bold text-sm tracking-wider uppercase text-white">Programming Credentials</h3>
          </div>

          <div className="space-y-5">
            {programmingSkills.map((skill) => {
              const isActive = hoveredSkill === skill.name;
              return (
                <div 
                  key={skill.name}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="space-y-2 group cursor-crosshair"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs font-semibold tracking-wider text-gray-200 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                      <Zap className={`w-3 h-3 text-cyan-500 transition-all ${isActive ? 'scale-125 animate-pulse' : 'opacity-70'}`} />
                      {skill.name}
                    </span>
                    <span className="font-mono text-[10px] text-cyan-500 font-bold bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/10">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Meter Bar */}
                  <div className="h-1.5 w-full bg-gray-950 border border-gray-900 rounded overflow-hidden relative">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    />
                  </div>

                  {/* Mini details descriptor */}
                  <div className={`text-[10px] text-gray-500 font-sans font-light transition-all duration-300 ${isActive ? 'text-gray-300 max-h-12 opacity-100 pl-1' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    {skill.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech & Creative Brand Capabilities */}
        <div className="relative border border-[#a855f7]/25 bg-slate-900/50 p-6 rounded-lg backdrop-blur-md space-y-6 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:border-[#a855f7]/40 transition-colors duration-300">
          <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#020617] border border-[#a855f7]/30 px-3 py-1 rounded font-mono text-[9px] text-purple-400 tracking-wider">
            [AESTHETIC_AND_EXECUTIVE]
          </div>

          <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800">
            <Palette className="w-5 h-5 text-purple-400" />
            <h3 className="font-display font-bold text-sm tracking-wider uppercase text-white">Creative & Strategic Competency</h3>
          </div>

          <div className="space-y-5">
            {techCreativeSkills.map((skill) => {
              const isActive = hoveredSkill === skill.name;
              return (
                <div 
                  key={skill.name}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="space-y-1.5 group cursor-crosshair"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs font-semibold tracking-wider text-gray-200 group-hover:text-purple-400 transition-colors flex items-center gap-2">
                      <CheckCircle2 className={`w-3.5 h-3.5 text-purple-500 transition-all ${isActive ? 'rotate-90 scale-110' : 'opacity-70'}`} />
                      {skill.name}
                    </span>
                    <span className="font-mono text-[10px] text-purple-400 font-bold bg-purple-950/40 px-2 py-0.5 rounded border border-purple-500/10">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Meter Bar */}
                  <div className="h-1.5 w-full bg-gray-950 border border-gray-900 rounded overflow-hidden relative">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    />
                  </div>

                  {/* Mini details descriptor */}
                  <div className={`text-[10px] text-gray-500 font-sans font-light transition-all duration-300 ${isActive ? 'text-gray-300 max-h-12 opacity-100 pl-1' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    {skill.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Floating abstract quote */}
      <div className="mt-8 text-center">
        <span className="font-mono text-[9px] text-gray-600 uppercase tracking-widest">
          // SKILLSET_DYNAMICALLY_OPTIMIZED_ON_REALTIME_EXECUTION //
        </span>
      </div>
    </section>
  );
}
