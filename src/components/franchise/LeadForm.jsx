import React from 'react';
import { Phone, Mail } from 'lucide-react';

const LeadForm = () => {
  return (
    <section id="franchise-form" className="py-16 bg-white">
      <div className="container">
        <div className="max-w-5xl mx-auto overflow-hidden rounded-[2rem] shadow-xl shadow-jadko-primary/10 border border-gray-100 flex flex-col lg:flex-row">
          {/* Left Info Column */}
          <div className="lg:w-2/5 bg-jadko-primary p-10 lg:p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl lg:text-3xl font-black mb-6 leading-tight">
                Ready to Build Your Own Healthcare Business?
              </h2>
              <p className="text-gray-200 text-sm mb-10 leading-relaxed">
                Take the first step towards a rewarding healthcare entrepreneurship. Our experts will guide you through the entire process.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-white/60 uppercase tracking-widest mb-0.5">Call for Enquiry</p>
                  <p className="text-lg font-bold">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-white/60 uppercase tracking-widest mb-0.5">Email Enquiry</p>
                  <p className="text-lg font-bold">franchise@jadko.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:w-3/5 bg-white p-10 lg:p-12">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-gray-50 focus:bg-white focus:border-jadko-primary transition-all outline-none text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-gray-50 focus:bg-white focus:border-jadko-primary transition-all outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">City</label>
                  <input 
                    type="text" 
                    placeholder="City Name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-gray-50 focus:bg-white focus:border-jadko-primary transition-all outline-none text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Investment Budget</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-gray-50 focus:bg-white focus:border-jadko-primary transition-all outline-none appearance-none cursor-pointer text-sm">
                    <option>₹1.5L - ₹3L</option>
                    <option>₹3L - ₹6L</option>
                    <option>₹6L - ₹10L</option>
                    <option>₹10L+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Message (Optional)</label>
                <textarea 
                  rows="3" 
                  placeholder="Tell us about your background..." 
                  className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-gray-50 focus:bg-white focus:border-jadko-primary transition-all outline-none resize-none text-sm"
                ></textarea>
              </div>

              <button className="w-full py-4 bg-jadko-secondary text-white font-bold rounded-lg tracking-widest uppercase shadow-lg shadow-jadko-secondary/20 hover:scale-[1.01] active:scale-[0.99] transition-all text-xs">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
