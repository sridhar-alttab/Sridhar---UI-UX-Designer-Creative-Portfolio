import React from 'react';
import { 
  X, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Lightbulb, 
  Target,
  FileCheck,
  Smartphone,
  ExternalLink
} from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#0c1222] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-blue-400 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
              PROJECT {project.number}
            </span>
            <span className="text-xs text-slate-400">·</span>
            <span className="text-xs font-medium text-slate-300">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close case study modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Hero Banner / Thumbnail */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] bg-slate-950 border border-white/10">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('/src/assets/')) {
                  target.src = `/src${project.thumbnail}`;
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {project.title}
              </h2>
              {project.tagline && (
                <p className="text-sm font-semibold text-purple-300 mt-1">
                  Tagline: {project.tagline}
                </p>
              )}
            </div>
          </div>

          {/* Quick Summary & Tools */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 rounded-2xl bg-slate-900/50 border border-white/5 text-sm">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Role & Focus
              </span>
              <span className="text-white font-medium">
                UI/UX Designer & Prototyping
              </span>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Category
              </span>
              <span className="text-white font-medium">
                {project.category}
              </span>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Design Tools
              </span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.toolsUsed.map((tool) => (
                  <span key={tool} className="text-xs text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Overview */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-400" />
              <span>Project Overview</span>
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.overview}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                <Target className="w-4 h-4" />
                <span>The Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>The UX Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Core System Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-400" />
              <span>Core Features Designed</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-sm"
                >
                  <div className="w-6 h-6 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                    <FileCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UX Highlights */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-purple-400" />
              <span>UI/UX Highlights</span>
            </h3>
            <ul className="space-y-2.5">
              {project.uxHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-slate-900/60">
          <span className="text-xs text-slate-400">
            Case Study Designed by Sridhar
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
