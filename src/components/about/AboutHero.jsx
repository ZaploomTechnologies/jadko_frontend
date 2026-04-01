import React from 'react';
import { ArrowRight, CheckCircle2, TestTube, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-jadko-primary to-[#1e3a8a] pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-jadko-secondary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jadko-accent/20 border border-jadko-accent/30 text-jadko-accent text-xs font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-jadko-accent animate-pulse"></span>
              ACCURATE DIAGNOSTICS. KNOWLEDGE-DRIVEN OUTCOMES.
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug mb-4">
              Transforming <span className="text-blue-200">Diagnostics</span> for the{' '}
              <span className="text-jadko-accent">Next Generation</span> of Healthcare
            </h1>

            <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed max-w-lg">
              JADKO Healthcare is building a nationwide, technology-enabled diagnostic network delivering reliable testing, faster turnaround times, and accessible healthcare across India.
            </p>

            <Link
              to="/contact#contact-form"
              className="inline-flex items-center gap-2 px-6 py-3 bg-jadko-secondary text-white rounded-lg font-bold hover:bg-opacity-90 transition-all mb-10 shadow-lg shadow-jadko-secondary/20"
            >
              Become a Partner <ArrowRight className="w-4 h-4" />
            </Link>

            <ul className="space-y-4">
              {[
                "India's Trusted Network for Accurate Diagnostics",
                "Nationwide reach with technology-enabled labs",
                "Faster turnaround times and accessible healthcare"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-jadko-accent shrink-0" />
                  <span className="text-sm md:text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image/Graphic */}
          <div className="w-full lg:w-1/2 relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl shadow-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-4">
              <div className="hidden sm:flex absolute top-8 -left-8 bg-white p-4 rounded-xl shadow-xl items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-[#E8F2FF] p-3 rounded-lg text-jadko-primary">
                  <Microscope className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Advanced Lab</p>
                  <p className="text-xs text-gray-500">100% Accuracy</p>
                </div>
              </div>
              
              <div className="hidden sm:flex absolute bottom-12 -right-6 bg-white p-4 rounded-xl shadow-xl items-center gap-4 z-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="bg-[#E1FDEB] p-3 rounded-lg text-jadko-accent">
                  <TestTube className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Fast Results</p>
                  <p className="text-xs text-gray-500">Within Hours</p>
                </div>
              </div>

              <img 
                src="/blood-test.jpg" 
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

export default AboutHero;
