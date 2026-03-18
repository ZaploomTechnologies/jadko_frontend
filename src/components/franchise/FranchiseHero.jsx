import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const FranchiseHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-jadko-primary to-[#1e3a8a] z-0"></div>
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-jadko-secondary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jadko-accent/20 border border-jadko-accent/30 text-jadko-accent text-xs font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-jadko-accent animate-pulse"></span>
            NEW BUSINESS OPPORTUNITY
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Build Your <span className="text-blue-200">Healthcare</span> <br />
            <span className="text-jadko-accent">Empire</span> with JADKO
          </h1>
          
          <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
            Join the vanguard of India's diagnostic revolution. We provide the vision, tech-logy, and operational excellence to turn your ambition into a thriving healthcare legacy.
          </p>
          
          <button className="flex items-center gap-2 px-6 py-3 bg-jadko-secondary text-white rounded-lg font-bold hover:bg-opacity-90 transition-all mb-10 shadow-lg shadow-jadko-secondary/20">
            Apply for Franchise <ArrowRight className="w-4 h-4" />
          </button>
          
          <ul className="space-y-4">
            {[
              "Minimal capital entry with high-yield asset-light models",
              "Access to a 1.5 Lakh Crore recession-proof market",
              "End-to-end operational mastery and tech ecosystem"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-jadko-accent shrink-0" />
                <span className="text-sm md:text-base font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FranchiseHero;
