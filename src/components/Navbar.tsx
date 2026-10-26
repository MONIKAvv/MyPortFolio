import React, { useState } from 'react';
import { Download, Menu, X, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolio';

interface NavbarProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  onResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onSectionClick,
  onResumeClick
}) => {
  const { developer } = portfolioData;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', step: '01', label: 'Basics' },
    { id: 'about', step: '02', label: 'Bio' },
    { id: 'skills', step: '03', label: 'Tech Stack' },
    { id: 'what-i-do', step: '04', label: 'Capabilities' },
    { id: 'projects', step: '05', label: 'Shipped Apps' },
    { id: 'experience', step: '06', label: 'Timeline' },
    { id: 'contact', step: '07', label: 'Connect' }
  ];

  const handleItemClick = (id: string) => {
    onSectionClick(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#090a0f]/95 backdrop-blur-md border-b border-[#232530]">
      {/* Primary Top Bar */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-4">
          
          {/* Left: Brand & Title */}
          <div
            onClick={() => handleItemClick('home')}
            className="flex items-center gap-3 cursor-pointer flex-shrink-0"
          >
            {/* White Monochrome Layered Logo */}
            <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/25 flex items-center justify-center text-white shadow-[0_0_12px_rgba(255,255,255,0.15)] flex-shrink-0">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-['Syne'] font-extrabold text-base tracking-tight text-white">
                  {developer.firstName.toUpperCase()}
                </span>
                <span className="font-['Syne'] font-extrabold text-base tracking-tight text-neutral-400">
                  TRACKER
                </span>
                <span className="font-['JetBrains_Mono'] text-[9px] font-bold px-1.5 py-0.5 rounded bg-white/10 text-white border border-white/20 tracking-wider">
                  PRO
                </span>
              </div>
              <p className="hidden sm:block font-['JetBrains_Mono'] text-[10px] text-neutral-400 tracking-tight">
                Flutter + Native App Dev • 4 Projects
              </p>
            </div>
          </div>

          {/* Center: Core Steps Top Navigation (Desktop) */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#111217] p-1 rounded-xl border border-[#232530]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`px-3 py-1.5 rounded-lg font-['JetBrains_Mono'] text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-white text-black font-bold shadow-[0_0_12px_rgba(255,255,255,0.3)]'
                      : 'text-neutral-400 hover:text-white hover:bg-[#181920]'
                  }`}
                >
                  <span className={`text-[10px] font-mono ${isActive ? 'text-black/70' : 'text-neutral-500'}`}>
                    {item.step}
                  </span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right: Status Indicator & Quick Actions */}
          <div className="flex items-center gap-2.5">
            {/* Readiness Badge */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-[#111217] border border-[#232530] font-['JetBrains_Mono'] text-xs">
              <span className="w-2 h-2 rounded-full bg-[#00e676] shadow-[0_0_8px_#00e676] animate-pulse" />
              <span className="text-neutral-400">Readiness:</span>
              <span className="text-white font-bold">100%</span>
            </div>

            {/* GitHub Link */}
            <a
              href="https://github.com/MONIKAvv"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111217] hover:bg-[#181920] border border-[#232530] text-neutral-300 hover:text-white font-['JetBrains_Mono'] text-xs transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-neutral-500" />
            </a>

            {/* Resume Button in Solid White */}
            <button
              onClick={onResumeClick}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white hover:bg-neutral-200 text-black font-['JetBrains_Mono'] text-xs font-bold transition-all shadow-[0_0_16px_rgba(255,255,255,0.25)] cursor-pointer"
            >
              <span>Resume</span>
              <Download className="w-3.5 h-3.5 text-black" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-[#111217] border border-[#232530] text-neutral-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Sub-bar: Step Ticker & Progress Bar (Desktop & Tablet) */}
      <div className="hidden lg:block border-t border-[#232530] bg-[#0b0c11] px-4 sm:px-6 lg:px-8 py-2">
        <div className="w-full flex items-center justify-between gap-4 font-['JetBrains_Mono'] text-xs">
          
          {/* Left: Step navigation track */}
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider flex-shrink-0">
              STEP 1-7 • CORE
            </span>
            <span className="text-neutral-700">|</span>
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`px-2.5 py-1 rounded text-[11px] transition-colors cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'text-white bg-white/10 font-bold border border-white/20'
                        : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="text-neutral-600 text-[10px]">{item.step}</span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Progress bar track */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="text-[11px] text-neutral-400">Open to Opportunities</span>
            <div className="w-24 h-1.5 bg-[#181920] rounded-full overflow-hidden border border-[#232530]">
              <div className="h-full bg-white rounded-full shadow-[0_0_8px_white]" style={{ width: '100%' }} />
            </div>
            <span className="text-[11px] font-bold text-white">Full-Time / Remote</span>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0e0f14] border-t border-[#232530] px-4 py-4 space-y-3 font-['JetBrains_Mono']">
          <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider px-2">
            STEP 1-7 • PORTFOLIO NAVIGATION
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs transition-all text-left ${
                    isActive
                      ? 'bg-white text-black font-bold'
                      : 'bg-[#14151c] text-neutral-300 hover:text-white border border-[#232530]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className={`text-[10px] ${isActive ? 'text-black/60' : 'text-neutral-500'}`}>
                    {item.step}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#232530] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/MONIKAvv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#14151c] border border-[#232530] flex items-center justify-center text-neutral-300 hover:text-white"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/monika-kumari-031041236/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#14151c] border border-[#232530] flex items-center justify-center text-neutral-300 hover:text-white"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onResumeClick();
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-bold text-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
