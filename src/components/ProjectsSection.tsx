import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderGit2, Calendar, HardDrive, Cpu, Layers, ExternalLink, Minimize2, Eye } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'eco-sync',
    title: 'ECO_sync Social Management',
    description: 'A comprehensive collaborative environment application for local ecological communities and campaign organizing.',
    technologies: ['Java', 'Swing UI', 'JDBC', 'MySQL'],
    type: 'System',
    status: 'Completed',
    previewDetails: `A dual-module desktop community builder. It supports secure volunteer registration, multi-node environmental campaign coordination, and relational database feedback. Built cleanly over Swing architecture using native JDBC queries targeting local schema optimizations.`
  },
  {
    id: 'smart-restaurant',
    title: 'Smart Restaurant Purchase System',
    description: 'Autonomous POS software designed for modern high-turnover restaurants to manage orders, inventory, and billing.',
    technologies: ['C#', 'Windows Forms', '.NET Framework', 'Local MS-Access'],
    type: 'Software',
    status: 'Completed',
    previewDetails: `An enterprise-inspired POS client that streamlines menu lookups, active cart updates, tax calculators, and invoice synthesis. Features an interactive administrator panel for real-time inventory adjustments and transaction history exports inside classical C# frameworks.`
  },
  {
    id: 'automatic-street',
    title: 'Automatic Street Light Detector',
    description: 'Hardware circuit that autonomously controls street lamps via light intensity and movement vectors.',
    technologies: ['Arduino', 'PIR Sensor', 'LDR', 'Embedded C'],
    type: 'IoT',
    status: 'Completed',
    previewDetails: `A green-energy solution that optimizes urban power. Leverages photoresistors (LDR) to analyze raw lux thresholds and passive infrared (PIR) sensors to track locomotive motion. Only delivers maximum luminance during traffic gaps, significantly reducing standby grid drain.`
  },
  {
    id: 'evm-voting',
    title: 'EVM Voting System',
    description: 'Miniature hardware prototype for local push-button election polls with instant visual feedback.',
    technologies: ['Arduino', 'Push Buttons', '16x2 LCD', 'EEPROM'],
    type: 'Hardware',
    status: 'Completed',
    previewDetails: `An isolated hardware unit targeting integrity metrics. Implements debounced hardware push-button inputs to capture user coordinates safely. Outputs immediate visual confirmation on a high-contrast liquid crystal UI, with persistent EEPROM registry to secure counts during power surges.`
  },
  {
    id: 'football-game',
    title: 'Physics-Based Football Game',
    description: 'Scratch-based local action football match integrating dynamic speed variables and coordinate models.',
    technologies: ['Scratch Engine', 'Block Coding', 'Vector Assets'],
    type: 'Game',
    status: 'Completed',
    previewDetails: `An interactive coordinate-map football simulation. Governs continuous physics boundaries, gravity simulators, elastic impulse collision angles, and keyboard listener triggers for an engaging dual-player desktop match format.`
  }
];

export default function ProjectsSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const activeProject = projects.find((p) => p.id === selectedId);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative content-section">
      {/* Decorative gradient glowing orb */}
      <div className="absolute left-1/4 bottom-10 w-96 h-96 bg-cyan-950/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Header Info */}
      <div className="space-y-4 mb-16 text-center md:text-left">
        <div className="inline-flex items-center gap-2 font-mono text-cyan-400 text-xs tracking-widest uppercase">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>[03] EXPERIMENTAL_PRODUCEMENTS</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Immersive{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Project Matrix
          </span>
        </h2>
        <p className="font-sans text-xs sm:text-sm text-gray-400 max-w-xl font-light">
          A premium archive of systems, software structures, and hardware designs developed across my academic track.
        </p>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const typeColor = project.type === 'IoT' || project.type === 'Hardware' ? 'text-purple-400 border-purple-500/20 bg-purple-950/20' : 'text-cyan-400 border-cyan-500/20 bg-cyan-920/20';
          const shadowGlow = project.type === 'IoT' || project.type === 'Hardware' ? 'hover:shadow-glowing-purple' : 'hover:shadow-glowing-cyan';

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setSelectedId(project.id)}
              className={`group relative border border-slate-800 bg-slate-900/50 p-6 rounded-lg backdrop-blur-md cursor-pointer hover:border-cyan-500/35 transition-all duration-300 flex flex-col justify-between overflow-hidden select-none ${shadowGlow}`}
            >
              {/* Outer top holographic tag */}
              <div className="flex justify-between items-start mb-6">
                <span className={`font-mono text-[9px] font-bold tracking-widest px-2.5 py-1 rounded border ${typeColor}`}>
                  {project.type.toUpperCase()}
                </span>
                <span className="font-mono text-[9px] text-[#22d3ee]/80 tracking-wider font-semibold">
                  0{index + 1}.SYS
                </span>
              </div>

               {/* Title & Description */}
              <div className="space-y-3 mb-6">
                <h3 className="font-display font-bold text-base text-gray-100 group-hover:text-cyan-300 transition-colors uppercase tracking-wide">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans line-clamp-3 font-light">
                  {project.description}
                </p>
              </div>

              {/* Badges/Tools footer */}
              <div className="space-y-4 pt-4 border-t border-slate-800/60">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="font-mono text-[9px] text-slate-300 bg-slate-950/40 px-2 py-0.5 rounded border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="font-mono text-[9px] text-cyan-400 bg-cyan-950/30 px-2 py-0.5 rounded">
                      +{project.technologies.length - 3} MORE
                    </span>
                  )}
                </div>

                {/* Inspect speculative link trigger */}
                <div className="flex items-center gap-1 text-[10px] font-mono font-bold tracking-widest text-cyan-400 group-hover:text-[#22d3ee] transition-colors">
                  <Eye className="w-3.5 h-3.5 group-hover:scale-110 transition-transform text-[#22d3ee]" />
                  <span>INSPECT_SPECIFICATIONS()</span>
                </div>
              </div>

              {/* Light trail highlight bar matching template */}
              <div className={`absolute bottom-0 inset-x-0 h-[2px] bg-slate-800 transition-colors duration-350 ${
                project.type === 'IoT' || project.type === 'Hardware' 
                  ? 'group-hover:bg-[#a855f7]' 
                  : 'group-hover:bg-[#22d3ee]'
              }`} />
            </motion.div>
          );
        })}
      </div>

      {/* Cinematic Modal Popup for expanded tech details */}
      <AnimatePresence>
        {selectedId && activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark glass backdrop layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Content box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative max-w-2xl w-full bg-[#02050f] border border-cyan-500/35 rounded-xl shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden z-10"
            >
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500" />

              {/* Main Panel Area */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Header title area */}
                <div className="flex justify-between items-start gap-4 pb-4 border-b border-gray-900">
                  <div className="space-y-1.5">
                    <span className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase bg-cyan-950/40 px-2.5 py-0.5 rounded border border-cyan-500/20">
                      {activeProject.type} Core Architecture
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
                      {activeProject.title}
                    </h3>
                  </div>
                  
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedId(null)}
                    className="p-1.5 rounded-md border border-gray-800 hover:border-red-500/50 hover:bg-red-950/20 text-gray-500 hover:text-red-400 transition-all cursor-pointer"
                  >
                    <Minimize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Extended structural specs */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h4 className="font-mono text-[10px] text-gray-500 tracking-wider">PROJECT_SYNOPSIS</h4>
                    <p className="text-gray-300 font-sans text-xs sm:text-sm leading-relaxed font-light">
                      {activeProject.description}
                    </p>
                  </div>

                  <div className="space-y-2 bg-gray-950/80 p-4 rounded border border-gray-900 leading-relaxed font-mono">
                    <h4 className="text-[10px] text-purple-400 tracking-wider">HOLOGRAPHIC_SPECS_LOG:</h4>
                    <p className="text-gray-400 text-[11px] sm:text-xs font-light">
                      {activeProject.previewDetails}
                    </p>
                  </div>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1.5">
                    <h4 className="font-mono text-[9px] text-gray-500 tracking-wider">STATION_TECHNOLOGIES</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.technologies.map((t) => (
                        <span key={t} className="font-mono text-[10px] text-cyan-400 bg-cyan-950/25 border border-cyan-500/20 px-2.5 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5 text-right">
                    <h4 className="font-mono text-[9px] text-gray-500 tracking-wider">STATUS_METRIC</h4>
                    <div className="flex items-center justify-end gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-mono text-xs text-emerald-400 font-bold tracking-wider">{activeProject.status.toUpperCase()}</span>
                    </div>
                  </div>
                </div>

                {/* Actions footer */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-900 mt-4">
                  <span className="font-mono text-[9px] text-gray-600">SYS_PROJECT_ID: {activeProject.id.toUpperCase()}</span>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="px-5 py-2 rounded bg-gray-900 border border-gray-800 hover:border-cyan-500/40 text-gray-300 hover:text-white font-mono text-xs tracking-wider transition-all"
                  >
                    CLOSE_LINK_VIEW()
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
