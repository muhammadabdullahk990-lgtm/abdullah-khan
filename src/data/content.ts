import { ProjectShowcase, CapabilityItem, TestimonialItem, FaqItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_digital_studio_1792306455182.jpg';
export const SHOWCASE_ECOMMERCE = '/src/assets/images/showcase_ecommerce_apparel_1792306456022.jpg';
export const SHOWCASE_HEALTH = '/src/assets/images/showcase_health_platform_1792306456064.jpg';
export const FOUNDER_IMAGE = '/src/assets/images/founder_abdullah_khan_1792308474820.jpg';

export const CONTACT_INFO = {
  phone: '03242360321',
  phoneDisplay: '+92 324 2360321 (0324-2360321)',
  phoneClean: '923242360321',
  email: 'abdullahkhannq2123@gmail.com',
  engineerName: 'Abdullah Khan',
  founderTitle: 'Founder & Lead Web Architect',
  location: 'Karachi & Lahore, Pakistan · Global Delivery',
  availability: 'Available for New Projects',
  responsePromise: 'Under 15 minutes response time'
};

export const SHOWCASE_PROJECTS: ProjectShowcase[] = [
  {
    id: 'vogue-aura',
    title: 'Maison Aurélie',
    category: 'ecommerce',
    categoryLabel: 'Luxury Retail & E-Commerce',
    tagline: 'High-conversion headless fashion storefront with sub-second catalogue filtering and direct checkout.',
    description: 'Engineered an ultra-fast digital commerce storefront for an apparel brand. Built on a modern headless architecture with real-time stock availability, seamless 1-click WhatsApp order routing, and localized payment gateway integration.',
    image: SHOWCASE_ECOMMERCE,
    metrics: [
      { label: 'Online Sales Growth', value: '+210%' },
      { label: 'Mobile Conversion Rate', value: '4.8%' },
      { label: 'Average Page Load Time', value: '0.74s' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'PostgreSQL'],
    deliverables: [
      'Custom Headless Storefront & Catalog',
      'Automated WhatsApp 1-Click Order Engine',
      'Real-Time Inventory Synchronization',
      'Instant Email & SMS Customer Confirmations'
    ],
    liveUrlMock: 'https://demo-fashion.apexstudio.dev'
  },
  {
    id: 'medwell-health',
    title: 'MedWell Health & Telehealth',
    category: 'services',
    categoryLabel: 'Healthcare & Patient Portals',
    tagline: 'Intelligent appointment scheduling platform with patient records and automated reminder notifications.',
    description: 'Engineered a healthcare portal that connects patients with medical specialists. Patients can filter by specialty, select real-time appointment calendar slots, and receive instant WhatsApp and SMS confirmation alerts.',
    image: SHOWCASE_HEALTH,
    metrics: [
      { label: 'Verified Online Bookings', value: '3,400+' },
      { label: 'Patient Booking Satisfaction', value: '99.4%' },
      { label: 'Reception Call Reduction', value: '-65%' }
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Twilio SMS API', 'Tailwind CSS'],
    deliverables: [
      'Interactive Specialist Calendar & Slots',
      'Automated SMS & WhatsApp Reminder Notifications',
      'Secure Digital Health History Portal',
      'Comprehensive Doctor Admin Dashboard'
    ],
    liveUrlMock: 'https://demo-health.apexstudio.dev'
  },
  {
    id: 'vanguard-logistics',
    title: 'Vanguard Freight & Supply Chain',
    category: 'corporate',
    categoryLabel: 'Corporate B2B & Supply Chain',
    tagline: 'Enterprise logistics platform with instant consignment tracking and automated freight quotes.',
    description: 'Designed and deployed an enterprise B2B portal for an international logistics provider. Enables commercial clients to track freight in real-time, generate custom shipping estimates, and request bulk corporate rate contracts.',
    image: HERO_IMAGE,
    metrics: [
      { label: 'Inbound Corporate Inquiries', value: '+140%' },
      { label: 'Consignment Lookup Latency', value: '0.38s' },
      { label: 'Customer Support Workload', value: '-42%' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Fast Edge API', 'Cloudflare'],
    deliverables: [
      'Live Freight Tracking & Status Engine',
      'Automated Shipping Rate Estimator',
      'Multi-Branch Geographic Directory',
      'Commercial PDF Quotation Generator'
    ],
    liveUrlMock: 'https://demo-freight.apexstudio.dev'
  }
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    number: '01',
    title: 'Custom Web Applications & Portals',
    tagline: 'Bespoke web architecture engineered with React, Vite, and clean TypeScript.',
    description: 'We do not build bloated page-builder sites that degrade over time. We craft lightweight, component-driven web systems that load in milliseconds and scale effortlessly as your business expands.',
    points: [
      'Sub-second initial page load & 99+ Google Lighthouse performance score',
      'Flawless responsive design tested across iOS, Android, laptops, and 4K displays',
      'WCAG AA accessible with zero layout shift (CLS < 0.05)'
    ],
    tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js']
  },
  {
    number: '02',
    title: 'High-Yield E-Commerce & Direct Sales',
    tagline: 'Turn store visitors into paying customers with zero-friction checkouts.',
    description: 'Complete digital commerce storefronts with automated inventory, dynamic discount codes, multi-currency support, and instant order dispatch alerts directly to WhatsApp and email.',
    points: [
      '1-Click instant checkout with automated WhatsApp order summary dispatch',
      'Payment gateway integrations: JazzCash, EasyPaisa, Cards, and Cash on Delivery',
      'Real-time inventory sync, discount coupon management, and customer tracking'
    ],
    tech: ['Stripe', 'JazzCash / EasyPaisa APIs', 'PostgreSQL', 'Webhooks']
  },
  {
    number: '03',
    title: 'High-Converting Landing Pages & Lead Gen',
    tagline: 'Strategic conversion design focused on converting paid and organic traffic.',
    description: 'High-clarity landing pages that address visitor questions upfront with clear value propositions, interactive pricing calculators, verifiable evidence, and prominent direct contact channels.',
    points: [
      'Conversion-centered layout with zero clutter and persuasive visual hierarchy',
      'Interactive quote calculators, blueprint estimators, and booking funnels',
      'Built-in Google Analytics 4 and Meta Pixel conversion event tracking'
    ],
    tech: ['Conversion UX', 'Interactive Forms', 'GA4 Tracking', 'Edge CDN']
  },
  {
    number: '04',
    title: 'Technical SEO & Search Dominance',
    tagline: 'Rank higher on Google when local and international customers search.',
    description: 'Engineered with Schema.org JSON-LD structured data, dynamic OpenGraph social share previews, automated sitemaps, and optimized Core Web Vitals to maximize search visibility.',
    points: [
      'Schema.org JSON-LD structured data for Google rich snippets and search stars',
      'Dynamic OpenGraph previews for professional WhatsApp & LinkedIn link sharing',
      'Geo-targeted local SEO architecture for maximum regional discovery'
    ],
    tech: ['Schema.org', 'OpenGraph Protocol', 'Core Web Vitals', 'Sitemaps']
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'Hamza Farooq',
    role: 'Founder & CEO',
    company: 'Lumina Home Decor',
    quote: 'Our previous website took over 6 seconds to load on mobile phones. After rebuilding with Muhammad Abdullah, our load times dropped to under 1 second and our weekly order volume more than doubled within two months.',
    outcome: '+118% Sales Increase in First 60 Days'
  },
  {
    id: 'test-2',
    author: 'Dr. Ayesha Malik',
    role: 'Consultant Dermatologist',
    company: 'Skin & Aesthetics Center',
    quote: 'The online appointment booking system transformed our clinic reception. Patients pick their slot directly, and no-shows dropped by 80% due to automated WhatsApp confirmation reminders.',
    outcome: '80% Reduction in Patient No-Shows'
  },
  {
    id: 'test-3',
    author: 'Zubair Tariq',
    role: 'Head of Operations',
    company: 'Falcon Industrial Supplies',
    quote: 'We needed a serious, enterprise-grade B2B catalog where industrial buyers could request volume quotes without confusing back-and-forth emails. Abdullah delivered exactly on time with immaculate code.',
    outcome: '2.4x Increase in Qualified B2B Quotes'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'How long does it take to design and launch my website?',
    answer: 'Standard corporate websites and landing pages are typically launched within 5 to 7 business days. Custom e-commerce platforms and comprehensive web applications take 10 to 14 days with thorough staging and quality testing.'
  },
  {
    question: 'How does the direct WhatsApp integration work?',
    answer: 'We configure an automated WhatsApp order and inquiry routing system. When a client clicks your WhatsApp button or submits an inquiry, a formatted message containing their requested items, budget, or inquiry details opens directly in your WhatsApp (+92 324 2360321), allowing for instant conversation.'
  },
  {
    question: 'Will my website work smoothly on all mobile devices and Android phones?',
    answer: 'Yes, absolutely. Over 75% of web visitors browse on mobile devices. Every website we build is rigorously tested on iOS, Android, tablets, and laptops for flawless touch-friendly interaction and fast loading.'
  },
  {
    question: 'Can customers pay via JazzCash, EasyPaisa, or Credit/Debit Cards?',
    answer: 'Yes! We integrate local Pakistani payment gateways (JazzCash, EasyPaisa, PayFast) as well as international options like Stripe for Visa and Mastercard processing, alongside Cash on Delivery options.'
  },
  {
    question: 'Who owns the website source code and domain?',
    answer: 'You maintain 100% full legal ownership of your domain, branding, and complete source code repository. There are zero locked vendor fees or ongoing proprietary platform lock-in.'
  },
  {
    question: 'Do you provide post-launch support and warranty?',
    answer: 'Every project includes 30 days of complimentary post-launch support and bug warranty. We also provide personalized video walkthroughs showing you how to update content, images, and products yourself.'
  }
];
