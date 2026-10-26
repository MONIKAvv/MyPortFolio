import React, { useState } from 'react';
import { MapPin, Mail, Briefcase, Languages, ArrowRight, Check, X, Sparkles, GraduationCap, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const About: React.FC = () => {
  const { developer, aboutInfo } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getInfoIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-4 h-4 text-white" />;
      case 'Mail':
        return <Mail className="w-4 h-4 text-white" />;
      case 'Briefcase':
        return <Briefcase className="w-4 h-4 text-white" />;
      case 'Languages':
        return <Languages className="w-4 h-4 text-white" />;
      default:
        return <Sparkles className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section id="about" className="py-14 px-4 sm:px-6 lg:px-8 border-b border-[#232530] bg-[#090a0f]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Monochrome Step Prefix */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-white font-bold tracking-widest uppercase mb-2">
            <span className="px-1.5 py-0.5 rounded bg-white/10 border border-white/20">STEP 01</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400">BACKGROUND</span>
          </div>
          <h2 className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Developer
          </h2>
          <p className="font-['JetBrains_Mono'] text-xs sm:text-sm text-neutral-400 mt-1.5">
            Full-stack mobile problem solver with a drive for high-impact applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bio Narrative in Grey & White Panel */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-[#111217] border border-[#232530] space-y-5">
            <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-neutral-500 pb-3 border-b border-[#232530]">
              <Terminal className="w-3.5 h-3.5 text-white" />
              <span>bio_summary.md</span>
            </div>

            {developer.aboutParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="font-['JetBrains_Mono'] text-xs sm:text-sm text-neutral-300 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-2">
              <button
                onClick={() => setIsBioModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#181920] hover:bg-[#20212b] text-white border border-[#232530] hover:border-white/40 font-['JetBrains_Mono'] text-xs font-semibold transition-all cursor-pointer shadow-[0_0_12px_rgba(255,255,255,0.05)]"
              >
                <span>Read Extended Bio</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Information Cards in Grey & White */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {aboutInfo.map((info) => {
              const isEmail = info.iconName === 'Mail';
              return (
                <div
                  key={info.label}
                  className="flex items-center justify-between p-4 rounded-xl bg-[#111217] border border-[#232530] hover:border-white/30 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-[#181920] border border-[#232530] flex items-center justify-center flex-shrink-0">
                      {getInfoIcon(info.iconName)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                        {info.label}
                      </p>
                      <p className="font-['JetBrains_Mono'] text-xs sm:text-sm font-semibold text-white truncate">
                        {info.value}
                      </p>
                    </div>
                  </div>

                  {isEmail && (
                    <button
                      onClick={() => handleCopyEmail(info.value)}
                      title="Copy email to clipboard"
                      className="px-2.5 py-1 text-xs font-['JetBrains_Mono'] rounded bg-[#181920] hover:bg-[#232530] text-white border border-[#232530] transition-colors flex items-center gap-1 cursor-pointer flex-shrink-0 ml-2"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3 h-3 text-white" />
                          <span className="text-white font-semibold text-[11px]">Copied</span>
                        </>
                      ) : (
                        <span className="text-[11px] text-neutral-300">Copy</span>
                      )}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Extended Bio Modal in Grey & White */}
      {isBioModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#181920] to-[#111217] border border-white/25 rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-[0_24px_50px_#000000d9,0_0_24px_rgba(255,255,255,0.08)]">
            {/* Close Button */}
            <button
              onClick={() => setIsBioModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#181920] hover:bg-[#232530] text-neutral-400 hover:text-white transition-colors cursor-pointer border border-[#232530]"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2.5 font-['JetBrains_Mono'] text-xs text-white font-bold uppercase mb-2">
              <Sparkles className="w-4 h-4 text-white" />
              <span>Full Profile Narrative</span>
            </div>

            <h3 className="font-['Syne'] text-2xl font-bold text-white mb-6">
              Engineering Mindset & Ambition
            </h3>

            <div className="space-y-4 font-['JetBrains_Mono'] text-xs sm:text-sm text-neutral-300 leading-relaxed">
              <p>
                My journey began with a curiosity for mobile development and solving real problems through software. Starting with native Android (Kotlin), I quickly realized the immense velocity and design expressiveness offered by the Flutter framework.
              </p>
              <p>
                In my professional and personal work, I have spearheaded apps like <strong className="text-white">BrainVault</strong>, combining Google Gemini LLM with offline-first Cloud Firestore, as well as institutional systems like <strong className="text-white">Insightse</strong> and enterprise modules under <strong className="text-white">Stella Polaris (ERPNext)</strong>.
              </p>
              <div className="p-4 rounded-xl bg-[#090a0f] border border-[#232530] space-y-2 mt-4">
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>Continuous Development & Problem Solving</span>
                </div>
                <p className="text-neutral-400 text-xs">
                  Constantly studying algorithmic structures, system architecture, state management patterns (Riverpod, BLoC), and exploring international remote software roles.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#232530] flex justify-end">
              <button
                onClick={() => setIsBioModalOpen(false)}
                className="px-5 py-2 rounded-lg bg-white hover:bg-neutral-200 text-black font-['JetBrains_Mono'] text-xs font-bold transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
