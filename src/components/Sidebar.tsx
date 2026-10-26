import React from 'react';
import { Download, Mail, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolio';

interface SidebarProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  onResumeClick: () => void;
  isMobile?: boolean;
  onCloseMobile?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onSectionClick,
  onResumeClick,
  isMobile = false,
  onCloseMobile
}) => {
  const { developer } = portfolioData;

  const coreNavItems = [
    { id: 'home', label: 'Learn the Basics', emoji: '🧮', count: '01' },
    { id: 'about', label: 'Developer Bio', emoji: '👤', count: '02' },
    { id: 'skills', label: 'Core Arrays & Tech', emoji: '📦', count: '08' },
    { id: 'what-i-do', label: 'Architecture & Apps', emoji: '⚡', count: '04' },
    { id: 'projects', label: 'Shipped Projects', emoji: '🚀', count: '04' },
    { id: 'experience', label: 'Career Timeline', emoji: '🥞', count: '04' },
    { id: 'contact', label: 'Connect & Hire', emoji: '📬', count: '01' }
  ];

  const specializationItems = [
    { id: 'skills', label: 'Flutter & Dart', emoji: '💙', count: 'PRO', filter: 'flutter' },
    { id: 'skills', label: 'Android / Kotlin', emoji: '🤖', count: 'NATIVE', filter: 'android' },
    { id: 'skills', label: 'Firebase & Cloud', emoji: '🔥', count: 'SYNC', filter: 'firebase' },
    { id: 'skills', label: 'REST APIs & Systems', emoji: '🔗', count: 'API', filter: 'rest' }
  ];

  const handleItemClick = (id: string) => {
    onSectionClick(id);
    if (isMobile && onCloseMobile) {
      onCloseMobile();
    }
  };

  return (
    <aside className="w-full h-full flex flex-col bg-[#080b10] text-[#dde3f0] select-none">
      {/* Top Header / Branding */}
      <div className="p-5 border-b border-[#1c2333]">
        <div className="flex items-center gap-3 mb-2">
          {/* Neon Cyan Layered Logo Icon */}
          <div className="w-10 h-10 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/40 flex items-center justify-center text-[#00e5ff] shadow-[0_0_16px_rgba(0,229,255,0.25)] flex-shrink-0">
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

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-['Syne'] font-extrabold text-sm sm:text-base tracking-tight text-white">
                {developer.firstName.toUpperCase()}
              </span>
              <span className="font-['Syne'] font-extrabold text-sm sm:text-base tracking-tight text-[#00e5ff]">
                TRACKER
              </span>
              <span className="font-['JetBrains_Mono'] text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#00e5ff]/15 text-[#00e5ff] border border-[#00e5ff]/40 tracking-wider">
                PRO
              </span>
            </div>
            <p className="font-['JetBrains_Mono'] text-[10px] sm:text-[11px] text-[#9ea5b1] tracking-tight mt-0.5 truncate">
              Flutter + Native App Dev • 4 Projects
            </p>
          </div>
        </div>

        {/* Progress Tracker Widget */}
        <div className="mt-4 pt-3 border-t border-[#1c2333]/80">
          <div className="flex items-center justify-between font-['JetBrains_Mono'] text-xs mb-1.5">
            <span className="text-[#dde3f0] font-medium">Readiness</span>
            <span className="text-[#00e5ff] font-bold">100%</span>
          </div>
          <div className="w-full h-1.5 bg-[#141923] rounded-full overflow-hidden relative">
            <div
              className="h-full bg-[#00e5ff] rounded-full relative"
              style={{ width: '100%' }}
            >
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#00e5ff]" />
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] font-['JetBrains_Mono'] text-[#9ea5b1] mt-1.5">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e676] animate-pulse" />
              Open to Opportunities
            </span>
            <span className="text-[#00e5ff]">Full-Time / Remote</span>
          </div>
        </div>
      </div>

      {/* Navigation Scrollable Body */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {/* Core Steps Section */}
        <div>
          <div className="px-3 mb-2 font-['JetBrains_Mono'] text-[11px] font-bold tracking-wider text-[#64748b] uppercase">
            STEP 1-7 • PORTFOLIO CORE
          </div>
          <div className="space-y-0.5">
            {coreNavItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-['JetBrains_Mono'] transition-all cursor-pointer text-left ${
                    isActive
                      ? 'bg-[#00e5ff]/10 text-[#00e5ff] font-bold border border-[#00e5ff]/30 shadow-[0_0_12px_rgba(0,229,255,0.15)]'
                      : 'text-[#dde3f0] hover:bg-[#141923] hover:text-[#00e5ff]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className="text-sm">{item.emoji}</span>
                    <span className="truncate">{item.label}</span>
                  </div>
                  <span
                    className={`text-[11px] font-['JetBrains_Mono'] px-1.5 py-0.5 rounded ${
                      isActive
                        ? 'bg-[#00e5ff]/20 text-[#00e5ff]'
                        : 'text-[#9ea5b1] bg-[#141923]'
                    }`}
                  >
                    {item.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Specialization Section */}
        <div>
          <div className="px-3 mb-2 font-['JetBrains_Mono'] text-[11px] font-bold tracking-wider text-[#64748b] uppercase">
            STEP 8-11 • CORE STACK
          </div>
          <div className="space-y-0.5">
            {specializationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleItemClick(item.id)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-['JetBrains_Mono'] text-[#dde3f0] hover:bg-[#141923] hover:text-[#00e5ff] transition-all cursor-pointer text-left"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span className="text-sm">{item.emoji}</span>
                  <span className="truncate">{item.label}</span>
                </div>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#141923] text-[#9ea5b1] border border-[#1c2333]">
                  {item.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Sheet Link Badge */}
        <div className="mx-2 p-3 rounded-xl bg-[#0e1117] border border-[#1c2333] hover:border-[#00e5ff]/40 transition-colors">
          <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#00e5ff] font-bold mb-1">
            <Terminal className="w-3.5 h-3.5" />
            <span>Developer Specs</span>
          </div>
          <p className="font-['JetBrains_Mono'] text-[11px] text-[#9ea5b1] leading-relaxed">
            Clean MVVM architecture, Riverpod, BLoC, native channels, and CI/CD pipelines.
          </p>
        </div>
      </div>

      {/* Sidebar Footer Actions */}
      <div className="p-4 border-t border-[#1c2333] bg-[#0b0f17] space-y-3">
        {/* Resume Button */}
        <button
          onClick={onResumeClick}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#00e5ff]/10 hover:bg-[#00e5ff]/20 text-[#00e5ff] border border-[#00e5ff]/40 font-['JetBrains_Mono'] text-xs font-bold tracking-wide transition-all shadow-[0_0_12px_rgba(0,229,255,0.15)] cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          <span>DOWNLOAD RESUME</span>
        </button>

        {/* Social Icons Row */}
        <div className="flex items-center justify-center gap-2 pt-1">
          {portfolioData.socialLinks.map((link) => {
            const getIcon = () => {
              if (link.icon === 'Github') return <GithubIcon className="w-3.5 h-3.5" />;
              if (link.icon === 'Linkedin') return <LinkedinIcon className="w-3.5 h-3.5" />;
              return <Mail className="w-3.5 h-3.5" />;
            };

            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="w-8 h-8 rounded-lg bg-[#141923] border border-[#1c2333] flex items-center justify-center text-[#9ea5b1] hover:text-[#00e5ff] hover:border-[#00e5ff]/40 transition-colors"
              >
                {getIcon()}
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
