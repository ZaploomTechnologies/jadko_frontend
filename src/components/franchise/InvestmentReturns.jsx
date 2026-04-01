import React from 'react';
import SectionHeader from '../common/SectionHeader';

const InvestmentReturns = () => {
  const channels = ['B2B Tie-ups', 'Corporate health', 'Home collection', 'Walk-In Patients'];
  
  const chartData = [
    { label: 'Month 1', height: 'h-24', color: 'bg-gray-300' },
    { label: 'Month 2', height: 'h-32', color: 'bg-jadko-primary/30' },
    { label: 'Month 3', height: 'h-40', color: 'bg-jadko-primary/50' },
    { label: 'Month 4', height: 'h-48', color: 'bg-jadko-primary/80' },
    { label: 'Year 1', height: 'h-56', color: 'bg-jadko-primary' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title="Investment & Returns"
              highlight="Returns"
              centered={false}
              mobileCentered={true}
              className="mb-8"
            />
            
            <div className="grid grid-cols-2 gap-6 mb-8 text-center md:text-left">
              <div className="p-4 bg-white rounded-2xl border border-gray-100">
                <p className="text-[8px] font-black tracking-widest text-gray-400 uppercase mb-1">
                  INVESTMENT RANGE
                </p>
                <p className="text-xl font-black text-jadko-primary">₹1.5L - ₹10L+</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-gray-100">
                <p className="text-[8px] font-black tracking-widest text-gray-400 uppercase mb-1">
                  BREAK-EVEN
                </p>
                <p className="text-xl font-black text-jadko-accent">8-12 Months</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-bold mb-3 text-gray-800">Revenue Channels</h4>
              <div className="flex flex-wrap gap-1.5">
                {channels.map((channel, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-jadko-primary/5 text-jadko-primary text-[10px] font-bold rounded-md border border-jadko-primary/10">
                    {channel}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative p-6 md:p-8 bg-white rounded-[2rem] shadow-lg border border-gray-50">
            <div className="flex items-end justify-between h-48 gap-3 mb-6">
              {chartData.map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-3">
                  <div className={`w-full ${bar.height} ${bar.color} rounded-lg transition-all transform origin-bottom hover:scale-x-105`}></div>
                  <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter shrink-0">{bar.label}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-[8px] font-bold text-gray-400 uppercase tracking-widest italic">
              Projected Finance Breakdown (Estimate)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentReturns;
