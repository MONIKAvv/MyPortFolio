import React from 'react';
import { X, ExternalLink, CheckCircle2, Lock, ShieldCheck, Terminal } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-gradient-to-b from-[#181920] to-[#111217] border border-white/25 rounded-2xl overflow-hidden max-h-[90vh] flex flex-col shadow-[0_24px_50px_#000000d9,0_0_24px_rgba(255,255,255,0.08)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-[#181920]/90 hover:bg-[#232530] text-neutral-400 hover:text-white transition-colors cursor-pointer border border-[#232530]"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Header Image */}
        <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-[#181920] border-b border-[#232530]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center filter contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111217] via-transparent to-black/30" />
          
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <span className="font-['JetBrains_Mono'] text-xs font-bold px-2.5 py-1 rounded bg-[#090a0f]/90 text-white border border-white/30">
              MODULE SPEC SHEET
            </span>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-1.5 mb-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-['JetBrains_Mono'] text-[11px] font-semibold px-2.5 py-0.5 rounded bg-[#181920] text-neutral-200 border border-[#232530]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>

          {project.isPrivate && (
            <div className="p-4 rounded-xl bg-[#181920] border border-[#232530] text-xs sm:text-sm flex items-start gap-3">
              <Lock className="w-4 h-4 text-neutral-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-['JetBrains_Mono'] font-bold text-white mb-0.5">Enterprise Project</p>
                <p className="font-['JetBrains_Mono'] text-neutral-400 leading-relaxed text-xs">
                  {project.privateMessage || 'This is a private enterprise project and cannot be publicly shared.'}
                </p>
              </div>
            </div>
          )}

          <p className="font-['JetBrains_Mono'] text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {project.longDescription || project.shortDescription}
          </p>

          {project.highlights && (
            <div className="p-4 rounded-xl bg-[#090a0f] border border-[#232530]">
              <h4 className="flex items-center gap-2 font-['JetBrains_Mono'] text-white font-bold text-xs uppercase tracking-wider mb-3">
                <Terminal className="w-3.5 h-3.5 text-neutral-400" />
                <span>Architecture Highlights</span>
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2.5 font-['JetBrains_Mono'] text-xs text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Actions */}
          <div className="pt-4 border-t border-[#232530] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.isPrivate ? (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onPrivateToast?.(project.privateMessage);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#181920] border border-neutral-700 text-neutral-300 text-xs font-['JetBrains_Mono'] font-bold hover:bg-[#20212b] transition-colors cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-neutral-400" />
                  <span>Confidential Repository</span>
                </button>
              ) : (
                <>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#181920] hover:bg-[#20212b] text-neutral-300 hover:text-white border border-[#232530] text-xs font-['JetBrains_Mono'] font-bold transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white hover:bg-neutral-200 text-black text-xs font-['JetBrains_Mono'] font-bold transition-all shadow-[0_0_16px_rgba(255,255,255,0.25)]"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 text-black" />
                    </a>
                  )}
                </>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#181920] hover:bg-[#232530] text-neutral-400 hover:text-white text-xs font-['JetBrains_Mono'] transition-colors cursor-pointer border border-[#232530]"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
