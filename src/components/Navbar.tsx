import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Download, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface NavbarProps {
  onResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onResumeClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#111113]/90 backdrop-blur-md border-b border-[#A9A3A6]/20 shadow-lg shadow-black/60'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 text-[#F4F1E9] group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-[#19191c] border border-[#A9A3A6]/35 flex items-center justify-center text-[#F4F1E9] group-hover:border-[#F4F1E9]/60 transition-all duration-300">
              <Code2 className="w-5 h-5 text-[#F4F1E9] group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-[#F4F1E9] group-hover:text-[#A9A3A6] transition-colors">
              Monika
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#19191c]/80 p-1.5 rounded-full border border-[#A9A3A6]/20 backdrop-blur-lg">
            {portfolioData.navigation.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-[#111113] font-semibold'
                      : 'text-[#A9A3A6] hover:text-[#F4F1E9] hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-gradient-to-r from-[#A9A3A6] to-[#F4F1E9] rounded-full shadow-md shadow-[#A9A3A6]/25"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Resume Action Button */}
          <div className="hidden md:flex items-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onResumeClick}
              className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-[#111113] bg-gradient-to-r from-[#A9A3A6] to-[#F4F1E9] rounded-full shadow-lg shadow-[#A9A3A6]/20 hover:brightness-110 transition-all cursor-pointer border border-[#F4F1E9]/30"
            >
              <span>Resume</span>
              <Download className="w-4 h-4 text-[#111113]" />
            </motion.button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#19191c] border border-[#A9A3A6]/30 text-[#F4F1E9] hover:bg-[#222226] transition-all focus:outline-none focus:ring-2 focus:ring-[#A9A3A6]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#111113]/98 border-b border-[#A9A3A6]/20 backdrop-blur-2xl px-6 py-5 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {portfolioData.navigation.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-2.5 rounded-xl text-base font-medium transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-[#A9A3A6]/20 text-[#F4F1E9] border border-[#A9A3A6]/40 font-semibold'
                        : 'text-[#A9A3A6] hover:bg-white/[0.04] hover:text-[#F4F1E9]'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#F4F1E9] shadow-sm shadow-[#F4F1E9]"></span>
                    )}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-[#A9A3A6]/20">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onResumeClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-[#111113] bg-gradient-to-r from-[#A9A3A6] to-[#F4F1E9] rounded-xl shadow-lg shadow-[#A9A3A6]/25"
                >
                  <span>Download Resume</span>
                  <Download className="w-4 h-4 text-[#111113]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
