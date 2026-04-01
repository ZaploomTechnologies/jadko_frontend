import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronDown, ChevronUp, ChevronLeft,
  Clock, Users, CalendarDays, FlaskConical,
  CheckCircle2, MessageCircle, Home, FileText,
  ShieldCheck, BookOpen, HeadphonesIcon, Microscope,
  Droplets, Activity, Filter, Zap, Gauge, TestTube,
  Pill, Sun, TrendingUp, Star,
} from 'lucide-react';

const ICON_MAP = {
  Droplets, Activity, FlaskConical, Filter, Zap,
  CheckCircle2, Gauge, TestTube, Pill, Sun, TrendingUp,
};

const WHATSAPP_NUMBER = '919033608708';

const steps = [
  {
    icon: BookOpen,
    title: 'Booking Made Easy',
    desc: 'Call or WhatsApp us to book your preferred slot, or request a Health Advisor callback.',
    color: 'bg-blue-500',
  },
  {
    icon: HeadphonesIcon,
    title: 'Guidance',
    desc: 'Our Health Advisor & medical advisor provide guidance throughout the testing process.',
    color: 'bg-purple-500',
  },
  {
    icon: Home,
    title: 'Sample Collection',
    desc: 'Enjoy the convenience of free sample collection right at your home, conducted seamlessly by our team of trained phlebotomists.',
    color: 'bg-jadko-primary',
  },
  {
    icon: Microscope,
    title: 'Processing & Verify',
    desc: 'Your temperature-controlled sample is transported, processed, and results meticulously verified by our expert team.',
    color: 'bg-teal-500',
  },
  {
    icon: FileText,
    title: 'Report and Support',
    desc: 'Receive your digital report within 24 hours via WhatsApp or email, with complimentary guidance for report discussions.',
    color: 'bg-green-500',
  },
];

const TestGroup = ({ group, isLast }) => {
  const [open, setOpen] = useState(false);
  const Icon = ICON_MAP[group.icon] || CheckCircle2;

  return (
    <div className={!isLast ? 'border-b border-dashed border-gray-200' : ''}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-3 hover:bg-gray-50/60 rounded-xl px-2 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className={`shrink-0 w-14 h-14 rounded-2xl ${group.iconBg} flex items-center justify-center shadow-sm`}>
            <Icon className={`w-6 h-6 ${group.iconColor}`} />
          </div>
          <div>
            <p className="text-base font-bold text-gray-900">{group.name}</p>
            <p className="text-sm text-gray-400 mt-0.5">({group.count} Test{group.count > 1 ? 's' : ''})</p>
          </div>
        </div>
        <div className="shrink-0 w-9 h-9 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center">
          {open
            ? <ChevronUp className="w-4 h-4 text-gray-500" />
            : <ChevronDown className="w-4 h-4 text-gray-500" />
          }
        </div>
      </button>

      {open && (
        <div className="pb-5 px-2">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
            {group.tests.map((t, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-jadko-primary mt-0.5 shrink-0" />
                <span className="text-sm text-gray-600 leading-snug">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const PackageDetail = ({ pkg }) => {
  const navigate = useNavigate();

  const handleBook = () => {
    const message = `Hi, I'm interested in booking *${pkg.name}* (₹${pkg.price.toLocaleString('en-IN')}). Please share the details.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #fafafa 50%, #f0fdf4 100%)' }}>

      {/* Top breadcrumb bar */}
      <div className="bg-white/80 backdrop-blur border-b border-gray-100 sticky top-0 z-10">
        <div className="container py-3.5">
          <button
            onClick={() => navigate('/packages')}
            className="inline-flex items-center gap-1.5 text-jadko-primary text-base font-semibold hover:underline"
          >
            <ChevronLeft className="w-5 h-5" /> Back to Packages
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-jadko-primary to-[#1e3a8a] overflow-hidden text-white">
        {/* Abstract background shapes — same as Franchise/About hero */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-jadko-secondary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        <div className="container relative z-10 py-10 md:py-14">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-2xl">
              {pkg.badge && (
                <span className="inline-block text-sm font-bold bg-white/20 text-white border border-white/30 px-3 py-1 rounded-full mb-3">
                  {pkg.badge}
                </span>
              )}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">{pkg.name}</h1>
              <p className="text-lg md:text-xl text-white/80 mt-3 leading-relaxed">{pkg.tagline}</p>
              <div className="flex items-center gap-2 mt-4">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-white/70 text-base ml-1">Trusted by 10,000+ patients</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-3">
              <div className="bg-white/20 border border-white/30 backdrop-blur rounded-2xl px-5 py-4 text-center">
                <FlaskConical className="w-7 h-7 mx-auto mb-1 text-white" />
                <p className="text-3xl font-extrabold">{pkg.totalTests}+</p>
                <p className="text-white/80 text-sm font-medium">Tests Included</p>
              </div>
              <div className="bg-white/20 border border-white/30 backdrop-blur rounded-2xl px-5 py-3 text-center">
                <p className="text-2xl font-extrabold text-yellow-300">₹{pkg.price.toLocaleString('en-IN')}</p>
                <p className="text-white/70 text-sm line-through">₹{pkg.mrp.toLocaleString('en-IN')}</p>
                <p className="text-yellow-300 text-sm font-bold">{pkg.discount}% OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info chips strip */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container py-4">
          <div className="flex flex-wrap gap-3">
            {[
              { icon: CalendarDays, label: 'Fasting', value: pkg.fasting, color: 'text-blue-600 bg-blue-50 border-blue-100' },
              { icon: Clock,        label: 'Reports',  value: pkg.reportTime, color: 'text-purple-600 bg-purple-50 border-purple-100' },
              { icon: Users,        label: 'For',      value: pkg.gender, color: 'text-pink-600 bg-pink-50 border-pink-100' },
              { icon: ShieldCheck,  label: 'Age',      value: pkg.ageGroup, color: 'text-teal-600 bg-teal-50 border-teal-100' },
            ].map(({ icon: Icon, label, value, color }) => (
              <div key={label} className={`flex items-center gap-2.5 border rounded-xl px-4 py-2.5 ${color}`}>
                <Icon className="w-5 h-5 shrink-0" />
                <div>
                  <p className="text-xs opacity-70 leading-none font-medium">{label}</p>
                  <p className="text-sm font-bold leading-snug mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ── LEFT COLUMN ────────────────────────────────── */}
          <div className="w-full lg:flex-1 space-y-6">

            {/* About */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
              <h2 className="text-xl font-extrabold text-gray-900 mb-3">About this Package</h2>
              <p className="text-base text-gray-600 leading-relaxed">{pkg.about}</p>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: Home,          label: 'Free Home',          sub: 'Sample Collection',  gradient: 'from-blue-500 to-blue-600' },
                { icon: FileText,      label: 'Digital Reports',    sub: 'Within 24 Hours',    gradient: 'from-purple-500 to-purple-600' },
                { icon: ShieldCheck,   label: 'NABL Protocol',      sub: 'Quality Assured',    gradient: 'from-teal-500 to-teal-600' },
                { icon: MessageCircle, label: 'Expert Support',     sub: 'Guidance Included',  gradient: 'from-green-500 to-green-600' },
              ].map(({ icon: Icon, label, sub, gradient }) => (
                <div key={label} className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-3 shadow-sm`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-bold text-gray-800 leading-snug">{label}</p>
                  <p className="text-xs text-gray-400 leading-snug mt-0.5">{sub}</p>
                </div>
              ))}
            </div>

            {/* Tests included */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-extrabold text-gray-900">
                  Tests Included
                </h2>
                <span className="bg-jadko-primary/10 text-jadko-primary font-extrabold text-base px-4 py-1.5 rounded-full">
                  {pkg.totalTests}+ Tests
                </span>
              </div>
              <div>
                {pkg.testGroups.map((group, i) => (
                  <TestGroup key={i} group={group} isLast={i === pkg.testGroups.length - 1} />
                ))}
              </div>
            </div>

            {/* How to Book */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-6 md:p-8">
              <h2 className="text-xl font-extrabold text-gray-900 mb-8">How to Book <span className="text-jadko-primary">{pkg.name}</span></h2>
              <div className="space-y-0">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-5">
                    {/* Icon + connector line */}
                    <div className="flex flex-col items-center">
                      <div className={`shrink-0 w-12 h-12 rounded-2xl ${step.color} shadow-lg flex items-center justify-center`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gradient-to-b from-gray-300 to-gray-200 my-2" style={{ minHeight: '28px' }} />
                      )}
                    </div>
                    {/* Content */}
                    <div className={`pb-7 pt-1.5 ${i === steps.length - 1 ? 'pb-0' : ''}`}>
                      <p className="text-base font-bold text-gray-900 mb-1">{step.title}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN — sticky booking card ──────────── */}
          <div className="w-full lg:w-80 xl:w-96 lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">

              {/* Card header gradient */}
              <div className="bg-gradient-to-br from-jadko-primary to-blue-700 p-6">
                <p className="text-sm font-bold text-white/70 uppercase tracking-widest mb-2">Exclusive Offer</p>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-4xl font-extrabold text-white">
                    ₹{pkg.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-lg text-white/50 line-through">
                    ₹{pkg.mrp.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="inline-block bg-yellow-400 text-yellow-900 text-sm font-extrabold px-3 py-1 rounded-full">
                  {pkg.discount}% OFF — Save ₹{(pkg.mrp - pkg.price).toLocaleString('en-IN')}
                </div>
              </div>

              <div className="p-6">
                <button
                  onClick={handleBook}
                  className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-green-500 hover:bg-green-600 active:scale-95 text-white font-extrabold text-base transition-all shadow-lg shadow-green-500/30 mb-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp
                </button>

                <div className="h-px bg-gray-100 my-5" />

                <ul className="space-y-3.5">
                  {[
                    'Free home sample collection',
                    'Digital report within 24 hours',
                    'NABL Protocol Followed',
                    'Free expert guidance',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-gray-400 mt-5 text-center leading-snug bg-gray-50 rounded-xl p-3">
                  * Fasting for 10–12 hours required before sample collection
                </p>
              </div>
            </div>

            {/* Quick stat card */}
            <div className="mt-4 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-sm shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-gray-800">Most Popular Choice</p>
                <p className="text-xs text-gray-500 mt-0.5">Booked by 500+ patients this month</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default PackageDetail;
