import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, ArrowRight, Lock, Info, X } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolio';
import { ProjectModal } from './ProjectModal';
import type { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showPrivateToast = (message?: string) => {
    setToastMessage(
      message || 'This is a private project by company and cannot be publicly shared.'
    );
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <section id="projects" className="py-14 bg-[#f4f5f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with "View All Projects" */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Projects
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Some of the projects I've worked on
            </p>
            <div className="w-12 h-1 bg-gray-900 rounded-full mt-3" />
          </div>

          <a
            href="https://github.com/MONIKAvv?tab=overview&from=2026-08-01&to=2026-08-31"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:text-gray-700 transition-colors group cursor-pointer"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-white border border-gray-200 overflow-hidden flex flex-col cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 p-2 sm:p-3">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {project.isPrivate && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 border border-gray-300 text-gray-800 text-xs font-medium flex items-center gap-1.5">
                      <Lock className="w-3 h-3 text-gray-700" />
                      <span>Company Project</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title & Arrow */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-6">
                    {project.shortDescription}
                  </p>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    {project.isPrivate ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          showPrivateToast(project.privateMessage);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        <Lock className="w-3.5 h-3.5 text-gray-700" />
                        <span>Private Project</span>
                      </button>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}

                    {project.isPrivate ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors cursor-pointer"
                      >
                        <span>View Details</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <a
                        href={project.liveUrl || project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors cursor-pointer"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onPrivateToast={showPrivateToast}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-gray-900 text-white border border-gray-800 max-w-md w-[90%]">
          <div className="w-8 h-8 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0 text-white">
            <Info className="w-4 h-4" />
          </div>
          <p className="text-xs sm:text-sm font-medium leading-tight flex-1 text-gray-200">
            {toastMessage}
          </p>
          <button
            onClick={() => setToastMessage(null)}
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Dismiss toast"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </section>
  );
};
