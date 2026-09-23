import React from 'react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative w-full max-w-3xl bg-white border border-gray-300 rounded-3xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 transition-colors cursor-pointer border border-gray-300"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Header Image */}
        <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-gray-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800 border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              {project.title}
            </h3>
          </div>

          {project.isPrivate && (
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-800 text-xs sm:text-sm flex items-start gap-3">
              <Lock className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 mb-0.5">Commercial / Enterprise Project</p>
                <p className="text-gray-600 leading-relaxed">
                  {project.privateMessage || 'This is a private project by company and cannot be publicly shared.'}
                </p>
              </div>
            </div>
          )}

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {project.longDescription || project.shortDescription}
          </p>

          {project.highlights && (
            <div>
              <h4 className="flex items-center gap-2 text-gray-900 font-semibold text-base mb-3">
                <Layers className="w-4 h-4 text-gray-700" />
                Key Highlights & Architecture
              </h4>
              <ul className="space-y-2.5">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-gray-900 mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

            {/* Actions */}
            <div className="pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.isPrivate ? (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onPrivateToast?.(project.privateMessage);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 border border-gray-300 text-gray-800 text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    <ShieldCheck className="w-4 h-4 text-gray-700" />
                    <span>Company Confidential</span>
                  </button>
                ) : (
                  <>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 text-sm font-medium transition-colors"
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
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white hover:bg-gray-800 text-sm font-medium transition-colors"
                      >
                        <span>Live Preview</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};
