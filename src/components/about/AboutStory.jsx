import React from 'react';
import { Building2, FlaskConical, Map, ArrowRight } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const AboutStory = () => {
  return (
    <section className="py-14 md:py-24 bg-white relative">
      <div className="container">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2">
            <SectionHeader 
              label="Our Story & Vision"
              title="Built on Experience. Designed for Scale."
              highlight="Experience"
              centered={false}
              className="mb-8"
            />
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded in 2025 and backed by <strong className="text-gray-900">25+ years of diagnostic expertise</strong>, JADKO combines deep clinical knowledge with modern technology to build a scalable and trusted diagnostic network.
            </p>

            <div className="bg-gray-50 border-l-4 border-jadko-secondary p-8 rounded-r-2xl mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h4>
              <p className="text-gray-700 italic text-lg opacity-90">
                "To build India's most reliable, technology-driven diagnostic network delivering accurate results and accessible healthcare to every city and community."
              </p>
            </div>
            
            <p className="text-gray-600 flex items-center gap-2 font-medium">
              Join us in transforming healthcare delivery. <ArrowRight className="w-4 h-4 text-jadko-secondary" />
            </p>
          </div>

          {/* Right: Infographic / Cards */}
          <div className="w-full lg:w-1/2 min-h-[400px]">
            <div className="relative">
              {/* Animated Connecting Timeline */}
              <div className="absolute left-[39px] top-6 bottom-6 w-1 rounded-full hidden md:block z-0 overflow-hidden bg-gray-100">
                <div className="w-full h-1/3 bg-gradient-to-b from-transparent via-jadko-primary to-transparent animate-[pulse_3s_ease-in-out_infinite]"></div>
              </div>
              
              <div className="space-y-6 relative z-10">
                
                {/* Pillar 1 */}
                <div className="relative group bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-jadko-primary/30 flex items-start gap-6 ml-0 md:ml-4 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-jadko-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative bg-[#E8F2FF] group-hover:bg-jadko-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(9,65,145,0.4)] transition-all duration-500 text-jadko-primary p-4 rounded-xl z-20 shrink-0">
                    <FlaskConical className="w-7 h-7" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-jadko-primary transition-colors duration-300">Central Reference Lab</h4>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">Equipped with state-of-the-art technology for high-precision, complex diagnostics and specialized testing.</p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="relative group bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-jadko-accent/30 flex items-start gap-6 ml-0 md:ml-8 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-jadko-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative bg-[#E1FDEB] group-hover:bg-jadko-accent group-hover:text-white group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-500 text-jadko-accent p-4 rounded-xl z-20 shrink-0">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-jadko-accent transition-colors duration-300">Strategic Mini Labs</h4>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">Distributed processing centers designed to ensure faster turnaround times for routine and vital tests.</p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="relative group bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-jadko-secondary/30 flex items-start gap-6 ml-0 md:ml-12 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-jadko-secondary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative bg-[#FFE5E6] group-hover:bg-jadko-secondary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all duration-500 text-jadko-secondary p-4 rounded-xl z-20 shrink-0">
                    <Map className="w-7 h-7" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-jadko-secondary transition-colors duration-300">Franchise Collection Centers</h4>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">A rapidly expanding network establishing nationwide reach and making testing accessible everywhere.</p>
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

export default AboutStory;
