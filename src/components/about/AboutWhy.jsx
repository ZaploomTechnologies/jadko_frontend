import React from 'react';
import { LayoutTemplate, AlertCircle, Clock, Globe, ShieldAlert, Zap, ArrowUpRight } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const AboutWhy = () => {
  return (
    <section className="py-20 bg-gray-50/50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0046AD 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container max-w-6xl relative z-10">
        
        {/* Compact Header */}
        <SectionHeader 
          label="Why JADKO Exists"
          title="Re-engineering Indian Diagnostics."
          highlight="Diagnostics."
          centered={true}
          className="mb-12"
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[160px]">
          
          {/* 1. Structural Fragmentation (Main feature) */}
          <div className="md:col-span-2 md:row-span-2 group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between overflow-hidden">
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <LayoutTemplate className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Structural Fragmentation</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-xs">
                Dominated by unorganized players, the industry lacks standardized protocols, leading to inconsistent and unreliable patient experiences.
              </p>
            </div>
            <div className="mt-auto flex items-center text-jadko-primary font-bold text-xs group-hover:translate-x-1 transition-transform cursor-pointer">
              <span>View Our Standard</span>
              <ArrowUpRight className="w-3 h-3 ml-1" />
            </div>
          </div>

          {/* 2. Reliability Crisis (Tall) */}
          <div className="md:col-span-1 md:row-span-2 group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Reliability Crisis</h3>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              Varying quality controls mean results mismatch across labs, causing distrust in critical medical outcomes.
            </p>
            <div className="mt-auto opacity-10 group-hover:opacity-30 transition-opacity">
                <ShieldAlert className="w-16 h-16" />
            </div>
          </div>

          {/* 3. The Velocity Gap (Small) */}
          <div className="md:col-span-1 md:row-span-1 group bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex items-center space-x-4">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Velocity Gap</h3>
              <p className="text-[10px] text-gray-500 font-medium mt-1">Slow reports risk lives.</p>
            </div>
          </div>

          {/* 4. Geographic Inequality (Small) */}
          <div className="md:col-span-1 md:row-span-1 group bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex items-center space-x-4">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Access Barrier</h3>
              <p className="text-[10px] text-gray-500 font-medium mt-1">Limited Tier-2 reach.</p>
            </div>
          </div>

          {/* 5. Economic Opacity (Horizontal) */}
          <div className="md:col-span-2 md:row-span-1 group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex items-center justify-between">
            <div className="flex items-center space-x-5">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Economic Opacity</h3>
                <p className="text-xs text-gray-500 font-medium">Hidden costs & non-transparent pricing.</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Zap className="w-4 h-4" />
            </div>
          </div>

          {/* 6. The Solution (Wide Bottom) */}
          <div className="flex-grow md:col-span-2 md:row-span-1 bg-jadko-primary rounded-3xl p-6 text-white flex items-center justify-between relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-jadko-primary to-blue-900"></div>
             <div className="relative z-10 flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <Zap className="w-5 h-5 text-jadko-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-none">JADKO Unified Grid</h3>
                  <p className="text-[10px] text-jadko-primary-lighter font-medium mt-1">One Standard. Total Speed. Absolute Trust.</p>
                </div>
             </div>
             <ArrowUpRight className="relative z-10 w-5 h-5 text-jadko-accent hover:scale-125 transition-transform cursor-pointer" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutWhy;
