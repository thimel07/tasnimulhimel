import React from 'react';
import { motion } from 'motion/react';
import { Camera, Paintbrush, Share2, Layers, Briefcase, Sparkles } from 'lucide-react';
import { ExtraCurricular as ExtraCurricularData } from '../types';

const creativeActivities: ExtraCurricularData[] = [
  {
    id: 'graphic',
    title: 'Graphic Design',
    description: 'Constructing high-contrast layouts, visual logos, print banners, and cyber-graphics for academic panels and communities.',
    focusKeywords: ['Adobe Suite', 'Vector Design', 'Holographic Style']
  },
  {
    id: 'photos',
    title: 'Photography',
    description: 'Documenting regional seminars and capturing high-grade technical and community highlights.',
    focusKeywords: ['Cinematic Lighting', 'Framing Mechanics', 'Archival Capture']
  },
  {
    id: 'branding',
    title: 'Branding & Identity',
    description: 'Establishing cohesive design systems, modern visual guidelines, and luxury layout structures.',
    focusKeywords: ['Grid Alignment', 'Curation Systems', 'Asset Directing']
  },
  {
    id: 'print-digital',
    title: 'Print & Digital Media',
    description: 'Delivering semantic layout mockups and publications for high-turnout collaborative projects.',
    focusKeywords: ['Socio-Media', 'Marketing Kits', 'Production Prints']
  },
  {
    id: 'project-manage',
    title: 'Project Management',
    description: 'Formulating event tracks, coordinates, team schedules, and regional community assemblies.',
    focusKeywords: ['Agile Coordination', 'Sprint Alignments', 'Strategic Directing']
  }
];

export default function ExtraCurricular() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'graphic':
        return <Paintbrush className="w-5 h-5 text-cyan-400 animate-pulse" />;
      case 'photos':
        return <Camera className="w-5 h-5 text-purple-400" />;
      case 'branding':
        return <Layers className="w-5 h-5 text-indigo-450 text-indigo-400" />;
      case 'print-digital':
        return <Share2 className="w-5 h-5 text-teal-400" />;
      case 'project-manage':
        return <Briefcase className="w-5 h-5 text-blue-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <section id="extra-curricular" className="py-24 px-6 max-w-7xl mx-auto relative content-section">
      {/* Absolute space visual background layout matrix */}
      <div className="absolute left-[15%] top-[10%] w-[1px] h-60 bg-cyan-500/10 pointer-events-none" />

      {/* Header Info */}
      <div className="space-y-4 mb-20 text-center">
        <div className="inline-flex items-center gap-2 font-mono text-cyan-400 text-xs tracking-widest uppercase">
          <Sparkles className="w-4 h-4" />
          <span>[07] DISCIPLINARY_SATELLITES</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
          Extra Curricular{' TAXONOMY'}
        </h2>
        <p className="font-sans text-xs sm:text-sm text-gray-400 max-w-xl mx-auto font-light">
          A design-oriented bento archive detailing creative fields, photography, branding systems, and executive capabilities.
        </p>
      </div>

      {/* Bento Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {creativeActivities.map((act, idx) => {
          // Assign varied span widths for classic high-end Bento rhythm
          let colSpan = 'md:col-span-2';
          if (idx === 0) colSpan = 'md:col-span-3';
          if (idx === 1) colSpan = 'md:col-span-3';
          if (idx === 2) colSpan = 'md:col-span-2';
          if (idx === 3) colSpan = 'md:col-span-2';
          if (idx === 4) colSpan = 'md:col-span-2';

          return (
            <motion.div
              key={act.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className={`interactive-card group relative border border-gray-900 bg-gray-950/40 p-6 rounded-lg backdrop-blur-sm hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-between overflow-hidden ${colSpan}`}
            >
              <div className="space-y-4">
                {/* Header Icon overlay */}
                <div className="flex justify-between items-center">
                  <div className="p-2 border border-gray-800 rounded bg-gray-950 flex items-center justify-center">
                    {getIcon(act.id)}
                  </div>
                  <span className="font-mono text-[9px] text-gray-600">CREATIVE_TAG_{idx + 1}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-semibold text-sm sm:text-base text-white uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
                    {act.title}
                  </h3>
                  <p className="font-sans text-[11px] sm:text-xs text-gray-450 text-gray-400 leading-relaxed font-light">
                    {act.description}
                  </p>
                </div>
              </div>

              {/* Tag links footer */}
              <div className="flex flex-wrap gap-1.5 pt-6 border-t border-gray-900/40 mt-6 md:mt-8">
                {act.focusKeywords.map((keyword) => (
                  <span 
                    key={keyword} 
                    className="font-mono text-[9px] text-gray-500 group-hover:text-cyan-400 transition-colors bg-gray-950/80 px-2 py-0.5 rounded border border-gray-900"
                  >
                    #{keyword.toUpperCase()}
                  </span>
                ))}
              </div>

              {/* Holographic light glow overlays */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-transparent blur-xl scale-0 group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
