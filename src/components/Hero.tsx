import React from 'react';
import { ArrowRight, Download, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolio';

interface HeroProps {
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick }) => {
  const { developer } = portfolioData;

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const metrics = [
    { label: 'Commits & Solves', value: '1,464+', sub: 'Git & LeetCode tracking' },
    { label: 'Shipped Apps', value: '4+', sub: 'Production & Enterprise' },
    { label: 'Dev Experience', value: '1+ Yr', sub: 'Flutter & Kotlin Native' },
    { label: 'System Uptime', value: '99.9%', sub: 'Clean architecture' }
  ];

  return (
    <section
      id="home"
      className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#232530] bg-[#090a0f] overflow-hidden"
    >
      {/* Background ambient radial glow in subtle white */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Column: Text & Terminal Hero */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Terminal Command Prompt Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#111217] border border-[#232530] text-xs font-['JetBrains_Mono'] mb-6">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse" />
              <span className="text-neutral-500">$</span>
              <span className="text-neutral-300">monika --role=</span>
              <span className="text-white font-bold">"Flutter & App Developer"</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-['Syne'] text-4xl sm:text-6xl font-black tracking-tight text-white mb-3 leading-[1.08]">
              {developer.firstName}{' '}
              <span className="text-neutral-300 drop-shadow-[0_0_24px_rgba(255,255,255,0.2)]">
                {developer.lastName}
              </span>
            </h1>

            {/* Role Monospace Subheading */}
            <div className="flex items-center gap-2 text-base sm:text-xl font-['JetBrains_Mono'] font-semibold text-neutral-400 mb-6">
              <span className="text-white">&gt;</span>
              <span>{developer.role}</span>
              <span className="inline-block w-2.5 h-5 bg-white animate-pulse ml-1" />
            </div>

            {/* Bio Summary */}
            <p className="font-['JetBrains_Mono'] text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl mb-8">
              {developer.bioSummary}
            </p>

            {/* Action Buttons in Grey & White */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-200 text-black font-['JetBrains_Mono'] font-bold text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.25)] cursor-pointer"
              >
                <span>View Shipped Projects</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>

              <button
                onClick={onResumeClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#111217] hover:bg-[#181920] text-white font-['JetBrains_Mono'] text-sm font-semibold border border-[#232530] hover:border-white/40 transition-all cursor-pointer"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3">
              <span className="font-['JetBrains_Mono'] text-xs text-neutral-500">connect:</span>
              {portfolioData.socialLinks.map((link) => {
                const getIcon = () => {
                  if (link.icon === 'Github') return <GithubIcon className="w-4 h-4" />;
                  if (link.icon === 'Linkedin') return <LinkedinIcon className="w-4 h-4" />;
                  return <Code2 className="w-4 h-4" />;
                };

                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111217] border border-[#232530] hover:border-white/40 text-neutral-300 hover:text-white font-['JetBrains_Mono'] text-xs transition-colors"
                  >
                    {getIcon()}
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>

          </div>

          {/* Right Column: Monochrome Frame with Avatar & Code Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] rounded-2xl bg-[#111217] border border-[#232530] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_24px_rgba(255,255,255,0.05)] p-3">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#232530] px-2 font-['JetBrains_Mono'] text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-400" />
                </div>
                <span className="text-neutral-500">monika_profile.dart</span>
                <span className="text-white text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/10 border border-white/20">
                  RELEASE
                </span>
              </div>

              {/* Photo Container */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#181920] border border-[#232530]">
                <img
                  src={developer.profileImage}
                  alt={developer.name}
                  className="w-full h-full object-cover object-top filter contrast-[1.05]"
                />
                
                {/* Floating Status Tag in Grey & White */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-[#090a0f]/90 backdrop-blur-md border border-white/20 flex items-center justify-between font-['JetBrains_Mono'] text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_6px_white] animate-pulse" />
                    <span className="text-neutral-300 text-[11px]">Building BrainVault</span>
                  </div>
                  <span className="text-white font-bold text-[10px] px-1.5 py-0.5 rounded bg-white/10">FLUTTER v3.x</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Metrics Bar in Grey & White */}
        <div className="mt-14 pt-8 border-t border-[#232530] grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="p-4 rounded-xl bg-[#111217] border border-[#232530] hover:border-white/30 transition-colors"
            >
              <div className="font-['Syne'] font-extrabold text-2xl sm:text-3xl text-white mb-0.5">
                {m.value}
              </div>
              <p className="font-['JetBrains_Mono'] text-xs font-semibold text-white">
                {m.label}
              </p>
              <p className="font-['JetBrains_Mono'] text-[11px] text-neutral-500 mt-0.5">
                {m.sub}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
