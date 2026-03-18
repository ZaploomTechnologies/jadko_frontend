import React, { useState, useEffect } from 'react';
import { HeartHandshake, Microscope, Users, MapPin } from 'lucide-react';

import SectionHeader from '../common/SectionHeader';

const CountUp = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      
      const isFloat = end % 1 !== 0;
      const currentVal = end * easeOutQuart;
      
      setCount(isFloat ? Number(currentVal.toFixed(1)) : Math.floor(currentVal));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{count === end ? suffix : ''}</span>;
};

const metrics = [
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    number: 8.5,
    suffix: " Mn+",
    label: "Satisfied Customers",
    delay: "0s"
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    number: 100,
    suffix: " Mn+",
    label: "Tests Done",
    delay: "0.2s"
  },
  {
    icon: <Users className="w-8 h-8" />,
    number: 2100,
    suffix: "+",
    label: "Trained Phlebotomists",
    delay: "0.4s"
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    number: 250,
    suffix: "+",
    label: "Cities Covered Across India",
    delay: "0.6s"
  }
];

const AboutMetrics = () => {
  return (
    <section className="py-16 relative z-20 overflow-hidden bg-white">
      <style>
        {`
          @keyframes flowLine {
            to { stroke-dashoffset: -32; }
          }
          .animate-flow-line {
            animation: flowLine 2s linear infinite;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>

      {/* Decorative Background Mesh/Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#E1FDEB] to-transparent rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-50 to-transparent rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container relative z-10">
        
        {/* Text Header */}
        <SectionHeader 
          title="Impact in Numbers"
          highlight="Numbers"
          subtitle="Delivering accuracy, scale, and trust across India's diagnostic ecosystem."
        />

        {/* Unique "No-Card" Layout */}
        <div className="relative">
          {/* Connecting Animated SVG Line for Desktop */}
          <div className="absolute top-[36px] left-0 w-full h-24 hidden lg:block -z-10 pointer-events-none">
            <svg className="w-full h-full text-jadko-accent/20" preserveAspectRatio="none" viewBox="0 0 1000 100">
               <path 
                 d="M -50,50 C 0,50 62.5,25 125,25 C 187.5,25 312.5,75 375,75 C 437.5,75 562.5,25 625,25 C 687.5,25 812.5,75 875,75 C 937.5,75 1000,50 1050,50" 
                 fill="none" 
                 stroke="currentColor" 
                 strokeWidth="2" 
                 strokeDasharray="6 6" 
                 className="animate-flow-line" 
               />
            </svg>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-6">
            {metrics.map((metric, index) => {
              // Stagger every other item up/down to match the sine wave
              const isEven = index % 2 === 0;
              const translateYClass = isEven ? 'lg:-translate-y-4' : 'lg:translate-y-4';
              
              return (
                <div 
                  key={index} 
                  className={`w-full lg:w-1/4 flex flex-col items-center group ${translateYClass}`}
                >
                  {/* Floating Icon */}
                  <div 
                    className="relative mb-6 pt-2 animate-float"
                    style={{ animationDelay: metric.delay }}
                  >
                    {/* Pulsing Aura */}
                    <div className="absolute inset-0 bg-jadko-accent rounded-full blur-xl opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-700"></div>
                    
                    {/* Icon Base */}
                    <div className="w-16 h-16 relative z-10 bg-white rounded-full flex items-center justify-center text-jadko-primary shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 transition-all duration-500 group-hover:border-jadko-accent/50 group-hover:-translate-y-1 group-hover:shadow-[0_8px_25px_rgba(33,181,115,0.15)]">
                      {metric.icon}
                      
                      {/* Decorative dot */}
                      <div className="absolute top-1 right-1 w-2 h-2 bg-jadko-accent rounded-full border-2 border-white shadow-sm"></div>
                    </div>
                  </div>
                  
                  {/* Values & Label */}
                  <div className="text-center flex flex-col items-center mt-1">
                    <div className="flex items-baseline relative">
                      <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-gray-600 tracking-tight group-hover:scale-105 transition-transform duration-500 cursor-default">
                        <CountUp end={metric.number} suffix={metric.suffix} />
                      </h3>
                    </div>
                    
                    {/* Elegant Divider */}
                    <div className="w-6 h-[3px] bg-jadko-accent/20 rounded-full my-4 group-hover:w-12 group-hover:bg-jadko-accent transition-all duration-500 delay-100"></div>
                    
                    <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-widest max-w-[180px] leading-relaxed group-hover:text-jadko-primary transition-colors duration-300">
                      {metric.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMetrics;
