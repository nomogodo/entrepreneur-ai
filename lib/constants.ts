// App Constants
export const APP_NAME = 'Entrepreneur AI';
export const APP_DESCRIPTION = 'Your AI Business Mentor';
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

// Pricing Plans
export const PRICING_PLANS = {
  free: {
    name: 'Free',
    price: 0,
    currency: 'USD',
    interval: 'month',
    description: 'Perfect for getting started',
    features: [
      '15 messages per day',
      'Basic AI mentorship',
      'Chat history',
      'Community support',
    ],
    limitations: [
      'Limited to simple questions',
      'No premium tools access',
      'No file uploads',
      'Ads included',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  pro: {
    name: 'Pro',
    price: 29,
    currency: 'USD',
    interval: 'month',
    description: 'For serious entrepreneurs',
    features: [
      'Unlimited messages',
      'Advanced AI mentorship',
      'Priority support',
      'Premium tools access',
      'File uploads & analysis',
      'Custom business plans',
      'No ads',
      'Export capabilities',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
};

// Business Tools
export const BUSINESS_TOOLS = [
  {
    id: 'idea-validator',
    name: 'Idea Validator',
    description: 'Validate your business idea with market insights',
    icon: '✓',
    slug: 'idea-validator',
    requiresPremium: false,
  },
  {
    id: 'marketing-generator',
    name: 'Marketing Plan Generator',
    description: 'Create a comprehensive marketing strategy',
    icon: '📊',
    slug: 'marketing-generator',
    requiresPremium: true,
  },
  {
    id: 'ad-copy',
    name: 'Ad Copy Generator',
    description: 'Generate high-converting ad copy',
    icon: '📝',
    slug: 'ad-copy',
    requiresPremium: true,
  },
  {
    id: 'lean-canvas',
    name: 'Lean Canvas Generator',
    description: 'Create your business model in minutes',
    icon: '📋',
    slug: 'lean-canvas',
    requiresPremium: false,
  },
  {
    id: 'pricing-strategy',
    name: 'Pricing Strategy',
    description: 'Optimize your pricing for maximum revenue',
    icon: '💰',
    slug: 'pricing-strategy',
    requiresPremium: true,
  },
  {
    id: 'competitor-analyzer',
    name: 'Competitor Analyzer',
    description: 'Analyze competitors and find market gaps',
    icon: '🔍',
    slug: 'competitor-analyzer',
    requiresPremium: true,
  },
];

// AI Models Configuration
export const AI_MODELS = {
  cheap: 'openrouter/openai/gpt-3.5-turbo',
  standard: 'openrouter/openai/gpt-4-turbo-preview',
  premium: 'openrouter/openai/gpt-4',
  fallback: 'gemini-pro',
};

// Rate Limits
export const RATE_LIMITS = {
  free: {
    messagesPerDay: 15,
    maxRequestsPerMinute: 3,
  },
  pro: {
    messagesPerDay: Infinity,
    maxRequestsPerMinute: 30,
  },
};

// Feature Flags
export const FEATURES = {
  fileUpload: true,
  customModels: false,
  apiAccess: false,
  teamCollaboration: false,
};