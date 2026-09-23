import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-14 relative overflow-hidden bg-[#111113]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#A9A3A6]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-left mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F1E9] tracking-tight">
            Experienc<span className="bg-gradient-to-r from-[#F4F1E9] via-[#A9A3A6] to-[#F4F1E9] bg-clip-text text-transparent">e</span>
          </h2>
          <p className="text-[#A9A3A6] text-sm sm:text-base mt-2">
            My professional journey
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#A9A3A6] to-[#F4F1E9] rounded-full mt-3" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 space-y-12">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-[11px] sm:left-[19px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#A9A3A6] via-[#F4F1E9]/40 to-[#A9A3A6]/20" />

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
                      ? 'bg-[#F4F1E9] border-[#111113] shadow-lg shadow-[#F4F1E9]/60 scale-110'
                      : 'bg-[#19191c] border-[#A9A3A6]/60 group-hover:border-[#F4F1E9] group-hover:bg-[#F4F1E9]'
                  }`}
                />
              </div>

              {/* Timeline Content Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#19191c]/85 border border-[#A9A3A6]/20 backdrop-blur-md hover:border-[#F4F1E9]/45 hover:bg-[#222226] transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-sm font-semibold text-[#F4F1E9] tracking-wide">
                    {item.period}
                  </span>

                  {item.badge && (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.isCurrent
                          ? 'bg-[#A9A3A6]/20 text-[#F4F1E9] border border-[#A9A3A6]/35'
                          : 'bg-white/5 text-[#A9A3A6] border border-white/10'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#F4F1E9] mb-1 group-hover:text-white transition-colors">
                  {item.role}
                </h3>

                <p className="text-sm font-medium text-[#A9A3A6] mb-3 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-[#F4F1E9]" />
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
