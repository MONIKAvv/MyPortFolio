import React, { useState, useEffect } from 'react';
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
      if (window.scrollY > 20) {
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
      className={`fixed top-0 left-0 right-0 z-50 bg-[#f4f5f7]/95 border-b border-gray-200 ${
        isScrolled ? 'py-3.5' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 text-gray-900 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-white border border-gray-300 flex items-center justify-center text-gray-900">
              <Code2 className="w-5 h-5 text-gray-900" />
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-900">
              Monika
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white p-1 rounded-full border border-gray-200">
            {portfolioData.navigation.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? 'bg-gray-900 text-white font-semibold'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Resume Action Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onResumeClick}
              className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-full transition-colors cursor-pointer border border-gray-900"
            >
              <span>Resume</span>
              <Download className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-5">
          <div className="flex flex-col gap-2">
            {portfolioData.navigation.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-gray-900 text-white font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span>{item.name}</span>
                </a>
              );
            })}

            <div className="pt-3 border-t border-gray-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onResumeClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-gray-900 rounded-xl"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
