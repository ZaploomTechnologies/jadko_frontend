import React from 'react';
import SectionHeader from './common/SectionHeader';

const steps = [
  {
    step: "1",
    badge: "BOOK",
    badgeBg: "bg-[#eef3fb]",
    badgeText: "text-[#1a457b]",
    themeColor: "bg-[#1f4b7a]",
    image: "/book.png",
    title: "Start Your Online Booking",
    description: "Open the JADKO website/app. Select the test or package and enter your details. Schedule the service for your preferred slot.",
    cardBg: "bg-[#fafcff]",
    borderColor: "border-[#f4f7fa]"
  },
  {
    step: "2",
    badge: "COLLECT",
    badgeBg: "bg-[#e5faf7]",
    badgeText: "text-[#14b8a6]",
    themeColor: "bg-[#14b8a6]",
    image: "/sample.png",
    title: "Sample Collection",
    description: "Our certified experts ensure a smooth, hygienic, and fully compliant sample collection experience.",
    cardBg: "bg-[#fafefd]",
    borderColor: "border-[#f0faf8]"
  },
  {
    step: "3",
    badge: "TRACK",
    badgeBg: "bg-[#ffebf0]",
    badgeText: "text-[#d8385e]",
    themeColor: "bg-[#d8385e]",
    image: "/track.png",
    title: "Live Tracking",
    description: "Stay updated with real-time tracking for a smooth and timely home sample collection.",
    cardBg: "bg-[#fffafa]",
    borderColor: "border-[#fcf2f4]"
  },
  {
    step: "4",
    badge: "REPORT",
    badgeBg: "bg-[#eef3fb]",
    badgeText: "text-[#1a457b]",
    themeColor: "bg-[#1f4b7a]",
    image: "/report.png",
    title: "Doctor-Verified Smart Reports",
    description: "Every report is clinically checked by expert doctors and shared with smart, actionable insights.",
    cardBg: "bg-[#fafcff]",
    borderColor: "border-[#f4f7fa]"
  }
];

const StepsSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container">
        <SectionHeader 
          title="4 Simple Steps to Manage Your Health"
          highlight="Simple Steps"
          subtitle="Experience hassle-free diagnostics with our streamlined process designed for your convenience."
        />
        {/* We use a grid with 5 columns on large screens, scrollable or wrap on smaller screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center rounded-[2rem] p-6 border shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 bg-white ${step.borderColor}`}
            >
              {/* Badge */}
              <div className={`px-6 py-1.5 rounded-full text-[11px] font-extrabold tracking-widest mb-6 ${step.badgeBg} ${step.badgeText}`}>
                {step.badge}
              </div>
              
              {/* Image & Step Number Block */}
              <div className="w-full relative rounded-[1.25rem] overflow-hidden mb-6 h-36 md:h-40 flex shadow-sm bg-gray-100">
                {/* Background Image across the right or whole block */}
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="absolute right-0 top-0 w-3/5 h-full object-cover"
                />
                
                {/* Overlay left block with curve */}
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
              
              {/* Text Content */}
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

export default StepsSection;
