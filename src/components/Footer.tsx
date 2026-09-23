import React from 'react';
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
    <footer className="bg-[#eaedf0] border-t border-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-300">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white border border-gray-300 flex items-center justify-center text-gray-900">
              <Code2 className="w-4 h-4 text-gray-900" />
            </div>
            <span className="text-lg font-bold text-gray-900 tracking-tight">
              {developer.firstName}
            </span>
          </div>

          {/* Tagline */}
          <p className="text-xs sm:text-sm text-gray-600 font-medium text-center">
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
                    className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                  >
                    {getIcon()}
                  </a>
                );
              })}
            </div>

            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
          <p>{footer.copyrightText}</p>
          <p className="text-gray-500">Built with React, TypeScript & Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
};
