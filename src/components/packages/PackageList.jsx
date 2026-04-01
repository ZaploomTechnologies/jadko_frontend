import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { packages } from '../../data/packages';

const PackageCard = ({ pkg }) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const groups = pkg.testGroups;
  const visible = expanded ? groups : groups.slice(0, 3);

  return (
    <div className={`relative rounded-2xl border-2 ${pkg.borderColor} bg-gradient-to-br ${pkg.color} flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300`}>
      {/* Badge */}
      {pkg.badge && (
        <div className={`absolute top-0 right-0 ${pkg.accentColor} text-white text-[11px] font-bold px-3 py-1 rounded-bl-xl`}>
          {pkg.badge}
        </div>
      )}

      {/* Card Header */}
      <div className="p-5 pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="text-lg font-extrabold text-gray-900">{pkg.name}</h3>
            <p className="text-xs text-gray-500 font-medium">{pkg.tagline}</p>
          </div>
          <div className="shrink-0 w-14 h-14 rounded-full bg-jadko-secondary flex flex-col items-center justify-center text-white shadow-md">
            <span className="text-sm font-extrabold leading-none">{pkg.discount}%</span>
            <span className="text-[9px] font-semibold leading-none">OFF</span>
          </div>
        </div>

        <div className="flex items-baseline gap-2 mt-3">
          <span className="text-2xl font-extrabold text-jadko-primary">₹{pkg.price.toLocaleString('en-IN')}</span>
          <span className="text-sm text-gray-400 line-through">₹{pkg.mrp.toLocaleString('en-IN')}</span>
        </div>
        <p className="text-[11px] text-gray-500 mt-0.5">{pkg.totalTests}+ tests included</p>
      </div>

      <div className="mx-5 h-px bg-gray-200" />

      {/* Test Groups Preview */}
      <div className="p-5 pt-4 flex-1">
        <ul className="space-y-2.5">
          {visible.map((group, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2
                className={`w-4 h-4 shrink-0 mt-0.5 ${group.isBase ? 'text-jadko-accent' : 'text-jadko-primary'}`}
              />
              <div>
                <span className={`text-xs font-semibold ${group.isBase ? 'text-jadko-accent' : 'text-gray-800'}`}>
                  {group.name}
                </span>
                <p className="text-[11px] text-gray-500 leading-snug">{group.count} test{group.count > 1 ? 's' : ''}</p>
              </div>
            </li>
          ))}
        </ul>

        {groups.length > 3 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 flex items-center gap-1 text-jadko-primary text-xs font-bold hover:underline"
          >
            {expanded
              ? <><ChevronUp className="w-3 h-3" /> Show less</>
              : <><ChevronDown className="w-3 h-3" /> +{groups.length - 3} more</>
            }
          </button>
        )}
      </div>

      {/* Detail Button */}
      <div className="p-5 pt-0">
        <button
          onClick={() => navigate(`/packages/${pkg.id}`)}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-jadko-primary text-jadko-primary font-bold text-sm hover:bg-jadko-primary hover:text-white active:scale-95 transition-all"
        >
          View Details <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const PackageList = () => {
  return (
    <section id="packages-section" className="py-14 md:py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-jadko-secondary text-xs font-bold uppercase tracking-widest mb-2">
            Affordable & Accurate
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Our Health Checkup Packages
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-3 max-w-xl mx-auto">
            Choose a plan that fits your health goals. All packages include free home sample collection and digital reports within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          * Fasting for 10–12 hours required before sample collection &nbsp;|&nbsp; Home visit available 8:00 AM – 9:00 PM (Sun 8:00 AM – 1:00 PM)
        </p>
      </div>
    </section>
  );
};

export default PackageList;
