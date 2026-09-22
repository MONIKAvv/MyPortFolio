import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <section id="projects" className="py-14 relative overflow-hidden bg-[#080b11]">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with "View All Projects" */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Project<span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">s</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Some of the projects I've worked on
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3" />
          </motion.div>

          <motion.a
            href="https://github.com/MONIKAvv?tab=overview&from=2026-08-01&to=2026-08-31"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group cursor-pointer"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-[#0e1426]/90 border border-white/[0.08] hover:border-indigo-500/40 overflow-hidden shadow-xl shadow-black/40 hover:shadow-indigo-950/40 transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 p-2 sm:p-3">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1426] via-transparent to-transparent opacity-60" />
                  
                  {project.isPrivate && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-medium flex items-center gap-1.5">
                      <Lock className="w-3 h-3 text-amber-400" />
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
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 mb-6">
                    {project.shortDescription}
                  </p>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-[#162038] text-indigo-300 border border-indigo-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                    {project.isPrivate ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          showPrivateToast(project.privateMessage);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-amber-400/90 hover:text-amber-300 transition-colors"
                      >
                        <Lock className="w-3.5 h-3.5 text-amber-400" />
                        <span>Private Project</span>
                      </button>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
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
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
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
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
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
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#11182c]/95 border border-amber-500/40 text-amber-200 shadow-2xl shadow-black/80 backdrop-blur-md max-w-md w-[90%]"
          >
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-amber-400">
              <Info className="w-4 h-4" />
            </div>
            <p className="text-xs sm:text-sm font-medium leading-tight flex-1">
              {toastMessage}
            </p>
            <button
              onClick={() => setToastMessage(null)}
              className="text-slate-400 hover:text-white transition-colors p-1"
              aria-label="Dismiss toast"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

