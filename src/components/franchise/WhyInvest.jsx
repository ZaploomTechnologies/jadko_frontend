import React from 'react';
import { 
  Award, 
  TrendingUp, 
  Layout, 
  Settings, 
  Users, 
  Layers 
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const WhyInvest = () => {
  const benefits = [
    {
      icon: Award,
      title: "20+ Years Expertise",
      description: "Guided by veterans with decades of experience in the diagnostic and healthcare industry.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: TrendingUp,
      title: "₹1.5L Cr Market",
      description: "Tap into a massive, recession-proof healthcare market with substantial annual growth.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Layout,
      title: "Asset-Light Model",
      description: "Minimize overhead costs with our optimized infrastructure and logistics network.",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Settings,
      title: "Tech Advantage",
      description: "Cutting-edge LIMS software for seamless, paperless and automated patent management.",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      icon: Users,
      title: "Growing Demand",
      description: "Increased health awareness driving massive demand for preventive and routine testing.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Layers,
      title: "Multi-Revenue Streams",
      description: "From home collection to B2B tie-ups, enjoy diversified sources of income.",
      color: "bg-amber-100 text-amber-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50/50">
      <div className="container">
        <SectionHeader 
          title="Why Invest in JADKO?"
          highlight="JADKO?"
          subtitle="Join India's fastest-growing diagnostic network and build a sustainable, future-ready healthcare business."
        />
      </div>

      <div className="jadko-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-jadko-primary/20 hover:shadow-xl hover:shadow-jadko-primary/5 transition-all duration-300"
          >
            <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
              <benefit.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
            <p className="text-gray-600 leading-relaxed text-xs">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyInvest;
