import React from 'react';
import { Page } from '../types';
import { CONTACT_INFO, FOUNDER_IMAGE } from '../data/content';
import { Mail, Phone, MessageSquare, MapPin, CheckCircle, Shield, Award, Terminal } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header & Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              About Apex Web Studio
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 [text-wrap:balance]">
              Engineering High-Speed Websites That Turn Traffic Into Growth.
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              Apex Web Studio was founded with a clear principle: businesses deserve websites that are fast, dependable, and engineered to drive measurable revenue — not slow, bloated templates loaded with unnecessary plugins.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Directed by <strong>Founder Abdullah Khan</strong>, we build modern digital storefronts, corporate web applications, and booking platforms using React, TypeScript, and Tailwind CSS.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent('Hi Abdullah, I would like to learn more about your services.')}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-[#25D366] text-white text-xs font-semibold rounded-lg hover:bg-[#20ba59] transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: {CONTACT_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}?subject=Web%20Project%20Inquiry`}
                className="px-5 py-3 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md p-6 space-y-6">
              <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                <img
                  src={FOUNDER_IMAGE}
                  alt="Founder Abdullah Khan"
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-slate-900 shadow-md shrink-0"
                />
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Founder
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    Abdullah Khan
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    {CONTACT_INFO.founderTitle}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="font-mono text-slate-800">{CONTACT_INFO.email}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="font-mono text-slate-800">{CONTACT_INFO.phoneDisplay}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{CONTACT_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-emerald-700 font-semibold">{CONTACT_INFO.availability}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors cursor-pointer text-center"
                >
                  Start A Project Conversation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Engineering Principles */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-xs space-y-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              Core Principles
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How We Build Differently
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200/80 space-y-3">
              <Terminal className="w-5 h-5 text-slate-900" />
              <h3 className="font-bold text-base text-slate-900">Zero Technical Bloat</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We craft each site with hand-written, component-driven React and TypeScript. No drag-and-drop builder overhead, no plugin dependency hell, and guaranteed fast loading.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200/80 space-y-3">
              <Shield className="w-5 h-5 text-slate-900" />
              <h3 className="font-bold text-base text-slate-900">Commercial Rigor</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every layout decision is guided by conversion psychology. We eliminate distractions, provide clear single-line calls to action, and make WhatsApp ordering effortless.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200/80 space-y-3">
              <Award className="w-5 h-5 text-slate-900" />
              <h3 className="font-bold text-base text-slate-900">Direct Engineering Access</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You work directly with the lead software architect. No account managers or communication bottlenecks — your project gets executed with precision from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
