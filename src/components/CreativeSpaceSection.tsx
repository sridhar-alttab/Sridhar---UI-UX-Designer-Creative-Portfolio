import React, { useState } from 'react';
import { 
  Sparkles, 
  Phone,
  MessageSquare,
  Linkedin, 
  ExternalLink, 
  Eye, 
  BookOpen, 
  Share2, 
  Layers, 
  X,
  ArrowRight
} from 'lucide-react';
import { CREATIVE_SPACE_ITEMS, CreativeItem, PERSONAL_INFO } from '../data/portfolioData';

export const CreativeSpaceSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<CreativeItem | null>(null);

  const categories = ['All', 'Canva', 'E-book', 'Educational Content', 'Digital Content'];

  const filteredItems = filter === 'All' 
    ? CREATIVE_SPACE_ITEMS 
    : CREATIVE_SPACE_ITEMS.filter(item => item.category === filter);

  return (
    <section id="creative-space" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Content & Visual Media</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
            My Creative Space
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Exploring digital storytelling, carousel design, educational infographics, and e-book publishing.
          </p>

          {/* Quick Contact & Network Banner */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${PERSONAL_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 hover:text-white hover:bg-emerald-500/20 text-xs font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call: {PERSONAL_INFO.phone}</span>
            </a>

            <a
              href={PERSONAL_INFO.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 hover:text-white hover:bg-emerald-500/20 text-xs font-semibold transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Chat</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 hover:text-white hover:bg-blue-500/20 text-xs font-semibold transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn Network</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>

          {/* Category Filter Controls */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  filter === cat
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Media Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('/src/assets/')) {
                      target.src = `/src${item.thumbnail}`;
                    }
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-purple-300 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => setActiveItem(item)}
                    aria-label={`Preview ${item.title}`}
                    className="p-1.5 rounded-lg bg-black/80 backdrop-blur-md text-white hover:bg-purple-600 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-slate-400 font-medium">{item.format}</span>
                  <span className="text-purple-400 font-medium">{item.tools}</span>
                </div>
              </div>

              {/* Action trigger */}
              <div className="px-5 py-2.5 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setActiveItem(item)}
                  className="text-xs font-semibold text-purple-300 hover:text-purple-200 inline-flex items-center gap-1.5"
                >
                  <span>Inspect Creative Piece</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Preview Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveItem(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[#0c1222] border border-white/15 rounded-3xl shadow-2xl overflow-hidden text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/60">
              <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                {activeItem.category} Showcase
              </span>
              <button
                onClick={() => setActiveItem(null)}
                aria-label="Close creative preview"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-slate-950 border border-white/10">
                <img
                  src={activeItem.thumbnail}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('/src/assets/')) {
                      target.src = `/src${activeItem.thumbnail}`;
                    }
                  }}
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  {activeItem.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Format: {activeItem.format} · Built using: {activeItem.tools}
                </p>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={PERSONAL_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Discuss this creative piece on WhatsApp</span>
                </a>

                <button
                  onClick={() => setActiveItem(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
