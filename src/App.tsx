import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { WhatIDo } from './components/WhatIDo';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const handleOpenResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#111113] text-[#F4F1E9] selection:bg-[#A9A3A6]/40 selection:text-[#F4F1E9] relative">
      {/* Navigation */}
      <Navbar onResumeClick={handleOpenResume} />

      {/* Main Sections */}
      <main>
        <Hero onResumeClick={handleOpenResume} />
        <About />
        <Skills />
        <WhatIDo />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
