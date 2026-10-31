import React from 'react';
import { 
  Search, 
  Lightbulb, 
  PenTool, 
  Palette, 
  Layers, 
  CheckCircle2, 
  Workflow, 
  ArrowRight
} from 'lucide-react';
import { DESIGN_PROCESS } from '../data/portfolioData';

export const DesignProcessSection: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Search className="w-5 h-5 text-blue-400" />;
      case 1: return <Lightbulb className="w-5 h-5 text-amber-400" />;
      case 2: return <PenTool className="w-5 h-5 text-cyan-400" />;
      case 3: return <Palette className="w-5 h-5 text-indigo-400" />;
      case 4: return <Layers className="w-5 h-5 text-purple-400" />;
      case 5: return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      default: return <Workflow className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#070b14]/60">
      {/* Background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[150px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5" />
            <span>Structured Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
            My Design Process
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From initial user research to pixel-perfect prototyping and usability validation, each phase is rooted in design thinking.
          </p>
        </div>

        {/* Visual Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {DESIGN_PROCESS.map((step, idx) => (
            <div
              key={step.step}
              className="group relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 p-6 transition-all duration-200 hover:-translate-y-1 shadow-md hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Step number and icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getStepIcon(idx)}
                  </div>
                  <span className="text-2xl font-black font-mono text-slate-700 group-hover:text-blue-500/50 transition-colors">
                    {step.step}
                  </span>
                </div>

                {/* Step title */}
                <h3 className="text-lg font-bold text-white font-display group-hover:text-blue-300 transition-colors mb-2">
                  {step.step}. {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Deliverables Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                  Key Deliverables
                </span>
                <span className="text-xs font-medium text-blue-300">
                  {step.deliverables}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
