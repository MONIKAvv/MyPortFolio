import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Lock, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onPrivateToast?: (message?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onPrivateToast }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-[#161619] border border-[#A9A3A6]/35 rounded-3xl overflow-hidden shadow-2xl shadow-black/90 max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-[#A9A3A6] hover:text-[#F4F1E9] transition-colors cursor-pointer border border-[#A9A3A6]/20"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Header Image */}
          <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-[#111113]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161619] via-transparent to-transparent" />
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-[#222226] text-[#F4F1E9] border border-[#A9A3A6]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F4F1E9] tracking-tight">
                {project.title}
              </h3>
            </div>

            {project.isPrivate && (
              <div className="p-4 rounded-2xl bg-[#222226]/80 border border-[#A9A3A6]/35 text-[#F4F1E9] text-xs sm:text-sm flex items-start gap-3">
                <Lock className="w-5 h-5 text-[#A9A3A6] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#F4F1E9] mb-0.5">Commercial / Enterprise Project</p>
                  <p className="text-[#A9A3A6] leading-relaxed">
                    {project.privateMessage || 'This is a private project by company and cannot be publicly shared.'}
                  </p>
                </div>
              </div>
            )}

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.longDescription || project.shortDescription}
            </p>

            {project.highlights && (
              <div>
                <h4 className="flex items-center gap-2 text-[#F4F1E9] font-semibold text-base mb-3">
                  <Layers className="w-4 h-4 text-[#F4F1E9]" />
                  Key Highlights & Architecture
                </h4>
                <ul className="space-y-2.5">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A9A3A6]">
                      <CheckCircle2 className="w-4 h-4 text-[#F4F1E9] mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="pt-4 border-t border-[#A9A3A6]/20 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.isPrivate ? (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onPrivateToast?.(project.privateMessage);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#222226] border border-[#A9A3A6]/30 text-[#A9A3A6] hover:text-[#F4F1E9] text-sm font-medium transition-all cursor-pointer"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#F4F1E9]" />
                    <span>Company Confidential</span>
                  </button>
                ) : (
                  <>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#19191c] hover:bg-[#222226] text-[#F4F1E9] border border-[#A9A3A6]/30 text-sm font-medium transition-all"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub Repository</span>
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#A9A3A6] to-[#F4F1E9] text-[#111113] font-semibold text-sm shadow-md shadow-[#A9A3A6]/20 hover:brightness-110 transition-all"
                      >
                        <span>Live Preview</span>
                        <ExternalLink className="w-4 h-4 text-[#111113]" />
                      </a>
                    )}
                  </>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-[#222226] hover:bg-[#2b2b30] text-[#A9A3A6] hover:text-[#F4F1E9] text-sm font-medium transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
