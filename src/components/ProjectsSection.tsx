import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  FolderKanban
} from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#070b14]/70">
      {/* Background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 -right-32 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <FolderKanban className="w-3.5 h-3.5" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Explore four curated UI/UX case studies spanning smart campus automation, AI agriculture platforms, and civic reporting systems.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 self-start md:self-end">
            <span>4 Flagship Works</span>
            <span className="mx-2">·</span>
            <span className="text-blue-400 font-semibold">2026 UI/UX Showcase</span>
          </div>
        </div>

        {/* 4 Project Cards Grid (2x2 Layout with expansive details) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700/80 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail area */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('/src/assets/')) {
                        target.src = `/src${project.thumbnail}`;
                      }
                    }}
                  />
                  
                  {/* Subtle contrast gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                  {/* Top badges inside card */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono font-bold text-white tracking-wider">
                      PROJECT {project.number}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-medium text-blue-300">
                      {project.category}
                    </span>
                  </div>

                  {/* Title overlay on bottom of image for visual anchoring */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white font-display tracking-tight group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    {project.tagline && (
                      <p className="text-xs font-semibold text-purple-300 mt-0.5">
                        {project.tagline}
                      </p>
                    )}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 space-y-5">
                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features List */}
                  {project.features && project.features.length > 0 && (
                    <div className="space-y-2.5 pt-1">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Key Features:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Design Tools Tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] text-slate-500 font-medium">Tools:</span>
                    {project.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] font-medium text-slate-300 bg-slate-800/60 px-2.5 py-0.5 rounded-md border border-slate-700/50"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button Strip */}
              <div className="px-6 py-4 sm:px-7 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">
                  Detailed Case Study & Flow
                </span>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-600/30 transition-all duration-200"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
