import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Briefcase, 
  Globe2, 
  Users, 
  Handshake
} from 'lucide-react';

interface OpportunitiesSectionProps {
  onOpenHireMe: () => void;
}

export const OpportunitiesSection: React.FC<OpportunitiesSectionProps> = ({ onOpenHireMe }) => {
  const opportunityBadges = [
    { title: "Available for Freelance Projects", icon: <Briefcase className="w-4 h-4 text-blue-400" /> },
    { title: "Open to Internships", icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" /> },
    { title: "Open to Remote Opportunities", icon: <Globe2 className="w-4 h-4 text-indigo-400" /> },
    { title: "Open to Collaborations", icon: <Handshake className="w-4 h-4 text-purple-400" /> }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background radial gradient banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-purple-900/40 border border-white/15 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl backdrop-blur-xl text-center">
          
          {/* Subtle decorative circles */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          />
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          />

          <div className="relative max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              <span>Now Accepting Engagements</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display leading-tight">
              Let's Create Something Amazing Together!
            </h2>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              I'm open to creative collaborations, freelance projects and opportunities where I can use my UI/UX design and content creator skills.
            </p>

            {/* 4 Opportunity Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 max-w-2xl mx-auto">
              {opportunityBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-slate-900/70 border border-white/10 text-xs sm:text-sm font-medium text-slate-200 shadow-sm"
                >
                  {badge.icon}
                  <span>{badge.title}</span>
                </div>
              ))}
            </div>

            {/* Prominent Hire Me CTA button */}
            <div className="pt-6">
              <button
                onClick={onOpenHireMe}
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] transition-all duration-200"
              >
                <span>Hire Me Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
