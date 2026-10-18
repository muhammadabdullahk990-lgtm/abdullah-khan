import React from 'react';
import { Page } from '../types';
import { PricingCalculator } from '../components/PricingCalculator';
import { Check, ShieldCheck, Code, Clock, Zap } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface PricingPageProps {
  onNavigate: (page: Page) => void;
  onSetPrefill: (text: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate, onSetPrefill }) => {
  const handleApplyEstimate = (summary: string) => {
    onSetPrefill(summary);
    onNavigate('contact');
  };

  return (
    <div className="py-16 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Transparent Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 [text-wrap:balance]">
            Fixed-Scope Investment With Zero Hidden Fees
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Configure your exact website scope below. All projects include full source code handover, mobile responsiveness testing, free SSL setup, and 30 days of post-launch warranty.
          </p>
        </div>

        {/* Pricing Calculator Tool */}
        <PricingCalculator
          lang="en"
          onApplyEstimate={handleApplyEstimate}
        />

        {/* Guarantee Banner */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-xs space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-900">
              Our 4 Pillars of Commercial Trust
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Every contract is backed by explicit deliverable milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
              <Code className="w-5 h-5 text-slate-900" />
              <h3 className="font-bold text-sm text-slate-900">100% Code Ownership</h3>
              <p className="text-xs text-slate-600">
                You receive full rights and repository access to your clean TypeScript & React codebase.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
              <Clock className="w-5 h-5 text-slate-900" />
              <h3 className="font-bold text-sm text-slate-900">On-Time Launch Guarantee</h3>
              <p className="text-xs text-slate-600">
                We establish fixed delivery dates with real-time staging previews so you can track progress.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
              <Zap className="w-5 h-5 text-slate-900" />
              <h3 className="font-bold text-sm text-slate-900">99+ Speed Standard</h3>
              <p className="text-xs text-slate-600">
                We guarantee your site loads under 1 second on mobile networks with optimal Core Web Vitals.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
              <ShieldCheck className="w-5 h-5 text-slate-900" />
              <h3 className="font-bold text-sm text-slate-900">30-Day Bug Warranty</h3>
              <p className="text-xs text-slate-600">
                Complimentary post-launch maintenance, bug fixes, and personal video walkthrough included.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
