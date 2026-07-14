import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Phone, Mail, MapPin, Linkedin, Facebook, Download, User, Trophy, Calendar, Briefcase, GraduationCap, Award, Star } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const triggerPrint = () => {
    window.print();
  };

  return (
    <>
      {/* 1. Premium Interactive In-App CV Previewer modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none print:hidden">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-[#020617]/90 backdrop-blur-lg"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative w-full max-w-5xl h-[85vh] bg-slate-950/95 border border-[#22d3ee]/25 rounded-xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              {/* Header bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#020617]/80">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_#22d3ee]" />
                  <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold">SYSTEM_CV_INTEGRATION.v4</span>
                </div>
                <div className="flex items-center gap-3">
                  {/* Download PDF / Print button */}
                  <button
                    onClick={triggerPrint}
                    className="flex items-center gap-2 px-4 py-1.5 bg-[#22d3ee] hover:bg-white text-black font-mono text-xs font-bold tracking-widest uppercase rounded transition-all cursor-pointer shadow-[0_0_12px_rgba(34,211,238,0.3)] hover:shadow-[0_0_18px_rgba(255,255,255,0.4)]"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>PRINT_OR_SAVE_PDF</span>
                  </button>
                  {/* Close button */}
                  <button
                    onClick={onClose}
                    className="p-1.5 border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white rounded transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Scrollable multi-page styled workspace display */}
              <div className="flex-1 overflow-y-auto px-4 py-8 md:p-8 bg-slate-900/30 font-sans select-text">
                <div className="max-w-4xl mx-auto space-y-10">
                  {/* In-App Paper View Page 1 */}
                  <div className="bg-white text-[#1e293b] rounded-lg shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[1100px] border border-slate-200">
                    {/* Dark Sidebar Left */}
                    <div className="md:col-span-4 bg-[#232936] text-slate-100 p-6 flex flex-col justify-between border-r border-slate-700">
                      <div className="space-y-8">
                        {/* Profile Area */}
                        <div className="text-center space-y-4">
                          <div className="relative inline-block">
                            <div className="absolute inset-0 -m-1.5 rounded-full border border-dashed border-[#eab308]/60 animate-spin" style={{ animationDuration: '40s' }} />
                            <div className="w-28 h-28 rounded-full bg-slate-800 border-2 border-white overflow-hidden flex items-center justify-center p-0.5 mx-auto">
                              {/* Designer style SVG face avatar as Himel photo is dynamic */}
                              <svg className="w-full h-full text-[#22d3ee]" viewBox="0 0 100 100" fill="none">
                                <circle cx="50" cy="40" r="18" stroke="#eab308" strokeWidth="2.5" fill="#1e293b" />
                                <path d="M22 80 C 22 60, 78 60, 78 80" stroke="#eab308" strokeWidth="2.5" fill="#1e293b" />
                                <circle cx="50" cy="50" r="46" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="4 4" />
                              </svg>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <h3 className="font-mono text-[10px] tracking-widest text-[#eab308] uppercase font-bold">IDENTITY MATCH</h3>
                            <p className="text-xs text-slate-300 font-bold uppercase tracking-wide">Tasnimul Hasan Himel</p>
                          </div>
                        </div>

                        {/* Contact info list */}
                        <div className="space-y-4">
                          <h4 className="font-mono text-[11px] tracking-widest text-white font-bold border-b border-slate-700 pb-1.5 uppercase">CONTACT</h4>
                          <ul className="space-y-2.5 text-[11px] text-slate-300">
                            <li className="flex items-center gap-2.5">
                              <Phone className="w-3.5 h-3.5 text-[#eab308] shrink-0" />
                              <span className="font-mono">01701623316</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                              <Mail className="w-3.5 h-3.5 text-[#eab308] shrink-0" />
                              <span className="truncate">t.h.himel07@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                              <MapPin className="w-3.5 h-3.5 text-[#eab308] shrink-0" />
                              <span>Bhulta, Rupganj, Narayanganj</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                              <Linkedin className="w-3.5 h-3.5 text-[#eab308] shrink-0" />
                              <a href="https://www.linkedin.com/in/tasnimul-hasan-himel-b16b12360" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 underline font-mono truncate">linkedin.com/in/tasnimul...</a>
                            </li>
                            <li className="flex items-center gap-2.5">
                              <Facebook className="w-3.5 h-3.5 text-[#eab308] shrink-0" />
                              <a href="https://www.facebook.com/web.developer.himel" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 underline font-mono truncate">facebook.com/web.developer...</a>
                            </li>
                          </ul>
                        </div>

                        {/* Circular Skills meters */}
                        <div className="space-y-4">
                          <h4 className="font-mono text-[11px] tracking-widest text-white font-bold border-b border-slate-700 pb-1.5 uppercase">PROGRAMMING SKILLS</h4>
                          <div className="grid grid-cols-3 gap-3">
                            {[
                              { label: 'HTML', pct: 94 },
                              { label: 'CSS', pct: 86 },
                              { label: 'C#', pct: 84 },
                              { label: 'Java', pct: 90 },
                              { label: 'Python', pct: 75 },
                              { label: 'MySQL', pct: 80 }
                            ].map((skill, sIdx) => {
                              const r = 16;
                              const circ = 2 * Math.PI * r;
                              const strokeDashoffset = circ - (skill.pct / 100) * circ;
                              return (
                                <div key={sIdx} className="text-center space-y-1">
                                  <div className="relative w-12 h-12 mx-auto flex items-center justify-center">
                                    <svg className="w-full h-full transform -rotate-90">
                                      <circle cx="24" cy="24" r={r} stroke="#475569" strokeWidth="2.5" fill="transparent" />
                                      <circle cx="24" cy="24" r={r} stroke="#eab308" strokeWidth="2.5" fill="transparent" strokeDasharray={circ} strokeDashoffset={strokeDashoffset} strokeLinecap="round" />
                                    </svg>
                                    <span className="absolute font-mono text-[9px] font-bold text-white">{skill.pct}%</span>
                                  </div>
                                  <span className="font-mono text-[9px] text-slate-300 block font-semibold">{skill.label}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Languages Progress linear */}
                        <div className="space-y-4">
                          <h4 className="font-mono text-[11px] tracking-widest text-white font-bold border-b border-slate-700 pb-1.5 uppercase">LANGUAGES</h4>
                          <div className="space-y-3">
                            {[
                              { name: 'Bengali', pct: 95 },
                              { name: 'English', pct: 80 },
                              { name: 'Hindi', pct: 60 }
                            ].map((lang, lIdx) => (
                              <div key={lIdx} className="space-y-1">
                                <div className="flex justify-between text-[10px] font-semibold text-slate-300">
                                  <span>{lang.name}</span>
                                  <span className="font-mono">{lang.pct}%</span>
                                </div>
                                <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                  <div className="h-full bg-[#eab308]" style={{ width: `${lang.pct}%` }} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                      <div className="pt-8 border-t border-slate-750 text-center text-[8px] font-mono text-slate-500 uppercase tracking-widest">
                        PAGE 1 OF 2 // PORTFOLIO_V4
                      </div>
                    </div>

                    {/* Light Column Right */}
                    <div className="md:col-span-8 bg-white p-6 sm:p-8 flex flex-col justify-between">
                      <div className="space-y-6">
                        {/* Header Title block */}
                        <div className="border-b-2 border-slate-100 pb-4">
                          <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-none uppercase">Tasnimul Hasan Himel</h1>
                          <p className="text-xs font-mono font-bold text-[#eab308] tracking-widest uppercase mt-2">Computer Science and Engineering Student</p>
                        </div>

                        {/* Profile statement */}
                        <div className="space-y-2">
                          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-1.5 uppercase font-mono tracking-wider border-b border-slate-100 pb-1">
                            <User className="w-4 h-4 text-cyan-500 shrink-0" />
                            PROFILE
                          </h2>
                          <p className="text-[11px] leading-relaxed text-slate-600 font-sans font-normal">
                            I am a motivated Computer Science and Engineering student with strong problem-solving skills and a passion for leadership. I enjoy working on technical projects, collaborating with teams, and taking initiative to ensure effective coordination and successful outcomes in academic and extracurricular activities.
                          </p>
                        </div>

                        {/* Experience */}
                        <div className="space-y-3">
                          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-1.5 uppercase font-mono tracking-wider border-b border-slate-100 pb-1">
                            <Briefcase className="w-4 h-4 text-[#eab308] shrink-0" />
                            EVENT & LEADERSHIP EXPERIENCE
                          </h2>
                          <div className="space-y-3">
                            {[
                              {
                                title: 'UNESCO CogLabs Workshop',
                                meta: '24 January 2026 | Infinix in collaboration with UNESCO and Google',
                                detail: 'Participate as a Group Leader in a workshop by Infinix in collaboration with UNESCO & Google.'
                              },
                              {
                                title: 'SOLVIO AI Hackathon 2025',
                                meta: '27 October 2025 | Jashore University of Science and Technology',
                                detail: 'Participated as an active team member, collaborating on AI problem solving and contributing to project execution and successful completion.'
                              },
                              {
                                title: 'Hack The AI',
                                meta: '12 October 2025 | Green University of Bangladesh',
                                detail: 'Led a team as Group Leader in a problem-solving-based project, guiding collaborative analysis, developing AI-driven solutions, and ensuring effective execution of project tasks.'
                              },
                              {
                                title: 'Volunteer — Wrapping Up Semester One',
                                meta: '24 February 2025 | Green University of Bangladesh',
                                detail: 'Worked as a volunteer in the "Wrapping Up Semester One" fun program, assisting with event activities and supporting the team to ensure a smooth and enjoyable celebration.'
                              }
                            ].map((event, eIdx) => (
                              <div key={eIdx} className="relative pl-4 border-l-2 border-[#eab308]/40 text-left">
                                <div className="absolute top-1 left-[-5px] w-2 h-2 rounded-full bg-[#eab308]" />
                                <h4 className="text-[11px] font-bold text-slate-800 uppercase">{event.title}</h4>
                                <span className="text-[9px] font-mono text-slate-500 block mb-1 font-semibold">{event.meta}</span>
                                <p className="text-[10px] text-slate-600 leading-normal">{event.detail}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Education */}
                        <div className="space-y-3">
                          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-1.5 uppercase font-mono tracking-wider border-b border-slate-100 pb-1">
                            <GraduationCap className="w-4 h-4 text-cyan-500 shrink-0" />
                            EDUCATION
                          </h2>
                          <div className="space-y-3 text-[10px]">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-bold text-slate-800 uppercase">Green University of Bangladesh</h4>
                                <span className="text-slate-500">BSc in Computer Science and Engineering</span>
                              </div>
                              <div className="text-right">
                                <span className="font-mono text-slate-500 block font-bold">2024-Ongoing</span>
                                <span className="font-mono bg-slate-100 text-[#eab308] px-2 py-0.5 rounded text-[9px] font-black">CGPA: Ongoing</span>
                              </div>
                            </div>
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-bold text-slate-800 uppercase">Narsingdi Independent College</h4>
                                <span className="text-slate-500">HSC (Science)</span>
                              </div>
                              <div className="text-right">
                                <span className="font-mono text-slate-500 block font-bold">2021-2023</span>
                                <span className="font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[9px] font-black">GPA: 5.00/5.00</span>
                              </div>
                            </div>
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-bold text-slate-800 uppercase">Bhulta High School and College</h4>
                                <span className="text-slate-500">SSC (Science)</span>
                              </div>
                              <div className="text-right">
                                <span className="font-mono text-slate-500 block font-bold">2019-2021</span>
                                <span className="font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[9px] font-black">GPA: 4.50/5.00</span>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="pt-4 text-right text-[8px] font-mono text-slate-400">
                        * SECURE INTEL SPECIFICATIONS // FULL STACK APP
                      </div>
                    </div>
                  </div>

                  {/* In-App Paper View Page 2 */}
                  <div className="bg-white text-[#1e293b] rounded-lg shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[1100px] border border-slate-200">
                    {/* Dark Sidebar Left */}
                    <div className="md:col-span-4 bg-[#232936] text-slate-100 p-6 flex flex-col justify-between border-r border-slate-700">
                      <div className="space-y-8">
                        {/* Tech Skills List */}
                        <div className="space-y-4">
                          <h4 className="font-mono text-[11px] tracking-widest text-white font-bold border-b border-slate-700 pb-1.5 uppercase">TECH SKILLS</h4>
                          <ul className="space-y-2 text-[11px] text-slate-300">
                            {[
                              'Graphic Design',
                              'Photography',
                              'Event Coordination',
                              'Project Management',
                              'Typography',
                              'Branding & Identity',
                              'Print & Digital Media'
                            ].map((skill, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <Star className="w-3 h-3 text-[#eab308]" />
                                <span>{skill}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Extra-Curricular */}
                        <div className="space-y-4">
                          <h4 className="font-mono text-[11px] tracking-widest text-white font-bold border-b border-slate-700 pb-1.5 uppercase">EXTRA CURRICULAR</h4>
                          <div className="space-y-4 text-[11px] text-slate-300">
                            <div className="space-y-1">
                              <h5 className="font-bold text-white uppercase">Computer Office Application Trainer</h5>
                              <p className="font-mono text-[10px] text-[#eab308]">Bornomala IT Farm</p>
                            </div>
                            <div className="space-y-1">
                              <h5 className="font-bold text-white uppercase">Active Member</h5>
                              <p className="font-mono text-[10px] text-[#eab308]">Apex at Bhulta Branch</p>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="pt-8 border-t border-slate-755 text-center text-[8px] font-mono text-slate-500 uppercase tracking-widest">
                        PAGE 2 OF 2 // PORTFOLIO_V4
                      </div>
                    </div>

                    {/* Light Column Right */}
                    <div className="md:col-span-8 bg-white p-6 sm:p-8 flex flex-col justify-between">
                      <div className="space-y-6">
                        {/* Projects section */}
                        <div className="space-y-4">
                          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-1.5 uppercase font-mono tracking-wider border-b border-slate-100 pb-1">
                            <Award className="w-4 h-4 text-cyan-500 shrink-0" />
                            PROJECTS
                          </h2>
                          <div className="space-y-4">
                            {[
                              {
                                title: 'Football Game',
                                desc: 'Designed an interactive game where players score goals and compete in matches, enhancing programming logic, game mechanics, and animation skills.',
                                tech: 'Scratch'
                              },
                              {
                                title: 'Smart Restaurant Purchase System',
                                desc: 'Developed a system to manage restaurant orders, calculate bills, track sales, and generate invoices efficiently, improving practical programming and database management skills.',
                                tech: 'C#, Windows Forms'
                              },
                              {
                                title: 'Automatic Street Light with Motion & LDR Detector',
                                desc: 'Implemented a smart street lighting system that activates with motion detection at night to save energy.',
                                tech: 'Arduino, PIR Sensor, LDR, Embedded Systems'
                              },
                              {
                                title: 'EVM Voting System (Group Project)',
                                desc: 'Designed an electronic voting machine prototype to securely cast, count, and display votes electronically.',
                                tech: 'Arduino, Push Buttons, LCD'
                              },
                              {
                                title: 'ECO_sync Social Management',
                                desc: 'Developed an application to manage social initiatives, track community projects, and coordinate volunteers efficiently, improving database handling and user interface skills.',
                                tech: 'Java, Swing, JDBC, Database(MySQL)'
                              }
                            ].map((project, pIdx) => (
                              <div key={pIdx} className="space-y-1">
                                <h4 className="text-[11px] font-bold text-slate-800 uppercase">{project.title}</h4>
                                <p className="text-[10px] text-slate-600 leading-normal">{project.desc}</p>
                                <div className="text-[9px] font-mono text-[#eab308] uppercase font-bold">
                                  Technologies Used: <span className="text-slate-500">{project.tech}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Club Activities */}
                        <div className="space-y-3">
                          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-1.5 uppercase font-mono tracking-wider border-b border-slate-100 pb-1">
                            <Trophy className="w-4 h-4 text-[#eab308]" />
                            CLUB ACTIVITIES
                          </h2>
                          <div className="space-y-2.5 text-[10px]">
                            <div className="flex justify-between items-center">
                              <div>
                                <span className="font-bold text-slate-800 uppercase">GUB Competitive Programming Community</span>
                                <span className="block text-slate-500">Organizing Secretary</span>
                              </div>
                              <span className="font-mono text-slate-500 font-bold whitespace-nowrap">2026 - PRESENT</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <div>
                                <span className="font-bold text-slate-800 uppercase">Green University Computer Club</span>
                                <span className="block text-slate-500">Photography Secretary</span>
                              </div>
                              <span className="font-mono text-slate-500 font-bold whitespace-nowrap">2026 - PRESENT</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <div>
                                <span className="font-bold text-slate-800 uppercase">GUB Competitive Programming Community</span>
                                <span className="block text-slate-500">Graphics Designer</span>
                              </div>
                              <span className="font-mono text-slate-500 font-bold whitespace-nowrap">2025 - 2026</span>
                            </div>
                          </div>
                        </div>

                        {/* Professional Certification */}
                        <div className="space-y-3">
                          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-1.5 uppercase font-mono tracking-wider border-b border-slate-100 pb-1">
                            <Briefcase className="w-4 h-4 text-cyan-500 shrink-0" />
                            PROFESSIONAL CERTIFICATION
                          </h2>
                          <div className="space-y-2.5 text-[10px] text-slate-600">
                            <div>
                              <h4 className="font-bold text-slate-800 uppercase">Cyber Hygiene Training</h4>
                              <span>The Asia Foundation & SAJIDA Foundation (Online) | Supported by Google.org</span>
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-800 uppercase">AI+ Prompt Engineer</h4>
                              <span>Agentx (Online) | Powered by Microsoft 365 Copilot | Netcom Learning (Bangladesh)</span>
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-800 uppercase">Computer Office Application</h4>
                              <span>Shakib Computer Training Center (Training) | BTEB Bangladesh, Dhaka</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. Decoupled Printable CSS Vector Layout (Visible ONLY during print/PDF generation) */}
      <div className="hidden print:block bg-white text-black font-sans w-full leading-normal">
        {/* CV PRINT PAGE 1 */}
        <div className="w-full flex min-h-[1100px] border-b border-solid border-slate-200 page-break">
          {/* Printable Sidebar */}
          <div className="w-1/3 bg-[#232936] text-white p-6 flex flex-col justify-between" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}>
            <div className="space-y-8">
              {/* Profile */}
              <div className="text-center space-y-3">
                <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-white overflow-hidden flex items-center justify-center mx-auto">
                  <svg className="w-full h-full text-[#22d3ee]" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="40" r="18" stroke="#eab308" strokeWidth="2.5" fill="#1e293b" />
                    <path d="M22 80 C 22 60, 78 60, 78 80" stroke="#eab308" strokeWidth="2.5" fill="#1e293b" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-mono text-[9px] tracking-widest text-[#eab308] uppercase font-bold">IDENTITY MATCH</h3>
                  <p className="text-xs text-white font-bold uppercase tracking-wide">Tasnimul Hasan Himel</p>
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h4 className="font-mono text-[10px] tracking-widest text-[#eab308] font-bold border-b border-slate-700 pb-1 uppercase">CONTACT</h4>
                <ul className="space-y-2 text-[10px] text-slate-200">
                  <li className="flex items-center gap-2">
                    <span className="font-bold text-[#eab308]">P:</span>
                    <span className="font-mono">01701623316</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-bold text-[#eab308]">E:</span>
                    <span>t.h.himel07@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-bold text-[#eab308]">A:</span>
                    <span>Bhulta, Rupganj, Narayanganj</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-bold text-[#eab308]">L:</span>
                    <span className="font-mono">linkedin.com/in/tasnimul-hasan-himel-b16b12360</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-bold text-[#eab308]">F:</span>
                    <span className="font-mono">facebook.com/web.developer.himel</span>
                  </li>
                </ul>
              </div>

              {/* Programming Skills Progress bars (robust vector layout for print) */}
              <div className="space-y-4">
                <h4 className="font-mono text-[10px] tracking-widest text-[#eab308] font-bold border-b border-slate-700 pb-1 uppercase">PROGRAMMING SKILLS</h4>
                <div className="space-y-2.5">
                  {[
                    { label: 'HTML', pct: 94 },
                    { label: 'CSS', pct: 86 },
                    { label: 'C#', pct: 84 },
                    { label: 'Java', pct: 90 },
                    { label: 'Python', pct: 75 },
                    { label: 'MySQL', pct: 80 }
                  ].map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-0.5">
                      <div className="flex justify-between text-[9px] font-bold text-slate-200 uppercase tracking-widest font-mono">
                        <span>{skill.label}</span>
                        <span>{skill.pct}%</span>
                      </div>
                      <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-[#eab308]" style={{ width: `${skill.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-3">
                <h4 className="font-mono text-[10px] tracking-widest text-[#eab308] font-bold border-b border-slate-700 pb-1 uppercase">LANGUAGES</h4>
                <div className="space-y-2">
                  {[
                    { name: 'Bengali', pct: 95 },
                    { name: 'English', pct: 80 },
                    { name: 'Hindi', pct: 60 }
                  ].map((lang, lIdx) => (
                    <div key={lIdx} className="space-y-0.5">
                      <div className="flex justify-between text-[9px] font-bold text-slate-200">
                        <span>{lang.name}</span>
                        <span className="font-mono">{lang.pct}%</span>
                      </div>
                      <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-[#eab308]" style={{ width: `${lang.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center text-[7px] font-mono text-slate-500 uppercase tracking-widest">
              PAGE 1 OF 2 // PORTFOLIO PRINT SYSTEM
            </div>
          </div>

          {/* Printable main body */}
          <div className="w-2/3 bg-white text-slate-800 p-6 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Title Section */}
              <div className="border-b-2 border-slate-150 pb-3">
                <h1 className="text-3xl font-black text-slate-950 uppercase tracking-tight">TASNIMUL HASAN HIMEL</h1>
                <p className="text-xs font-mono font-bold text-[#eab308] uppercase tracking-wider mt-1">Computer Science and Engineering Student</p>
              </div>

              {/* Profile */}
              <div className="space-y-1.5">
                <h2 className="text-xs font-bold text-black uppercase tracking-wider border-b border-slate-150 pb-0.5">PROFILE</h2>
                <p className="text-[10px] leading-relaxed text-slate-700">
                  I am a motivated Computer Science and Engineering student with strong problem-solving skills and a passion for leadership. I enjoy working on technical projects, collaborating with teams, and taking initiative to ensure effective coordination and successful outcomes in academic and extracurricular activities.
                </p>
              </div>

              {/* Leadership events */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold text-black uppercase tracking-wider border-b border-slate-150 pb-0.5">EVENT & LEADERSHIP EXPERIENCE</h2>
                <div className="space-y-3">
                  {[
                    {
                      title: 'UNESCO CogLabs Workshop',
                      meta: '24 January 2026 | Infinix in collaboration with UNESCO and Google',
                      detail: 'Participate as a Group Leader in a workshop by Infinix in collaboration with UNESCO & Google.'
                    },
                    {
                      title: 'SOLVIO AI Hackathon 2025',
                      meta: '27 October 2025 | Jashore University of Science and Technology',
                      detail: 'Participated as an active team member, collaborating on AI problem solving and contributing to project execution and successful completion.'
                    },
                    {
                      title: 'Hack The AI',
                      meta: '12 October 2025 | Green University of Bangladesh',
                      detail: 'Led a team as Group Leader in a problem-solving-based project, guiding collaborative analysis, developing AI-driven solutions, and ensuring effective execution of project tasks.'
                    },
                    {
                      title: 'Volunteer — Wrapping Up Semester One',
                      meta: '24 February 2025 | Green University of Bangladesh',
                      detail: 'Worked as a volunteer in the "Wrapping Up Semester One" fun program, assisting with event activities and supporting the team to ensure a smooth and enjoyable celebration.'
                    }
                  ].map((event, eIdx) => (
                    <div key={eIdx} className="text-left">
                      <h4 className="text-[10px] font-bold text-slate-900 uppercase leading-snug">{event.title}</h4>
                      <div className="text-[8px] font-mono text-slate-500 font-bold mb-0.5 uppercase tracking-wide">{event.meta}</div>
                      <p className="text-[9.5px] text-slate-650 leading-relaxed font-normal">{event.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold text-black uppercase tracking-wider border-b border-slate-150 pb-0.5">EDUCATION</h2>
                <div className="space-y-2 text-[9.5px]">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-slate-950 uppercase">Green University of Bangladesh</h4>
                      <span className="text-slate-600 block">BSc in Computer Science and Engineering</span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-slate-500 block">2024-Ongoing</span>
                      <span className="font-mono font-bold text-slate-800">CGPA: Ongoing</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-slate-950 uppercase">Narsingdi Independent College</h4>
                      <span className="text-slate-600 block font-normal">HSC (Science)</span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-slate-500 block">2021-2023</span>
                      <span className="font-mono font-bold text-slate-800">GPA: 5.00/5.00</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-slate-950 uppercase">Bhulta High School and College</h4>
                      <span className="text-slate-600 block font-normal">SSC (Science)</span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-slate-500 block">2019-2021</span>
                      <span className="font-mono font-bold text-slate-800">GPA: 4.50/5.00</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* CV PRINT PAGE 2 */}
        <div className="w-full flex min-h-[1100px]">
          {/* Printable Sidebar */}
          <div className="w-1/3 bg-[#232936] text-white p-6 flex flex-col justify-between" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}>
            <div className="space-y-8">
              {/* Tech Skills */}
              <div className="space-y-3">
                <h4 className="font-mono text-[10px] tracking-widest text-[#eab308] font-bold border-b border-slate-700 pb-1 uppercase">TECH SKILLS</h4>
                <ul className="space-y-1.5 text-[10px] text-slate-200">
                  {['Graphic Design', 'Photography', 'Event Coordination', 'Project Management', 'Typography', 'Branding & Identity', 'Print & Digital Media'].map((skill, index) => (
                    <li key={index} className="flex items-center gap-1.5">
                      <span className="text-[#eab308]">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Extra-Curricular */}
              <div className="space-y-3">
                <h4 className="font-mono text-[10px] tracking-widest text-[#eab308] font-bold border-b border-slate-700 pb-1 uppercase">EXTRA CURRICULAR</h4>
                <div className="space-y-3.5 text-[10px] text-slate-200">
                  <div className="space-y-0.5">
                    <h5 className="font-bold text-white uppercase">Computer Office Application Trainer</h5>
                    <p className="font-mono text-[9px] text-[#eab308]">Bornomala IT Farm</p>
                  </div>
                  <div className="space-y-0.5">
                    <h5 className="font-bold text-white uppercase">Active Member</h5>
                    <p className="font-mono text-[9px] text-[#eab308]">Apex at Bhulta Branch</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-[7px] font-mono text-slate-500 uppercase tracking-widest">
              PAGE 2 OF 2 // PORTFOLIO PRINT SYSTEM
            </div>
          </div>

          {/* Printable main body */}
          <div className="w-2/3 bg-white text-slate-800 p-6 flex flex-col justify-between">
            <div className="space-y-5">
              
              {/* Projects */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold text-black uppercase tracking-wider border-b border-slate-150 pb-0.5">PROJECTS</h2>
                <div className="space-y-3">
                  {[
                    {
                      title: 'Football Game',
                      desc: 'Designed an interactive game where players score goals and compete in matches, enhancing programming logic, game mechanics, and animation skills.',
                      tech: 'Scratch'
                    },
                    {
                      title: 'Smart Restaurant Purchase System',
                      desc: 'Developed a system to manage restaurant orders, calculate bills, track sales, and generate invoices efficiently, improving practical programming and database management skills.',
                      tech: 'C#, Windows Forms'
                    },
                    {
                      title: 'Automatic Street Light with Motion & LDR Detector',
                      desc: 'Implemented a smart street lighting system that activates with motion detection at night to save energy.',
                      tech: 'Arduino, PIR Sensor, LDR, Embedded Systems'
                    },
                    {
                      title: 'EVM Voting System (Group Project)',
                      desc: 'Designed an electronic voting machine prototype to securely cast, count, and display votes electronically.',
                      tech: 'Arduino, Push Buttons, LCD'
                    },
                    {
                      title: 'ECO_sync Social Management',
                      desc: 'Developed an application to manage social initiatives, track community projects, and coordinate volunteers efficiently, improving database handling and user interface skills.',
                      tech: 'Java, Swing, JDBC, Database(MySQL)'
                    }
                  ].map((project, pIdx) => (
                    <div key={pIdx} className="space-y-0.5">
                      <h4 className="text-[10px] font-bold text-slate-950 uppercase">{project.title}</h4>
                      <p className="text-[9.5px] text-slate-650 leading-relaxed font-normal">{project.desc}</p>
                      <div className="text-[8.5px] font-mono font-bold text-[#eab308] uppercase">
                        Technologies Used: <span className="text-slate-500">{project.tech}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Club Activities */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold text-black uppercase tracking-wider border-b border-slate-150 pb-0.5">CLUB ACTIVITIES</h2>
                <div className="space-y-1.5 text-[9.5px]">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-slate-900 uppercase">GUB Competitive Programming Community</span>
                      <span className="block text-slate-500">Organizing Secretary</span>
                    </div>
                    <span className="font-mono text-slate-500 font-bold whitespace-nowrap text-[8.5px]">2026 - PRESENT</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-slate-900 uppercase">Green University Computer Club</span>
                      <span className="block text-slate-500">Photography Secretary</span>
                    </div>
                    <span className="font-mono text-slate-500 font-bold whitespace-nowrap text-[8.5px]">2026 - PRESENT</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-slate-900 uppercase">GUB Competitive Programming Community</span>
                      <span className="block text-slate-500">Graphics Designer</span>
                    </div>
                    <span className="font-mono text-slate-500 font-bold whitespace-nowrap text-[8.5px]">2025 - 2026</span>
                  </div>
                </div>
              </div>

              {/* Professional Certification */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold text-black uppercase tracking-wider border-b border-slate-150 pb-0.5">PROFESSIONAL CERTIFICATION</h2>
                <div className="space-y-1.5 text-[9.5px] text-slate-600">
                  <div>
                    <h4 className="font-bold text-slate-950 uppercase leading-none">Cyber Hygiene Training</h4>
                    <span>The Asia Foundation & SAJIDA Foundation | Supported by Google.org</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 uppercase leading-none">AI+ Prompt Engineer</h4>
                    <span>Agentx (Online) | Powered by Microsoft 365 Copilot | Netcom Learning (Bangladesh)</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 uppercase leading-none">Computer Office Application</h4>
                    <span>Shakib Computer Training Center Training | BTEB Bangladesh, Dhaka</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
