import { Target, TrendingUp, Users } from 'lucide-react';
import SectionHeader from './common/SectionHeader';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <SectionHeader 
              title="About JADKO: Bringing World-Class Testing to Every Indian Home"
              highlight="JADKO"
              centered={false}
              className="mb-8"
            />
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded in 2025 by diagnostics industry veterans, JADKO is committed to transforming healthcare across India. We leverage technology, clinical expertise, and an asset-light franchise model to deliver high-quality testing far from metro centers.
              </p>
              <p>
                India's diagnostic market was ~₹1.54 lakh crore in FY24, and over 80% of this market is still underserved. JADKO's vision is to bridge this gap: we aim to provide affordable, world-class testing for all Indians by 2027.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl">
                <div className="bg-jadko-primary text-white p-3 rounded-xl">
                  <span className="text-xl font-bold">25+</span>
                </div>
                <div>
                  <h4 className="font-bold text-jadko-primary leading-tight">Years of Clinical Expertise</h4>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl">
                <div className="bg-jadko-accent text-white p-3 rounded-xl">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-jadko-primary leading-tight">Rapid Nationwide Reach</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="/about_medical.png" 
                alt="Medical Excellence" 
                className="w-full h-[500px] object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jadko-primary/60 to-transparent flex items-bottom p-12">
                <div className="mt-auto">
                   <p className="text-white text-3xl font-bold leading-tight">"Our mission is to make quality healthcare a right, not a luxury."</p>
                </div>
              </div>
            </div>
            {/* Decorative background shape */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-jadko-accent/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-jadko-secondary/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
