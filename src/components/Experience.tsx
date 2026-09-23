import React from 'react';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-14 bg-[#f4f5f7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Experience
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            My professional journey
          </p>
          <div className="w-12 h-1 bg-gray-900 rounded-full mt-3" />
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 space-y-12">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-[11px] sm:left-[19px] top-3 bottom-3 w-[2px] bg-gray-300" />

          {experience.map((item) => (
            <div
              key={item.id}
              className="relative group"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[29px] sm:-left-[37px] top-1.5 flex items-center justify-center">
                <div
                  className={`w-4 h-4 rounded-full border-2 ${
                    item.isCurrent
                      ? 'bg-gray-900 border-white ring-2 ring-gray-900'
                      : 'bg-white border-gray-400'
                  }`}
                />
              </div>

              {/* Timeline Content Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-sm font-semibold text-gray-900 tracking-wide">
                    {item.period}
                  </span>

                  {item.badge && (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.isCurrent
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-700 border border-gray-200'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                  {item.role}
                </h3>

                <p className="text-sm font-medium text-gray-600 mb-3 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-gray-500" />
                  <span>{item.companyOrContext}</span>
                </p>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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
