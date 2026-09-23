import React, { useState } from 'react';
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
        return <Mail className="w-5 h-5 text-gray-700" />;
      case 'Linkedin':
        return <LinkedinIcon className="w-5 h-5 text-gray-700" />;
      case 'Github':
        return <GithubIcon className="w-5 h-5 text-gray-700" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-gray-700" />;
      default:
        return <Mail className="w-5 h-5 text-gray-700" />;
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
    <section id="contact" className="py-14 bg-[#f4f5f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card: "Let's work together" */}
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-white border border-gray-200 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-8 text-left space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                Let's work together
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed">
                I'm always open to new opportunities, collaborations and exciting projects. Feel free to reach out!
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsFormModalOpen(true)}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gray-900 hover:bg-gray-800 text-white font-semibold text-base transition-colors cursor-pointer border border-gray-900"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <a
                  href="mailto:monikasoftwaredev@gmail.com?subject=Portfolio%20Inquiry"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-gray-100 text-gray-800 font-medium text-sm sm:text-base border border-gray-300 transition-colors"
                >
                  <Mail className="w-4 h-4 text-gray-700" />
                  <span>Email Directly</span>
                </a>
              </div>
            </div>

            {/* Right Doodle Graphic */}
            <div className="lg:col-span-4 flex items-center justify-center lg:justify-end relative">
              <div className="text-center relative">
                {/* Paper Airplane SVG */}
                <svg
                  className="w-20 h-20 sm:w-24 sm:h-24 text-gray-700 mx-auto -rotate-12"
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
                  <polygon points="50,45 85,25 70,75 62,55" fill="rgba(0, 0, 0, 0.05)" />
                  <polyline points="85,25 50,45 62,55 85,25" />
                  <line x1="62" y1="55" x2="72" y2="40" />
                </svg>

                {/* Handwritten Note */}
                <div className="mt-2 font-handwriting text-gray-800 text-2xl font-bold leading-tight tracking-wider">
                  <p className="whitespace-pre-line">{developer.handwrittenDoodleContact}</p>
                  <span className="text-gray-500 text-xl block mt-0.5">♡</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Section Header for Details */}
        <div className="text-left mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Contact
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mt-1">
            Feel free to reach out
          </p>
        </div>

        {/* 4 Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target={card.type === 'location' ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white border border-gray-200 flex flex-col justify-between min-h-[140px]"
            >
              <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center mb-4">
                {getContactIcon(card.iconName)}
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">
                  {card.label}
                </p>
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {card.value}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {card.subtext}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>

      {/* Interactive Contact Form Modal */}
      {isFormModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="relative w-full max-w-lg bg-white border border-gray-300 rounded-3xl p-6 sm:p-8">
            {/* Close Button */}
            <button
              onClick={() => setIsFormModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold text-gray-900 mb-1">Send a Message</h3>
            <p className="text-xs text-gray-600 mb-6 flex items-center justify-between">
              <span>To: <span className="font-semibold text-gray-900">monikasoftwaredev@gmail.com</span></span>
              <button
                type="button"
                onClick={handleCopy}
                className="text-xs text-gray-800 hover:underline underline-offset-2 flex items-center gap-1 cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3 h-3 text-gray-900" /> : <Copy className="w-3 h-3" />}
                <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
            </p>

            {isOpenSuccess ? (
              <div className="py-10 flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-gray-900">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">Opening Email Client...</h4>
                <p className="text-xs text-gray-600 max-w-sm">
                  Your message has been pre-filled. Simply hit Send in your email application to deliver it to Monika!
                </p>
              </div>
            ) : (
              <form onSubmit={handleDirectEmailSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Smith"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:bg-white transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:bg-white transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project or opportunity..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:bg-white transition-colors text-sm resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm transition-colors cursor-pointer border border-gray-900"
                  >
                    <span>Send via Email App</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
