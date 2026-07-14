import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Trophy, Bookmark, Calendar } from 'lucide-react';
import { TimelineEntry } from '../types';

const achievements: TimelineEntry[] = [
  {
    id: 'gub',
    institution: 'Green University of Bangladesh',
    degree: 'BSc in Computer Science and Engineering',
    period: '2024 - Ongoing',
    grade: 'Enrolled',
    achievements: [
      'Focusing on Core Data Structures, OOP, Database Systems and Architecture.',
      'Active leader within competitive programming and computer club networks.',
      'Actively exploring advanced microcontroller and backend frameworks.'
    ]
  },
  {
    id: 'nic',
    institution: 'Narsingdi Independent College',
    degree: 'Higher Secondary Certificate (HSC) - Science Stream',
    period: '2021 - 2023',
    grade: 'GPA: 5.00 / 5.00 (A+)',
    achievements: [
      'Secured maximum possible GPA score across Science disciplines.',
      'Developed deep foundation in mathematical mechanics and information tech.',
      'Active organizer of local intra-college technology displays.'
    ]
  },
  {
    id: 'bhsc',
    institution: 'Bhulta High School and College',
    degree: 'Secondary School Certificate (SSC) - Science Stream',
    period: '2019 - 2021',
    grade: 'GPA: 4.50 / 5.00',
    achievements: [
      'Graduated with distinct scientific honors.',
      'Participated in school physics tournaments and local art exhibits.',
      'Coordinated visual graphics templates for school assemblies.'
    ]
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 max-w-7xl mx-auto relative content-section">
      {/* Absolute space visual background layout vector */}
      <div className="absolute left-0 bottom-1/4 w-80 h-80 border border-cyan-500/5 rotate-45 pointer-events-none select-none" />

      {/* Header Info */}
      <div className="space-y-4 mb-20 text-center">
        <div className="inline-flex items-center gap-2 font-mono text-cyan-400 text-xs tracking-widest uppercase">
          <GraduationCap className="w-4 h-4" />
          <span>[04] ACADEMIC_CHRONOLOGY</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
          Education &{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Foundational Milestones
          </span>
        </h2>
        <p className="font-sans text-xs sm:text-sm text-gray-400 max-w-xl mx-auto font-light">
          A vertical ledger outlining systematic scientific studies and honors achievements defining my engineering baseline.
        </p>
      </div>

      {/* Timeline Tree Structure */}
      <div className="relative max-w-3xl mx-auto">
        
        {/* Glowing vertical connector line */}
        <div className="absolute left-[21px] sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500 -translate-x-[1px] opacity-60" />

        {/* Timeline rows list */}
        <div className="space-y-12">
          {achievements.map((entry, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={entry.id} 
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                
                {/* Micro circle bullet node with pulse glowing states */}
                <div className="absolute left-[10px] sm:left-1/2 top-1.5 -translate-x-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-gray-950 border-2 border-cyan-400 flex items-center justify-center shadow-glowing-cyan">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>
                </div>

                {/* Left empty container block to maintain split symmetry (only visible on matching layouts) */}
                <div className="hidden sm:block w-1/2" />

                {/* Timeline Card body content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="w-full sm:w-[45%] pl-12 sm:pl-0 space-y-4"
                >
                  <div className="relative border border-[#22d3ee]/20 bg-slate-900/50 p-5 sm:p-6 rounded-lg backdrop-blur-md hover:border-cyan-400/40 transition-all duration-350 group shadow-[0_4px_25px_rgba(0,0,0,0.35)]">
                    
                    {/* Glowing active outline */}
                    <div className="absolute top-0 left-0 w-1/4 h-[1.5px] bg-gradient-to-r from-cyan-400 to-transparent opacity-80 group-hover:w-full transition-all duration-500" />

                    {/* Date/Period banner */}
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-cyan-400 font-bold tracking-widest pb-3 border-b border-slate-800 uppercase">
                      <Calendar className="w-3.5 h-3.5 animate-pulse" />
                      <span>{entry.period}</span>
                    </div>

                    {/* School Name */}
                    <div className="pt-3 space-y-1">
                      <h3 className="font-display font-bold text-sm sm:text-base text-white tracking-wide uppercase">
                        {entry.institution}
                      </h3>
                      <h4 className="font-sans text-xs text-purple-400 font-bold tracking-wide uppercase">
                        {entry.degree}
                      </h4>
                    </div>

                    {/* Score badge */}
                    {entry.grade && (
                      <div className="inline-flex items-center gap-1.5 bg-[#22d3ee]/10 border border-[#22d3ee]/25 px-2.5 py-1 rounded font-mono text-[10px] text-cyan-400 font-bold mt-4 tracking-widest">
                        <Trophy className="w-3 h-3 text-cyan-400" />
                        <span>{entry.grade.toUpperCase()}</span>
                      </div>
                    )}

                    {/* Achievements bullets */}
                    {entry.achievements && (
                      <ul className="mt-4 space-y-2 border-t border-slate-800 pt-4 text-left">
                        {entry.achievements.map((item, id) => (
                          <li key={id} className="font-sans text-[11px] sm:text-xs text-[#cbd5e1] flex items-start gap-2 leading-relaxed font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0 opacity-80" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
