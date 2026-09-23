import React from 'react';
import { Smartphone, Cloud, Lightbulb, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const WhatIDo: React.FC = () => {
  const { whatIDo } = portfolioData;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-gray-800" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-gray-800" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-gray-800" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-gray-800" />;
      default:
        return <Smartphone className="w-6 h-6 text-gray-800" />;
    }
  };

  return (
    <section className="py-12 bg-[#f4f5f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            What I Do
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-2xl">
            I focus on building high-quality mobile applications with clean architecture, beautiful UI and great user experiences.
          </p>
          <div className="w-12 h-1 bg-gray-900 rounded-full mt-3" />
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatIDo.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-gray-200 flex flex-col justify-between"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center mb-5">
                {renderIcon(item.iconName)}
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
