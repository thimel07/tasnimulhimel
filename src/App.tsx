/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import BackgroundGrid from './components/BackgroundGrid';
import CustomCursor from './components/CustomCursor';
import FuturisticLoading from './components/FuturisticLoading';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import LeadershipSection from './components/LeadershipSection';
import CertificationsSection from './components/CertificationsSection';
import ExtraCurricular from './components/ExtraCurricular';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-gray-100 antialiased selection:bg-cyan-500/25 select-text">
      {/* Background vector elements on standard layer */}
      <BackgroundGrid />

      {/* Crosshair scope cursor follow */}
      <CustomCursor />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <FuturisticLoading onComplete={() => setIsLoading(false)} />
        ) : (
          <>
            <motion.div
              key="portfolio-master"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col min-h-screen relative print:hidden"
            >
              {/* Global cinematic navigation */}
              <Navbar onOpenCV={() => setIsCVOpen(true)} />

              {/* Content Sections */}
              <main className="flex-1 w-full relative">
                <HeroSection onOpenCV={() => setIsCVOpen(true)} />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <EducationSection />
                <LeadershipSection />
                <CertificationsSection />
                <ExtraCurricular />
                <ContactSection />
              </main>

              {/* Cinematic design system footer */}
              <Footer />
            </motion.div>

            {/* Interactive Modern Preview CV & High-Fidelity Print Engine */}
            <ResumeModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

