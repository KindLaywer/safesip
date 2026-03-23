/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  ShieldAlert, 
  EyeOff, 
  XCircle, 
  ChevronRight, 
  Check, 
  Menu, 
  X,
  ArrowRight,
  Droplets,
  Zap,
  Lock
} from 'lucide-react';
import { 
  BRAND, 
  HERO, 
  PROBLEM, 
  STEPS, 
  FEATURES, 
  COMPARISON, 
  TESTIMONIALS, 
  PRICING, 
  FAQS 
} from './constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#00FFC2] rounded-full flex items-center justify-center">
            <ShieldCheck className="text-black w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white uppercase">{BRAND.name}</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium text-white/70 hover:text-white transition-colors">How it works</a>
          <a href="#features" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Pricing</a>
          <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-[#00FFC2] transition-all">
            Pre-order Now
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white">How it works</a>
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white">Features</a>
            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white">Pricing</a>
            <button className="bg-[#00FFC2] text-black w-full py-4 rounded-xl font-bold">Pre-order Now</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0E14]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FFC2]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00FFC2] text-xs font-bold uppercase tracking-widest mb-6">
            <Zap className="w-3 h-3" /> Now in early access
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            {HERO.headline}
          </h1>
          <p className="text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
            {HERO.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#00FFC2] text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
              {HERO.ctaPrimary} <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
              {HERO.ctaSecondary}
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A0E14] bg-white/10 flex items-center justify-center overflow-hidden">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <p className="text-sm text-white/40 font-medium">
              Joined by <span className="text-white">2,400+</span> safety-conscious users this month
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
            <img 
              src="https://picsum.photos/seed/safesip-hero/1200/1200" 
              alt="SafeSip Product" 
              className="object-cover w-full h-full opacity-80"
              referrerPolicy="no-referrer"
            />
            {/* Detection Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#00FFC2]/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-[#00FFC2] animate-pulse" />
                <p className="text-white font-bold tracking-tight">Detection Active: GHB / Ketamine</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  return (
    <section className="py-24 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {PROBLEM.title}
          </h2>
          <div className="w-20 h-1 bg-[#00FFC2] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROBLEM.points.map((point, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#00FFC2]/30 transition-all"
            >
              <div className="w-12 h-12 bg-[#00FFC2]/10 rounded-2xl flex items-center justify-center mb-6">
                {point.icon === 'ShieldAlert' && <ShieldAlert className="text-[#00FFC2]" />}
                {point.icon === 'EyeOff' && <EyeOff className="text-[#00FFC2]" />}
                {point.icon === 'XCircle' && <XCircle className="text-[#00FFC2]" />}
              </div>
              <p className="text-xl text-white/80 font-medium leading-relaxed">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StrawAnimation = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-white/5 rounded-[40px] border border-white/10 overflow-hidden flex flex-col items-center justify-end pb-20">
      <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-20">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00FFC2] animate-pulse" />
          <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Live Simulation</span>
        </div>
        <div className="px-2 py-1 rounded bg-[#00FFC2]/10 border border-[#00FFC2]/20 text-[#00FFC2] text-[10px] font-bold">
          99.9% ACCURACY
        </div>
      </div>

      {/* Glass of liquid */}
      <div className="relative w-48 h-64 border-x-4 border-b-4 border-white/20 rounded-b-3xl overflow-hidden">
        <motion.div 
          initial={{ height: '40%' }}
          animate={{ height: ['40%', '42%', '40%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm"
        >
          {/* Liquid surface */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/20" />
        </motion.div>
      </div>

      {/* Straw */}
      <motion.div 
        initial={{ y: -150 }}
        animate={{ y: [ -150, 50, 50, -150] }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          times: [0, 0.2, 0.8, 1],
          ease: "easeInOut"
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-80 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full border border-white/10 z-10"
      >
        {/* Detection Window */}
        <motion.div 
          initial={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
          animate={{ 
            backgroundColor: [
              'rgba(255,255,255,0.1)', 
              'rgba(255,255,255,0.1)', 
              '#00FFC2', 
              '#00FFC2',
              'rgba(255,255,255,0.1)'
            ],
            boxShadow: [
              '0 0 0px rgba(0,255,194,0)',
              '0 0 0px rgba(0,255,194,0)',
              '0 0 20px rgba(0,255,194,0.6)',
              '0 0 20px rgba(0,255,194,0.6)',
              '0 0 0px rgba(0,255,194,0)'
            ]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            times: [0, 0.3, 0.45, 0.75, 0.9],
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-0 right-0 h-12 border-y border-white/20"
        />
      </motion.div>

      {/* Scanning Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          times: [0, 0.35, 0.75, 0.85]
        }}
        className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center pt-20"
      >
        <div className="w-64 h-64 border border-[#00FFC2]/20 rounded-full flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-48 h-48 border border-[#00FFC2]/40 rounded-full" 
          />
        </div>
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: [0, 100, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00FFC2] to-transparent"
        />
        <div className="mt-8 text-[#00FFC2] text-[10px] font-black tracking-[0.3em] uppercase">
          Analyzing Sample...
        </div>
      </motion.div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-[#0A0E14]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight">
              Simplicity is <br /><span className="text-[#00FFC2]">the ultimate safety.</span>
            </h2>
            <div className="space-y-12">
              {STEPS.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-4xl font-black text-white/10">{step.step}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/50 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10">
              <img 
                src="https://picsum.photos/seed/safesip-demo/800/1000" 
                alt="SafeSip in action" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="p-6 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Live Analysis</span>
                    <span className="text-[#00FFC2] text-xs font-bold">99.9% ACCURACY</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-full bg-[#00FFC2]" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Visual Block */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-20 border-t border-white/5"
        >
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <StrawAnimation />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00FFC2]/10 border border-[#00FFC2]/20 text-[#00FFC2] text-[10px] font-bold uppercase tracking-widest mb-6">
                Live Demo
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">See it in action.</h3>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                The SafeSip indicator is engineered for immediate visual feedback. When a substance is detected, the embedded sensor reacts at a molecular level, triggering a subtle neon glow that only you need to see.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white/80 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00FFC2]" />
                  Reacts to GHB, Ketamine, and Rohypnol
                </li>
                <li className="flex items-center gap-3 text-white/80 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00FFC2]" />
                  Works in clear and dark beverages
                </li>
                <li className="flex items-center gap-3 text-white/80 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00FFC2]" />
                  Results in under 5 seconds
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ComparisonTable = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">The SafeSip Advantage</h2>
          <p className="text-white/50">Why thousands are switching from traditional test strips.</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                {COMPARISON.headers.map((header, i) => (
                  <th key={i} className={`py-6 px-4 text-sm font-bold uppercase tracking-widest ${i === 1 ? 'text-[#00FFC2]' : 'text-white/40'}`}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON.rows.map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-4 text-white font-medium">{row[0]}</td>
                  <td className="py-6 px-4 text-white font-bold">{row[1]}</td>
                  <td className="py-6 px-4 text-white/40">{row[2]}</td>
                  <td className="py-6 px-4 text-white/40">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-[#0A0E14] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-[#00FFC2]/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Choose your protection.</h2>
          <p className="text-white/50 text-xl">Early adopter pricing ends soon. Limited first batch.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRICING.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-10 rounded-[40px] border transition-all duration-500 ${plan.popular ? 'bg-white text-black border-white scale-105 z-10' : 'bg-white/5 text-white border-white/10'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00FFC2] text-black text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-5xl font-black mb-4">{plan.price}</div>
                <p className={plan.popular ? 'text-black/60' : 'text-white/40'}>{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 font-medium">
                    <Check className={`w-5 h-5 ${plan.popular ? 'text-black' : 'text-[#00FFC2]'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-5 rounded-2xl font-bold text-lg transition-all ${plan.popular ? 'bg-black text-white hover:bg-black/90' : 'bg-white text-black hover:bg-[#00FFC2]'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <Lock className="w-4 h-4 text-white/40" />
            <span className="text-sm text-white/60 font-medium">Secure checkout via Stripe. 30-day money-back guarantee.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center tracking-tight">Common Questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-white/10 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-bold text-white">{faq.q}</span>
                <ChevronRight className={`text-white/40 transition-transform ${openIndex === i ? 'rotate-90' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-white/60 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-[#0A0E14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#00FFC2] rounded-full flex items-center justify-center">
                <ShieldCheck className="text-black w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white uppercase">{BRAND.name}</span>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed">
              SafeSip is on a mission to redefine personal safety through discreet, medical-grade technology. Designed in California.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">How it works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Research</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-sm">© 2026 SafeSip Technologies Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/20 hover:text-white transition-colors"><Zap className="w-5 h-5" /></a>
            <a href="#" className="text-white/20 hover:text-white transition-colors"><Droplets className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-[#0A0E14] min-h-screen selection:bg-[#00FFC2] selection:text-black">
      <Navbar />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      
      {/* Product Showcase / Lifestyle */}
      <section id="features" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {FEATURES.map((feature, i) => (
              <div key={i} className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ComparisonTable />

      {/* Testimonials */}
      <section className="py-24 bg-[#0A0E14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-12 rounded-[40px] bg-white/5 border border-white/10 italic">
                <p className="text-2xl text-white/80 mb-8 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-4 not-italic">
                  <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden">
                    <img src={`https://picsum.photos/seed/author${i}/100/100`} alt={t.author} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.author}</div>
                    <div className="text-white/40 text-sm">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />
      <FAQSection />

      {/* Final CTA */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[#00FFC2]/10 blur-[120px] rounded-full -translate-y-1/2" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">Ready to drink <br />with confidence?</h2>
          <p className="text-xl text-white/60 mb-12 max-w-xl mx-auto">Join thousands of women who have made SafeSip their non-negotiable nightlife companion.</p>
          <button className="bg-[#00FFC2] text-black px-12 py-6 rounded-full font-black text-2xl hover:scale-105 transition-transform shadow-[0_0_50px_rgba(0,255,194,0.3)]">
            Pre-order SafeSip Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
