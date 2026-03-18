import React from 'react';
import { Quote, Star, Award, CheckCircle, TrendingUp } from 'lucide-react';
import SectionHeader from './common/SectionHeader';

const testimonials = [
  {
    name: "Anita Sharma",
    location: "Mumbai",
    quote: "Got my report in 12 hours—super impressed with the speed and professionalism!",
    rating: 5
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    quote: "The phlebotomist was very gentle and professional. The home collection saved me so much time.",
    rating: 5
  }
];

const brands = [
  { name: "NABL Accredited", icon: <Award className="w-12 h-12" /> },
  { name: "ISO Certified", icon: <CheckCircle className="w-12 h-12" /> },
  { name: "Trusted by Doctors", icon: <Star className="w-12 h-12" /> },
  { name: "Fast & Accurate", icon: <TrendingUp className="w-12 h-12" /> },
];

const TrustSection = () => {
  return (
    <>
      <section className="pt-24 pb-10 bg-gray-50 overflow-hidden">
      <div className="container">
        {/* Testimonials */}
        <div className="mb-20">
          <SectionHeader 
            title="Love from Customers"
            highlight="Customers"
            subtitle="Don't just take our word for it—hear what our patients have to say about their experience."
          />
          <div className="grid md:grid-cols-2 gap-12 mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col relative">
                <Quote className="absolute top-10 right-10 w-12 h-12 text-gray-100" />
                <div className="flex gap-1 text-jadko-accent mb-6">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-xl text-gray-700 italic mb-8 leading-relaxed">"{t.quote}"</p>
                <div className="mt-auto">
                  <h4 className="font-bold text-jadko-primary text-lg">{t.name}</h4>
                  <p className="text-gray-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards moved to separate dark section below */}
      </div>
    </section>
      
      {/* Sleek Animated Infinite Marquee Awards Section */}
      <section className="py-16 bg-white overflow-hidden border-t border-b border-gray-100">
        <div className="container">
           <SectionHeader 
             title="Recognized for Excellence"
             highlight="Excellence"
             subtitle="Accredited and trusted by leading healthcare professionals globally."
           />
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative flex overflow-x-hidden group whitespace-nowrap">
          {/* Subtle gradient masks for fading edges */}
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white to-transparent shadow-none z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white to-transparent shadow-none z-10"></div>
          
          {/* Animated Track - Duplicated for seamless loop */}
          <div className="animate-marquee-infinite flex gap-8 items-center py-4 px-4 w-max">
             {/* First Set */}
             {brands.map((brand, i) => (
               <div key={`brand-1-${i}`} className="flex items-center gap-4 bg-gray-50/80 hover:bg-white border border-gray-100 px-8 py-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 w-72 shrink-0 group/card cursor-pointer hover:-translate-y-1">
                 <div className="text-jadko-primary bg-white p-3 rounded-xl shadow-sm border border-gray-50 group-hover/card:scale-110 transition-transform duration-300 group-hover/card:text-jadko-accent">
                   {brand.icon}
                 </div>
                 <h3 className="font-bold text-gray-800 text-sm md:text-base whitespace-normal leading-tight group-hover/card:text-jadko-primary transition-colors">
                   {brand.name}
                 </h3>
               </div>
             ))}
             {/* Second Set (Duplicate for continuous loop) */}
             {brands.map((brand, i) => (
               <div key={`brand-2-${i}`} className="flex items-center gap-4 bg-gray-50/80 hover:bg-white border border-gray-100 px-8 py-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 w-72 shrink-0 group/card cursor-pointer hover:-translate-y-1">
                 <div className="text-jadko-primary bg-white p-3 rounded-xl shadow-sm border border-gray-50 group-hover/card:scale-110 transition-transform duration-300 group-hover/card:text-jadko-accent">
                   {brand.icon}
                 </div>
                 <h3 className="font-bold text-gray-800 text-sm md:text-base whitespace-normal leading-tight group-hover/card:text-jadko-primary transition-colors">
                   {brand.name}
                 </h3>
               </div>
             ))}
              {/* Third Set (Extra duplicate to ensure no white space on large screens) */}
             {brands.map((brand, i) => (
               <div key={`brand-3-${i}`} className="flex items-center gap-4 bg-gray-50/80 hover:bg-white border border-gray-100 px-8 py-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 w-72 shrink-0 group/card cursor-pointer hover:-translate-y-1">
                 <div className="text-jadko-primary bg-white p-3 rounded-xl shadow-sm border border-gray-50 group-hover/card:scale-110 transition-transform duration-300 group-hover/card:text-jadko-accent">
                   {brand.icon}
                 </div>
                 <h3 className="font-bold text-gray-800 text-sm md:text-base whitespace-normal leading-tight group-hover/card:text-jadko-primary transition-colors">
                   {brand.name}
                 </h3>
               </div>
             ))}
          </div>
        </div>

        <style jsx>{`
          .animate-marquee-infinite {
            animation: marquee 30s linear infinite;
          }
          /* Pause animation on hover */
          .group:hover .animate-marquee-infinite {
             animation-play-state: paused;
          }
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              /* Move by one full set width exactly. Since we triple the items, 1 set = 1/3 of total width */
              transform: translateX(-33.333333%);
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default TrustSection;
