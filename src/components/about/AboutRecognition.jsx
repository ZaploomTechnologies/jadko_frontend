import React from 'react';
import { Award, ShieldCheck, Zap, Stethoscope } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const recognitions = [
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "NABL Protocol Followed",
    desc: "Highest standards of quality",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    icon: <Award className="w-10 h-10" />,
    title: "ISO Certified Processes",
    desc: "Ensuring global benchamrks",
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Recognized for Innovation",
    desc: "Technology-enabled diagnostics",
    color: "text-yellow-600",
    bg: "bg-yellow-50"
  },
  {
    icon: <Stethoscope className="w-10 h-10" />,
    title: "Trusted by Professionals",
    desc: "Doctors' preferred choice",
    color: "text-jadko-secondary",
    bg: "bg-[#FFE5E6]"
  }
];



const AboutRecognition = () => {
  return (
    <section className="py-16 bg-white overflow-hidden border-t border-b border-gray-100">
      <div className="container">
        <SectionHeader
          title="Recognized for Excellence"
          highlight="Excellence"
          subtitle="We are committed to maintaining the highest global standards in diagnostics."
        />
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex overflow-x-hidden group whitespace-nowrap">
        {/* Subtle gradient masks for fading edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white to-transparent shadow-none z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white to-transparent shadow-none z-10 pointer-events-none"></div>

        {/* Animated Track - Duplicated for seamless loop */}
        <div className="animate-marquee-infinite flex gap-8 items-center py-4 px-4 w-max">
          {/* First Set */}
          {recognitions.map((item, i) => (
            <div key={`rec-1-${i}`} className="flex items-center gap-4 bg-gray-50/80 hover:bg-white border border-gray-100 px-8 py-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 w-80 shrink-0 group/card cursor-pointer hover:-translate-y-1">
              <div className={`p-3 rounded-xl shadow-sm border border-gray-50 group-hover/card:scale-110 transition-transform duration-300 ${item.bg} ${item.color}`}>
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-sm md:text-base whitespace-normal leading-tight group-hover/card:text-jadko-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 whitespace-normal mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
          {/* Second Set (Duplicate for continuous loop) */}
          {recognitions.map((item, i) => (
            <div key={`rec-2-${i}`} className="flex items-center gap-4 bg-gray-50/80 hover:bg-white border border-gray-100 px-8 py-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 w-80 shrink-0 group/card cursor-pointer hover:-translate-y-1">
              <div className={`p-3 rounded-xl shadow-sm border border-gray-50 group-hover/card:scale-110 transition-transform duration-300 ${item.bg} ${item.color}`}>
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-sm md:text-base whitespace-normal leading-tight group-hover/card:text-jadko-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 whitespace-normal mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
          {/* Third Set (Extra duplicate to ensure no white space on large screens) */}
          {recognitions.map((item, i) => (
            <div key={`rec-3-${i}`} className="flex items-center gap-4 bg-gray-50/80 hover:bg-white border border-gray-100 px-8 py-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 w-80 shrink-0 group/card cursor-pointer hover:-translate-y-1">
              <div className={`p-3 rounded-xl shadow-sm border border-gray-50 group-hover/card:scale-110 transition-transform duration-300 ${item.bg} ${item.color}`}>
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-sm md:text-base whitespace-normal leading-tight group-hover/card:text-jadko-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 whitespace-normal mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
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
  );
};

export default AboutRecognition;
