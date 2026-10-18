import React from 'react';
import { motion } from 'motion/react';
import { Page } from '../types';
import { HERO_IMAGE, CONTACT_INFO, SHOWCASE_PROJECTS, CAPABILITIES, FOUNDER_IMAGE } from '../data/content';
import { InteractiveBuilder } from '../components/InteractiveBuilder';
import { ArrowRight, CheckCircle2, Zap, ArrowUpRight, ShieldCheck, MessageSquare, Mail, Phone } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onSetPrefill: (text: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSetPrefill }) => {
  const handleApplyBlueprint = (summary: string) => {
    onSetPrefill(summary);
    onNavigate('contact');
  };

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Editorial Kicker */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-4 tracking-wide uppercase">
            <span>Bespoke Web Engineering</span>
            <span aria-hidden="true">·</span>
            <span>Sub-second Load Times</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-700 font-semibold">Available for Work</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-7 space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] [text-wrap:balance]">
                High-Performance Custom Websites That Drive Verifiable Revenue.
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                We design and engineer bespoke web systems tailored for high speed, conversion, and clean aesthetics. From scalable e-commerce storefronts to enterprise corporate portals, every site is crafted with zero-compromise code.
              </p>

              {/* Direct Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm cursor-pointer whitespace-nowrap flex items-center gap-2"
                >
                  <span>Request Project Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent('Hello Muhammad Abdullah, I want to discuss a new website project.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-300 rounded-lg hover:bg-emerald-100 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Direct WhatsApp: {CONTACT_INFO.phone}</span>
                </a>
              </div>

              {/* Quantitative Metrics Row */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900 text-sm font-mono-numbers">40+</span>
                  <span>Web Systems Delivered</span>
                </div>
                <span aria-hidden="true" className="text-slate-300">|</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900 text-sm font-mono-numbers">&lt; 0.8s</span>
                  <span>Average Page Load</span>
                </div>
                <span aria-hidden="true" className="text-slate-300">|</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900 text-sm font-mono-numbers">100%</span>
                  <span>Code Ownership Guaranteed</span>
                </div>
              </div>
            </motion.div>

            {/* Focal Hero Image Anchor */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md">
                <img
                  src={HERO_IMAGE}
                  alt="Apex Web Studio digital development engineering workspace"
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] sm:h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <div className="text-xs uppercase tracking-wider font-semibold text-slate-300">
                      Engineering & Design Laboratory
                    </div>
                    <div className="text-sm font-medium">
                      Led by {CONTACT_INFO.engineerName} · Fast Turnaround
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Blueprint Simulator */}
      <InteractiveBuilder
        lang="en"
        onApplySpecification={handleApplyBlueprint}
      />

      {/* Featured Services Preview Strip */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                Engineering Capabilities
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 [text-wrap:balance]">
                Tailored Disciplines Engineered For Growth
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs font-semibold text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Explore All Detailed Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.number}
                className="p-6 bg-slate-50 border border-slate-200 rounded-xl hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="font-mono text-xs font-bold text-slate-400">
                    {cap.number}.
                  </div>
                  <h3 className="font-bold text-base text-slate-900 leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cap.tagline}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                Proven Track Record
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 [text-wrap:balance]">
                Case Studies With Concrete Commercial Outcomes
              </h2>
            </div>
            <button
              onClick={() => onNavigate('portfolio')}
              className="text-xs font-semibold text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SHOWCASE_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] bg-slate-100 overflow-hidden border-b border-slate-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                      {project.categoryLabel}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {project.tagline}
                    </p>

                    <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx}>
                          <div className="text-base font-bold text-slate-900 font-mono-numbers">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-slate-500 truncate">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => onNavigate('portfolio')}
                    className="w-full py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    View Project Breakdown
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Quick Contact Banner */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
              <img
                src={FOUNDER_IMAGE}
                alt="Founder Abdullah Khan"
                className="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-400 shadow-md shrink-0"
              />
              <div className="space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                  Founder: Abdullah Khan
                </div>
                <h3 className="text-2xl font-bold tracking-tight">
                  Ready to Start Your Website Project?
                </h3>
                <p className="text-xs text-slate-400 max-w-md">
                  Reach out directly via WhatsApp ({CONTACT_INFO.phone}) or Email ({CONTACT_INFO.email}) for a response within 15 minutes.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={`https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent('Hello Abdullah, I would like to get a quote for my new website.')}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: {CONTACT_INFO.phone}</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-3 bg-white text-slate-900 text-xs font-bold rounded-xl hover:bg-slate-100 transition-colors cursor-pointer shadow-md"
              >
                Direct Inquiry Desk
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
