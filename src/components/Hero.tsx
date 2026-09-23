import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolio';

interface HeroProps {
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick }) => {
  const { developer } = portfolioData;

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-0 pt-32 pb-8 flex items-center justify-center overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#A9A3A6]/12 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#F4F1E9]/8 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#A9A3A6]/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left z-10"
          >
            {/* Greeting Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#19191c]/90 border border-[#A9A3A6]/30 text-[#F4F1E9] text-xs sm:text-sm font-medium mb-6 shadow-sm shadow-black/40 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#F4F1E9] animate-pulse shadow-sm shadow-[#F4F1E9]" />
              <span>{developer.greeting}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F4F1E9] mb-4 leading-[1.1]"
            >
              <span>{developer.firstName} </span>
              <span className="bg-gradient-to-r from-[#F4F1E9] via-[#A9A3A6] to-[#F4F1E9] bg-clip-text text-transparent">
                {developer.lastName}
              </span>
            </motion.h1>

            {/* Role Subheading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#A9A3A6] mb-6"
            >
              {developer.role}
            </motion.h2>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg text-[#A9A3A6] max-w-xl leading-relaxed mb-8"
            >
              {developer.bioSummary}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#A9A3A6] to-[#F4F1E9] text-[#111113] font-semibold text-sm sm:text-base shadow-lg shadow-[#A9A3A6]/20 hover:brightness-110 active:scale-[0.98] transition-all duration-200 border border-[#F4F1E9]/40 group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <button
                onClick={onResumeClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#19191c]/90 hover:bg-[#222226] text-[#F4F1E9] font-medium text-sm sm:text-base border border-[#A9A3A6]/35 hover:border-[#F4F1E9] active:scale-[0.98] transition-all duration-200 backdrop-blur-md cursor-pointer"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4 text-[#A9A3A6]" />
              </button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-3"
            >
              {portfolioData.socialLinks.map((link) => {
                const getIcon = () => {
                  if (link.icon === 'Github') return <GithubIcon className="w-5 h-5" />;
                  if (link.icon === 'Linkedin') return <LinkedinIcon className="w-5 h-5" />;
                  return <Mail className="w-5 h-5" />;
                };

                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-[#19191c] border border-[#A9A3A6]/30 flex items-center justify-center text-[#A9A3A6] hover:text-[#F4F1E9] hover:border-[#F4F1E9]/60 hover:bg-[#222226] transition-colors duration-200"
                  >
                    {getIcon()}
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Ambient Back Glow Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#A9A3A6]/25 via-[#F4F1E9]/15 to-[#A9A3A6]/20 rounded-3xl filter blur-2xl transform scale-95 -z-10 animate-pulse-glow" />

            {/* Main Portrait Card Container */}
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/5] rounded-3xl p-2.5 bg-gradient-to-b from-[#A9A3A6]/30 via-[#F4F1E9]/15 to-transparent border border-[#A9A3A6]/40 backdrop-blur-xl shadow-2xl shadow-black/80 overflow-visible group">

              {/* Inner Frame */}
              <div className="w-full h-full rounded-[1.25rem] overflow-hidden relative bg-[#19191c]">
                <img
                  src={developer.profileImage}
                  alt={developer.name}
                  className="w-full h-full object-cover object-top filter brightness-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Gradient Overlay at the base for seamless blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Handwritten Decorative Card / Note */}
              <motion.div
                initial={{ opacity: 0, x: 20, rotate: 6 }}
                animate={{ opacity: 1, x: 0, rotate: 6 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -top-4 -right-6 sm:-right-8 bg-[#19191c]/95 border border-[#A9A3A6]/40 rounded-2xl px-4 py-3 shadow-xl shadow-black/70 backdrop-blur-md pointer-events-none hidden sm:block animate-float-slow"
              >
                <p className="font-handwriting text-[#F4F1E9] text-xl font-bold leading-tight tracking-wide whitespace-pre-line text-center">
                  {developer.handwrittenDoodleHero}
                  <span className="block text-[#A9A3A6] text-lg mt-0.5">♡</span>
                </p>

                {/* Little Arrow Doodle SVG */}
                <svg
                  className="absolute -bottom-5 left-2 w-8 h-8 text-[#A9A3A6]/90 -rotate-12"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M 6,4 Q 16,18 24,24 M 18,24 L 25,24 L 24,17" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
