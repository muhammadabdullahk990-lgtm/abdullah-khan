import React, { useState, useEffect } from 'react';
import { InquiryFormData } from '../types';
import { CONTACT_INFO, FAQS, FOUNDER_IMAGE } from '../data/content';
import { MessageSquare, Mail, Phone, Copy, Check, Send, Clock, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

interface ContactPageProps {
  prefilledScope: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ prefilledScope }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    whatsapp: '',
    projectType: 'E-Commerce Online Store',
    estimatedBudget: 'PKR 65,000 - 98,000 / $250 - $380',
    details: prefilledScope || ''
  });

  const [errors, setErrors] = useState<Partial<InquiryFormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    if (prefilledScope) {
      setFormData(prev => ({ ...prev, details: prefilledScope }));
    }
  }, [prefilledScope]);

  const validate = (): boolean => {
    const errs: Partial<InquiryFormData> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.whatsapp.trim() || formData.whatsapp.length < 8) errs.whatsapp = 'Valid WhatsApp or phone number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleCopySummary = () => {
    const text = `Apex Studio Project Brief:\nName: ${formData.fullName}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nProject: ${formData.projectType}\nBudget: ${formData.estimatedBudget}\nDetails: ${formData.details}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const directWhatsappLink = `https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent(
    `Hello Abdullah Khan,\nI would like to inquire about building a website.\nName: ${formData.fullName || 'Client'}\nType: ${formData.projectType}\nBudget: ${formData.estimatedBudget}\nDetails: ${formData.details || 'Standard package'}`
  )}`;

  return (
    <div className="py-16 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Inquiry & Contact Desk
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 [text-wrap:balance]">
            Let’s Build Your Website. Get In Touch Today.
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Submit your requirements below to receive a comprehensive proposal within 2 hours, or reach out directly on WhatsApp or Email for instant communication.
          </p>
        </div>

        {/* Contact Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Founder Card - Abdullah Khan */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={FOUNDER_IMAGE}
                    alt="Founder Abdullah Khan"
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-slate-900 shadow-md"
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Founder & Lead Architect
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    Abdullah Khan
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Direct Technical Lead</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                "When you build with us, you communicate directly with me — no account managers or lost requirements. Let’s turn your vision into a lightning-fast, high-converting web platform."
              </p>
            </div>

            {/* Direct WhatsApp Card */}
            <a
              href={directWhatsappLink}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-2xl border border-emerald-200 bg-emerald-50/60 hover:bg-emerald-50 transition-colors flex items-center justify-between group shadow-xs block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#25D366] text-white rounded-xl shadow-xs">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Direct WhatsApp
                  </div>
                  <div className="text-sm font-mono font-bold text-emerald-800 mt-0.5">
                    {CONTACT_INFO.phone}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Typical response within 15 minutes
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform">
                Chat Now →
              </span>
            </a>

            {/* Direct Email Card */}
            <a
              href={`mailto:${CONTACT_INFO.email}?subject=Website%20Inquiry%20from%20Apex%20Studio`}
              className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors flex items-center justify-between group shadow-xs block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-900 text-white rounded-xl shadow-xs">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Official Engineering Inbox
                  </div>
                  <div className="text-xs font-mono font-semibold text-slate-700 mt-0.5 break-all">
                    {CONTACT_INFO.email}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Detailed technical briefs & RFPs
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-700 group-hover:translate-x-1 transition-transform">
                Email →
              </span>
            </a>

            {/* Direct Phone Card */}
            <a
              href={`tel:+923242360321`}
              className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors flex items-center justify-between group shadow-xs block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-100 text-slate-800 rounded-xl border border-slate-200">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Direct Voice Call
                  </div>
                  <div className="text-sm font-mono font-bold text-slate-800 mt-0.5">
                    {CONTACT_INFO.phoneDisplay}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Monday – Saturday, 9:00 AM – 9:00 PM PKT
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-700 group-hover:translate-x-1 transition-transform">
                Call →
              </span>
            </a>

            {/* Direct Information Box */}
            <div className="p-5 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-slate-900">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Rapid Turnaround Guarantee</span>
              </div>
              <p>
                Every proposal inquiry receives an architecture recommendation, exact day-by-day milestone delivery plan, and fixed cost breakdown with zero obligation.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xs">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. Muhammad Abdullah Khan has received your brief and will review your specifications shortly.
                  </p>
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={directWhatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 bg-[#25D366] text-white text-xs font-bold rounded-lg hover:bg-[#20ba59] transition-colors flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Follow Up On WhatsApp Now</span>
                    </a>
                    <button
                      onClick={handleCopySummary}
                      className="px-4 py-2.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Abdullah Khan"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-slate-900 ${
                          errors.fullName ? 'border-red-400' : 'border-slate-200'
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-slate-900 ${
                          errors.email ? 'border-red-400' : 'border-slate-200'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.whatsapp}
                        onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="03242360321 or +92..."
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-slate-900 ${
                          errors.whatsapp ? 'border-red-400' : 'border-slate-200'
                        }`}
                      />
                      {errors.whatsapp && <p className="text-[11px] text-red-500 mt-1">{errors.whatsapp}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                        Project Category
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-slate-900"
                      >
                        <option value="E-Commerce Online Store">Online Shopping Store (E-Commerce)</option>
                        <option value="Business / Corporate Website">Business / Corporate Website (5 Pages)</option>
                        <option value="Landing Page / Funnel">High-Converting Landing Page</option>
                        <option value="Medical / Clinic Portal">Medical / Doctor Appointment Portal</option>
                        <option value="Restaurant / Cafe Website">Restaurant Menu & Ordering Website</option>
                        <option value="Custom Web App">Custom Web Application / Software</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                      Estimated Budget Range
                    </label>
                    <select
                      value={formData.estimatedBudget}
                      onChange={e => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-slate-900"
                    >
                      <option value="PKR 35,000 - 50,000 / $140 - $200">PKR 35,000 - 50,000 (Conversion Landing Page)</option>
                      <option value="PKR 65,000 - 98,000 / $250 - $380">PKR 65,000 - 98,000 (Standard Business / E-Commerce)</option>
                      <option value="PKR 100,000 - 200,000 / $400 - $750">PKR 100,000 - 200,000 (Advanced Store / Portal)</option>
                      <option value="Custom Enterprise Scope / $1,000+">Custom Enterprise Scope</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                      Project Requirements / Features
                    </label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={e => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Describe your brand, desired sections, payment gateways needed, or links to references you like..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-slate-900"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Proposal Request</span>
                    </button>

                    <a
                      href={directWhatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-5 py-3 bg-[#25D366] text-white text-xs font-bold rounded-xl hover:bg-[#20ba59] transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Directly to WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="pt-12 border-t border-slate-200">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              Common Questions
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Frequently Asked Inquiries
            </h2>
          </div>

          <div className="space-y-3 max-w-4xl">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                  >
                    <span className="font-semibold text-sm text-slate-900">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
