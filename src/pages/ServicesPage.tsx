import React from 'react';
import { motion } from 'motion/react';
import { Page } from '../types';
import { CAPABILITIES, CONTACT_INFO } from '../data/content';
import { Check, X, ArrowRight, Zap, ShoppingCart, Target, Search, Layers, Clock, ShieldCheck, Sparkles } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
  onSelectService: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onSelectService }) => {
  const getIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Zap className="w-5 h-5 text-slate-900" />;
      case '02':
        return <ShoppingCart className="w-5 h-5 text-slate-900" />;
      case '03':
        return <Target className="w-5 h-5 text-slate-900" />;
      case '04':
      default:
        return <Search className="w-5 h-5 text-slate-900" />;
    }
  };

  const handleInquireService = (title: string) => {
    onSelectService(`Inquiry for: ${title}`);
    onNavigate('contact');
  };

  return (
    <div className="py-16 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Services & Engineering Scope
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 [text-wrap:balance]">
            Engineering Disciplines Tailored For Scale And Conversion
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Every business has distinct operational requirements. We engineer tailored web systems that optimize customer touchpoints, automate order workflows, and load in under 1 second.
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div className="space-y-12">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.number}
              className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-xs hover:border-slate-300 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-slate-400">
                      {cap.number}.
                    </span>
                    <div className="p-2 bg-slate-100 rounded-lg border border-slate-200">
                      {getIcon(cap.number)}
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    {cap.title}
                  </h2>

                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                    {cap.tagline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {cap.description}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => handleInquireService(cap.title)}
                      className="px-4 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-slate-50 p-6 rounded-xl border border-slate-200/80 space-y-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                      Core Engineering Standards
                    </h3>
                    <ul className="space-y-2.5">
                      {cap.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 font-mono">
                      Technologies & Protocols Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cap.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-white border border-slate-200 rounded text-xs font-mono text-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Matrix: Custom Architecture vs Generic Builders */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-xs space-y-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              Architectural Standard
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Custom Engineering Outperforms Slow Template Builders
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-mono uppercase text-[10px]">
                  <th className="py-3 px-4">Evaluation Criteria</th>
                  <th className="py-3 px-4 text-slate-900 font-bold bg-slate-50">Apex Custom Architecture</th>
                  <th className="py-3 px-4">WordPress / Generic Builders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-3.5 px-4 font-medium">Page Load Speed</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700 bg-slate-50">Sub-second (&lt; 0.8s LCP)</td>
                  <td className="py-3.5 px-4 text-slate-500">4.5s – 8.0s (heavy plugin bloat)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Mobile Responsiveness</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700 bg-slate-50">100% pixel-tested fluid layouts</td>
                  <td className="py-3.5 px-4 text-slate-500">Often broken or awkward on small phones</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">WhatsApp Checkout Automation</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700 bg-slate-50">Direct formatted 1-click cart payload</td>
                  <td className="py-3.5 px-4 text-slate-500">Requires expensive third-party plugins</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Code & Domain Ownership</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700 bg-slate-50">100% full source code handover</td>
                  <td className="py-3.5 px-4 text-slate-500">Vendor lock-in or recurring hosting traps</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Security Vulnerabilities</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700 bg-slate-50">Static-safe edge hosting, zero SQL injection</td>
                  <td className="py-3.5 px-4 text-slate-500">Vulnerable to unpatched PHP plugin exploits</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Engineering Process Milestones */}
        <div className="space-y-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              Methodology
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Our 4-Stage Development Lifecycle
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Architecture & Wireframe',
                desc: 'We analyze your commercial goals, define page structure, and outline exact customer journey steps.'
              },
              {
                step: '02',
                title: 'UI Design & Brand Craft',
                desc: 'High-fidelity visual design following modern typography standards, accessible colors, and zero fluff.'
              },
              {
                step: '03',
                title: 'Clean Engineering & API',
                desc: 'Frontend development in React & Tailwind CSS, integrated with WhatsApp and payment gateways.'
              },
              {
                step: '04',
                title: 'Staging, Testing & Launch',
                desc: 'Cross-browser testing, Core Web Vitals audit, free SSL setup, and handover of full source code.'
              }
            ].map(stage => (
              <div key={stage.step} className="p-6 bg-white border border-slate-200 rounded-xl space-y-3">
                <div className="text-lg font-bold font-mono text-slate-400">
                  {stage.step}
                </div>
                <h3 className="font-bold text-base text-slate-900">
                  {stage.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 bg-slate-900 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs uppercase font-mono text-slate-400">Direct Consultation</div>
            <h3 className="text-xl font-bold">Have a custom requirement not listed above?</h3>
            <p className="text-xs text-slate-400">
              Speak directly with Lead Engineer Muhammad Abdullah Khan on WhatsApp or Email.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent('Hello Abdullah, I have a specific website requirement to discuss.')}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-[#25D366] text-white text-xs font-bold rounded-lg hover:bg-[#20ba59] transition-colors"
            >
              WhatsApp: {CONTACT_INFO.phone}
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 bg-white text-slate-900 text-xs font-bold rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Send Online Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
