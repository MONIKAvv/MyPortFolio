import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Briefcase, Languages, ArrowRight, Check, X, Sparkles, Award, GraduationCap, HeartHandshake } from 'lucide-react';
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
        return <MapPin className="w-5 h-5 text-[#F4F1E9]" />;
      case 'Mail':
        return <Mail className="w-5 h-5 text-[#A9A3A6]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#F4F1E9]" />;
      case 'Languages':
        return <Languages className="w-5 h-5 text-[#A9A3A6]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#F4F1E9]" />;
    }
  };

  return (
    <section id="about" className="pt-8 pb-14 relative overflow-hidden">
      {/* Subtle Glow Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#A9A3A6]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F1E9] tracking-tight">
            About{' '}
            <span className="bg-gradient-to-r from-[#F4F1E9] via-[#A9A3A6] to-[#F4F1E9] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#A9A3A6] to-[#F4F1E9] rounded-full mt-3" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-6 text-[#A9A3A6] text-base sm:text-lg leading-relaxed"
          >
            {developer.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-300">
                {paragraph}
              </p>
            ))}

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsBioModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#19191c] hover:bg-[#222226] border border-[#A9A3A6]/35 text-[#F4F1E9] hover:border-[#F4F1E9] font-medium text-sm sm:text-base transition-all duration-200 group cursor-pointer shadow-md shadow-black/50"
              >
                <span>More About Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#F4F1E9]" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: 4 Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {aboutInfo.map((info, index) => {
              const isEmail = info.iconName === 'Mail';
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -2, borderColor: 'rgba(244, 241, 233, 0.4)' }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#19191c]/85 border border-[#A9A3A6]/20 backdrop-blur-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#222226] border border-[#A9A3A6]/25 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-[#2b2b30] transition-all">
                    {getInfoIcon(info.iconName)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#A9A3A6]">
                      {info.label}
                    </p>
                    <p className="text-sm sm:text-base font-medium text-[#F4F1E9] truncate group-hover:text-white transition-colors">
                      {info.value}
                    </p>
                  </div>
                  {isEmail && (
                    <button
                      onClick={() => handleCopyEmail(info.value)}
                      title="Copy email to clipboard"
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[#A9A3A6]/15 hover:bg-[#A9A3A6]/30 text-[#F4F1E9] border border-[#A9A3A6]/30 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#F4F1E9]" />
                          <span className="text-[#F4F1E9] font-semibold">Copied!</span>
                        </>
                      ) : (
                        <span>Copy</span>
                      )}
                    </button>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>

      {/* More About Me Modal */}
      <AnimatePresence>
        {isBioModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#161619] border border-[#A9A3A6]/35 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/90 max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsBioModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#A9A3A6] hover:text-[#F4F1E9] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#222226] border border-[#A9A3A6]/30 flex items-center justify-center text-[#F4F1E9]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#F4F1E9]">More About Monika</h3>
                  <p className="text-xs text-[#A9A3A6]">Engineering Philosophy & Background</p>
                </div>
              </div>

              <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
                <div>
                  <h4 className="flex items-center gap-2 text-[#F4F1E9] font-semibold text-base mb-2">
                    <GraduationCap className="w-4 h-4 text-[#A9A3A6]" />
                    Background & Foundation
                  </h4>
                  <p className="text-[#A9A3A6]">
                    Graduated with a strong technical foundation in computer science and mobile application development. Specialized in cross-platform mobile engineering with Dart & Flutter, complemented with native Android Kotlin concepts.
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-[#F4F1E9] font-semibold text-base mb-2">
                    <Award className="w-4 h-4 text-[#F4F1E9]" />
                    Development Principles
                  </h4>
                  <p className="text-[#A9A3A6]">
                    I believe great software balances clean, maintainable architecture with delightful, intuitive UI micro-interactions. From state management patterns like Riverpod/Bloc to offline-first cache strategies, I craft robust mobile solutions.
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-[#F4F1E9] font-semibold text-base mb-2">
                    <HeartHandshake className="w-4 h-4 text-[#A9A3A6]" />
                    Collaboration & Growth
                  </h4>
                  <p className="text-[#A9A3A6]">
                    Always excited to collaborate with cross-functional teams, contribute to open-source, and explore emerging AI capabilities (Gemini, LangChain) to create next-generation applications.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#A9A3A6]/20 flex justify-end">
                <button
                  onClick={() => setIsBioModalOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#A9A3A6] to-[#F4F1E9] text-[#111113] font-semibold text-sm shadow-md hover:brightness-110 transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
