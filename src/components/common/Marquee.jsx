import React from 'react';

const Marquee = () => {
  const message = "A Journey of Accurate Diagnostics and Knowledge for better Outcomes";
  
  return (
    <div className="bg-jadko-primary text-white overflow-hidden py-2 border-b border-white/10 relative z-[60]">
      <div className="animate-marquee whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-8 font-medium text-sm md:text-base tracking-wide inline-flex items-center">
            <span className="w-2 h-2 bg-jadko-accent rounded-full mr-3 inline-block"></span>
            {message}
          </span>
        ))}
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-8 font-medium text-sm md:text-base tracking-wide inline-flex items-center">
            <span className="w-2 h-2 bg-jadko-accent rounded-full mr-3 inline-block"></span>
            {message}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
