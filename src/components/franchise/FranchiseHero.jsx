import React from 'react';
import { CheckCircle2, ArrowRight, Award, TrendingUp } from 'lucide-react';

const scrollToForm = () => {
  document.getElementById('franchise-form')?.scrollIntoView({ behavior: 'smooth' });
};

const FranchiseHero = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-jadko-primary to-[#1e3a8a] z-0"></div>
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-jadko-secondary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jadko-accent/20 border border-jadko-accent/30 text-jadko-accent text-xs font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-jadko-accent animate-pulse"></span>
              NEW BUSINESS OPPORTUNITY
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug mb-4">
              Build Your <span className="text-blue-200">Healthcare</span>{' '}
              <span className="text-jadko-accent">Empire</span> with JADKO
            </h1>

            <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed max-w-lg">
              Join the vanguard of India's diagnostic revolution. We provide the vision, technology, and operational excellence to turn your ambition into a thriving healthcare legacy.
            </p>

            <button
              onClick={scrollToForm}
              className="flex items-center gap-2 px-6 py-3 bg-jadko-secondary text-white rounded-lg font-bold hover:bg-opacity-90 transition-all mb-10 shadow-lg shadow-jadko-secondary/20"
            >
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

          {/* Right: Image */}
          <div className="w-full relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl shadow-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-4">
              <div className="hidden sm:flex absolute top-8 -left-8 bg-white p-4 rounded-xl shadow-xl items-center gap-4 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-[#E8F2FF] p-3 rounded-lg text-jadko-primary">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Proven Brand</p>
                  <p className="text-xs text-gray-500">Pan India Network</p>
                </div>
              </div>

              <div className="hidden sm:flex absolute bottom-12 -right-6 bg-white p-4 rounded-xl shadow-xl items-center gap-4 z-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="bg-[#E1FDEB] p-3 rounded-lg text-jadko-accent">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Quick ROI</p>
                  <p className="text-xs text-gray-500">12–18 Months</p>
                </div>
              </div>

              <img
                src="/franchise.png"
                alt="Modern Healthcare Diagnostics"
                className="rounded-xl w-full h-[220px] sm:h-[320px] lg:h-[500px] object-cover mix-blend-overlay opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseHero;
