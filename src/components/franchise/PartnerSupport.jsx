import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const PartnerSupport = () => {
  const supportPoints = [
    "Site Selection & Setup",
    "Branding & Marketing",
    "Technical Training",
    "Logistics Management",
    "IT & LIMS Integration",
    "Operational Audit"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title="Unmatched Partner Support"
              highlight="Support"
              centered={false}
              mobileCentered={true}
              className="mb-8"
            />
            <p className="text-gray-500 mb-8 text-base leading-relaxed">
              We don't just grant franchises; we build partnerships. Our success is directly tied to yours, which is why we offer comprehensive support at every stage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
              {supportPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-jadko-accent" />
                  <span className="font-bold text-sm text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-jadko-accent/10 rounded-2xl -rotate-2 group-hover:rotate-0 transition-all duration-500"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img
                src="/meeting.jpg"
                alt="Partner Support Illustration"
                className="w-full h-full object-cover object-[30%_center]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSupport;
