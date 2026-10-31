/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CreativeSpaceSection } from './components/CreativeSpaceSection';
import { DesignProcessSection } from './components/DesignProcessSection';
import { ServicesSection } from './components/ServicesSection';
import { CertificationsSection } from './components/CertificationsSection';
import { OpportunitiesSection } from './components/OpportunitiesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PromptBlueprintModal } from './components/PromptBlueprintModal';
import { HireMeModal } from './components/HireMeModal';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [promptBlueprintOpen, setPromptBlueprintOpen] = useState(false);
  const [hireMeOpen, setHireMeOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.remove('bg-slate-50', 'text-slate-900');
      document.body.classList.add('bg-[#070b14]', 'text-slate-100');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-[#070b14]', 'text-slate-100');
      document.body.classList.add('bg-slate-50', 'text-slate-900');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-blue-600 selection:text-white flex flex-col font-sans transition-colors duration-200">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenPromptBlueprint={() => setPromptBlueprintOpen(true)}
        onOpenHireMe={() => setHireMeOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <HeroSection 
          onOpenResume={() => setResumeOpen(true)} 
          onOpenHireMe={() => setHireMeOpen(true)}
        />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CreativeSpaceSection />
        <DesignProcessSection />
        <ServicesSection />
        <CertificationsSection />
        <OpportunitiesSection onOpenHireMe={() => setHireMeOpen(true)} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <HireMeModal
        isOpen={hireMeOpen}
        onClose={() => setHireMeOpen(false)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <PromptBlueprintModal
        isOpen={promptBlueprintOpen}
        onClose={() => setPromptBlueprintOpen(false)}
      />
    </div>
  );
}
