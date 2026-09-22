import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-12 relative overflow-hidden bg-[#080b11]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-left mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experienc<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">e</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            My professional journey
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 space-y-12">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-[11px] sm:left-[19px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500/50 to-indigo-900/20" />

          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative group"
            >
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[29px] sm:-left-[37px] top-1.5 flex items-center justify-center">
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    item.isCurrent
                      ? 'bg-indigo-500 border-white shadow-lg shadow-indigo-500/80 scale-110'
                      : 'bg-[#0f172a] border-indigo-400/60 group-hover:border-indigo-400 group-hover:bg-indigo-600'
                  }`}
                />
              </div>

              {/* Timeline Content Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0e1426]/80 border border-white/[0.07] backdrop-blur-md hover:border-indigo-500/30 hover:bg-[#121a30]/90 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-sm font-semibold text-indigo-400 tracking-wide">
                    {item.period}
                  </span>

                  {item.badge && (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.isCurrent
                          ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                          : 'bg-white/5 text-slate-400 border border-white/10'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-indigo-200 transition-colors">
                  {item.role}
                </h3>

                <p className="text-sm font-medium text-slate-400 mb-3 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-slate-500" />
                  <span>{item.companyOrContext}</span>
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
