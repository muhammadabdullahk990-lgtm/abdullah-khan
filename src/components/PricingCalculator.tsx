import React, { useState } from 'react';
import { Language } from '../types';
import { Check, Clock, ShieldCheck, Code, ArrowRight } from 'lucide-react';

interface PricingCalculatorProps {
  lang: Language;
  onApplyEstimate: (estimateSummary: string) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ lang, onApplyEstimate }) => {
  const [currency, setCurrency] = useState<'PKR' | 'USD'>('PKR');
  const [tier, setTier] = useState<'landing' | 'business' | 'ecommerce' | 'custom'>('business');
  const [addons, setAddons] = useState({
    whatsapp: true,
    paymentGateway: true,
    seoOptimization: true,
    expeditedDelivery: false
  });

  // Base pricing in PKR & USD
  const baseRates = {
    landing: { pkr: 35000, usd: 140, days: '4 - 6 Days', pages: '1 Page Conversion Architecture' },
    business: { pkr: 65000, usd: 250, days: '7 - 10 Days', pages: 'Up to 5 Fully Custom Pages' },
    ecommerce: { pkr: 98000, usd: 380, days: '10 - 14 Days', pages: 'Storefront + Dynamic Catalog + Cart' },
    custom: { pkr: 165000, usd: 620, days: '14 - 21 Days', pages: 'Full Web App + Custom Admin Portal' }
  };

  const addonRates = {
    whatsapp: { pkr: 6000, usd: 25, labelEn: 'Direct WhatsApp 1-Tap Ordering System', labelUr: 'WhatsApp 1-Click Order System' },
    paymentGateway: { pkr: 12000, usd: 50, labelEn: 'Payment Gateway Integration (JazzCash / EasyPaisa / Stripe)', labelUr: 'JazzCash, EasyPaisa ya Card Gateway' },
    seoOptimization: { pkr: 8000, usd: 30, labelEn: 'Technical SEO & Google Business Schema', labelUr: 'Google Search Ranking & Schema SEO' },
    expeditedDelivery: { pkr: 15000, usd: 60, labelEn: 'Priority Express Delivery (Fast-Track Staging)', labelUr: 'Express Delivery (Waqt Se Pehle Delivery)' }
  };

  const toggleAddon = (key: keyof typeof addons) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Calculate totals
  const totalPKR = baseRates[tier].pkr +
    (addons.whatsapp ? addonRates.whatsapp.pkr : 0) +
    (addons.paymentGateway ? addonRates.paymentGateway.pkr : 0) +
    (addons.seoOptimization ? addonRates.seoOptimization.pkr : 0) +
    (addons.expeditedDelivery ? addonRates.expeditedDelivery.pkr : 0);

  const totalUSD = baseRates[tier].usd +
    (addons.whatsapp ? addonRates.whatsapp.usd : 0) +
    (addons.paymentGateway ? addonRates.paymentGateway.usd : 0) +
    (addons.seoOptimization ? addonRates.seoOptimization.usd : 0) +
    (addons.expeditedDelivery ? addonRates.expeditedDelivery.usd : 0);

  const formattedPrice = currency === 'PKR'
    ? `Rs. ${totalPKR.toLocaleString()}`
    : `$${totalUSD.toLocaleString()}`;

  const handleApply = () => {
    const tierNames = {
      landing: 'High-Converting Landing Page',
      business: 'Standard Corporate / Business (5 Pages)',
      ecommerce: 'Complete Online E-Commerce Store',
      custom: 'Custom Web Application & Portal'
    };
    const summary = `Estimated Package: ${tierNames[tier]} | Total: ${formattedPrice} | Delivery: ${baseRates[tier].days}`;
    onApplyEstimate(summary);
  };

  return (
    <section id="pricing" className="py-24 bg-white border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              {lang === 'en' ? 'Transparent Investment & Timelines' : 'Wazeh Qeemat Aur Delivery Ka Waqt'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 [text-wrap:balance]">
              {lang === 'en'
                ? 'Calculate Your Exact Project Budget With Zero Hidden Surcharges'
                : 'Apni Website Ka Kharacha Aur Waqt Foran Maloom Karein'}
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              {lang === 'en'
                ? 'Every build comes with 100% full source code ownership, free SSL security setup, mobile responsiveness, and a 30-day post-launch bug warranty.'
                : 'Har project ke sath code ki mukammal ownership, mobile testing, free SSL aur 30 din ki warranty shamil hai.'}
            </p>
          </div>

          {/* Currency Switcher */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 border border-slate-200 rounded-lg shadow-xs shrink-0">
            <button
              onClick={() => setCurrency('PKR')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                currency === 'PKR'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              PKR (Rs.)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                currency === 'USD'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Base Tier Selection */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                {lang === 'en' ? 'Step 1: Choose Website Architecture' : 'Marhala 1: Website Ki Qisam Chuniye'}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    id: 'landing' as const,
                    nameEn: 'Conversion Landing Page',
                    nameUr: 'Single Page Landing Page',
                    descEn: 'Single long-scroll page tailored for sales or lead gen campaigns.',
                    descUr: 'Leads aur ads campaign ke liye targeted 1-page website.'
                  },
                  {
                    id: 'business' as const,
                    nameEn: 'Complete Business Website',
                    nameUr: 'Mukammal Business Website (5 Pages)',
                    descEn: 'Home, Services, About, Case Studies, Contact & Inquiry Engine.',
                    descUr: 'Home, Services, Hamara Taaruf, Portfolio aur Rabta Page.'
                  },
                  {
                    id: 'ecommerce' as const,
                    nameEn: 'Full E-Commerce Store',
                    nameUr: 'Online Shopping Store (E-Commerce)',
                    descEn: 'Automated product catalog, shopping cart, discounts & checkout.',
                    descUr: 'Samaan ki list, add to cart, payment aur WhatsApp order alert.'
                  },
                  {
                    id: 'custom' as const,
                    nameEn: 'Custom Web App / Portal',
                    nameUr: 'Custom Web Application / Portal',
                    descEn: 'Database-driven portal, appointment scheduler, or client dashboard.',
                    descUr: 'Database portal, doctor booking, ya custom dashboard.'
                  }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setTier(item.id)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      tier === item.id
                        ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-slate-900">
                          {lang === 'en' ? item.nameEn : item.nameUr}
                        </span>
                        {tier === item.id && <Check className="w-4 h-4 text-slate-900" />}
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {lang === 'en' ? item.descEn : item.descUr}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-200/60 text-xs font-mono font-medium text-slate-700">
                      {currency === 'PKR' ? `Rs. ${baseRates[item.id].pkr.toLocaleString()}` : `$${baseRates[item.id].usd}`}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Optional High-Utility Add-ons */}
            <div className="space-y-3 pt-4">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                {lang === 'en' ? 'Step 2: Add-On Integrations & Priority' : 'Marhala 2: Izaafi Features & Services'}
              </label>

              <div className="space-y-2">
                {(Object.keys(addonRates) as (keyof typeof addonRates)[]).map((key) => {
                  const rate = addonRates[key];
                  const isChecked = addons[key];
                  return (
                    <button
                      key={key}
                      onClick={() => toggleAddon(key)}
                      className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-colors cursor-pointer ${
                        isChecked
                          ? 'border-slate-400 bg-slate-50/80'
                          : 'border-slate-200 bg-white hover:bg-slate-50/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                            isChecked ? 'bg-slate-900 border-slate-900 text-white' : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span className="text-xs font-medium text-slate-800">
                          {lang === 'en' ? rate.labelEn : rate.labelUr}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-600 font-medium">
                        +{currency === 'PKR' ? `Rs. ${rate.pkr.toLocaleString()}` : `$${rate.usd}`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Summary Quotation Column */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 text-white p-7 rounded-2xl space-y-6 shadow-md">
              <div className="pb-4 border-b border-slate-800">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {lang === 'en' ? 'Live Transparent Estimate' : 'Aapka Calculated Budget'}
                </div>
                <div className="text-3xl sm:text-4xl font-bold font-mono-numbers mt-2 tracking-tight text-white">
                  {formattedPrice}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {lang === 'en' ? 'One-time investment · No monthly subscription hostage' : 'Aik dafa ki adaigi · Koi hidden charges nahi'}
                </div>
              </div>

              {/* Scope Breakdown */}
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span>{lang === 'en' ? 'Estimated Launch Time:' : 'Launch Ka Waqt:'}</span>
                  <span className="font-semibold text-white flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    {baseRates[tier].days}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>{lang === 'en' ? 'Included Page Architecture:' : 'Shamil Pages:'}</span>
                  <span className="font-semibold text-white text-right max-w-[200px] truncate">
                    {baseRates[tier].pages}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>{lang === 'en' ? 'Source Code Ownership:' : 'Code Ki Milkiyat:'}</span>
                  <span className="font-semibold text-emerald-400 font-mono">100% Full Handover</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>{lang === 'en' ? 'Post-Launch Bug Warranty:' : 'Launch Ke Baad Support:'}</span>
                  <span className="font-semibold text-emerald-400 font-mono">30 Days Complimentary</span>
                </div>
              </div>

              {/* Trust Deliverables */}
              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free SSL Certificate & Custom Domain Linking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Production-Grade React + Tailwind CSS code</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleApply}
                className="w-full py-3.5 px-4 bg-white text-slate-900 text-xs font-bold rounded-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>{lang === 'en' ? 'Lock In Estimate & Request Proposal' : 'Yeh Budget Select Karke Baat Karein'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
