import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, ArrowRight, Send, X, Check, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolio';

export const Contact: React.FC = () => {
  const { contactInfo, developer } = portfolioData;
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);

  const getContactIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mail':
        return <Mail className="w-5 h-5 text-[#F4F1E9]" />;
      case 'Linkedin':
        return <LinkedinIcon className="w-5 h-5 text-[#A9A3A6]" />;
      case 'Github':
        return <GithubIcon className="w-5 h-5 text-[#F4F1E9]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#A9A3A6]" />;
      default:
        return <Mail className="w-5 h-5 text-[#F4F1E9]" />;
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

    setIsOpenSuccess(true);
    setTimeout(() => {
      setIsOpenSuccess(false);
      setIsFormModalOpen(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-14 relative overflow-hidden bg-[#111113]">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#A9A3A6]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card: "Let's work together" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-r from-[#19191c] via-[#161619] to-[#222226] border border-[#A9A3A6]/35 overflow-hidden shadow-2xl shadow-black/80 mb-16"
        >
          {/* Decorative Corner Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#F4F1E9]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-8 text-left space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F1E9] tracking-tight">
                Let's work together
              </h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
                I'm always open to new opportunities, collaborations and exciting projects. Feel free to reach out!
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setIsFormModalOpen(true)}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#A9A3A6] to-[#F4F1E9] text-[#111113] font-semibold text-base shadow-xl shadow-[#A9A3A6]/20 hover:brightness-110 transition-all cursor-pointer border border-[#F4F1E9]/40 group"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <a
                  href="mailto:monikasoftwaredev@gmail.com?subject=Portfolio%20Inquiry"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#19191c] hover:bg-[#222226] text-[#F4F1E9] font-medium text-sm sm:text-base border border-[#A9A3A6]/35 hover:border-[#F4F1E9] transition-all"
                >
                  <Mail className="w-4 h-4 text-[#F4F1E9]" />
                  <span>Email Directly</span>
                </a>
              </div>
            </div>

            {/* Right Doodle Graphic */}
            <div className="lg:col-span-4 flex items-center justify-center lg:justify-end relative">
              <div className="text-center relative">
                {/* Paper Airplane SVG */}
                <svg
                  className="w-20 h-20 sm:w-24 sm:h-24 text-[#F4F1E9]/90 mx-auto -rotate-12 transform hover:scale-110 transition-transform duration-300"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Trail dots */}
                  <path
                    d="M 10,75 Q 30,85 45,70 T 70,55"
                    strokeDasharray="4 6"
                    opacity="0.6"
                  />
                  {/* Plane */}
                  <polygon points="50,45 85,25 70,75 62,55" fill="rgba(169, 163, 166, 0.2)" />
                  <polyline points="85,25 50,45 62,55 85,25" />
                  <line x1="62" y1="55" x2="72" y2="40" />
                </svg>

                {/* Handwritten Note */}
                <div className="mt-2 font-handwriting text-[#F4F1E9] text-2xl font-bold leading-tight tracking-wider">
                  <p className="whitespace-pre-line">{developer.handwrittenDoodleContact}</p>
                  <span className="text-[#A9A3A6] text-xl block mt-0.5">♡</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Section Header for Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left mb-10"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F4F1E9] tracking-tight">
            Contact
          </h3>
          <p className="text-[#A9A3A6] text-sm sm:text-base mt-1">
            Feel free to reach out
          </p>
        </motion.div>

        {/* 4 Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((card, index) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.type === 'location' ? undefined : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, borderColor: 'rgba(244, 241, 233, 0.45)' }}
              className="p-6 rounded-2xl bg-[#19191c]/85 border border-[#A9A3A6]/20 backdrop-blur-md flex flex-col justify-between min-h-[140px] transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#222226] border border-[#A9A3A6]/25 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#2b2b30] group-hover:border-[#F4F1E9]/40 transition-all">
                {getContactIcon(card.iconName)}
              </div>

              <div>
                <p className="text-xs font-semibold text-[#A9A3A6] uppercase tracking-wider mb-0.5">
                  {card.label}
                </p>
                <p className="text-sm font-semibold text-[#F4F1E9] truncate group-hover:text-white transition-colors">
                  {card.value}
                </p>
                <p className="text-xs text-[#A9A3A6]/70 mt-1">
                  {card.subtext}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>

      {/* Interactive Contact Form Modal */}
      <AnimatePresence>
        {isFormModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#161619] border border-[#A9A3A6]/35 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/90"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsFormModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#A9A3A6] hover:text-[#F4F1E9] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-bold text-[#F4F1E9] mb-1">Send a Message</h3>
              <p className="text-xs text-[#A9A3A6] mb-6 flex items-center justify-between">
                <span>To: <span className="font-semibold text-[#F4F1E9]">monikasoftwaredev@gmail.com</span></span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="text-xs text-[#F4F1E9] hover:underline underline-offset-2 flex items-center gap-1 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-[#F4F1E9]" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </p>

              {isOpenSuccess ? (
                <div className="py-10 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#F4F1E9]/20 border border-[#F4F1E9]/40 flex items-center justify-center text-[#F4F1E9]">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-[#F4F1E9]">Opening Email Client...</h4>
                  <p className="text-xs text-slate-300 max-w-sm">
                    Your message has been pre-filled. Simply hit Send in your email application to deliver it to Monika!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDirectEmailSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#19191c] border border-[#A9A3A6]/30 text-[#F4F1E9] placeholder-[#A9A3A6]/50 focus:outline-none focus:border-[#F4F1E9] focus:ring-1 focus:ring-[#F4F1E9] transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#19191c] border border-[#A9A3A6]/30 text-[#F4F1E9] placeholder-[#A9A3A6]/50 focus:outline-none focus:border-[#F4F1E9] focus:ring-1 focus:ring-[#F4F1E9] transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about your project or opportunity..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#19191c] border border-[#A9A3A6]/30 text-[#F4F1E9] placeholder-[#A9A3A6]/50 focus:outline-none focus:border-[#F4F1E9] focus:ring-1 focus:ring-[#F4F1E9] transition-all text-sm resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#A9A3A6] to-[#F4F1E9] text-[#111113] font-semibold text-sm shadow-lg shadow-[#A9A3A6]/20 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer border border-[#F4F1E9]/40"
                    >
                      <span>Send via Email App</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
