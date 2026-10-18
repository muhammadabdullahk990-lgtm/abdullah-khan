import React, { useState } from 'react';
import { Language, PrototypeConfig } from '../types';
import { Check, Smartphone, Tablet, Monitor, ShoppingBag, Calendar, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface InteractiveBuilderProps {
  lang: Language;
  onApplySpecification: (summary: string) => void;
}

export const InteractiveBuilder: React.FC<InteractiveBuilderProps> = ({ lang, onApplySpecification }) => {
  const [config, setConfig] = useState<PrototypeConfig>({
    businessType: 'ecommerce',
    theme: 'cobalt',
    device: 'desktop',
    features: {
      whatsappCheckout: true,
      multiCurrency: true,
      speedBoost: true,
      seoReady: true,
      bookingEngine: false,
    }
  });

  // Simulated interactive states within the preview frame
  const [mockCartCount, setMockCartCount] = useState(1);
  const [mockSelectedDate, setMockSelectedDate] = useState('Tomorrow 11:00 AM');
  const [orderSentToast, setOrderSentToast] = useState(false);

  const toggleFeature = (key: keyof PrototypeConfig['features']) => {
    setConfig(prev => ({
      ...prev,
      features: {
        ...prev.features,
        [key]: !prev.features[key]
      }
    }));
  };

  const handleSimulateAction = (actionName: string) => {
    if (actionName === 'cart') {
      setMockCartCount(prev => prev + 1);
    } else if (actionName === 'whatsapp') {
      setOrderSentToast(true);
      setTimeout(() => setOrderSentToast(false), 3000);
    }
  };

  const getThemeClasses = () => {
    switch (config.theme) {
      case 'midnight':
        return {
          bg: 'bg-slate-900',
          text: 'text-slate-100',
          card: 'bg-slate-800 border-slate-700',
          accent: 'bg-amber-400 text-slate-950 hover:bg-amber-300',
          subtext: 'text-slate-400',
          navBg: 'bg-slate-950/80'
        };
      case 'emerald':
        return {
          bg: 'bg-[#F4F9F6]',
          text: 'text-emerald-950',
          card: 'bg-white border-emerald-100',
          accent: 'bg-emerald-700 text-white hover:bg-emerald-800',
          subtext: 'text-emerald-700/80',
          navBg: 'bg-white/90'
        };
      case 'minimal':
        return {
          bg: 'bg-[#FAF9F6]',
          text: 'text-stone-900',
          card: 'bg-white border-stone-200',
          accent: 'bg-stone-900 text-stone-50 hover:bg-stone-800',
          subtext: 'text-stone-500',
          navBg: 'bg-stone-100/80'
        };
      case 'cobalt':
      default:
        return {
          bg: 'bg-slate-50',
          text: 'text-slate-900',
          card: 'bg-white border-slate-200',
          accent: 'bg-blue-600 text-white hover:bg-blue-700',
          subtext: 'text-slate-500',
          navBg: 'bg-white/95'
        };
    }
  };

  const themeStyle = getThemeClasses();

  const handleExportToInquiry = () => {
    const businessNames = {
      ecommerce: 'Online E-Commerce Store & Direct Sales',
      saas: 'SaaS / Software Product Website',
      clinic: 'Healthcare / Clinic Appointment Portal',
      restaurant: 'Restaurant / Cafe Menu & Ordering',
      agency: 'Corporate / Agency Portfolio'
    };
    const activeFeatures = Object.entries(config.features)
      .filter(([_, enabled]) => enabled)
      .map(([name]) => name)
      .join(', ');

    const summary = `Selected Architecture: ${businessNames[config.businessType]} | Theme: ${config.theme} | Features: [${activeFeatures}]`;
    onApplySpecification(summary);
  };

  return (
    <section id="prototype" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            {lang === 'en' ? 'Interactive Blueprint Studio' : 'Interactive Prototype & Live Studio'}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 [text-wrap:balance]">
            {lang === 'en'
              ? 'Test-Drive Your Website Architecture Before Writing A Line Of Code'
              : 'Apni Website Ka Live Prototype Aur Features Yahan Check Karein'}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {lang === 'en'
              ? 'Choose your industry sector, pick a tailored palette, toggle high-utility features, and interact with the responsive simulator below.'
              : 'Apna business select karein, color theme badlein, aur dekhein ke live mobile ya laptop par website kaisa look degi.'}
          </p>
        </div>

        {/* Builder Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Control 1: Industry Type */}
            <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-3 shadow-xs">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">
                {lang === 'en' ? '1. Select Your Business Model' : '1. Karobaar Ki Qisam Chunien'}
              </label>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { id: 'ecommerce', labelEn: 'E-Commerce & Online Store', labelUr: 'Online Shopping & Store' },
                  { id: 'clinic', labelEn: 'Clinic & Doctor Appointments', labelUr: 'Doctor Appointment & Sehat' },
                  { id: 'restaurant', labelEn: 'Restaurant & Food Menu', labelUr: 'Restaurant & Khaana Peena' },
                  { id: 'saas', labelEn: 'Tech Startup / SaaS Product', labelUr: 'Software & Tech Company' },
                  { id: 'agency', labelEn: 'Agency & Corporate Practice', labelUr: 'Company & Shakhsi Portfolio' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setConfig(prev => ({ ...prev, businessType: item.id as any }))}
                    className={`w-full text-left px-3.5 py-2.5 text-xs font-medium rounded-lg border transition-all flex items-center justify-between cursor-pointer ${
                      config.businessType === item.id
                        ? 'bg-slate-900 border-slate-900 text-white shadow-xs'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{lang === 'en' ? item.labelEn : item.labelUr}</span>
                    {config.businessType === item.id && <Check className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 2: Color Strategy */}
            <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-3 shadow-xs">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">
                {lang === 'en' ? '2. Visual Direction & Tone' : '2. Rang Aur Design Ka Andaaz'}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'cobalt', label: 'Precision Cobalt', colorDot: 'bg-blue-600' },
                  { id: 'midnight', label: 'Midnight Slate', colorDot: 'bg-slate-900' },
                  { id: 'emerald', label: 'Organic Emerald', colorDot: 'bg-emerald-700' },
                  { id: 'minimal', label: 'Warm Minimalist', colorDot: 'bg-stone-800' }
                ].map(theme => (
                  <button
                    key={theme.id}
                    onClick={() => setConfig(prev => ({ ...prev, theme: theme.id as any }))}
                    className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all flex items-center gap-2 cursor-pointer ${
                      config.theme === theme.id
                        ? 'border-slate-900 bg-slate-50 text-slate-900 font-semibold ring-1 ring-slate-900'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${theme.colorDot}`} />
                    <span className="truncate">{theme.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Control 3: Functional Modules */}
            <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-3 shadow-xs">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">
                {lang === 'en' ? '3. High-Value Modules' : '3. Zaroori Features'}
              </label>
              <div className="space-y-2">
                {[
                  {
                    key: 'whatsappCheckout' as const,
                    labelEn: 'Direct WhatsApp 1-Click Ordering',
                    labelUr: 'Direct WhatsApp 1-Click Order'
                  },
                  {
                    key: 'multiCurrency' as const,
                    labelEn: 'Multi-Currency (PKR / USD / AED)',
                    labelUr: 'Multi-Currency (PKR, USD, AED)'
                  },
                  {
                    key: 'speedBoost' as const,
                    labelEn: 'Edge CDN & <1s Speed Caching',
                    labelUr: 'Superfast CDN (<1s Speed Cache)'
                  },
                  {
                    key: 'seoReady' as const,
                    labelEn: 'Google Rich Snippet & Schema SEO',
                    labelUr: 'Google Search Rich Schema SEO'
                  },
                  {
                    key: 'bookingEngine' as const,
                    labelEn: 'Real-time Appointment Calendar',
                    labelUr: 'Online Appointment Calendar'
                  }
                ].map(feat => (
                  <button
                    key={feat.key}
                    onClick={() => toggleFeature(feat.key)}
                    className="w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    <span className="font-medium text-slate-700">
                      {lang === 'en' ? feat.labelEn : feat.labelUr}
                    </span>
                    <span
                      className={`w-4 h-4 rounded flex items-center justify-center text-white transition-colors ${
                        config.features[feat.key] ? 'bg-slate-900' : 'bg-slate-200'
                      }`}
                    >
                      {config.features[feat.key] && <Check className="w-3 h-3" />}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Send Spec to Inquiry Button */}
            <button
              onClick={handleExportToInquiry}
              className="w-full py-3.5 px-4 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <span>{lang === 'en' ? 'Apply Config to Project Inquiry' : 'Yeh Specification Inquiry Mein Add Karein'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Simulation Frame Column */}
          <div className="lg:col-span-8 space-y-4">
            {/* Viewport Toolbar */}
            <div className="flex items-center justify-between bg-white px-4 py-2.5 border border-slate-200 rounded-xl">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span className="font-semibold text-slate-700">
                  {lang === 'en' ? 'Live Interactive Preview' : 'Interactive Live Screen'}
                </span>
                <span aria-hidden="true">·</span>
                <span>{config.businessType.toUpperCase()}</span>
              </div>

              {/* Device Selector Tabs */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
                <button
                  onClick={() => setConfig(prev => ({ ...prev, device: 'desktop' }))}
                  className={`p-1.5 rounded-md transition-colors ${
                    config.device === 'desktop' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                  }`}
                  title="Desktop View"
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setConfig(prev => ({ ...prev, device: 'tablet' }))}
                  className={`p-1.5 rounded-md transition-colors ${
                    config.device === 'tablet' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                  }`}
                  title="Tablet View"
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setConfig(prev => ({ ...prev, device: 'mobile' }))}
                  className={`p-1.5 rounded-md transition-colors ${
                    config.device === 'mobile' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                  }`}
                  title="Mobile View"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Simulated Device Frame Container */}
            <div className="flex justify-center bg-slate-200/70 p-4 sm:p-6 rounded-2xl border border-slate-300 min-h-[580px] overflow-hidden">
              <div
                className={`transition-all duration-300 rounded-xl overflow-hidden border border-slate-300 shadow-lg ${themeStyle.bg} ${
                  config.device === 'mobile'
                    ? 'w-full max-w-[340px]'
                    : config.device === 'tablet'
                    ? 'w-full max-w-[620px]'
                    : 'w-full'
                }`}
              >
                {/* Browser Address Bar Mockup */}
                <div className="px-3 py-2 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
                  </div>
                  <div className="bg-white px-3 py-0.5 rounded text-[11px] text-slate-600 font-mono border border-slate-200 truncate max-w-[200px]">
                    https://{config.businessType}-live.pk
                  </div>
                  <div className="w-12 text-right text-[10px] text-emerald-600 font-medium">SSL 256b</div>
                </div>

                {/* Inner Simulated Website Body */}
                <div className="p-4 sm:p-6 space-y-6">
                  {/* Top Bar of Simulated Website */}
                  <div className={`flex items-center justify-between py-2 border-b border-slate-200/50 ${themeStyle.text}`}>
                    <div className="font-bold text-base tracking-tight">
                      {config.businessType === 'ecommerce' && 'Zar & Noor Silk'}
                      {config.businessType === 'clinic' && 'CarePlus Health'}
                      {config.businessType === 'restaurant' && 'Artisan Grill & Cafe'}
                      {config.businessType === 'saas' && 'FlowMetrics HQ'}
                      {config.businessType === 'agency' && 'Vanguard Studio'}
                    </div>

                    <div className="flex items-center gap-3">
                      {config.features.multiCurrency && (
                        <span className={`text-[11px] font-mono font-medium ${themeStyle.subtext}`}>
                          PKR · USD · AED
                        </span>
                      )}
                      {config.businessType === 'ecommerce' && (
                        <div className="flex items-center gap-1 text-xs font-semibold px-2 py-1 bg-slate-200/60 rounded">
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span className="font-mono-numbers">{mockCartCount}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Simulated Hero Section */}
                  <div className="space-y-3">
                    <div className="text-[10px] uppercase tracking-wider font-semibold opacity-75">
                      {config.businessType === 'ecommerce' && 'New Season 2026 Collection'}
                      {config.businessType === 'clinic' && 'Family Medicine & Diagnostics'}
                      {config.businessType === 'restaurant' && 'Handcrafted Gourmet Cuisine'}
                      {config.businessType === 'saas' && 'Cloud Business Automation'}
                      {config.businessType === 'agency' && 'Digital Brand Engineering'}
                    </div>

                    <h3 className={`text-xl sm:text-2xl font-bold leading-tight ${themeStyle.text}`}>
                      {config.businessType === 'ecommerce' && 'Timeless Eastern & Western Pret Couture.'}
                      {config.businessType === 'clinic' && 'Expert Medical Consultations Without Long Waits.'}
                      {config.businessType === 'restaurant' && 'Artisan Woodfired Steaks & Specialty Brews.'}
                      {config.businessType === 'saas' && 'Manage All Sales Inquiries From One Fast Dashboard.'}
                      {config.businessType === 'agency' && 'We Build High-Speed Web Applications That Scale.'}
                    </h3>

                    <p className={`text-xs leading-relaxed max-w-md ${themeStyle.subtext}`}>
                      {config.businessType === 'ecommerce' && 'Crafted from 100% pure Mulberry silk. Fast nationwide delivery across Pakistan with easy Cash on Delivery.'}
                      {config.businessType === 'clinic' && 'Book certified specialists in 45 seconds. Automated SMS reminders sent right to your phone.'}
                      {config.businessType === 'restaurant' && 'Fresh farm-to-table ingredients with instant table reservation or home takeaway service.'}
                      {config.businessType === 'saas' && 'Real-time synchronization across POS, inventory, and online orders with 99.9% uptime.'}
                      {config.businessType === 'agency' && 'Tailored digital solutions engineered for conversion, speed, and clean operational excellence.'}
                    </p>

                    {/* Interactive Action Buttons inside simulator */}
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      {config.businessType === 'ecommerce' && (
                        <>
                          <button
                            onClick={() => handleSimulateAction('cart')}
                            className={`px-3 py-1.5 text-xs font-semibold rounded-md shadow-xs cursor-pointer transition-colors ${themeStyle.accent}`}
                          >
                            + Add Item to Cart
                          </button>
                          {config.features.whatsappCheckout && (
                            <button
                              onClick={() => handleSimulateAction('whatsapp')}
                              className="px-3 py-1.5 text-xs font-semibold rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                              <span>Order via WhatsApp</span>
                            </button>
                          )}
                        </>
                      )}

                      {config.businessType === 'clinic' && (
                        <div className="space-y-2 w-full">
                          <div className="flex items-center gap-2 text-xs">
                            <Calendar className="w-3.5 h-3.5 text-slate-500" />
                            <span className="font-medium text-slate-700">Slot:</span>
                            <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-900">
                              {mockSelectedDate}
                            </span>
                          </div>
                          <button
                            onClick={() => handleSimulateAction('whatsapp')}
                            className={`px-4 py-1.5 text-xs font-semibold rounded-md shadow-xs cursor-pointer ${themeStyle.accent}`}
                          >
                            Confirm Appointment
                          </button>
                        </div>
                      )}

                      {(config.businessType === 'restaurant' || config.businessType === 'saas' || config.businessType === 'agency') && (
                        <button
                          onClick={() => handleSimulateAction('whatsapp')}
                          className={`px-4 py-1.5 text-xs font-semibold rounded-md shadow-xs cursor-pointer ${themeStyle.accent}`}
                        >
                          {config.businessType === 'restaurant' ? 'Book Table / Order Food' : 'Request Instant Demo'}
                        </button>
                      )}
                    </div>

                    {orderSentToast && (
                      <div className="p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-lg text-xs flex items-center gap-2 animate-fade-in">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Interactive trigger test successful: Action sent to simulated WhatsApp dispatch!</span>
                      </div>
                    )}
                  </div>

                  {/* Simulated Content Grid Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-4 border-t border-slate-200/50">
                    <div className={`p-3 rounded-lg border ${themeStyle.card}`}>
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Status</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">Live Online</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">24/7 Availability</div>
                    </div>
                    <div className={`p-3 rounded-lg border ${themeStyle.card}`}>
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Performance</div>
                      <div className="text-xs font-bold text-emerald-600 mt-1">99 Lighthouse</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">&lt;0.8s LCP</div>
                    </div>
                    <div className={`p-3 rounded-lg border ${themeStyle.card} col-span-2 sm:col-span-1`}>
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Mobile Score</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">100% Touch Ready</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">iOS & Android</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
