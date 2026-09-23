import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Cloud, Lightbulb, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const WhatIDo: React.FC = () => {
  const { whatIDo } = portfolioData;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#F4F1E9]" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-[#A9A3A6]" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-[#F4F1E9]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#A9A3A6]" />;
      default:
        return <Smartphone className="w-6 h-6 text-[#F4F1E9]" />;
    }
  };

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-[#A9A3A6]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-left mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F1E9] tracking-tight">
            What I{' '}
            <span className="bg-gradient-to-r from-[#F4F1E9] via-[#A9A3A6] to-[#F4F1E9] bg-clip-text text-transparent">
              Do
            </span>
          </h2>
          <p className="text-[#A9A3A6] text-sm sm:text-base mt-2 max-w-2xl">
            I focus on building high-quality mobile applications with clean architecture, beautiful UI and great user experiences.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#A9A3A6] to-[#F4F1E9] rounded-full mt-3" />
        </motion.div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatIDo.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -5,
                borderColor: 'rgba(244, 241, 233, 0.45)',
                backgroundColor: 'rgba(34, 34, 38, 0.95)'
              }}
              className="p-6 rounded-2xl bg-[#19191c]/85 border border-[#A9A3A6]/20 backdrop-blur-md transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="w-12 h-12 rounded-xl bg-[#222226] border border-[#A9A3A6]/25 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#F4F1E9]/40 group-hover:bg-[#2b2b30] transition-all duration-300">
                {renderIcon(item.iconName)}
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#F4F1E9] mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A9A3A6] leading-relaxed group-hover:text-slate-300 transition-colors">
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
