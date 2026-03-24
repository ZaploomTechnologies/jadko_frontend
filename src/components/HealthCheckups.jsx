import React, { useState } from 'react';
import {
  Activity, Heart, Thermometer, Droplets,
  User, Zap, Shield, Microscope,
  Baby, Syringe, Clipboard, PieChart,
  ChevronDown, ChevronUp
} from 'lucide-react';
import SectionHeader from './common/SectionHeader';

const categories = [
  { icon: <Activity />, label: "Full Body" },
  { icon: <Heart />, label: "Heart", badge: "Most Booked", badgeColor: "text-red-600 bg-red-50 border-red-100" },
  { icon: <Clipboard />, label: "Tax Saver", badge: "80D Benefit", badgeColor: "text-pink-600 bg-pink-50 border-pink-100" },
  { icon: <Zap />, label: "Vitamin" },
  { icon: <Thermometer />, label: "Fever" },
  { icon: <Syringe />, label: "Diabetes" },
  { icon: <Shield />, label: "Thyroid" },
  { icon: <Microscope />, label: "Hormones" },
  { icon: <Activity />, label: "Cancer" },
  { icon: <User />, label: "Lifestyle" },
  { icon: <Baby />, label: "Pregnancy" },
  { icon: <PieChart />, label: "Fertility" },
  { icon: <Activity />, label: "Allergy" },
  { icon: <Activity />, label: "STD" },
  { icon: <User />, label: "Combo" },
  { icon: <Activity />, label: "Arthritis" },
  { icon: <Baby />, label: "Antenatal" },
  { icon: <Droplets />, label: "Anemia" },
];

const bgColors = [
  'bg-cyan-50', // soft cyan
  'bg-fuchsia-50', // soft fuchsia
  'bg-yellow-50', // soft yellow
  'bg-emerald-50', // soft emerald
  'bg-violet-50', // soft violet
  'bg-orange-50', // soft orange
  'bg-lime-50', // soft lime
  'bg-rose-50', // soft rose
];

const MOBILE_VISIBLE = 8;

const HealthCheckups = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="services" className="py-20 bg-gray-50/50">
      <div className="container">
        <SectionHeader
          title="Diagnostic Packages"
          highlight="Packages"
          subtitle="Comprehensive health checkup packages designed for preventive care."
        />

        <div className="px-2 sm:px-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
            {categories.map((item, index) => (
              <div
                key={index}
                className={`group bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4 transition-all duration-300 hover:border-jadko-primary/40 border border-gray-100 relative cursor-pointer${index >= MOBILE_VISIBLE && !showAll ? ' hidden md:flex' : ''}`}
              >
                {item.badge && (
                  <span className={`absolute -top-2 right-2 sm:right-4 flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-full border ${item.badgeColor} z-20`}>
                    {item.badge === 'Most Booked' && <Activity className="w-2.5 h-2.5" />}
                    {item.badge}
                  </span>
                )}
                
                <div className="relative flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <div className={`absolute -inset-1 rounded-full opacity-60 transform transition-transform duration-300 group-hover:scale-110 ${bgColors[index % bgColors.length]}`}></div>
                  <div className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full opacity-40 top-0 left-0 translate-x-1 -translate-y-1 bg-pink-300"></div>
                  <div className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full opacity-40 bottom-0 right-0 -translate-x-1 translate-y-1 bg-yellow-400"></div>
                  
                  <div className="relative z-10 text-gray-800">
                    {React.cloneElement(item.icon, { className: 'w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]' })}
                  </div>
                </div>
                
                <h3 className="font-bold text-xs sm:text-sm text-gray-800 text-left leading-tight transition-colors duration-300 group-hover:text-jadko-primary">
                  {item.label}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center md:hidden">
          <button
            onClick={() => setShowAll(prev => !prev)}
            className="inline-flex items-center gap-2 bg-white px-6 py-2.5 rounded-full text-jadko-primary font-bold shadow-sm hover:shadow-md transition-all border border-gray-200 text-sm"
          >
            {showAll ? (
              <>Show Less <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>Read More <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HealthCheckups;
