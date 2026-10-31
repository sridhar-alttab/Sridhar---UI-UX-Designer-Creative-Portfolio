import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Send, 
  MessageSquare, 
  MapPin, 
  CheckCircle2, 
  Phone,
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Please enter your name.';
    if (!form.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!form.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!form.message.trim()) {
      errs.message = 'Please provide project or inquiry details.';
    } else if (form.message.trim().length < 6) {
      errs.message = 'Please enter at least 6 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const getEmailSubject = () => {
    return form.subject ? `[Portfolio Inquiry] ${form.subject}` : `[Portfolio Inquiry] New message from ${form.name}`;
  };

  const getEmailBody = () => {
    return `Hi Sridhar,\n\nYou have a new inquiry from your portfolio website!\n\nName: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\nMessage:\n${form.message}\n\nSent from Portfolio Contact Form`;
  };

  const getWhatsAppText = () => {
    return `Hi Sridhar! I saw your portfolio and want to connect.\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Subject:* ${form.subject}\n\n*Message:* ${form.message}`;
  };

  const saveInquiry = () => {
    try {
      const existing = JSON.parse(localStorage.getItem('sridhar_inquiries') || '[]');
      existing.unshift({
        id: Date.now(),
        date: new Date().toLocaleString(),
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message
      });
      localStorage.setItem('sridhar_inquiries', JSON.stringify(existing));
    } catch (e) {}
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    saveInquiry();

    try {
      // Send form directly to Sridhar's inbox via FormSubmit AJAX API
      await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: getEmailSubject(),
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          recipient: PERSONAL_INFO.email
        })
      });
    } catch (err) {
      // Even if network blocks cross-origin, local storage and one-click direct options are guaranteed
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (e) {}
    }
  };

  const handleSendViaGmail = () => {
    const subject = encodeURIComponent(getEmailSubject());
    const body = encodeURIComponent(getEmailBody());
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(getWhatsAppText());
    const waUrl = `https://wa.me/${PERSONAL_INFO.phoneRaw}?text=${text}`;
    window.open(waUrl, '_blank');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#070b14]/80">
      {/* Background ambient blur */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-t from-blue-600/15 via-indigo-600/10 to-transparent blur-[160px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
            Have a Project in Mind? Let's Talk!
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Whether you have a UI/UX case study to discuss, a freelance project, or an internship opportunity, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white font-display">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {/* Email card */}
                <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase text-slate-400">
                        Email Address
                      </div>
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}`} 
                        className="text-xs sm:text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase text-slate-400">
                      Location
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>

                {/* Mobile Phone Card */}
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between gap-3 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase text-emerald-400">
                        Mobile Number
                      </div>
                      <a 
                        href={`tel:${PERSONAL_INFO.phoneRaw}`}
                        className="text-xs sm:text-sm font-bold text-white hover:text-emerald-300 transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handleCopyPhone}
                      title="Copy mobile number"
                      className="p-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 transition-colors"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href={`tel:${PERSONAL_INFO.phoneRaw}`}
                      className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
                    >
                      Call
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <a
                  href={PERSONAL_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-emerald-500/40 flex items-center justify-between gap-3 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase text-emerald-400">
                        WhatsApp Fast Chat
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-300">
                        {PERSONAL_INFO.phone}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                    Chat →
                  </span>
                </a>
              </div>

              {/* Direct Channels List (Instagram removed) */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Connect Directly
                </div>
                
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={`tel:${PERSONAL_INFO.phoneRaw}`}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/60 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 hover:border-emerald-500/40 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>Call Sridhar</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/60 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 hover:border-emerald-500/40 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/60 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 hover:border-blue-500/40 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/60 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 hover:border-purple-500/40 transition-colors"
                  >
                    <Github className="w-4 h-4 text-purple-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/60 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 hover:border-emerald-500/40 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-emerald-400" />
                    <span>Email Direct</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 shadow-xl">
              
              {submitted ? (
                <div className="text-center py-10 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <h3 className="text-2xl font-bold text-white font-display">
                      Message Ready to Dispatch!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Your inquiry has been formatted to send directly to Sridhar at <strong className="text-blue-400">{PERSONAL_INFO.email}</strong> and <strong className="text-emerald-400">{PERSONAL_INFO.phone}</strong>.
                    </p>
                  </div>

                  {/* Guaranteed Sending Channels */}
                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-3 max-w-lg mx-auto text-left">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Choose Your Preferred Sending App:
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        onClick={handleSendViaGmail}
                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all hover:scale-[1.01]"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Send via Gmail Web</span>
                      </button>

                      <button
                        onClick={handleSendViaWhatsApp}
                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.01]"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send via WhatsApp</span>
                      </button>
                    </div>

                    <div className="pt-1 text-center">
                      <a
                        href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(getEmailSubject())}&body=${encodeURIComponent(getEmailBody())}`}
                        className="text-xs text-blue-400 hover:text-blue-300 underline"
                      >
                        Or launch Default Email Client (Apple Mail / Outlook)
                      </a>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-center">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="text-xs text-slate-400 hover:text-white underline transition-colors"
                    >
                      Compose another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-semibold text-slate-300">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => {
                          setForm({ ...form, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="e.g. Alex Johnson"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border ${
                          errors.name ? 'border-rose-500' : 'border-slate-700'
                        } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-semibold text-slate-300">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="e.g. alex@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border ${
                          errors.email ? 'border-rose-500' : 'border-slate-700'
                        } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-semibold text-slate-300">
                      Subject <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => {
                        setForm({ ...form, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: '' });
                      }}
                      placeholder="e.g. UI/UX Design Collaboration / Freelance Project"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border ${
                        errors.subject ? 'border-rose-500' : 'border-slate-700'
                      } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-semibold text-slate-300">
                      Message Details <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => {
                        setForm({ ...form, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Tell me about your project goals, timelines, or requirements..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border ${
                        errors.message ? 'border-rose-500' : 'border-slate-700'
                      } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-2 space-y-2.5">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-60 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Message to Sridhar...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message (Email to {PERSONAL_INFO.email})</span>
                        </>
                      )}
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          if (validate()) {
                            saveInquiry();
                            handleSendViaGmail();
                          }
                        }}
                        className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-colors border border-slate-700"
                      >
                        <Mail className="w-3.5 h-3.5 text-blue-400" />
                        <span>Send via Gmail Web</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (validate()) {
                            saveInquiry();
                            handleSendViaWhatsApp();
                          }
                        }}
                        className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-xs font-semibold text-emerald-300 hover:text-white transition-colors border border-emerald-500/30"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Send via WhatsApp (+91 96776 23051)</span>
                      </button>
                    </div>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
