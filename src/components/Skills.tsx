import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Code2, Wrench, Users, Cloud } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'Flutter':
        return (
          <svg className="w-7 h-7 text-[#F4F1E9]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zm.052 11.23L7.747 17.85l3.699 3.7L21.75 11.23h-7.384zM10.45 20.55l3.414 3.45H21.2l-7.336-7.35-3.414 3.9z" />
          </svg>
        );
      case 'Android':
        return (
          <svg className="w-7 h-7 text-[#A9A3A6]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.72 1.23 12.89 1 12 1c-.89 0-1.72.23-2.64.63L7.88.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C6.73 3.3 5.43 5.37 5.21 7.82h13.58c-.22-2.45-1.52-4.52-3.26-5.66zM9 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
          </svg>
        );
      case 'Firebase':
        return (
          <svg className="w-7 h-7 text-[#F4F1E9]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.686 16.51L8.03 2.14a.65.65 0 0 1 1.21-.07l2.84 5.38-7.394 9.06zm14.628 0L16.29 4.63a.65.65 0 0 0-1.19-.07l-2.73 5.21 6.944 6.74zM3.44 18.06l.89-1.09 7.03-8.62-4.71-8.9a.652.652 0 0 0-1.22.06L.02 18.33a.64.64 0 0 0 .97.69l2.45-.96zm8.17 3.86a.65.65 0 0 0 .78 0l11.43-6.42a.65.65 0 0 0 .09-1.07l-2.03-1.97-10.27 9.46z" />
          </svg>
        );
      case 'Cloud':
        return <Cloud className="w-7 h-7 text-[#A9A3A6]" />;
      case 'GitBranch':
        return <GitBranch className="w-7 h-7 text-[#F4F1E9]" />;
      case 'Code2':
        return <Code2 className="w-7 h-7 text-[#A9A3A6]" />;
      case 'Wrench':
        return <Wrench className="w-7 h-7 text-[#F4F1E9]" />;
      case 'Users':
        return <Users className="w-7 h-7 text-[#A9A3A6]" />;
      default:
        return <Code2 className="w-7 h-7 text-[#F4F1E9]" />;
    }
  };

  return (
    <section id="skills" className="py-14 relative overflow-hidden bg-[#111113]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#A9A3A6]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-left mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F1E9] tracking-tight">
            Skil<span className="bg-gradient-to-r from-[#F4F1E9] via-[#A9A3A6] to-[#F4F1E9] bg-clip-text text-transparent">ls</span>
          </h2>
          <p className="text-[#A9A3A6] text-sm sm:text-base mt-2">
            Technologies and tools I work with
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#A9A3A6] to-[#F4F1E9] rounded-full mt-3" />
        </motion.div>

        {/* 8 Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              whileHover={{
                y: -6,
                borderColor: 'rgba(244, 241, 233, 0.45)',
                boxShadow: '0 12px 30px -10px rgba(169, 163, 166, 0.2)'
              }}
              className="p-6 rounded-2xl bg-[#19191c]/85 border border-[#A9A3A6]/20 backdrop-blur-md flex flex-col items-start justify-between min-h-[170px] transition-all duration-300 group cursor-default"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-[#222226] border border-[#A9A3A6]/25 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#2b2b30] group-hover:border-[#F4F1E9]/40 transition-all duration-300">
                {renderIcon(skill.iconType)}
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-lg font-bold text-[#F4F1E9] mb-1 group-hover:text-white transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#A9A3A6] leading-relaxed group-hover:text-slate-300 transition-colors">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
