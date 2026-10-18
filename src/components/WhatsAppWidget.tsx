import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Phone, CheckCheck } from 'lucide-react';
import { CONTACT_INFO, FOUNDER_IMAGE } from '../data/content';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const quickPrompts = [
    'Hi Abdullah, I need an E-Commerce online store.',
    'Hi Abdullah, I need a modern business website.',
    'Hi Abdullah, I want to discuss a project quote and timeline.'
  ];

  const handleSend = (textToSend?: string) => {
    const finalMsg = textToSend || message || 'Hello Abdullah, I would like to inquire about building a website.';
    const encoded = encodeURIComponent(finalMsg);
    window.open(`https://wa.me/${CONTACT_INFO.phoneClean}?text=${encoded}`, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Concierge Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-80 sm:w-92 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            {/* WhatsApp Header */}
            <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={FOUNDER_IMAGE}
                    alt="Founder Abdullah Khan"
                    className="w-11 h-11 rounded-full object-cover border-2 border-white/50 shadow-xs"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#075E54] rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight text-white">
                    Abdullah Khan
                  </h4>
                  <p className="text-[11px] text-emerald-200 flex items-center gap-1">
                    <span>Founder & Architect</span>
                    <span>·</span>
                    <span className="text-white font-medium">Online</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close WhatsApp chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-[#EFEAE2] min-h-[220px] max-h-[300px] overflow-y-auto space-y-3 text-xs">
              {/* Automated Greeting Bubble */}
              <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-xs border border-slate-200/60 max-w-[88%] space-y-1.5">
                <div className="font-semibold text-slate-800 text-[11px]">
                  Muhammad Abdullah Khan
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Hi! 👋 Welcome to Apex Web Studio. How can I help you build your new website today?
                </p>
                <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400">
                  <span>Just now</span>
                  <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
                </div>
              </div>

              {/* Direct Phone Indicator */}
              <div className="text-center text-[10px] text-slate-500 bg-white/60 backdrop-blur-xs py-1 rounded-md">
                Official Business Number: <strong className="text-slate-800 font-mono">{CONTACT_INFO.phone}</strong>
              </div>

              {/* Quick Choice Prompts */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 px-1">
                  Quick Inquiry Questions:
                </div>
                {quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(prompt)}
                    className="w-full text-left p-2 rounded-lg bg-white/90 hover:bg-white border border-slate-200 text-slate-800 text-xs transition-all hover:border-emerald-500 shadow-2xs flex items-center justify-between cursor-pointer group"
                  >
                    <span className="line-clamp-1">{prompt}</span>
                    <Send className="w-3 h-3 text-slate-400 group-hover:text-emerald-600 shrink-0 ml-1" />
                  </button>
                ))}
              </div>
            </div>

            {/* Message Composer & Send Button */}
            <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-slate-800"
              />
              <button
                onClick={() => handleSend()}
                className="p-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg transition-colors flex items-center justify-center cursor-pointer shadow-xs"
                title="Send via WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Launcher */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-white"
        aria-label="Direct WhatsApp Contact"
      >
        <div className="relative flex items-center justify-center">
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
        </div>
        <div className="text-left pr-1">
          <div className="text-[11px] font-bold leading-tight uppercase tracking-wider">
            WhatsApp Direct
          </div>
          <div className="text-[11px] opacity-95 font-mono">
            {CONTACT_INFO.phone}
          </div>
        </div>
      </motion.button>
    </div>
  );
};
