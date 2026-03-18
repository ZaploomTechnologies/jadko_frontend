import React from 'react';
import { Mail, Phone, ExternalLink, Linkedin, Twitter } from 'lucide-react';

import SectionHeader from '../common/SectionHeader';

const founders = [
  {
    name: "Dr. Sameer Khan",
    designation: "Founder & CEO",
    email: "sameer.k@jadko.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Anjali Sharma",
    designation: "Co-Founder & COO",
    email: "anjali.s@jadko.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Vikram Malhotra",
    designation: "Co-Founder & CTO",
    email: "vikram.m@jadko.com",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    linkedin: "#",
    twitter: "#"
  }
];

const AboutFounder = () => {
  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="container">
        <SectionHeader 
          label="Our Leadership"
          title="The Minds Behind JADKO"
          highlight="JADKO"
          subtitle="Our leadership team brings together decades of expertise in healthcare, technology, and operations to revolutionize diagnostics in India."
        />
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="group bg-white rounded-[2.5rem] p-6 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100/50 hover:-translate-y-2 flex flex-row items-center gap-6">
              
              {/* Left: Image (4/10 width approx) */}
              <div className="w-1/3 shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-jadko-primary/10 rounded-2xl transform rotate-6 transition-transform group-hover:rotate-12"></div>
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="relative z-10 w-full h-auto aspect-square object-cover rounded-2xl shadow-md grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Right: Details (6/10 width approx) */}
              <div className="w-2/3 space-y-3">
                <div>
                  <h4 className="text-xl font-black text-jadko-primary group-hover:text-jadko-secondary transition-colors truncate">
                    {founder.name}
                  </h4>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                    {founder.designation}
                  </p>
                </div>
                
                <a href={`mailto:${founder.email}`} className="text-xs font-semibold text-gray-500 hover:text-jadko-primary flex items-center gap-2 transition-colors truncate">
                  <Mail className="w-3.5 h-3.5 text-jadko-primary" />
                  {founder.email}
                </a>

                <div className="flex gap-3 pt-1">
                  <a href={founder.linkedin} className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-[#0077b5] hover:bg-[#E8F2FF] transition-all shadow-sm">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={founder.twitter} className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-[#1DA1F2] hover:bg-[#E8F2FF] transition-all shadow-sm">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-jadko-primary hover:bg-[#E8F2FF] transition-all shadow-sm">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
