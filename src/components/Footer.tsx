import React from 'react';
import { 
  ArrowUp, 
  Linkedin, 
  Github, 
  Mail, 
  Phone,
  MessageSquare,
  Heart,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#050811] text-slate-400 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand & Identity */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-lg font-bold text-white font-display">
                Sridhar<span className="text-blue-500">.</span>
              </span>
              <span className="text-xs text-slate-500">·</span>
              <span className="text-xs text-slate-400 font-medium">
                Portfolio
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Designed with creativity by Sridhar.
            </p>
            <p className="text-xs text-slate-500 font-medium">
              UI/UX Designer | Content Creator | Creative Designer
            </p>
            <p className="text-xs text-emerald-400 font-medium pt-0.5">
              Phone: {PERSONAL_INFO.phone}
            </p>
          </div>

          {/* Contact & Social Icons */}
          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${PERSONAL_INFO.phoneRaw}`}
              aria-label={`Call Sridhar at ${PERSONAL_INFO.phone}`}
              title={`Call: ${PERSONAL_INFO.phone}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
            </a>
            <a
              href={PERSONAL_INFO.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Chat (+91 96776 23051)"
              title={`WhatsApp: ${PERSONAL_INFO.phone}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-purple-400 hover:border-purple-500/40 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>
            © 2026 Sridhar. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Salem, Tamil Nadu, India</span>
            <span>·</span>
            <span className="text-slate-400">Salem B.Sc Computer Science</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
