import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  FileBadge, 
  ShieldCheck, 
  X,
  Sparkles,
  FileText,
  Calendar,
  UserCheck
} from 'lucide-react';
import { CERTIFICATIONS, CertificationItem } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section className="py-24 relative overflow-hidden bg-[#070b14]/70">
      {/* Background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-600/10 blur-[140px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
            Certifications & Learning
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Official industry certifications authorized by IBM and completed through Coursera, validating competencies in UI/UX Design and Python for Data Science & AI.
          </p>
        </div>

        {/* 2 Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="group relative rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 p-6 sm:p-8 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Header ribbon */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <FileBadge className="w-6 h-6" />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold">
                      {cert.platform}
                    </span>
                    <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>

                {/* Cert title and Issuer */}
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors font-display mb-1.5">
                  {cert.title}
                </h3>
                
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 mb-4">
                  <span>Authorized by: <strong className="text-slate-200">{cert.issuer}</strong></span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    <span>{cert.issueDate}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Key Competencies Acquired */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] uppercase font-bold tracking-wider text-slate-400">
                    Validated Competencies:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cert.skillsAcquired.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span className="truncate">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certificate Card Actions */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-slate-400">
                  ID: <span className="text-slate-200">{cert.credentialId}</span>
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-indigo-400" />
                    <span>PDF</span>
                  </a>

                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 text-xs font-medium transition-colors"
                  >
                    <span>Coursera</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-colors"
                  >
                    <span>Inspect</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal for Certificate Verification View */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[#0c1222] border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-8 text-left text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Official Coursera & IBM Certificate
                </span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Official-style Certificate Layout */}
            <div className="my-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-slate-700 relative overflow-hidden shadow-2xl text-center space-y-4">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="text-left">
                  <span className="text-xl sm:text-2xl font-black tracking-widest text-blue-400 font-mono">
                    IBM
                  </span>
                  <div className="text-[10px] text-slate-400">Authorized Course</div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Course Certificate
                  </span>
                  <div className="text-[10px] text-blue-400 font-medium">Offered through Coursera</div>
                </div>
              </div>

              <div className="py-2 space-y-1">
                <div className="text-xs text-slate-400 font-mono">Issued to:</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
                  Sridhar S
                </div>
                <div className="text-xs text-slate-400">has successfully completed</div>
                <div className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 pt-1">
                  {selectedCert.title}
                </div>
                <div className="text-xs text-slate-400">
                  Authorized by {selectedCert.issuer} and offered through {selectedCert.platform}
                </div>
              </div>

              {/* Signatory & Date Footer */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-4 text-left text-xs">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Authorized Signatory:</div>
                  <div className="font-semibold text-slate-200 mt-0.5">{selectedCert.instructor}</div>
                  <div className="text-[10px] text-slate-400">Date: {selectedCert.issueDate}</div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Verification:</div>
                  <div className="font-mono text-blue-300 text-[11px] mt-0.5">{selectedCert.credentialId}</div>
                  <div className="text-[10px] text-emerald-400 font-medium">Identity Confirmed</div>
                </div>
              </div>

            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              {selectedCert.description}
            </p>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2">
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
                >
                  <span>Verify on Coursera</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={selectedCert.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Open Original PDF</span>
                </a>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
