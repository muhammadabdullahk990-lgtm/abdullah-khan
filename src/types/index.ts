export type Language = 'en' | 'ur';
export type Page = 'home' | 'services' | 'portfolio' | 'pricing' | 'about' | 'contact';

export interface ProjectShowcase {
  id: string;
  title: string;
  category: 'ecommerce' | 'saas' | 'services' | 'corporate';
  categoryLabel: string;
  tagline: string;
  description: string;
  image: string;
  metrics: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  deliverables: string[];
  liveUrlMock?: string;
}

export interface CapabilityItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  tech: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  outcome: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PrototypeConfig {
  businessType: 'ecommerce' | 'saas' | 'clinic' | 'restaurant' | 'agency';
  theme: 'midnight' | 'cobalt' | 'emerald' | 'minimal';
  device: 'desktop' | 'tablet' | 'mobile';
  features: {
    whatsappCheckout: boolean;
    multiCurrency: boolean;
    speedBoost: boolean;
    seoReady: boolean;
    bookingEngine: boolean;
  };
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  whatsapp: string;
  projectType: string;
  estimatedBudget: string;
  details: string;
}
