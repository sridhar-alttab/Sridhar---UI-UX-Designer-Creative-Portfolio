import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Sparkles, 
  MapPin, 
  Briefcase, 
  Mail, 
  Linkedin, 
  Github,
  Phone,
  MessageSquare,
  CheckCircle2,
  Layers,
  ChevronDown
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-purple-600/20 blur-[130px] rounded-full"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 -right-32 w-[350px] h-[350px] bg-purple-600/10 blur-[120px] rounded-full"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-10 -left-20 w-[380px] h-[380px] bg-blue-500/10 blur-[120px] rounded-full"
      />

      {/* Subtle background grid pattern */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Availability Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-slate-300">
                Available for Freelance & Internships
              </span>
              <span className="text-xs text-slate-500">·</span>
              <span className="text-xs text-slate-400">2026</span>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-display">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Sridhar</span> 👋
              </h1>
              
              <p className="text-lg sm:text-xl font-semibold text-blue-300/90 tracking-wide">
                UI/UX Designer | Content Creator | Creative Designer
              </p>
            </div>

            {/* Tagline & Lead Paragraph */}
            <div className="space-y-3 max-w-2xl mx-auto lg:mx-0">
              <blockquote className="text-base sm:text-lg text-slate-300 italic border-l-2 border-blue-500/50 pl-3 py-0.5">
                "{PERSONAL_INFO.heroTagline}"
              </blockquote>
              
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                "{PERSONAL_INFO.heroBio}"
              </p>
            </div>

            {/* Meta Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Salem, Tamil Nadu, India</span>
              </div>
              <span className="text-slate-600">·</span>
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                <span>B.Sc Computer Science</span>
              </div>
              <span className="text-slate-600">·</span>
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-purple-400" />
                <span>Figma & Canva Specialist</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/80 rounded-xl transition-all duration-200"
              >
                <span>Hire Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-200"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Channels */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-slate-400">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${PERSONAL_INFO.phoneRaw}`}
                  aria-label={`Call Sridhar at ${PERSONAL_INFO.phone}`}
                  title={`Call Sridhar at ${PERSONAL_INFO.phone}`}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chat on WhatsApp (+91 96776 23051)"
                  title="WhatsApp: +91 96776 23051"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Sridhar on LinkedIn"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Sridhar on GitHub"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-purple-400 hover:border-purple-500/40 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Email Sridhar directly"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Anchor with Sridhar's Real Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative glow frame */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl opacity-40 blur-xl group-hover:opacity-60 transition duration-500"
              />

              {/* Portrait container with glassmorphic backing */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-900/90 border border-white/15 shadow-2xl p-3 sm:p-4 backdrop-blur-xl">
                
                {/* Image slot */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950">
                  <img
                    src={PERSONAL_INFO.photoUrl}
                    alt="Sridhar - UI/UX Designer & Content Creator"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('WhatsApp_Image')) {
                        target.src = '/assets/aistudio/WhatsApp_Image_2026-10-30_at_9.40.31_AM_dca3d532.jpeg';
                      }
                    }}
                  />
                  
                  {/* Subtle contrast gradient scrim at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070b14] via-[#070b14]/60 to-transparent" />
                  
                  {/* Floating badge inside image */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10 text-left">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white tracking-wide">
                          Sridhar
                        </div>
                        <div className="text-[11px] text-blue-400 font-medium">
                          UI/UX & Content Creator
                        </div>
                      </div>
                      <div className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                        Open for Work
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom detail pill ribbon */}
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 px-1">
                  <span className="font-mono text-[11px] text-slate-300">
                    B.Sc Computer Science
                  </span>
                  <span className="text-[11px] text-indigo-300 flex items-center gap-1 font-medium">
                    <Sparkles className="w-3 h-3 text-indigo-400" />
                    Creative Designer
                  </span>
                </div>

              </div>

              {/* Decorative floating card: 4 Flagship Projects */}
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-6 p-3 bg-slate-900/90 border border-slate-700/80 rounded-2xl shadow-xl backdrop-blur-md">
                <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                  04
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Curated Projects</div>
                  <div className="text-[10px] text-slate-400">UI/UX Case Studies</div>
                </div>
              </div>

              {/* Decorative floating card: Tamil Nadu, IN */}
              <div className="hidden sm:flex items-center gap-2 absolute -top-4 -right-4 p-2.5 px-3.5 bg-slate-900/90 border border-slate-700/80 rounded-2xl shadow-xl backdrop-blur-md">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-semibold text-slate-200">Salem, TN, India</span>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll down prompt */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll down to About section"
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
          >
            <span className="text-[11px] tracking-wider uppercase font-medium">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};
