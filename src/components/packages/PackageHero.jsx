import { ChevronDown, CheckCircle2, FlaskConical, Clock } from 'lucide-react';

const PackageHero = () => {
  const scrollToPackages = () => {
    document.getElementById('packages-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-jadko-primary to-[#1e3a8a] pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-jadko-secondary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left: Content */}
          <div className="w-full lg:w-1/2 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jadko-accent/20 border border-jadko-accent/30 text-jadko-accent text-xs font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-jadko-accent animate-pulse"></span>
              PREVENTIVE HEALTH PACKAGES
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug mb-4">
              Full Body Checkup <span className="text-blue-200">Starting</span> at Just{' '}
              <span className="text-jadko-accent">₹999</span>
            </h1>

            <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed max-w-lg">
              Comprehensive diagnostic packages with free home sample collection. Get accurate results, digital reports, and expert guidance — all at up to <span className="text-white font-bold">75% off</span> MRP.
            </p>

            <button
              onClick={scrollToPackages}
              className="inline-flex items-center gap-2 px-6 py-3 bg-jadko-secondary text-white rounded-lg font-bold hover:bg-opacity-90 transition-all mb-10 shadow-lg shadow-jadko-secondary/20"
            >
              View Packages <ChevronDown className="w-4 h-4" />
            </button>

            <ul className="space-y-4">
              {[
                'Free home sample collection, no lab visit needed',
                'Digital reports delivered within 24 hours',
                'NABL Protocol Followed — 100% accurate results',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-jadko-accent shrink-0" />
                  <span className="text-sm md:text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl shadow-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-4">

              {/* Floating badge — top left */}
              <div className="hidden sm:flex absolute top-8 -left-8 bg-white p-4 rounded-xl shadow-xl items-center gap-4 z-20 isolate animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-[#E8F2FF] p-3 rounded-lg text-jadko-primary">
                  <FlaskConical className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">30+ Tests</p>
                  <p className="text-xs text-gray-500">Starting ₹999</p>
                </div>
              </div>

              {/* Floating badge — bottom right */}
              <div className="hidden sm:flex absolute bottom-12 -right-6 bg-white p-4 rounded-xl shadow-xl items-center gap-4 z-20 isolate animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="bg-[#E1FDEB] p-3 rounded-lg text-jadko-accent">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Reports in 24hrs</p>
                  <p className="text-xs text-gray-500">Digital Delivery</p>
                </div>
              </div>

              <img
                src="/family.jpg"
                alt="Health Checkup Packages"
                className="rounded-xl w-full h-[220px] sm:h-[320px] lg:h-[500px] object-cover mix-blend-overlay opacity-80"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/600x500?text=JADKO+Health+Packages';
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PackageHero;