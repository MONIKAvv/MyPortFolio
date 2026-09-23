import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolio';

export const Footer: React.FC = () => {
  const { footer, socialLinks, developer } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[#0d0d0f] border-t border-[#A9A3A6]/20 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#A9A3A6]/15">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#19191c] border border-[#A9A3A6]/30 flex items-center justify-center text-[#F4F1E9]">
              <Code2 className="w-4 h-4 text-[#F4F1E9]" />
            </div>
            <span className="text-lg font-bold text-[#F4F1E9] tracking-tight">
              {developer.firstName}
            </span>
          </div>

          {/* Tagline */}
          <p className="text-xs sm:text-sm text-[#A9A3A6] font-medium text-center">
            {footer.tagline}
          </p>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5">
              {socialLinks.map((link) => {
                const getIcon = () => {
                  if (link.icon === 'Github') return <GithubIcon className="w-4 h-4" />;
                  if (link.icon === 'Linkedin') return <LinkedinIcon className="w-4 h-4" />;
                  return <Mail className="w-4 h-4" />;
                };

                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="w-8 h-8 rounded-full bg-[#19191c] border border-[#A9A3A6]/25 flex items-center justify-center text-[#A9A3A6] hover:text-[#F4F1E9] hover:border-[#F4F1E9]/50 hover:bg-[#222226] transition-all"
                  >
                    {getIcon()}
                  </a>
                );
              })}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              title="Back to Top"
              className="w-8 h-8 rounded-full bg-[#19191c] border border-[#A9A3A6]/35 flex items-center justify-center text-[#F4F1E9] hover:bg-[#F4F1E9] hover:text-[#111113] hover:border-[#F4F1E9] transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A9A3A6]/70 gap-2">
          <p>{footer.copyrightText}</p>
          <p className="text-[#A9A3A6]/50">Built with React, TypeScript & Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
};
