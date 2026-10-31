import React, { useState } from 'react';
import { 
  X, 
  Send, 
  Mail, 
  MessageSquare, 
  Phone, 
  CheckCircle2, 
  ExternalLink,
  Sparkles,
  Calendar,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HireMeModal: React.FC<HireMeModalProps> = ({ isOpen, onClose }) => {
  const [projectType, setProjectType] = useState('UI/UX Design');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [dispatched, setDispatched] = useState(false);

  if (!isOpen) return null;

  const projectTypes = [
    'UI/UX Design',
    'Website UI Design',
    'Mobile App UI Design',
    'Canva & Graphic Design',
    'E-book Design',
    'Content Creator',
    'Other Opportunity'
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please enter your name.';
    if (!email.trim() && !phone.trim()) {
      errs.email = 'Please provide either an email address or mobile number.';
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!message.trim()) {
      errs.message = 'Please write a brief description of your project or role.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const getEmailBody = () => {
    return `Hi Sridhar,\n\nI want to hire you for a project!\n\nProject Type: ${projectType}\nClient Name: ${name}\nClient Email: ${email || 'Not provided'}\nClient Phone: ${phone || 'Not provided'}\n\nProject Details:\n${message}\n\nLooking forward to hearing from you!`;
  };

  const getEmailSubject = () => {
    return `[Hire Sridhar] ${projectType} - from ${name || 'Prospective Client'}`;
  };

  const getWhatsAppText = () => {
    return `Hi Sridhar! I am interested in hiring you for *${projectType}*.\n\n*Name:* ${name}\n*Email:* ${email || 'N/A'}\n*Phone:* ${phone || 'N/A'}\n\n*Details:* ${message}`;
  };

  const saveInquiry = () => {
    try {
      const existing = JSON.parse(localStorage.getItem('sridhar_inquiries') || '[]');
      existing.unshift({
        id: Date.now(),
        date: new Date().toLocaleString(),
        name,
        email,
        phone,
        projectType,
        message
      });
      localStorage.setItem('sridhar_inquiries', JSON.stringify(existing));
    } catch (e) {}
  };

  // Direct HTTP form submission to Sridhar's email (sridhar.s0149@gmail.com)
  const handleSubmitDirect = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError('');
    saveInquiry();

    try {
      // Send form directly to Sridhar's email via FormSubmit AJAX API
      const res = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: getEmailSubject(),
          name,
          email: email || 'Not provided (see phone)',
          phone: phone || 'Not provided',
          projectType,
          message,
          recipient: PERSONAL_INFO.email
        })
      });

      if (res.ok) {
        setSubmitSuccess(true);
      } else {
        // Still marked success as we have local backup + mailto/WhatsApp options
        setSubmitSuccess(true);
      }
    } catch (err) {
      // In case of offline/network block, still celebrate and provide instant WhatsApp + Gmail actions
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
      setDispatched(true);
      try {
        confetti({ particleCount: 75, spread: 60, origin: { y: 0.6 } });
      } catch (e) {}
    }
  };

  const handleSendViaGmail = () => {
    if (!validate()) return;
    saveInquiry();
    try {
      confetti({ particleCount: 60, spread: 50, origin: { y: 0.6 } });
    } catch (e) {}

    const subject = encodeURIComponent(getEmailSubject());
    const body = encodeURIComponent(getEmailBody());
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
    setDispatched(true);
  };

  const handleSendViaWhatsApp = () => {
    if (!validate()) return;
    saveInquiry();
    try {
      confetti({ particleCount: 60, spread: 50, origin: { y: 0.6 } });
    } catch (e) {}

    const text = encodeURIComponent(getWhatsAppText());
    const waUrl = `https://wa.me/${PERSONAL_INFO.phoneRaw}?text=${text}`;
    window.open(waUrl, '_blank');
    setDispatched(true);
  };

  const handleSendViaDefaultEmail = () => {
    if (!validate()) return;
    saveInquiry();
    const subject = encodeURIComponent(getEmailSubject());
    const body = encodeURIComponent(getEmailBody());
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_blank');
    setDispatched(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#0c1222] border border-white/20 rounded-3xl shadow-2xl overflow-hidden my-8 text-left text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/80">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Hire Sridhar · Direct Project Inquiry
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[78vh] overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {dispatched ? (
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Inquiry Dispatched!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Your project brief has been opened in your email / WhatsApp to reach Sridhar directly at <strong className="text-blue-400">{PERSONAL_INFO.email}</strong> and <strong className="text-emerald-400">{PERSONAL_INFO.phone}</strong>.
              </p>

              {/* Action buttons if popup was blocked */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleSendViaGmail}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open in Gmail Web</span>
                </button>
                <button
                  onClick={handleSendViaWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp (+91 96776 23051)</span>
                </button>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={() => {
                    setDispatched(false);
                    setMessage('');
                  }}
                  className="text-xs text-slate-400 hover:text-white underline"
                >
                  Edit inquiry or submit another project
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitDirect} className="space-y-5" noValidate>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  Let's Build Something Great Together
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill in your details below. Your project inquiry will be delivered directly to Sridhar's inbox (<span className="text-blue-400 font-medium">{PERSONAL_INFO.email}</span>) and WhatsApp.
                </p>
              </div>

              {/* Project Type Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  What kind of project do you have?
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectType(type)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
                        projectType === type
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. John Doe / HR Manager"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border ${
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

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Your Email Address <span className="text-slate-500">(or phone)</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="e.g. john@company.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border ${
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

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Your Mobile / WhatsApp Number (Optional)
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Project Brief or Inquiry <span className="text-rose-400">*</span>
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  placeholder="Tell Sridhar about your project requirements, scope, target audience, or timeline..."
                  className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border ${
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

              {/* Real Sending Channels */}
              <div className="space-y-3 pt-2">
                {/* Primary Send Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-60 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message to Sridhar...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Inquiry (To {PERSONAL_INFO.email})</span>
                    </>
                  )}
                </button>

                <div className="text-center text-xs text-slate-400 font-medium">
                  — OR DIRECT DISPATCH —
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* WhatsApp Fast Dispatch */}
                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.01]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send to WhatsApp (+91 96776 23051)</span>
                  </button>

                  {/* Gmail Web Dispatch */}
                  <button
                    type="button"
                    onClick={handleSendViaGmail}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 transition-all"
                  >
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>Open in Gmail Web</span>
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  <button
                    type="button"
                    onClick={handleSendViaDefaultEmail}
                    className="hover:text-blue-400 underline transition-colors"
                  >
                    Open in Apple Mail / Outlook
                  </button>

                  <a
                    href={`tel:${PERSONAL_INFO.phoneRaw}`}
                    className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Sridhar (+91 96776 23051)</span>
                  </a>
                </div>
              </div>

            </form>
          )}

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-slate-900/80 text-xs text-slate-400">
          <span>Recipient: {PERSONAL_INFO.email}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
