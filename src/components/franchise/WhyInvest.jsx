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
      color: "bg-rose-100 text-rose-600",
      gradient: "from-rose-500/20 to-red-500/20",
      borderColor: "border-rose-400",
      bottomBorder: "border-b-rose-400"
    },
    {
      icon: TrendingUp,
      title: "₹1.5L Cr Market",
      description: "Tap into a massive, recession-proof healthcare market with substantial annual growth.",
      color: "bg-blue-100 text-blue-600",
      gradient: "from-blue-500/20 to-sky-500/20",
      borderColor: "border-blue-400",
      bottomBorder: "border-b-blue-400"
    },
    {
      icon: Layout,
      title: "Asset-Light Model",
      description: "Minimize overhead costs with our optimized infrastructure and logistics network.",
      color: "bg-violet-100 text-violet-600",
      gradient: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-400",
      bottomBorder: "border-b-violet-400"
    },
    {
      icon: Settings,
      title: "Tech Advantage",
      description: "Cutting-edge LIMS software for seamless, paperless and automated patent management.",
      color: "bg-orange-100 text-orange-600",
      gradient: "from-orange-500/20 to-amber-500/20",
      borderColor: "border-orange-400",
      bottomBorder: "border-b-orange-400"
    },
    {
      icon: Users,
      title: "Growing Demand",
      description: "Increased health awareness driving massive demand for preventive and routine testing.",
      color: "bg-teal-100 text-teal-600",
      gradient: "from-teal-500/20 to-cyan-500/20",
      borderColor: "border-teal-400",
      bottomBorder: "border-b-teal-400"
    },
    {
      icon: Layers,
      title: "Multi-Revenue Streams",
      description: "From home collection to B2B tie-ups, enjoy diversified sources of income.",
      color: "bg-pink-100 text-pink-600",
      gradient: "from-pink-500/20 to-fuchsia-500/20",
      borderColor: "border-pink-400",
      bottomBorder: "border-b-pink-400"
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
            className={`group relative p-6 rounded-2xl bg-white border border-b-4 ${benefit.borderColor} ${benefit.bottomBorder} hover:shadow-xl hover:shadow-jadko-primary/5 transition-all duration-300 overflow-hidden`}
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br ${benefit.gradient} -z-10 pointer-events-none`}></div>
            <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
              <benefit.icon className="w-6 h-6 group-hover:animate-wiggle" />
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
