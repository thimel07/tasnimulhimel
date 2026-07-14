import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Award, Compass, Heart, Activity, CheckSquare, Sparkles } from 'lucide-react';
import { LeadershipExperience } from '../types';

const leadershipRoles: LeadershipExperience[] = [
  {
    id: 'org-sec',
    role: 'Organizing Secretary',
    organization: 'GUB Competitive Programming Community',
    period: '2025 - Ongoing',
    category: 'leadership',
    details: [
      'Spearheading administrative scheduling for intra-university code contests.',
      'Supervising regional forum campaigns, syncing with CSE faculty and coordinators.',
      'Ensuring operational team symmetry during high-turnout competitive structures.'
    ]
  },
  {
    id: 'photo-sec',
    role: 'Photography Secretary',
    organization: 'Green University Computer Club',
    period: '2025 - Ongoing',
    category: 'leadership',
    details: [
      'Directing visual capturing operations for high-grade technical seminars.',
      'Constructing brand-matching digital asset archives to represent active research loops.',
      'Coordinating video documentation workflows across structural tech events.'
    ]
  },
  {
    id: 'graphic-des',
    role: 'Graphics Designer',
    organization: 'GUB Competitive Programming Community',
    period: '2024 - 2025',
    category: 'leadership',
    details: [
      'Authoring high-contrast layouts, visual logos, print banners, and digital graphics.',
      'Establishing a modern visual theme for community publications and forums.',
      'Delivering semantic UI mockups for university hackathon advertising materials.'
    ]
  },
  {
    id: 'volunteer',
    role: 'Volunteer',
    organization: 'Wrapping Up Semester One',
    period: '2024',
    category: 'leadership',
    details: [
      'Facilitated event registration, logistics tracking, and tech booth setup.',
      'Assisted incoming CSE students with campus orientations and labs.',
      'Supported stage managers during executive closing keynotes.'
    ]
  }
];

const hackathons: LeadershipExperience[] = [
  {
    id: 'solvio',
    role: 'SOLVIO AI Hackathon 2025',
    organization: 'Solvio AI Network',
    period: '2025',
    category: 'hackathon',
    details: ['Collaborated to draft multi-agent prompt flows using LLMs.', 'Designed frontend templates for a generative product discovery hub.']
  },
  {
    id: 'unesco',
    role: 'UNESCO CogLabs Workshop',
    organization: 'UNESCO Network',
    period: '2024',
    category: 'workshop',
    details: ['Participated in computer vision workflows and edge AI systems.', 'Explored ethics in cognitive analytics architectures.']
  },
  {
    id: 'hack-ai',
    role: 'Hack The AI',
    organization: 'AI Community',
    period: '2025',
    category: 'hackathon',
    details: ['Developed interactive visual chat templates integrating secure prompt protocols.', 'Pioneered custom vector databases layouts for local nodes.']
  }
];

export default function LeadershipSection() {
  const [activeTab, setActiveTab] = useState<'leadership' | 'competitions'>('leadership');

  return (
    <section id="leadership" className="py-24 px-6 max-w-7xl mx-auto relative content-section">
      {/* Decorative vertical cross grid lines */}
      <div className="absolute top-1/2 left-[5%] w-32 h-[1px] bg-cyan-500/10 pointer-events-none" />

      {/* Header Info */}
      <div className="space-y-4 mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-purple-400 text-xs tracking-widest uppercase">
            <Compass className="w-4 h-4" />
            <span>[05] COMMUNAL_STRATEGY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
            Leadership &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Experiential Track
            </span>
          </h2>
        </div>

        {/* Tab Controls */}
        <div className="flex bg-[#020617]/90 p-1.5 rounded-lg border border-slate-800 self-center md:self-auto select-none shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
          <button
            onClick={() => setActiveTab('leadership')}
            className={`px-5 py-2 rounded text-xs font-mono font-medium tracking-widest transition-all cursor-pointer ${
              activeTab === 'leadership'
                ? 'bg-slate-900 border border-[#22d3ee]/35 text-white shadow-[0_0_12px_rgba(34,211,238,0.25)] font-bold'
                : 'text-[#94a3b8] hover:text-cyan-400'
            }`}
          >
            ORGANIZATIONAL_SECRETARY
          </button>
          <button
            onClick={() => setActiveTab('competitions')}
            className={`px-5 py-2 rounded text-xs font-mono font-medium tracking-widest transition-all cursor-pointer ${
              activeTab === 'competitions'
                ? 'bg-slate-900 border border-[#a855f7]/35 text-white shadow-[0_0_12px_rgba(168,85,247,0.25)] font-bold'
                : 'text-[#94a3b8] hover:text-purple-400'
            }`}
          >
            HACKATHONS_WORKSHOPS
          </button>
        </div>
      </div>

      {/* Grid Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'leadership' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {leadershipRoles.map((role) => (
                <div
                  key={role.id}
                  className="interactive-card relative border border-[#22d3ee]/20 bg-slate-900/50 p-6 rounded-lg backdrop-blur-md hover:border-cyan-400/40 hover:shadow-glowing-cyan transition-all duration-350 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.3)]"
                >
                  <div className="absolute top-4 right-4 text-[10px] font-mono text-cyan-400 bg-cyan-950/20 border border-[#22d3ee]/20 px-2.5 py-0.5 rounded uppercase font-semibold">
                    {role.period || 'ACTIVE'}
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-base text-white uppercase tracking-wider group-hover:text-cyan-300 transition-colors">
                        {role.role}
                      </h3>
                      <p className="font-sans text-xs text-purple-400 font-bold uppercase tracking-wide">
                        {role.organization}
                      </p>
                    </div>

                    <ul className="space-y-2 pt-4 border-t border-slate-800">
                      {role.details.map((bullet, idx) => (
                        <li key={idx} className="font-sans text-xs text-[#cbd5e1] leading-relaxed flex items-start gap-2 font-light">
                          <CheckSquare className="w-3.5 h-3.5 text-cyan-400 mt-1 shrink-0 opacity-80" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {hackathons.map((hack) => (
                <div
                  key={hack.id}
                  className="interactive-card relative border border-[#a855f7]/20 bg-slate-900/50 p-6 rounded-lg backdrop-blur-md hover:border-purple-400/40 hover:shadow-glowing-purple transition-all duration-305 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.3)]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-purple-400">
                      <Award className="w-5 h-5" />
                      <span className="font-mono text-[9px] font-bold tracking-widest uppercase bg-purple-950/20 border border-purple-500/25 px-2 py-0.5 rounded">
                        {hack.category.toUpperCase()}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-base text-white uppercase tracking-wider">
                        {hack.role}
                      </h3>
                      <p className="font-sans text-xs text-cyan-400 font-medium whitespace-nowrap">
                        {hack.organization} <span className="text-purple-500">•</span> {hack.period}
                      </p>
                    </div>

                    <ul className="space-y-1 md:space-y-2 border-t border-slate-800 pt-4">
                      {hack.details.map((b, i) => (
                        <li key={i} className="font-sans text-[11px] sm:text-xs text-[#cbd5e1] leading-relaxed flex items-start gap-2 font-light">
                          <Sparkles className="w-3 h-3 text-purple-400 mt-1.5 shrink-0 opacity-80" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
