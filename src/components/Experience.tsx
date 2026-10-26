import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-14 px-4 sm:px-6 lg:px-8 border-b border-[#232530] bg-[#090a0f]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading with Monochrome Step Prefix */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-white font-bold tracking-widest uppercase mb-2">
            <span className="px-1.5 py-0.5 rounded bg-white/10 border border-white/20">STEP 05</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400">TIMELINE</span>
          </div>
          <h2 className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Milestones
          </h2>
          <p className="font-['JetBrains_Mono'] text-xs sm:text-sm text-neutral-400 mt-1.5">
            Production software roles, commercial contracts, and key application contributions
          </p>
        </div>

        {/* Timeline Container in Grey & White */}
        <div className="relative pl-6 sm:pl-10 space-y-8">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-[11px] sm:left-[19px] top-3 bottom-3 w-[2px] bg-[#232530]" />

          {experience.map((item) => (
            <div
              key={item.id}
              className="relative group"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[29px] sm:-left-[37px] top-1.5 flex items-center justify-center">
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-all ${
                    item.isCurrent
                      ? 'bg-white border-[#090a0f] ring-4 ring-white/30 shadow-[0_0_12px_rgba(255,255,255,0.7)]'
                      : 'bg-[#181920] border-[#232530] group-hover:border-white/50'
                  }`}
                />
              </div>

              {/* Timeline Content Card in Grey & White */}
              <div className="p-5 sm:p-6 rounded-xl bg-[#111217] border border-[#232530] hover:border-white/40 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-['JetBrains_Mono']">
                  <div className="flex items-center gap-2 text-xs text-white font-bold">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{item.period}</span>
                  </div>

                  {item.badge && (
                    <span
                      className={`px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase ${
                        item.isCurrent
                          ? 'bg-white text-black font-extrabold shadow-[0_0_8px_rgba(255,255,255,0.3)]'
                          : 'bg-[#181920] text-neutral-400 border border-[#232530]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-['Syne'] text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-neutral-200 transition-colors">
                  {item.role}
                </h3>

                <p className="font-['JetBrains_Mono'] text-xs font-semibold text-neutral-400 mb-3 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{item.companyOrContext}</span>
                </p>

                <p className="font-['JetBrains_Mono'] text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
