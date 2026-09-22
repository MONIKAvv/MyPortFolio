import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { WhatIDo } from './components/WhatIDo';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100 selection:bg-indigo-500/30 selection:text-white relative">
      {/* Navigation */}
      <Navbar onResumeClick={() => setIsResumeModalOpen(true)} />

      {/* Main Sections */}
      <main>
        <Hero onResumeClick={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <WhatIDo />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
