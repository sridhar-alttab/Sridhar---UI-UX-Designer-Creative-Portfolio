import React from 'react';
import { 
  Layout, 
  Globe, 
  Smartphone, 
  Monitor, 
  Sparkles, 
  Share2, 
  Video, 
  BookOpen, 
  CheckCircle,
  Briefcase
} from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-5 h-5 text-blue-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-teal-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-indigo-400" />;
      case 'Monitor': return <Monitor className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-pink-400" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-purple-400" />;
      case 'Video': return <Video className="w-5 h-5 text-blue-400" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-amber-400" />;
      default: return <Briefcase className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 -right-32 w-[450px] h-[450px] bg-blue-600/10 blur-[140px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Offerings & Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
            What I Can Do For You
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Comprehensive UI/UX design, landing experiences, and high-impact visual media tailored to elevate your product brand.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 p-6 transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-blue-400 transition-colors">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors mb-2 font-display">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Deliverables snippet */}
              <div className="mt-5 pt-3.5 border-t border-slate-800/70">
                <div className="flex flex-wrap gap-1">
                  {service.deliverables.slice(0, 2).map((item, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] text-slate-300 bg-slate-800/50 px-2 py-0.5 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
