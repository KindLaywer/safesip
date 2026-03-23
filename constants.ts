/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const BRAND = {
  name: 'SafeSip',
  tagline: 'Drink with confidence. Anywhere.',
  colors: {
    primary: '#0A0E14', // Deep Navy/Black
    secondary: '#FFFFFF',
    accent: '#00FFC2', // Neon Mint/Cyan for detection
    muted: '#1A202C',
  }
};

export const HERO = {
  headline: 'Your safety shouldn’t be a guessing game.',
  subheadline: 'Medical-grade detection for common spiking agents. Results in seconds. Discreet by design.',
  ctaPrimary: 'Pre-order SafeSip',
  ctaSecondary: 'How it works',
};

export const PROBLEM = {
  title: 'The risk is real. Your peace of mind should be too.',
  points: [
    {
      text: '1 in 6 women report being victims of drink spiking.',
      icon: 'ShieldAlert'
    },
    {
      text: 'Most substances are odorless, colorless, and tasteless.',
      icon: 'EyeOff'
    },
    {
      text: 'Standard test strips are bulky and obvious.',
      icon: 'XCircle'
    }
  ]
};

export const STEPS = [
  {
    step: '01',
    title: 'Dip',
    description: 'Place the SafeSip indicator into your drink for 3 seconds.',
  },
  {
    step: '02',
    title: 'Detect',
    description: 'The embedded sensor analyzes for GHB, Ketamine, and more.',
  },
  {
    step: '03',
    title: 'Decide',
    description: 'A subtle neon glow indicates risk. Clear means safe.',
  }
];

export const FEATURES = [
  {
    title: 'Medical-Grade Precision',
    description: 'Embedded chemical indicators developed in clinical labs for 99.9% accuracy.',
  },
  {
    title: 'Discreet Form Factor',
    description: 'Looks like a premium stainless steel straw or a minimalist ice cube.',
  },
  {
    title: 'Reusable & Sustainable',
    description: 'Crafted from food-grade 316L stainless steel. Built to last a lifetime.',
  }
];

export const COMPARISON = {
  headers: ['Feature', 'SafeSip', 'Test Strips', 'Doing Nothing'],
  rows: [
    ['Discretion', 'High (Looks like a straw)', 'Low (Obvious paper)', 'None'],
    ['Speed', '3-5 Seconds', '30-60 Seconds', 'N/A'],
    ['Reusability', 'Yes (Replaceable core)', 'No (Single use)', 'N/A'],
    ['Accuracy', '99.9%', 'Varies', '0%'],
  ]
};

export const TESTIMONIALS = [
  {
    quote: "SafeSip gives me that extra layer of confidence when I'm traveling solo. It's so discreet, nobody even knows I'm using it.",
    author: "Sarah J.",
    role: "Solo Traveler"
  },
  {
    quote: "As a student, nights out are part of the experience. Having SafeSip in my glass just makes sense. It’s a non-negotiable now.",
    author: "Elena R.",
    role: "University Student"
  }
];

export const PRICING = [
  {
    name: 'Solo Pack',
    price: '$29',
    description: '1x SafeSip Smart Straw + 5 Detection Cores',
    features: ['Premium Carrying Case', 'Cleaning Brush', '1-Year Warranty'],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Safety Bundle',
    price: '$49',
    description: '2x SafeSip Smart Straws + 15 Detection Cores',
    features: ['Priority Shipping', 'Free Carrying Case', 'Lifetime Warranty'],
    cta: 'Best Value',
    popular: true
  }
];

export const FAQS = [
  {
    q: 'Does it really work?',
    a: 'Yes. SafeSip uses proprietary colorimetric indicators that react specifically to the molecular structure of common spiking agents like GHB and Ketamine.'
  },
  {
    q: 'What substances does it detect?',
    a: 'Our current generation detects GHB, Ketamine, and Rohypnol. We are constantly working on expanding our detection range.'
  },
  {
    q: 'Is it reusable?',
    a: 'The stainless steel body is permanent. The detection core is replaceable after use to ensure maximum accuracy every time.'
  },
  {
    q: 'How accurate is it?',
    a: 'In laboratory testing, SafeSip demonstrated a 99.9% accuracy rate when used according to instructions.'
  },
  {
    q: 'Is it safe to use in drinks?',
    a: 'Absolutely. SafeSip is made from medical-grade 316L stainless steel and the chemical indicators are sealed behind a semi-permeable membrane that never touches your beverage.'
  }
];
