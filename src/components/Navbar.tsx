import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Sparkles, 
  FileText, 
  ArrowUpRight,
  Code2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenPromptBlueprint: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenPromptBlueprint,
  isDarkMode,
  onToggleTheme
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Creative Space', href: '#creative-space' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-[#070b14]/85 dark:bg-[#070b14]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <a 
            href="#" 
            className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              S
            </div>
            <span className="font-display font-bold text-white tracking-tight">
              Sridhar<span className="text-blue-500">.</span>
            </span>
          </a>

          {/* Zone 2: 4–6 concise single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-blue-400 relative py-1 text-slate-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary actions & utilities */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Best Prompt Button for Dribbble inspiration */}
            <button
              onClick={onOpenPromptBlueprint}
              title="View & Copy Best AI Prompt for this Portfolio"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-lg border border-slate-700/60 transition-all duration-150 whitespace-nowrap shrink-0"
            >
              <Code2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Prompt Blueprint</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors whitespace-nowrap shrink-0"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span>Resume</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle visual theme"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-blue-400" />}
            </button>

            {/* Primary Action Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg shadow-sm shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-[#0c1222] border border-white/10 rounded-2xl shadow-xl space-y-3">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-blue-400 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                <span>View & Download Resume</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPromptBlueprint();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 rounded-lg"
              >
                <Code2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Copy Portfolio AI Prompt</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
