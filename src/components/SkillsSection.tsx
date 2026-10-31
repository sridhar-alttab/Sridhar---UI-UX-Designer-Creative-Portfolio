import React, { useState } from 'react';
import { 
  Layout, 
  PenTool, 
  Layers, 
  Search, 
  GitCommit, 
  Lightbulb, 
  Palette, 
  Sparkles, 
  Video, 
  BookOpen, 
  Smartphone, 
  Globe, 
  Grid, 
  Cpu,
  Shapes,
  Terminal,
  Code2
} from 'lucide-react';
import { DESIGN_SKILLS, CREATIVE_SKILLS, TECHNICAL_SKILLS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'design' | 'creative' | 'technical'>('all');

  const totalSkillsCount = DESIGN_SKILLS.length + CREATIVE_SKILLS.length + TECHNICAL_SKILLS.length;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-5 h-5 text-blue-400" />;
      case 'Figma': return <Shapes className="w-5 h-5 text-indigo-400" />;
      case 'PenTool': return <PenTool className="w-5 h-5 text-cyan-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-sky-400" />;
      case 'Search': return <Search className="w-5 h-5 text-blue-400" />;
      case 'GitCommit': return <GitCommit className="w-5 h-5 text-indigo-400" />;
      case 'Lightbulb': return <Lightbulb className="w-5 h-5 text-amber-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-purple-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-pink-400" />;
      case 'Video': return <Video className="w-5 h-5 text-purple-400" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-blue-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-emerald-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-teal-400" />;
      case 'Grid': return <Grid className="w-5 h-5 text-violet-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 right-0 w-[450px] h-[450px] bg-purple-600/10 blur-[140px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
            My Skills
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Professional skill set focused on design thinking, creative digital content, and technical programming foundations.
          </p>

          {/* Interactive Filter Control */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === 'all'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Skills ({totalSkillsCount})
              </button>
              <button
                onClick={() => setActiveTab('design')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === 'design'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Design Skills ({DESIGN_SKILLS.length})
              </button>
              <button
                onClick={() => setActiveTab('creative')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === 'creative'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Creative Skills ({CREATIVE_SKILLS.length})
              </button>
              <button
                onClick={() => setActiveTab('technical')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === 'technical'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Technical ({TECHNICAL_SKILLS.length})
              </button>
            </div>
          </div>
        </div>

        {/* DESIGN SKILLS BLOCK */}
        {(activeTab === 'all' || activeTab === 'design') && (
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">
                01
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">DESIGN SKILLS</h3>
                <p className="text-xs text-slate-400">User experience architecture, wireframing & prototyping</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {DESIGN_SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="group p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-800/50 hover:-translate-y-1 transition-all duration-200 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/70 border border-slate-700/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(skill.icon)}
                    </div>
                    <span className="text-[10px] text-blue-400/80 font-medium tracking-wide uppercase">
                      UI/UX
                    </span>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CREATIVE SKILLS BLOCK (Landing page, Graphic design, Social media removed per request) */}
        {(activeTab === 'all' || activeTab === 'creative') && (
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-xs">
                02
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">CREATIVE SKILLS</h3>
                <p className="text-xs text-slate-400">Content production, app interfaces & modern visual publishing</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {CREATIVE_SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="group p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/40 hover:bg-slate-800/50 hover:-translate-y-1 transition-all duration-200 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/70 border border-slate-700/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(skill.icon)}
                    </div>
                    <span className="text-[10px] text-purple-400/80 font-medium tracking-wide uppercase">
                      Creative
                    </span>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TECHNICAL / PROGRAMMING SKILLS BLOCK (Python added per request) */}
        {(activeTab === 'all' || activeTab === 'technical') && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xs">
                03
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">TECHNICAL & PROGRAMMING SKILLS</h3>
                <p className="text-xs text-slate-400">Computational logic, data science fundamentals & software architecture</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TECHNICAL_SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="group p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 hover:bg-slate-800/50 hover:-translate-y-1 transition-all duration-200 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(skill.icon)}
                    </div>
                    <span className="text-[10px] text-amber-400/90 font-mono font-semibold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 uppercase">
                      IBM Certified
                    </span>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors font-display">
                      {skill.name}
                    </h4>
                    {skill.subtitle && (
                      <p className="text-xs text-slate-400 mt-1">
                        {skill.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
