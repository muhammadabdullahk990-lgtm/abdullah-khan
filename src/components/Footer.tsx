import React from 'react';
import { Page } from '../types';
import { CONTACT_INFO } from '../data/content';
import { Mail, Phone, MessageSquare } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-100">
          <div className="md:col-span-5 space-y-3">
            <button
              onClick={() => onNavigate('home')}
              className="text-xl font-bold tracking-tight text-slate-900 cursor-pointer text-left"
            >
              Apex Web Studio
            </button>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              High-performance web architecture, conversion-driven e-commerce stores, and custom software systems engineered by Muhammad Abdullah Khan.
            </p>
            <div className="pt-1 flex items-center gap-3 text-xs text-slate-600">
              <a
                href={`https://wa.me/${CONTACT_INFO.phoneClean}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-700 font-mono"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <span className="text-slate-300">·</span>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-slate-900"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Navigation
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-slate-900 cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-slate-900 cursor-pointer">
                  Services & Disciplines
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-slate-900 cursor-pointer">
                  Case Studies & Works
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-slate-900 cursor-pointer">
                  Pricing & Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-slate-900 cursor-pointer">
                  About Studio
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Direct Contact & Support
            </div>
            <div className="space-y-2 text-xs text-slate-600">
              <p>
                <strong>Lead Engineer:</strong> {CONTACT_INFO.engineerName}
              </p>
              <p>
                <strong>Direct Phone / WhatsApp:</strong>{' '}
                <a
                  href={`https://wa.me/${CONTACT_INFO.phoneClean}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-700 font-mono font-bold hover:underline"
                >
                  {CONTACT_INFO.phone}
                </a>
              </p>
              <p>
                <strong>Official Email:</strong>{' '}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-slate-900 font-mono hover:underline"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p className="text-[11px] text-slate-400">
                Mon - Sat · 9:00 AM - 9:00 PM PKT
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Apex Web Studio. Designed and engineered for commercial excellence.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>100% Code Handover</span>
            <span>·</span>
            <span>30-Day Free Bug Warranty</span>
            <span>·</span>
            <span>Sub-second Load Times</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
