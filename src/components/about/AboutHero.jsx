import React from 'react';
import { ArrowRight, Activity, TestTube, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-jadko-primary to-[#1e3a8a] pt-24 pb-32 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-jadko-secondary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 text-white animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm mb-6 border border-white/20">
              <Activity className="w-4 h-4 text-jadko-accent" />
              <span className="text-sm font-semibold tracking-wide text-jadko-accent">
                Accurate Diagnostics. Knowledge-Driven Outcomes.
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transforming Diagnostics for the Next Generation of Healthcare
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-blue-100 mb-6 border-l-4 border-jadko-accent pl-4">
              India's Trusted Network for Accurate Diagnostics
            </h2>
            
            <p className="text-lg text-blue-50 mb-10 leading-relaxed max-w-2xl opacity-90">
              JADKO Healthcare is building a nationwide, technology-enabled diagnostic network delivering reliable testing, faster turnaround times, and accessible healthcare across India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/#services" 
                className="inline-flex justify-center items-center gap-2 bg-white text-jadko-primary px-8 py-3.5 rounded-full font-bold hover:bg-gray-100 transition-all hover:-translate-y-0.5"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/#franchise" 
                className="inline-flex justify-center items-center gap-2 bg-jadko-secondary text-white px-8 py-3.5 rounded-full font-bold hover:bg-red-700 transition-all hover:-translate-y-0.5"
              >
                Become a Partner
              </Link>
            </div>
          </div>

          {/* Right Image/Graphic */}
          <div className="w-full lg:w-1/2 relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-4">
              <div className="absolute top-8 -left-8 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-[#E8F2FF] p-3 rounded-lg text-jadko-primary">
                  <Microscope className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Advanced Lab</p>
                  <p className="text-xs text-gray-500">100% Accuracy</p>
                </div>
              </div>
              
              <div className="absolute bottom-12 -right-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 z-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="bg-[#E1FDEB] p-3 rounded-lg text-jadko-accent">
                  <TestTube className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Fast Results</p>
                  <p className="text-xs text-gray-500">Within Hours</p>
                </div>
              </div>

              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Modern Healthcare Diagnostics" 
                className="rounded-xl w-full h-[500px] object-cover mix-blend-overlay opacity-80"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
