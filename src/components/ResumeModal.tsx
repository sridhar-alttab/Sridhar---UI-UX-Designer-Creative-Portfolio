import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  MapPin, 
  Phone,
  GraduationCap, 
  Briefcase, 
  CheckCircle2, 
  FileText,
  Award,
  Layers
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, DESIGN_SKILLS, CREATIVE_SKILLS, TECHNICAL_SKILLS, CERTIFICATIONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate clean text resume export
    const content = `
======================================================
SRIDHAR - RESUME
UI/UX Designer | Content Creator | Creative Designer
Salem, Tamil Nadu, India | Mobile: ${PERSONAL_INFO.phone} | ${PERSONAL_INFO.email}
======================================================

EDUCATION
---------
B.Sc Computer Science
Salem, Tamil Nadu, India

PROFESSIONAL IDENTITY & SUMMARY
-------------------------------
"Designing Digital Experiences & Creating Meaningful Content."
Passionate UI/UX designer and creative digital content creator with a strong Computer Science academic foundation. Focused on translating ideas into intuitive, user-friendly interfaces, automated systems, and high-impact visual media.

DESIGN SKILLS
-------------
${DESIGN_SKILLS.map(s => s.name).join(' · ')}

CREATIVE SKILLS
---------------
${CREATIVE_SKILLS.map(s => s.name).join(' · ')}

TECHNICAL & PROGRAMMING SKILLS
------------------------------
${TECHNICAL_SKILLS.map(s => `${s.name} (${s.subtitle})`).join(' · ')}

FEATURED PROJECTS
-----------------
1. FEE REMINDER BOT
   A Smart College Fee Reminder System designed to simplify student fee management and automate fee deadline reminders.
   Features: Student Fee Management, Automated Fee Reminders, Admin Dashboard, Student Information Management, Deadline Notifications.

2. AGRITAMIL AI
   An AI-powered agricultural assistance platform designed to provide useful agricultural information and smart support for farmers.

3. AGRISOIL AI
   An AI-based soil analysis and agricultural support platform designed to provide soil-related insights and support smarter farming decisions.

4. CIVICFIX (Report. Track. Resolve.)
   A Smart Local Issue Reporting & Resolution System that allows users to report public issues and track their resolution status.
   Features: Report Local Issues, Upload Issue Images, Track Complaints, Issue Status Updates, Admin Dashboard, Department Management.

CERTIFICATIONS
--------------
- IBM & Coursera: Introduction to UX/UI Design (ID: QIYHZP1YD7VY, Jun 18, 2026)
- IBM & Coursera: Python for Data Science, AI & Development (ID: H4FYBJNZ5PR9, Dec 25, 2025)

OPPORTUNITIES
-------------
Available for Freelance Projects, Open to Internships, Remote Opportunities & Collaborations.
======================================================
    `.trim();

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Sridhar_UIUX_Designer_Resume_2026.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#0c1222] border border-white/20 rounded-3xl shadow-2xl overflow-hidden my-8 text-left text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/80">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Curriculum Vitae / Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print resume"
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              title="Download text resume"
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              aria-label="Close resume modal"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Body (Formatted like an executive designer CV) */}
        <div className="max-h-[75vh] overflow-y-auto p-6 sm:p-8 space-y-6 bg-slate-950/40">
          
          {/* Header Block */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <h2 className="text-3xl font-extrabold text-white font-display">
                Sridhar
              </h2>
              <p className="text-sm font-semibold text-blue-400 mt-0.5">
                UI/UX Designer | Content Creator | Creative Designer
              </p>
              <p className="text-xs text-slate-400 mt-1 italic">
                "{PERSONAL_INFO.subtitle}"
              </p>
            </div>

            <div className="text-xs text-slate-300 space-y-1 sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Salem, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                <span>B.Sc Computer Science</span>
              </div>
            </div>
          </div>

          {/* About Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              B.Sc Computer Science student passionate about UI/UX design, content creation, and creative digital experiences. Skilled in transforming complex ideas into user-friendly interfaces, designing modern layouts in Figma and Canva, and building engaging visual media.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Education
            </h3>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-white block">Bachelor of Science in Computer Science (B.Sc CS)</span>
                <span className="text-slate-400">Salem, Tamil Nadu, India</span>
              </div>
              <span className="text-[11px] font-mono text-blue-300">Undergraduate</span>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Core Competencies
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 space-y-1.5">
                <span className="font-semibold text-slate-200 block">Design Skills:</span>
                <p className="text-slate-300 leading-relaxed">
                  {DESIGN_SKILLS.map(s => s.name).join(' · ')}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 space-y-1.5">
                <span className="font-semibold text-slate-200 block">Creative Skills:</span>
                <p className="text-slate-300 leading-relaxed">
                  {CREATIVE_SKILLS.map(s => s.name).join(' · ')}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 space-y-1.5 sm:col-span-2">
                <span className="font-semibold text-slate-200 block">Technical & Programming:</span>
                <p className="text-slate-300 leading-relaxed">
                  {TECHNICAL_SKILLS.map(s => `${s.name} (${s.subtitle})`).join(' · ')}
                </p>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Selected UI/UX Projects
            </h3>

            <div className="space-y-2.5">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">
                      {proj.number}. {proj.title}
                    </span>
                    <span className="text-[10px] text-blue-300 font-mono">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="text-[11px] text-slate-400 pt-1">
                    Features: {proj.features.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Certifications & Learning
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="p-3 rounded-xl bg-slate-900/60 border border-white/5 space-y-0.5">
                  <div className="font-bold text-white">{cert.title}</div>
                  <div className="text-slate-400 text-[11px]">Authorized by {cert.issuer} · {cert.platform} ({cert.issueDate})</div>
                  <div className="text-[10px] font-mono text-blue-300">ID: {cert.credentialId}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-slate-900/80">
          <span className="text-xs text-slate-400">
            Available for immediate opportunities
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Plain Text CV</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
