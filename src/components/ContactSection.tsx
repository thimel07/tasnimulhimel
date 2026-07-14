import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, ShieldAlert, Sparkles, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('sending');
    
    // Simulate high-grade cryptographic key transmission loading
    setTimeout(() => {
      setFormStatus('success');
      // Reset form on success
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setFormStatus('idle');
      }, 4000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto relative content-section pb-36">
      {/* Decorative cyber grid lines */}
      <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent pointer-events-none" />

      {/* Header Info */}
      <div className="space-y-4 mb-20 text-center">
        <div className="inline-flex items-center gap-2 font-mono text-cyan-400 text-xs tracking-widest uppercase">
          <Mail className="w-3.5 h-3.5" />
          <span>[08] COMMS_TERMINATION</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
          Initiate{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Direct Transmission
          </span>
        </h2>
        <p className="font-sans text-xs sm:text-sm text-gray-400 max-w-xl mx-auto font-light">
          Establish secure tunnels for collaboration, designs, scheduling, and system development inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left column: Direct contact coordinates */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          
          <div className="space-y-6">
            <h3 className="font-display text-lg font-bold text-[#f3f4f6] uppercase tracking-wider">
              System Coordinates
            </h3>
            
            <div className="space-y-4">
              
              {/* Phone coordinate */}
              <a 
                href="tel:01701623316"
                className="flex items-center gap-4 p-4 border border-gray-900 bg-gray-950/30 hover:bg-cyan-950/20 rounded hover:border-cyan-500/30 transition-all group cursor-pointer"
              >
                <div className="p-2.5 border border-cyan-500/15 rounded bg-cyan-950/10 text-cyan-400 group-hover:scale-105 transition-all">
                  <Phone className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <div className="font-mono text-[9px] text-gray-500 tracking-wider">PHONE_ROUTING</div>
                  <div className="font-mono text-xs text-white group-hover:text-cyan-400 transition-colors">01701623316</div>
                </div>
              </a>

              {/* Email coordinate */}
              <a 
                href="mailto:t.h.himel07@gmail.com"
                className="flex items-center gap-4 p-4 border border-gray-900 bg-gray-950/30 hover:bg-cyan-950/20 rounded hover:border-purple-500/30 transition-all group cursor-pointer"
              >
                <div className="p-2.5 border border-purple-500/15 rounded bg-purple-950/10 text-purple-400 group-hover:scale-105 transition-all">
                  <Mail className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <div className="font-mono text-[9px] text-gray-500 tracking-wider">ENCRYPTED_MAIL</div>
                  <div className="font-mono text-xs text-white group-hover:text-purple-400 transition-colors">t.h.himel07@gmail.com</div>
                </div>
              </a>

              {/* Location coordinate */}
              <div 
                className="flex items-center gap-4 p-4 border border-gray-900 bg-gray-950/30 rounded"
              >
                <div className="p-2.5 border border-gray-800 rounded bg-gray-950 text-gray-400">
                  <MapPin className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <div className="font-mono text-[9px] text-gray-500 tracking-wider">GEOGRAPHIC_LOCUS</div>
                  <div className="font-sans text-xs text-gray-300 font-light">Bhulta, Rupganj, Narayanganj</div>
                </div>
              </div>

            </div>
          </div>

          {/* Social connections */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">ESTABLISH_SOCIAL_BRIDGE</h4>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/web.developer.himel" 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 min-w-[120px] max-w-[150px] p-3 text-center border border-gray-850 hover:border-cyan-500/40 bg-gray-950/30 hover:bg-cyan-950/10 rounded font-mono text-xs text-gray-400 hover:text-white flex items-center justify-center gap-2 transition-all group shadow-sm hover:shadow-glowing-cyan cursor-pointer"
              >
                <Facebook className="w-4 h-4 text-cyan-500 group-hover:animate-pulse" />
                FACEBOOK
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/tasnimul-hasan-himel-b16b12360" 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 min-w-[120px] max-w-[150px] p-3 text-center border border-gray-850 hover:border-purple-500/40 bg-gray-950/30 hover:bg-purple-950/10 rounded font-mono text-xs text-gray-400 hover:text-white flex items-center justify-center gap-2 transition-all group shadow-sm hover:shadow-glowing-purple cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-purple-500 group-hover:animate-pulse" />
                LINKEDIN
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/8801701623316?text=Hi%20Himel!%20I%20saw%20your%20stellar%20portfolio%20and%20wanted%20to%20connect." 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 min-w-[120px] max-w-[150px] p-3 text-center border border-gray-850 hover:border-emerald-500/40 bg-gray-950/30 hover:bg-emerald-950/10 rounded font-mono text-xs text-gray-400 hover:text-white flex items-center justify-center gap-2 transition-all group shadow-sm hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                WHATSAPP
              </a>

            </div>
          </div>

        </div>

        {/* Right column: Interactive glass form */}
        <div className="lg:col-span-7">
          <div className="relative border border-[#22d3ee]/20 bg-slate-900/50 p-6 sm:p-8 rounded-lg backdrop-blur-md shadow-2xl h-full flex flex-col justify-between overflow-hidden">
            
            {/* Success overlay state */}
            <AnimatePresence>
              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 bg-[#020510]/95 flex flex-col items-center justify-center p-6 text-center space-y-4"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="w-12 h-12 rounded-full border border-cyan-400 flex items-center justify-center bg-cyan-950/40 shadow-glowing-cyan"
                  >
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                  </motion.div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-base text-white uppercase tracking-wider">Encryption Complete</h4>
                    <p className="font-mono text-xs text-cyan-400">TRANSMISSION_STATUS: OK_DISPATCHED</p>
                  </div>
                  <p className="font-sans text-xs text-gray-400 max-w-xs leading-relaxed font-light">
                    Holographic key data packet has been packaged and directed securely to Himel. Expect connection updates shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-400 border-b border-slate-800 pb-3 uppercase">
                <Send className="w-3.5 h-3.5 text-[#22d3ee]" />
                <span>WRITE_TRANSMISSION()</span>
              </div>

              {/* Input Name */}
              <div className="space-y-1.5">
                <label className="font-mono text-[9px] text-[#94a3b8] tracking-wider block uppercase">COMMUNICATOR_NAME</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={formStatus === 'sending'}
                  placeholder="e.g. John Doe"
                  className="w-full bg-[#020617] border border-slate-800 hover:border-slate-700 focus:border-[#22d3ee] rounded-sm px-4 py-2.5 font-sans text-xs text-white placeholder-gray-600 focus:outline-none transition-all focus:bg-cyan-950/10 focus:shadow-[0_0_10px_rgba(6,182,212,0.1)]"
                />
              </div>

              {/* Input Email */}
              <div className="space-y-1.5">
                <label className="font-mono text-[9px] text-[#94a3b8] tracking-wider block uppercase">TRANSMISSION_RETURN_ADDRESS</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={formStatus === 'sending'}
                  placeholder="e.g. communication@net.com"
                  className="w-full bg-[#020617] border border-slate-800 hover:border-slate-700 focus:border-[#22d3ee] rounded-sm px-4 py-2.5 font-sans text-xs text-white placeholder-gray-600 focus:outline-none transition-all focus:bg-cyan-950/10 focus:shadow-[0_0_10px_rgba(6,182,212,0.1)]"
                />
              </div>

              {/* Input Message */}
              <div className="space-y-1.5">
                <label className="font-mono text-[9px] text-[#94a3b8] tracking-wider block uppercase">DATA_CONTENT_PACKET</label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={formStatus === 'sending'}
                  rows={4}
                  placeholder="Compose your secure system proposal..."
                  className="w-full bg-[#020617] border border-slate-800 hover:border-slate-700 focus:border-[#22d3ee] rounded-sm px-4 py-2.5 font-sans text-xs text-white placeholder-gray-600 focus:outline-none transition-all focus:bg-cyan-950/10 focus:shadow-[0_0_10px_rgba(6,182,212,0.1)] resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full py-3 bg-[#22d3ee] hover:bg-white text-black font-mono text-xs font-bold uppercase tracking-widest rounded-sm transition-colors cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2"
              >
                {formStatus === 'sending' ? (
                  <>
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-t-black border-r-black border-b-transparent border-l-transparent animate-spin" />
                    ENCRYPTING_TRANSMISSION...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    DISPATCH_SECURE_PACKET()
                  </>
                )}
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
