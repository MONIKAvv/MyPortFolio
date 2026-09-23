import React from 'react';
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
      className="relative min-h-0 pt-32 pb-12 flex items-center justify-center bg-[#f4f5f7]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Greeting Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-300 text-gray-700 text-xs sm:text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-gray-600" />
              <span>{developer.greeting}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-4 leading-[1.1]">
              <span>{developer.firstName} </span>
              <span className="text-gray-700">
                {developer.lastName}
              </span>
            </h1>

            {/* Role Subheading */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 mb-6">
              {developer.role}
            </h2>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed mb-8">
              {developer.bioSummary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm sm:text-base border border-gray-900 transition-colors"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onResumeClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-gray-100 text-gray-800 font-medium text-sm sm:text-base border border-gray-300 transition-colors cursor-pointer"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {portfolioData.socialLinks.map((link) => {
                const getIcon = () => {
                  if (link.icon === 'Github') return <GithubIcon className="w-5 h-5" />;
                  if (link.icon === 'Linkedin') return <LinkedinIcon className="w-5 h-5" />;
                  return <Mail className="w-5 h-5" />;
                };

                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                  >
                    {getIcon()}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Hero Portrait Frame */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Main Portrait Card Container */}
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/5] rounded-3xl p-2.5 bg-white border border-gray-300 overflow-visible">

              {/* Inner Frame */}
              <div className="w-full h-full rounded-[1.25rem] overflow-hidden relative bg-gray-100">
                <img
                  src={developer.profileImage}
                  alt={developer.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Handwritten Decorative Card */}
              <div className="absolute -top-4 -right-6 sm:-right-8 bg-white border border-gray-300 rounded-2xl px-4 py-3 pointer-events-none hidden sm:block">
                <p className="font-handwriting text-gray-800 text-xl font-bold leading-tight tracking-wide whitespace-pre-line text-center">
                  {developer.handwrittenDoodleHero}
                  <span className="block text-gray-600 text-lg mt-0.5">♡</span>
                </p>

                {/* Little Arrow Doodle SVG */}
                <svg
                  className="absolute -bottom-5 left-2 w-8 h-8 text-gray-500 -rotate-12"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M 6,4 Q 16,18 24,24 M 18,24 L 25,24 L 24,17" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
