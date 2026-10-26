import React from 'react';
import { Smartphone, Cloud, Lightbulb, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const WhatIDo: React.FC = () => {
  const { whatIDo } = portfolioData;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-white" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-white" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-white" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-white" />;
      default:
        return <Smartphone className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="what-i-do" className="py-14 px-4 sm:px-6 lg:px-8 border-b border-[#232530] bg-[#090a0f]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading with Step Prefix */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-white font-bold tracking-widest uppercase mb-2">
            <span className="px-1.5 py-0.5 rounded bg-white/10 border border-white/20">STEP 03</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400">CAPABILITIES</span>
          </div>
          <h2 className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Competencies
          </h2>
          <p className="font-['JetBrains_Mono'] text-xs sm:text-sm text-neutral-400 mt-1.5">
            End-to-end mobile development from UX prototyping to multi-platform app store deployment
          </p>
        </div>

        {/* 4 Feature Cards in Grey & White */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whatIDo.map((item, index) => (
            <div
              key={item.id}
              className="p-5 rounded-xl bg-[#111217] border border-[#232530] hover:border-white/40 hover:bg-[#181920] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#181920] border border-[#232530] flex items-center justify-center">
                    {renderIcon(item.iconName)}
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-neutral-500 uppercase tracking-wider font-bold">
                    MODULE 0{index + 1}
                  </span>
                </div>

                <h3 className="font-['JetBrains_Mono'] text-sm sm:text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-['JetBrains_Mono'] text-xs text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#232530] flex items-center gap-1.5 text-[11px] font-['JetBrains_Mono'] text-neutral-400">
                <span>Status:</span>
                <span className="text-white font-bold">Production Ready</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
