import React from 'react';
import { Layers, Monitor, Microscope, Check } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const FranchiseModels = () => {
  const models = [
    {
      title: "Collection Centre",
      level: "ENTRY LEVEL",
      icon: Layers,
      description: "Low investment, high visibility retail outlets focused on blood sample collection.",
      features: [
        "Minimal Space (100-200 sq.ft)",
        "Quick Setup"
      ],
      cta: "Learn More",
      isRecommended: false
    },
    {
      title: "Mini Lab",
      level: "MID LEVEL",
      icon: Monitor,
      description: "Equipped with basic semi-automatic machines for faster reporting of routine tests.",
      features: [
        "On-site basic testing",
        "200-400 sq.ft area"
      ],
      cta: "Select Model",
      isRecommended: true
    },
    {
      title: "Full Diagnostic Lab",
      level: "HIGH POTENTIAL",
      icon: Microscope,
      description: "Comprehensive facility providing Pathology, Radiology, and Specialty tests.",
      features: [
        "Advanced Automation",
        "500+ sq.ft area"
      ],
      cta: "Learn More",
      isRecommended: false
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container">
        <SectionHeader 
          title="Select Your Model"
          highlight="Model"
          subtitle="Flexible options tailored to your investment capacity and geographic reach."
        />
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
        {models.map((model, index) => (
          <div 
            key={index}
            className={`relative flex flex-col p-6 rounded-3xl border transition-all duration-500 bg-white border-jadko-primary shadow-xl shadow-jadko-primary/10 hover:scale-[1.02] z-10`}
          >
            
            <div className="mb-5">
              <span className="text-[9px] font-black tracking-widest text-jadko-primary/60 uppercase">
                {model.level}
              </span>
              <h3 className="text-xl font-black mt-1 mb-3">{model.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">
                {model.description}
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {model.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                  <Check className="w-3.5 h-3.5 text-jadko-accent" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 rounded-lg text-sm font-bold transition-all ${
              model.isRecommended 
                ? 'bg-jadko-primary text-white hover:bg-jadko-primary/90 shadow-md shadow-jadko-primary/20' 
                : 'bg-white text-jadko-primary border border-jadko-primary/20 hover:border-jadko-primary'
            }`}>
              {model.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FranchiseModels;
