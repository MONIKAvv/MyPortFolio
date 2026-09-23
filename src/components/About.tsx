import React, { useState } from 'react';
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
        return <MapPin className="w-5 h-5 text-gray-700" />;
      case 'Mail':
        return <Mail className="w-5 h-5 text-gray-700" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-gray-700" />;
      case 'Languages':
        return <Languages className="w-5 h-5 text-gray-700" />;
      default:
        return <Sparkles className="w-5 h-5 text-gray-700" />;
    }
  };

  return (
    <section id="about" className="pt-8 pb-14 bg-[#f4f5f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gray-900 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bio Narrative */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            {developer.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-700">
                {paragraph}
              </p>
            ))}

            <div className="pt-4">
              <button
                onClick={() => setIsBioModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-medium text-sm sm:text-base transition-colors cursor-pointer"
              >
                <span>More About Me</span>
                <ArrowRight className="w-4 h-4 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Information Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {aboutInfo.map((info) => {
              const isEmail = info.iconName === 'Mail';
              return (
                <div
                  key={info.label}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                    {getInfoIcon(info.iconName)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      {info.label}
                    </p>
                    <p className="text-sm sm:text-base font-medium text-gray-900 truncate">
                      {info.value}
                    </p>
                  </div>
                  {isEmail && (
                    <button
                      onClick={() => handleCopyEmail(info.value)}
                      title="Copy email to clipboard"
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-gray-900" />
                          <span className="text-gray-900 font-semibold">Copied!</span>
                        </>
                      ) : (
                        <span>Copy</span>
                      )}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* More About Me Modal */}
      {isBioModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="relative w-full max-w-2xl bg-white border border-gray-300 rounded-3xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsBioModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-800">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">More About Monika</h3>
                <p className="text-xs text-gray-500">Engineering Philosophy & Background</p>
              </div>
            </div>

            <div className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">
              <div>
                <h4 className="flex items-center gap-2 text-gray-900 font-semibold text-base mb-2">
                  <GraduationCap className="w-4 h-4 text-gray-700" />
                  Background & Foundation
                </h4>
                <p className="text-gray-600">
                  Graduated with a strong technical foundation in computer science and mobile application development. Specialized in cross-platform mobile engineering with Dart & Flutter, complemented with native Android Kotlin concepts.
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-gray-900 font-semibold text-base mb-2">
                  <Award className="w-4 h-4 text-gray-700" />
                  Development Principles
                </h4>
                <p className="text-gray-600">
                  I believe great software balances clean, maintainable architecture with delightful, intuitive UI micro-interactions. From state management patterns like Riverpod/Bloc to offline-first cache strategies, I craft robust mobile solutions.
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-gray-900 font-semibold text-base mb-2">
                  <HeartHandshake className="w-4 h-4 text-gray-700" />
                  Collaboration & Growth
                </h4>
                <p className="text-gray-600">
                  Always excited to collaborate with cross-functional teams, contribute to open-source, and explore emerging AI capabilities (Gemini, LangChain) to create next-generation applications.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setIsBioModalOpen(false)}
                className="px-6 py-2.5 rounded-full bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
