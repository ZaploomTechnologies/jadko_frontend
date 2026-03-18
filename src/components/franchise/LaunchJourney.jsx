import React from 'react';
import SectionHeader from '../common/SectionHeader';

const steps = [
  {
    step: "1",
    badge: "APPLY",
    badgeBg: "bg-[#eef3fb]",
    badgeText: "text-[#1a457b]",
    themeColor: "bg-[#1f4b7a]",
    image: "/apply.png",
    title: "Apply",
    description: "Submit your application online or call our expert.",
    cardBg: "bg-[#fafcff]",
    borderColor: "border-[#f4f7fa]"
  },
  {
    step: "2",
    badge: "CONSULT",
    badgeBg: "bg-[#e5faf7]",
    badgeText: "text-[#14b8a6]",
    themeColor: "bg-[#14b8a6]",
    image: "/consult.png",
    title: "Consultation",
    description: "Discuss business, financial, and model suitability.",
    cardBg: "bg-[#fafefd]",
    borderColor: "border-[#f0faf8]"
  },
  {
    step: "3",
    badge: "SETUP",
    badgeBg: "bg-[#ffebf0]",
    badgeText: "text-[#d8385e]",
    themeColor: "bg-[#d8385e]",
    image: "/setup.jpg",
    title: "Setup",
    description: "Interior design, machine installation, and branding.",
    cardBg: "bg-[#fffafa]",
    borderColor: "border-[#fcf2f4]"
  },
  {
    step: "4",
    badge: "LAUNCH",
    badgeBg: "bg-[#eef3fb]",
    badgeText: "text-[#1a457b]",
    themeColor: "bg-[#1f4b7a]",
    image: "/launch.png",
    title: "Launch",
    description: "Grand opening with full marketing support.",
    cardBg: "bg-[#fafcff]",
    borderColor: "border-[#f4f7fa]"
  }
];

const LaunchJourney = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container max-w-[1400px]">
        <SectionHeader 
          title="Launch Journey"
          highlight="Journey"
          subtitle="Our step-by-step process to get your franchise operational in record time."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center rounded-[2rem] p-6 border shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 bg-white ${step.borderColor}`}
            >
              <div className={`px-6 py-1.5 rounded-full text-[11px] font-extrabold tracking-widest mb-6 ${step.badgeBg} ${step.badgeText}`}>
                {step.badge}
              </div>
              
              <div className="w-full relative rounded-[1.25rem] overflow-hidden mb-6 h-36 md:h-40 flex shadow-sm bg-gray-100">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="absolute right-0 top-0 w-3/5 h-full object-cover"
                />
                
                <div 
                  className={`absolute left-0 top-0 ${step.themeColor} text-white w-[55%] h-full flex items-center justify-center z-10 rounded-r-[1.25rem] shadow-[4px_0_15px_rgba(0,0,0,0.2)]`}
                >
                  <div className="flex items-center gap-1 -ml-2">
                    <span className="text-[10px] font-bold tracking-widest leading-none mt-2 opacity-90">
                      STEP
                    </span>
                    <span className="text-[72px] font-black leading-none tracking-tighter opacity-90">
                      {step.step}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="text-center flex flex-col flex-grow w-full">
                <h3 className="text-[16px] font-bold text-gray-800 mb-3 leading-[1.3] min-h-[44px] flex items-center justify-center">
                  {step.title}
                </h3>
                <p className="text-[14px] text-gray-500 leading-relaxed font-medium px-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaunchJourney;

