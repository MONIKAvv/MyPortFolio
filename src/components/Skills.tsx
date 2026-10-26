import React, { useState } from 'react';
import { GitBranch, Code2, Wrench, Users, Cloud } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Tech', count: skills.length },
    { id: 'core', label: 'Core Mobile & APIs', count: skills.filter(s => s.category === 'core').length },
    { id: 'tools', label: 'Tools & DevOps', count: skills.filter(s => s.category === 'tools').length },
    { id: 'soft', label: 'Engineering Habits', count: skills.filter(s => s.category === 'soft').length }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'Flutter':
        return (
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zm.052 11.23L7.747 17.85l3.699 3.7L21.75 11.23h-7.384zM10.45 20.55l3.414 3.45H21.2l-7.336-7.35-3.414 3.9z" />
          </svg>
        );
      case 'Android':
        return (
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.72 1.23 12.89 1 12 1c-.89 0-1.72.23-2.64.63L7.88.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C6.73 3.3 5.43 5.37 5.21 7.82h13.58c-.22-2.45-1.52-4.52-3.26-5.66zM9 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
          </svg>
        );
      case 'Firebase':
        return (
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.686 16.51L8.03 2.14a.65.65 0 0 1 1.21-.07l2.84 5.38-7.394 9.06zm14.628 0L16.29 4.63a.65.65 0 0 0-1.19-.07l-2.73 5.21 6.944 6.74zM3.44 18.06l.89-1.09 7.03-8.62-4.71-8.9a.652.652 0 0 0-1.22.06L.02 18.33a.64.64 0 0 0 .97.69l2.45-.96zm8.17 3.86a.65.65 0 0 0 .78 0l11.43-6.42a.65.65 0 0 0 .09-1.07l-2.03-1.97-10.27 9.46z" />
          </svg>
        );
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-white" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-white" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-white" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-white" />;
      case 'Users':
        return <Users className="w-5 h-5 text-white" />;
      default:
        return <Code2 className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="skills" className="py-14 px-4 sm:px-6 lg:px-8 border-b border-[#232530] bg-[#090a0f]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading with Monochrome Step Prefix */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-white font-bold tracking-widest uppercase mb-2">
              <span className="px-1.5 py-0.5 rounded bg-white/10 border border-white/20">STEP 02</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-400">CORE ARRAYS</span>
            </div>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tech Stack & Knowledge
            </h2>
            <p className="font-['JetBrains_Mono'] text-xs sm:text-sm text-neutral-400 mt-1.5">
              Languages, native frameworks, cloud platforms and tooling mastered
            </p>
          </div>

          {/* Category Filter Pills in Grey & White */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#111217] p-1 rounded-xl border border-[#232530]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg font-['JetBrains_Mono'] text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-white text-black font-bold shadow-[0_0_12px_rgba(255,255,255,0.3)]'
                    : 'text-neutral-400 hover:text-white hover:bg-[#181920]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                    activeCategory === cat.id
                      ? 'bg-black/20 text-black'
                      : 'bg-[#181920] text-neutral-500'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 8 Skills Grid in Grey & White */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.id}
              className="p-5 rounded-xl bg-[#111217] border border-[#232530] hover:border-white/40 hover:bg-[#181920] transition-all flex flex-col justify-between group cursor-default"
            >
              <div>
                {/* Header: Skill Index & Icon Box */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#181920] border border-[#232530] flex items-center justify-center group-hover:border-white/30 transition-colors">
                    {renderIcon(skill.iconType)}
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[11px] font-semibold text-neutral-500">
                    #0{index + 1}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-['JetBrains_Mono'] text-sm sm:text-base font-bold text-white mb-1.5 group-hover:text-neutral-200 transition-colors">
                  {skill.name}
                </h3>
                <p className="font-['JetBrains_Mono'] text-xs text-neutral-400 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Progress Indicator in Monochrome */}
              <div className="pt-3 border-t border-[#232530] flex items-center justify-between font-['JetBrains_Mono'] text-[11px]">
                <span className="text-neutral-500">Proficiency</span>
                <span className="text-white font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_white]" />
                  Active
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
