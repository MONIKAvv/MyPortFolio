import React from 'react';
import { X, Download, CheckCircle2, Award, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { developer, skills, experience } = portfolioData;

  const handleDownload = () => {
    const resumeText = `
========================================
${developer.name.toUpperCase()} - RESUME / SPECS
${developer.role}
========================================

Bio:
${developer.bioSummary}

Location: India
Email: monikasoftwaredev@gmail.com
LinkedIn: https://www.linkedin.com/in/monika-kumari-031041236/
GitHub: https://github.com/MONIKAvv

----------------------------------------
CORE SKILLS & TECHNOLOGIES
----------------------------------------
${skills.map(s => `• ${s.name}: ${s.description}`).join('\n')}

----------------------------------------
PROFESSIONAL EXPERIENCE
----------------------------------------
${experience.map(e => `• ${e.period} | ${e.role} (${e.companyOrContext})\n  ${e.description}`).join('\n\n')}

----------------------------------------
FEATURED PROJECTS & SHIPPED MODULES
----------------------------------------
• BrainVault: AI-powered productivity and knowledge-management application built with Flutter, Firebase and Gemini.
• Insightse (School App): Attendance, fee management and class logs application for schools.
• Stella Polaris (ERPNext): Contributed to Project Manager, Sales Invoice and Room Book modules under ERPNext.
• FunMate: Contributed to platform reward-based learning application.

Generated from Monika Kumari's Developer Tracker Portfolio.
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Monika_Kumari_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#181920] to-[#111217] border border-white/25 rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-[0_24px_50px_#000000d9,0_0_24px_rgba(255,255,255,0.08)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#181920] hover:bg-[#232530] text-neutral-400 hover:text-white transition-colors cursor-pointer border border-[#232530]"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-['Syne'] text-2xl font-bold text-white">Monika Kumari</h3>
              <span className="font-['JetBrains_Mono'] text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/10 text-white border border-white/20">
                PRO RESUME
              </span>
            </div>
            <p className="font-['JetBrains_Mono'] text-xs text-neutral-400">
              Flutter / Native Application Developer • Spec Sheet
            </p>
          </div>
        </div>

        {/* Resume Snapshot Content */}
        <div className="space-y-5 font-['JetBrains_Mono'] text-xs text-neutral-300">
          <div className="p-4 rounded-xl bg-[#090a0f] border border-[#232530]">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-1.5">
              <span>EXECUTIVE SUMMARY</span>
            </h4>
            <p className="text-neutral-400 leading-relaxed">
              Passionate Application Developer specializing in Flutter, Dart, Firebase, and modern cross-platform mobile architectures. Proven experience shipping production-grade applications with clean code, responsive layouts, and AI-enabled features.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>TECHNICAL COMPETENCIES</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
              <span className="p-2 rounded-lg bg-[#181920] border border-[#232530] text-neutral-300">Flutter & Dart</span>
              <span className="p-2 rounded-lg bg-[#181920] border border-[#232530] text-neutral-300">Android / Kotlin</span>
              <span className="p-2 rounded-lg bg-[#181920] border border-[#232530] text-neutral-300">Firebase & Auth</span>
              <span className="p-2 rounded-lg bg-[#181920] border border-[#232530] text-neutral-300">RESTful APIs</span>
              <span className="p-2 rounded-lg bg-[#181920] border border-[#232530] text-neutral-300">Git & GitHub</span>
              <span className="p-2 rounded-lg bg-[#181920] border border-[#232530] text-neutral-300">Gemini LLM API</span>
              <span className="p-2 rounded-lg bg-[#181920] border border-[#232530] text-neutral-300">State Management</span>
              <span className="p-2 rounded-lg bg-[#181920] border border-[#232530] text-neutral-300">Frappe / ERPNext</span>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white mb-2.5 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-white" />
              <span>KEY PROJECT ACHIEVEMENTS</span>
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-white mt-0.5 flex-shrink-0" />
                <span>Engineered BrainVault: Contextual note management with Gemini LLM integration</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-white mt-0.5 flex-shrink-0" />
                <span>Integrated multi-role student attendance and fee management in Insightse</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-white mt-0.5 flex-shrink-0" />
                <span>Customized Frappe DocTypes and sales invoice workflows for ERPNext</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Action Footer */}
        <div className="mt-6 pt-4 border-t border-[#232530] flex items-center justify-between gap-4 font-['JetBrains_Mono']">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#181920] hover:bg-[#232530] text-neutral-400 hover:text-white text-xs transition-colors cursor-pointer border border-[#232530]"
          >
            Close
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white hover:bg-neutral-200 text-black text-xs font-bold transition-all shadow-[0_0_16px_rgba(255,255,255,0.25)] cursor-pointer"
          >
            <span>Download Plaintext Spec</span>
            <Download className="w-3.5 h-3.5 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};
