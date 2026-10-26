import React from 'react';
import { ArrowUp } from 'lucide-react';
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
    <footer className="bg-[#090a0f] border-t border-[#232530] py-10 px-4 sm:px-6 lg:px-8 font-['JetBrains_Mono'] w-full">
      <div className="w-full">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#232530]">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-['Syne'] font-extrabold text-white text-base">
                {developer.firstName.toUpperCase()}
              </span>
              <span className="font-['Syne'] font-extrabold text-neutral-400 text-base">
                TRACKER
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-white/10 text-white border border-white/20">
                PRO
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xs text-neutral-400 text-center max-w-md">
            {footer.tagline}
          </p>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="w-8 h-8 rounded-lg bg-[#111217] border border-[#232530] flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/40 transition-colors"
                >
                  {link.icon === 'Github' ? <GithubIcon className="w-3.5 h-3.5" /> : <LinkedinIcon className="w-3.5 h-3.5" />}
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="w-8 h-8 rounded-lg bg-[#181920] border border-[#232530] flex items-center justify-center text-neutral-300 hover:text-white hover:border-white/50 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-2">
          <p>© 2026 Monika Kumari • All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-neutral-400">
            <span>Engineering Portfolio</span>
            <span className="text-white font-bold">•</span>
            <span>Developer Tracker</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
