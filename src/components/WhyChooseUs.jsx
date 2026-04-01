import { Home, ShieldCheck, Tag, Zap, Smartphone, Landmark } from 'lucide-react';
import SectionHeader from './common/SectionHeader';

const benefits = [
  {
    icon: Home,
    title: "Doorstep Collection",
    description: "Certified phlebotomists collect samples at your home – safe, hygienic, and convenient.",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
    hoverBorder: "group-hover:border-blue-400"
  },
  {
    icon: ShieldCheck,
    title: "Accredited Labs",
    description: "All tests run in NABL-certified partner labs. Every report is verified by expert doctors.",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-500",
    hoverBorder: "group-hover:border-emerald-400"
  },
  {
    icon: Tag,
    title: "Affordable Pricing",
    description: "Our asset-light model cuts out middlemen, making tests up to 50% cheaper than traditional labs.",
    color: "from-orange-500/20 to-yellow-500/20",
    iconColor: "text-orange-500",
    hoverBorder: "group-hover:border-orange-400"
  },
  {
    icon: Zap,
    title: "Fast Results",
    description: "Get most reports in 24 hours. Focus on quick, same-day turnaround.",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
    hoverBorder: "group-hover:border-purple-400"
  },
  {
    icon: Smartphone,
    title: "Digital Transparency",
    description: "Track your sample in real time via our mobile app – see each step and storage conditions.",
    color: "from-indigo-500/20 to-blue-500/20",
    iconColor: "text-indigo-500",
    hoverBorder: "group-hover:border-indigo-400"
  },
  {
    icon: Landmark,
    title: "Vast Network",
    description: "Leveraging a nationwide franchise model, JADKO is rapidly expanding across 120+ cities.",
    color: "from-rose-500/20 to-orange-500/20",
    iconColor: "text-rose-500",
    hoverBorder: "group-hover:border-rose-400"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-14 md:py-24 overflow-hidden bg-slate-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-jadko-secondary/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-jadko-accent/10 rounded-full blur-[120px] animate-float-delayed"></div>
        <div className="absolute top-[30%] right-[10%] w-[20%] h-[20%] bg-blue-400/10 rounded-full blur-[100px] animate-float-slow"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#094191 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container relative z-10">
        <SectionHeader 
          title="Why Choose JADKO?"
          highlight="JADKO?"
          subtitle="Experience the future of healthcare with our tech-driven diagnostic solutions designed for your comfort and reliability."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`group relative p-7 rounded-2xl border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/80 bg-white overflow-hidden ${benefit.hoverBorder}`}
              >
                {/* Card Gradient Background on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br ${benefit.color}`}></div>

                {/* Background Icon */}
                <div className={`absolute -top-4 -right-4 opacity-[0.08] group-hover:opacity-[0.15] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 ${benefit.iconColor}`}>
                  <Icon className="w-32 h-32" />
                </div>

                <div className="relative flex flex-col gap-5">
                  <div>
                    <h3 className="text-base font-bold text-jadko-primary mb-2 flex items-center gap-2">
                      {benefit.title}
                      <div className="h-0.5 w-0 group-hover:w-6 bg-jadko-secondary transition-all duration-500 rounded-full"></div>
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
