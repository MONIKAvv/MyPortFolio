import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ExternalLink, ArrowRight, Lock, Info, X, LayoutGrid, List, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolio';
import { ProjectModal } from './ProjectModal';
import type { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'tracker' | 'cards'>('tracker');

  // Scroll Progress for Sketch Animation
  const tableRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!tableRef.current) return;
      const rect = tableRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress from when the top of table enters view to when bottom reaches center
      const start = windowHeight * 0.75;
      const end = windowHeight * 0.25;
      const total = rect.height + (start - end);
      const current = start - rect.top;
      const progress = Math.min(Math.max(current / total, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showPrivateToast = (message?: string) => {
    setToastMessage(
      message || 'This is a private enterprise project and cannot be publicly shared.'
    );
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const trackerRows = [
    {
      step: '01',
      title: 'BrainVault: Contextual AI Note Vault',
      sub: 'Google Gemini LLM document summaries & semantic search',
      tech: ['Flutter', 'Firebase', 'Gemini AI'],
      status: 'Live Release',
      projectId: 'brainvault'
    },
    {
      step: '02',
      title: 'BrainVault: Reactive Cloud Firestore Sync',
      sub: 'Riverpod state management & offline-first local cache',
      tech: ['Riverpod', 'Firestore', 'Dart'],
      status: 'Verified',
      projectId: 'brainvault'
    },
    {
      step: '03',
      title: 'Insightse: Biometric & Multi-Class Attendance',
      sub: 'Real-time student and staff check-ins with PDF reports',
      tech: ['Flutter', 'REST APIs', 'JWT'],
      status: 'Enterprise',
      projectId: 'insightse',
      isPrivate: true
    },
    {
      step: '04',
      title: 'Insightse: School Fee Dashboard & Accounting',
      sub: 'Multi-term fee schedules and instant receipt generation',
      tech: ['Flutter', 'Dart', 'Security'],
      status: 'Enterprise',
      projectId: 'insightse',
      isPrivate: true
    },
    {
      step: '05',
      title: 'Stella Polaris: Room Booking & Conflict Matrix',
      sub: 'Real-time schedule calendar with auto availability detection',
      tech: ['Frappe', 'JavaScript', 'ERPNext'],
      status: 'Production',
      projectId: 'stella-polaris',
      isPrivate: true
    },
    {
      step: '06',
      title: 'Stella Polaris: Sales Invoice Automated Reconciliation',
      sub: 'Multi-currency invoicing with custom Frappe DocTypes',
      tech: ['ERPNext', 'Python API', 'Frappe'],
      status: 'Production',
      projectId: 'stella-polaris',
      isPrivate: true
    },
    {
      step: '07',
      title: 'FunMate: Gamified Reward-Based Learning',
      sub: 'Progress tracking, badge unlocks and real-time quiz engine',
      tech: ['Mobile UI', 'Gamification', 'REST'],
      status: 'Completed',
      projectId: 'funmate'
    }
  ];

  return (
    <section id="projects" className="py-14 px-4 sm:px-6 lg:px-8 border-b border-[#232530] bg-[#090a0f]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header with Step Prefix & View Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-white font-bold tracking-widest uppercase mb-2">
              <span className="px-1.5 py-0.5 rounded bg-white/10 border border-white/20">STEP 04</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-400">INTERACTIVE TRACKER</span>
            </div>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Shipped Applications & Sheets
            </h2>
            <p className="font-['JetBrains_Mono'] text-xs sm:text-sm text-neutral-400 mt-1.5">
              Production mobile applications, architectural modules, and live deployments
            </p>
          </div>

          {/* View Mode Toggle in Grey & White */}
          <div className="flex items-center gap-2 bg-[#111217] p-1 rounded-xl border border-[#232530]">
            <button
              onClick={() => setViewMode('tracker')}
              className={`px-3 py-1.5 rounded-lg font-['JetBrains_Mono'] text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'tracker'
                  ? 'bg-white text-black font-bold shadow-[0_0_12px_rgba(255,255,255,0.3)]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>Tracker Sheet</span>
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 rounded-lg font-['JetBrains_Mono'] text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'cards'
                  ? 'bg-white text-black font-bold shadow-[0_0_12px_rgba(255,255,255,0.3)]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Visual Cards</span>
            </button>
          </div>
        </div>

        {/* TRACKER VIEW: Scroll-Driven Sketch Animation in place of #24, 25 */}
        {viewMode === 'tracker' && (
          <div
            ref={tableRef}
            className="rounded-2xl bg-[#111217] border border-[#232530] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative"
          >
            {/* Tracker Table Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-[#232530] bg-[#0c0d12] font-['JetBrains_Mono'] text-xs text-neutral-500">
              <div className="flex items-center gap-4 sm:gap-6">
                {/* Sketch Flow Header */}
                <div className="w-14 sm:w-16 flex items-center justify-center gap-1 text-white font-bold tracking-wider text-[11px]">
                  <Sparkles className="w-3 h-3 text-white" />
                  <span>FLOW</span>
                </div>
                <span>MODULE / APPLICATION TITLE</span>
              </div>
              <div className="hidden sm:flex items-center gap-4">
                <span>TECH STACK</span>
                <span className="w-24 text-right">STATUS</span>
              </div>
            </div>

            {/* Tracker Rows Container with Scroll-Driven Sketch Path */}
            <div className="relative divide-y divide-[#232530]">
              
              {/* Background Guide Sketch Line */}
              <div
                className="absolute left-[33px] sm:left-[39px] top-6 bottom-6 w-[2px] bg-[#232530] pointer-events-none z-0"
              />

              {/* Animated Foreground Sketch Line (draws from top to bottom & bottom to top based on scroll) */}
              <div
                className="absolute left-[33px] sm:left-[39px] top-6 w-[2px] bg-gradient-to-b from-white via-white to-neutral-400 shadow-[0_0_8px_white] pointer-events-none z-10 transition-all duration-75 ease-out"
                style={{
                  height: `calc(${scrollProgress * 100}% - 48px)`,
                  maxHeight: 'calc(100% - 48px)',
                  minHeight: scrollProgress > 0 ? '4px' : '0px'
                }}
              />

              {/* Glowing Sketch Drawing Spark (moves dynamically with scroll) */}
              {scrollProgress > 0 && scrollProgress < 1 && (
                <div
                  className="absolute left-[34px] sm:left-[40px] pointer-events-none z-20 animate-sketch-spark"
                  style={{
                    top: `calc(${scrollProgress * 100}%)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_white]" />
                </div>
              )}

              {/* Table Rows */}
              {trackerRows.map((row, idx) => {
                const matchedProject = projects.find(p => p.id === row.projectId) || projects[0];
                const threshold = (idx + 0.3) / trackerRows.length;
                const isSketched = scrollProgress >= threshold;

                return (
                  <div
                    key={row.step}
                    onClick={() => setSelectedProject(matchedProject)}
                    className="flex items-center justify-between px-5 py-4 hover:bg-[#181920] transition-colors cursor-pointer group relative z-10"
                  >
                    {/* Left: Interactive Sketch Node & Title */}
                    <div className="flex items-start sm:items-center gap-4 sm:gap-6 min-w-0 flex-1">
                      
                      {/* Sketch Node (Replaces # 24 25) */}
                      <div className="w-14 sm:w-16 flex items-center justify-center flex-shrink-0">
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-['JetBrains_Mono'] text-[11px] font-bold transition-all duration-300 relative z-20 ${
                            isSketched
                              ? 'bg-white text-black ring-4 ring-white/25 shadow-[0_0_12px_rgba(255,255,255,0.7)] scale-105'
                              : 'bg-[#111217] text-neutral-400 border border-[#232530] group-hover:border-white/50 group-hover:text-white'
                          }`}
                        >
                          {row.step}
                        </div>
                      </div>

                      {/* Title & Subtitle with Hand-drawn Sketch Underline on Hover */}
                      <div className="min-w-0 pr-4">
                        <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-xs sm:text-sm font-semibold text-white group-hover:text-white transition-colors relative">
                          <span className="truncate">{row.title}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                        
                        {/* Animated Doodle Sketch SVG line on hover */}
                        <div className="overflow-hidden h-1 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-32 h-1 text-white" viewBox="0 0 100 4" fill="none">
                            <path
                              d="M 0,2 Q 25,0 50,3 T 100,2"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>

                        <p className="font-['JetBrains_Mono'] text-[11px] sm:text-xs text-neutral-400 mt-0.5 truncate">
                          {row.sub}
                        </p>
                      </div>
                    </div>

                    {/* Right: Tech Stack Pills & Status */}
                    <div className="hidden sm:flex items-center gap-4 flex-shrink-0">
                      <div className="flex items-center gap-1.5">
                        {row.tech.map((t) => (
                          <span
                            key={t}
                            className="font-['JetBrains_Mono'] text-[10px] px-2 py-0.5 rounded bg-[#181920] border border-[#232530] text-neutral-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="w-24 text-right">
                        <span
                          className={`font-['JetBrains_Mono'] text-[10px] font-bold px-2 py-0.5 rounded transition-colors ${
                            row.isPrivate
                              ? 'bg-neutral-800 text-neutral-400 border border-neutral-700'
                              : isSketched
                              ? 'bg-white text-black font-bold shadow-[0_0_8px_rgba(255,255,255,0.3)]'
                              : 'bg-white/10 text-white border border-white/20'
                          }`}
                        >
                          {row.status}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Table Summary */}
            <div className="px-5 py-3 border-t border-[#232530] bg-[#0c0d12] flex items-center justify-between font-['JetBrains_Mono'] text-xs text-neutral-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_6px_white] animate-pulse" />
                Scroll down & up to trace the interactive sketch pipeline
              </span>
              <a
                href="https://github.com/MONIKAvv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline flex items-center gap-1 font-semibold"
              >
                <span>View Full GitHub Repository</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* VISUAL CARDS VIEW in Grey & White */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="rounded-2xl bg-[#111217] border border-[#232530] hover:border-white/40 transition-all overflow-hidden flex flex-col cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#181920] p-2">
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter contrast-[1.05]"
                    />
                    
                    {/* Index Badge */}
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded font-['JetBrains_Mono'] text-[10px] font-bold bg-[#090a0f]/90 text-white border border-white/30">
                      STEP 0{idx + 1}
                    </div>

                    {project.isPrivate && (
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded font-['JetBrains_Mono'] text-[10px] font-bold bg-[#090a0f]/90 text-neutral-300 border border-neutral-700 flex items-center gap-1">
                        <Lock className="w-3 h-3 text-neutral-400" />
                        <span>PRIVATE</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-['Syne'] text-lg font-bold text-white group-hover:text-neutral-200 transition-colors">
                        {project.title}
                      </h3>
                      <div className="w-7 h-7 rounded-lg bg-[#181920] border border-[#232530] flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-white/40 transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <p className="font-['JetBrains_Mono'] text-xs text-neutral-400 leading-relaxed line-clamp-3 mb-4">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-['JetBrains_Mono'] text-[10px] px-2 py-0.5 rounded bg-[#181920] text-neutral-300 border border-[#232530]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-3 border-t border-[#232530] font-['JetBrains_Mono'] text-xs">
                      {project.isPrivate ? (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            showPrivateToast(project.privateMessage);
                          }}
                          className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white"
                        >
                          <Lock className="w-3 h-3 text-neutral-500" />
                          <span>Confidential</span>
                        </button>
                      ) : (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Repository</span>
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="inline-flex items-center gap-1 text-white font-semibold hover:underline"
                      >
                        <span>Specifications</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onPrivateToast={showPrivateToast}
      />

      {/* Toast Notification in Grey & White */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-xl bg-[#111217] text-white border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.9),0_0_20px_rgba(255,255,255,0.1)] max-w-md w-[90%] font-['JetBrains_Mono']">
          <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
            <Info className="w-4 h-4" />
          </div>
          <p className="text-xs leading-tight flex-1 text-neutral-300">
            {toastMessage}
          </p>
          <button
            onClick={() => setToastMessage(null)}
            className="text-neutral-400 hover:text-white transition-colors p-1"
            aria-label="Dismiss toast"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </section>
  );
};
