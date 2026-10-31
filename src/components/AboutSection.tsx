import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Sparkles, 
  Layers, 
  Target, 
  Compass, 
  Palette, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070b14]/50">
      {/* Background radial accent */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 -left-32 w-[400px] h-[400px] bg-blue-600/10 blur-[130px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
            About Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Crafting user-centric digital experiences with an analytical mindset and creative design flair.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Sridhar's Portrait Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl p-3 sm:p-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950">
                  <img
                    src={PERSONAL_INFO.photoUrl}
                    alt="Sridhar - UI/UX Designer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('WhatsApp_Image')) {
                        target.src = '/assets/aistudio/WhatsApp_Image_2026-10-30_at_9.40.31_AM_dca3d532.jpeg';
                      }
                    }}
                  />
                  
                  {/* Overlay vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent opacity-80" />
                  
                  {/* Photo details */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <h3 className="text-lg font-bold text-white font-display">
                      Sridhar
                    </h3>
                    <p className="text-xs text-blue-400 font-medium">
                      Salem, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-800 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/50">
                    <div className="text-[10px] uppercase text-slate-400 font-semibold tracking-wider">
                      Discipline
                    </div>
                    <div className="text-slate-200 font-medium mt-0.5">
                      B.Sc Computer Science
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/50">
                    <div className="text-[10px] uppercase text-slate-400 font-semibold tracking-wider">
                      Focus Area
                    </div>
                    <div className="text-slate-200 font-medium mt-0.5">
                      UI/UX & Content Creator
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              {PERSONAL_INFO.aboutMeText.map((paragraph, index) => (
                <p 
                  key={index} 
                  className={`text-slate-300 ${index === 0 ? 'text-lg sm:text-xl font-medium text-white/95' : ''}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Structured Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/30 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
                  <Palette className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">Visual Design & Usability</h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  Balancing clean aesthetic interfaces with strict user-centered clarity and accessible typography.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/30 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">Content Creator & Storytelling</h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  Translating complex workflows into digestible visual content, carousels, guides, and e-books.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/30 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">Computer Science Foundation</h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  B.Sc CS academic background enabling smooth collaboration with developers and structured thinking.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">Continuous Growth & Mastery</h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  Proactively mastering modern tools like Figma, Canva, AI website design, and modern design systems.
                </p>
              </div>

            </div>

            {/* Quick action link */}
            <div className="pt-2 flex items-center gap-4">
              <a 
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>View What I Can Do For You</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
