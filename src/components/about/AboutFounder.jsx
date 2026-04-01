import React from 'react';

import SectionHeader from '../common/SectionHeader';

const founders = [
  {
    name: "Jitesh Patel",
    designation: "Founder",
    email: "jadkohealthcare@gmail.com",
    image: "/JiteshPatel.jpeg",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Amita Patel",
    designation: "CEO",
    email: "jadkohealthcare@gmail.com",
    image: "/amitaPatel.jpeg",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Dharmesh Malsatar",
    designation: "Co-Founder",
    email: "jadkohealthcare@gmail.com",
    image: "/DharmeshMalsatar.jpg.jpeg",
    linkedin: "#",
    twitter: "#"
  }
];

const AboutFounder = () => {
  return (
    <section className="py-14 md:py-24 bg-gray-50/50 relative overflow-hidden">
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
                    className="relative z-10 w-full h-auto aspect-square object-cover object-top rounded-2xl shadow-md grayscale group-hover:grayscale-0 transition-all duration-500"
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
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
