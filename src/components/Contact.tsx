import React, { useState } from 'react';
import { Mail, MapPin, Send, X, Check, Copy, Terminal, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolio';

export const Contact: React.FC = () => {
  const { contactInfo } = portfolioData;
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const getContactIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mail':
        return <Mail className="w-4 h-4 text-white" />;
      case 'Linkedin':
        return <LinkedinIcon className="w-4 h-4 text-white" />;
      case 'Github':
        return <GithubIcon className="w-4 h-4 text-white" />;
      case 'MapPin':
        return <MapPin className="w-4 h-4 text-white" />;
      default:
        return <Mail className="w-4 h-4 text-white" />;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('monikasoftwaredev@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDirectEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hello Monika,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}\n\n---\nSent from Monika's Portfolio Website`
    );

    const mailtoUrl = `mailto:monikasoftwaredev@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsFormModalOpen(false);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-14 px-4 sm:px-6 lg:px-8 border-b border-[#232530] bg-[#090a0f]">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner Card in Grey & White */}
        <div className="relative rounded-2xl p-8 sm:p-12 bg-[#111217] border border-[#232530] mb-12 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-8 text-left space-y-4">
              <div className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-white font-bold tracking-widest uppercase">
                <Terminal className="w-3.5 h-3.5 text-white" />
                <span>STEP 06 • GET IN TOUCH</span>
              </div>

              <h2 className="font-['Syne'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Let's Build Impactful Mobile Experiences
              </h2>

              <p className="font-['JetBrains_Mono'] text-xs sm:text-sm text-neutral-400 max-w-xl leading-relaxed">
                Currently available for full-time Flutter / Android development roles, enterprise mobile contracts, and ambitious startup products.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsFormModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-neutral-200 text-black font-['JetBrains_Mono'] text-xs sm:text-sm font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.25)] cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-black" />
                  <span>Send Direct Message</span>
                </button>

                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#181920] hover:bg-[#20212b] text-white font-['JetBrains_Mono'] text-xs sm:text-sm font-semibold border border-[#232530] hover:border-white/40 transition-all cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span className="text-white">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-neutral-400" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Terminal Stats Box */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-full max-w-xs p-4 rounded-xl bg-[#090a0f] border border-[#232530] font-['JetBrains_Mono'] text-xs space-y-2.5">
                <div className="flex items-center justify-between pb-2 border-b border-[#232530] text-neutral-500 text-[11px]">
                  <span>availability.sh</span>
                  <span className="text-white font-bold">ONLINE</span>
                </div>
                <div className="space-y-1 text-neutral-400 text-[11px]">
                  <p><span className="text-white">&gt;</span> Response: &lt; 24 Hours</p>
                  <p><span className="text-white">&gt;</span> Timezone: IST (UTC+5:30)</p>
                  <p><span className="text-white">&gt;</span> Work Mode: Remote / Hybrid</p>
                  <p><span className="text-white">&gt;</span> Relocation: Open</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Contact Channels Grid in Grey & White */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((info) => (
            <a
              key={info.label}
              href={info.href}
              target={info.type === 'location' ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#111217] border border-[#232530] hover:border-white/40 hover:bg-[#181920] transition-all flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#181920] border border-[#232530] flex items-center justify-center group-hover:border-white/40 transition-colors flex-shrink-0">
                {getContactIcon(info.iconName)}
              </div>
              <div className="min-w-0">
                <p className="font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                  {info.label}
                </p>
                <p className="font-['JetBrains_Mono'] text-xs font-semibold text-white group-hover:text-neutral-200 transition-colors truncate">
                  {info.value}
                </p>
                <p className="font-['JetBrains_Mono'] text-[11px] text-neutral-500">
                  {info.subtext}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>

      {/* Message Form Modal in Grey & White */}
      {isFormModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-gradient-to-b from-[#181920] to-[#111217] border border-white/25 rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-[0_24px_50px_#000000d9,0_0_24px_rgba(255,255,255,0.08)]">
            <button
              onClick={() => setIsFormModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-[#181920] hover:bg-[#232530] text-neutral-400 hover:text-white transition-colors cursor-pointer border border-[#232530]"
              aria-label="Close message modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-white font-bold uppercase mb-2">
              <Terminal className="w-3.5 h-3.5 text-white" />
              <span>Contact Transmission</span>
            </div>

            <h3 className="font-['Syne'] text-2xl font-bold text-white mb-2">
              Send a Message to Monika
            </h3>
            <p className="font-['JetBrains_Mono'] text-xs text-neutral-400 mb-6">
              Drop an email inquiry directly via your email client.
            </p>

            <form onSubmit={handleDirectEmailSubmit} className="space-y-4 font-['JetBrains_Mono'] text-xs">
              <div>
                <label className="block text-neutral-300 font-semibold mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. John Doe / Tech Recruiter"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#090a0f] border border-[#232530] text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-neutral-300 font-semibold mb-1.5">Your Email</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#090a0f] border border-[#232530] text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-neutral-300 font-semibold mb-1.5">Project or Inquiry Details</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Discuss role opportunities, mobile application ideas, or collaboration..."
                  className="w-full px-4 py-2.5 rounded-lg bg-[#090a0f] border border-[#232530] text-white focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsFormModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-[#181920] text-neutral-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-neutral-200 text-black font-bold transition-all shadow-[0_0_16px_rgba(255,255,255,0.2)] cursor-pointer"
                >
                  <span>Transmit Email</span>
                  <Send className="w-3.5 h-3.5 text-black" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
