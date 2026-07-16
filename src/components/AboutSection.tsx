import React from 'react';
import { motion } from 'motion/react';
import { User, Code2, GraduationCap, Award, BrainCircuit } from 'lucide-react';

export default function AboutSection() {
class TasnimulHasanHimel {
  readonly name = "Tasnimul Hasan Himel";
  readonly status = "BSc in CSE Student";
  readonly institution = "Green University of Bangladesh";
  
  skills = [
    "Software Development",
    "Creative Branding",
    "Competitive Programming",
    "Team Coordination"
  ];
  
  passions = {
    engineering: "Constructing high-grade technical tools",
    leadership: "Guiding communities and coordinating events",
    design: "Translating engineering constraints into clean aesthetics"
  };

  isReadyForInnovation() {
    return true; /* Always striving for modern, premium product designs */
  }
}`;

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative content-section">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Bio & Vision Details */}
        <div className="lg:col-span-6 space-y-8">
          
          <div className="space-y-4">
            {/* Subsection header */}
            <div className="inline-flex items-center gap-2 font-mono text-cyan-400 text-xs tracking-widest uppercase">
              <User className="w-3.5 h-3.5" />
              <span>[01] THE_ENGINEER_IDENTITY</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Engineering the Future with{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Design & Code
              </span>
            </h2>
          </div>

          <p className="text-gray-300 leading-relaxed font-sans text-sm sm:text-base font-light">
            I am a motivated Computer Science and Engineering student with strong problem-solving skills and a passion for leadership. I enjoy working on technical projects, collaborating with teams, and taking initiative to ensure effective coordination and successful outcomes in academic and extracurricular activities.
          </p>

          {/* Core traits bento boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Tech Leadership */}
            <div className="bg-slate-900/50 backdrop-blur-md border border-cyan-500/25 p-4 rounded-lg hover:border-cyan-400 transition-all flex items-start gap-4 group shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <div className="p-2 border border-cyan-500/30 rounded bg-cyan-950/20 text-cyan-400 group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                <BrainCircuit className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display font-bold text-xs text-white tracking-wider uppercase">Lead Coordination</h4>
                <p className="text-[11px] text-[#cbd5e1] mt-1 font-sans font-light leading-relaxed">Active organizing director, unifying teams on academic & community campaigns.</p>
              </div>
            </div>

            {/* Problem Solver */}
            <div className="bg-slate-900/50 backdrop-blur-md border border-purple-500/25 p-4 rounded-lg hover:border-purple-400 transition-all flex items-start gap-4 group shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <div className="p-2 border border-purple-500/30 rounded bg-purple-950/20 text-purple-400 group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(168,85,247,0.1)]">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display font-bold text-xs text-white tracking-wider uppercase">Full Stack Developer</h4>
                <p className="text-[11px] text-[#cbd5e1] mt-1 font-sans font-light leading-relaxed">Proficient across multi-paradigm languages: C#, Java, Python, and SQL systems.</p>
              </div>
            </div>

          </div>

          {/* Achievements Metrics strip */}
          <div className="border border-cyan-500/20 bg-slate-900/40 backdrop-blur-md rounded-lg p-6 grid grid-cols-3 gap-4 text-center shadow-[0_4px_25px_rgba(0,0,0,0.4)]">
            <div>
              <div className="font-display text-2xl font-black text-[#22d3ee] drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">CSE</div>
              <div className="font-mono text-[9px] text-[#94a3b8] tracking-widest uppercase mt-1">BSc Major</div>
            </div>
            <div className="border-x border-slate-800">
              <div className="font-display text-2xl font-black text-white">5.00</div>
              <div className="font-mono text-[9px] text-[#94a3b8] tracking-widest uppercase mt-1">HSC GPA Max</div>
            </div>
            <div>
              <div className="font-display text-2xl font-black text-[#a855f7] drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]">4+</div>
              <div className="font-mono text-[9px] text-[#94a3b8] tracking-widest uppercase mt-1">Major Projects</div>
            </div>
          </div>

        </div>

        {/* Right Side: High contrast visual code simulator */}
        <div className="lg:col-span-6 relative">
          <div className="absolute inset-0 bg-cyan-500/5 rounded blur-2xl pointer-events-none" />
          
          <div className="relative border border-cyan-500/20 bg-gray-950/90 rounded overflow-hidden shadow-2xl">
            {/* Header window */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-950/50 border-b border-gray-900">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                <span className="text-[10px] font-mono text-gray-500 select-none ml-4 flex items-center gap-1">
                  <Code2 className="w-3 h-3 text-cyan-400" />
                  profile_model.ts
                </span>
              </div>
              <span className="font-mono text-[8.5px] text-cyan-400 select-none bg-cyan-950/30 px-2 py-0.5 rounded">UTST-2</span>
            </div>

            {/* Editor Console view */}
            <div className="p-5 font-mono text-[11px] sm:text-xs leading-relaxed text-gray-300 overflow-x-auto select-none">
              <pre>
                <code>
                  {codeString.split('\n').map((line, idx) => {
                    // Quick custom syntax highlight colors for visual punch
                    let highlightedLine = line;
                    if (line.includes('class ') || line.includes('readonly ') || line.includes('return ')) {
                      highlightedLine = line
                        .replace('class ', '<span class="text-cyan-400">class </span>')
                        .replace('readonly ', '<span class="text-purple-400">readonly </span>')
                        .replace('return ', '<span class="text-[#f43f5e]">return </span>');
                    }
                    if (line.includes('// ')) {
                      highlightedLine = `<span class="text-gray-500">${line}</span>`;
                    } else if (line.includes('true') || line.includes('false')) {
                      highlightedLine = line.replace('true', '<span class="text-teal-400">true</span>');
                    }
                    
                    return (
                      <div key={idx} className="table-row">
                        <span className="table-cell text-right pr-4 text-gray-600 select-none text-[10px] w-6 border-r border-gray-900/60 mr-4">
                          {idx + 1}
                        </span>
                        <span 
                          className="table-cell pl-4"
                          dangerouslySetInnerHTML={{ __html: highlightedLine }} 
                        />
                      </div>
                    );
                  })}
                </code>
              </pre>
            </div>
          </div>

          {/* Subtle Cyber Floating Crosshairs */}
          <div className="absolute -top-3 -right-3 w-6 h-6 border-t border-r border-[#a855f7]/40 pointer-events-none" />
          <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b border-l border-[#06b6d4]/40 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
