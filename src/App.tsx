/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from './types';
import { Navbar } from './components/Navbar';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [inquiryPrefill, setInquiryPrefill] = useState<string>('');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSetPrefillAndNavigate = (text: string) => {
    setInquiryPrefill(text);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
      />

      {/* Main Multi-Page Content with Smooth Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentPage === 'home' && (
              <HomePage
                onNavigate={navigateTo}
                onSetPrefill={handleSetPrefillAndNavigate}
              />
            )}

            {currentPage === 'services' && (
              <ServicesPage
                onNavigate={navigateTo}
                onSelectService={handleSetPrefillAndNavigate}
              />
            )}

            {currentPage === 'portfolio' && (
              <PortfolioPage
                onNavigate={navigateTo}
                onSelectProject={handleSetPrefillAndNavigate}
              />
            )}

            {currentPage === 'pricing' && (
              <PricingPage
                onNavigate={navigateTo}
                onSetPrefill={handleSetPrefillAndNavigate}
              />
            )}

            {currentPage === 'about' && (
              <AboutPage
                onNavigate={navigateTo}
              />
            )}

            {currentPage === 'contact' && (
              <ContactPage
                prefilledScope={inquiryPrefill}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Interactive WhatsApp Widget with Direct Routing to 03242360321 */}
      <WhatsAppWidget />

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
