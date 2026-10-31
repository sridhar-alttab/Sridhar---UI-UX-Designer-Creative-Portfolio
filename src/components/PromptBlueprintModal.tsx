import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Sparkles, 
  Terminal, 
  Layers, 
  ExternalLink,
  Code2
} from 'lucide-react';
import { MASTER_DRIBBBLE_PROMPT } from '../data/portfolioData';

interface PromptBlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromptBlueprintModal: React.FC<PromptBlueprintModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(MASTER_DRIBBBLE_PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#0c1222] border border-white/20 rounded-3xl shadow-2xl overflow-hidden my-8 text-left text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/80">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Best AI Prompt & Portfolio Architecture Blueprint
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close prompt blueprint modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="max-h-[75vh] overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Explanation Banner */}
          <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-xs sm:text-sm text-blue-200 leading-relaxed flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block mb-0.5">
                Engineered Prompt for Dribbble-Grade Portfolio Websites
              </span>
              This prompt was structured following senior frontend design principles: explicit 60-30-10 color allocation, strict negative constraints (no fake percentages, no programming languages in design skills, exactly 4 verified projects), authentic personal data anchoring, and full interactive case studies.
            </div>
          </div>

          {/* Prompt Box */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                <span>The Master Prompt (Ready to Copy)</span>
              </span>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white shadow transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Entire Prompt'}</span>
              </button>
            </div>

            <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-[11px] sm:text-xs text-slate-300 font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap max-h-96">
              {MASTER_DRIBBBLE_PROMPT}
            </pre>
          </div>

          {/* Key Prompt Ingredients Breakdown */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Why This Prompt Generates Top 1% Results
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                <div className="font-bold text-blue-400">1. Strict Negative Rules</div>
                <div className="text-slate-400 leading-normal">
                  Prevents LLMs from hallucinating programming languages in a design portfolio or generating fake progress bars.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                <div className="font-bold text-purple-400">2. Fixed Project Scope</div>
                <div className="text-slate-400 leading-normal">
                  Locks the exactly requested four projects (Fee Reminder Bot, AgriTamil AI, AgriSoil AI, CivicFix) with distinct problem/solution framing.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                <div className="font-bold text-emerald-400">3. Real Visual Assets</div>
                <div className="text-slate-400 leading-normal">
                  Anchors the portfolio with Sridhar's authentic portrait photo and high-fidelity Behance-grade UI mockups.
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-slate-900/80">
          <span className="text-xs text-slate-400">
            Dribbble Portfolio Prompt Spec
          </span>
          <button
            onClick={handleCopy}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
          >
            {copied ? 'Copied!' : 'Copy Prompt'}
          </button>
        </div>

      </div>
    </div>
  );
};
