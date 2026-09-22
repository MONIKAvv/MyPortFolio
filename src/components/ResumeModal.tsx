import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { developer, skills, experience } = portfolioData;

  const handleDownload = () => {
    // Generate text/markdown summary download for demonstration
    const resumeText = `
========================================
${developer.name.toUpperCase()} - RESUME
${developer.role}
========================================

Bio:
${developer.bioSummary}

Location: India
Email: monika.ramwin.testing@gmail.com
LinkedIn: https://linkedin.com/in/monika
GitHub: https://github.com/monika

----------------------------------------
CORE SKILLS & TECHNOLOGIES
----------------------------------------
${skills.map(s => `• ${s.name}: ${s.description}`).join('\n')}

----------------------------------------
PROFESSIONAL EXPERIENCE
----------------------------------------
${experience.map(e => `• ${e.period} | ${e.role} (${e.companyOrContext})\n  ${e.description}`).join('\n\n')}

----------------------------------------
FEATURED PROJECTS
----------------------------------------
• BrainVault: AI-powered productivity and knowledge-management application built with Flutter, Firebase and Gemini.
• Insightse (School App): Attendance, fee management and class logs application for schools.
• Stella Polaris (ERPNext): Contributed to Project Manager, Sales Invoice and Room Book modules under ERPNext.

Generated from Monika Ramwin's Developer Portfolio.
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Monika_Ramwin_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0c1122] border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-indigo-950/80 max-h-[85vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Monika Ramwin — Resume Preview</h3>
              <p className="text-xs text-indigo-300">Flutter / Application Developer</p>
            </div>
          </div>

          {/* Resume Snapshot Content */}
          <div className="space-y-6 text-slate-300 text-sm">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
                Executive Summary
              </h4>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                Passionate Application Developer specializing in Flutter, Dart, Firebase, and modern cross-platform mobile architectures. Proven experience shipping production-grade applications with clean code, responsive layouts, and AI-enabled features.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Technical Competencies
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <span className="p-2 rounded-lg bg-white/[0.04] border border-white/5 text-slate-200">Flutter & Dart</span>
                <span className="p-2 rounded-lg bg-white/[0.04] border border-white/5 text-slate-200">Android / Kotlin</span>
                <span className="p-2 rounded-lg bg-white/[0.04] border border-white/5 text-slate-200">Firebase & Firestore</span>
                <span className="p-2 rounded-lg bg-white/[0.04] border border-white/5 text-slate-200">RESTful APIs</span>
                <span className="p-2 rounded-lg bg-white/[0.04] border border-white/5 text-slate-200">Git & GitHub</span>
                <span className="p-2 rounded-lg bg-white/[0.04] border border-white/5 text-slate-200">Gemini AI Integration</span>
                <span className="p-2 rounded-lg bg-white/[0.04] border border-white/5 text-slate-200">State Management</span>
                <span className="p-2 rounded-lg bg-white/[0.04] border border-white/5 text-slate-200">ERPNext & Frappe</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                Key Highlights
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Lead application developer on BrainVault (AI productivity application)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Integrated complex educational management workflows in Insightse</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
            >
              Close
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-indigo-600/30 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Download Resume</span>
              <Download className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
