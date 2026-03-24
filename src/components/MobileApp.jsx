import React from 'react';
import { Apple, PlayCircle, Activity, Heart, FileText, Calendar, Bell, ChevronRight, CheckCircle2 } from 'lucide-react';

const MobileApp = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#f8fbff] overflow-hidden relative">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-50/50 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container relative z-10">
        <div className="bg-jadko-primary rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Inner decorative shapes */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-jadko-accent/20 rounded-full blur-3xl -mb-40 pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Text Content */}
            <div className="lg:w-1/2 text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white text-sm font-semibold rounded-full mb-6 border border-white/20 backdrop-blur-md shadow-lg">
                <span className="flex h-2.5 w-2.5 rounded-full bg-jadko-accent mr-3 animate-pulse shadow-[0_0_10px_rgba(56,181,84,0.8)]" />
                Coming Soon
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-5 leading-tight tracking-tight">
                Your Health, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-100 drop-shadow-sm">
                  In Your Hands.
                </span>
              </h2>
              
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-lg font-light">
                Manage your family's health seamlessly with the upcoming JADKO mobile app. Book tests, track samples, and access reports instantly from anywhere.
              </p>
              
              <div className="flex flex-col gap-3 mb-8 text-blue-50 font-medium">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-jadko-accent" />
                  </div>
                  <span>Instant Report Access & Downloading</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-jadko-accent" />
                  </div>
                  <span>Quick Home Collection Booking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-jadko-accent" />
                  </div>
                  <span>Smart Health Trends & Insights</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 opacity-80">
                <button disabled className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-2xl border border-gray-800 shadow-xl cursor-default pointer-events-none">
                  <Apple className="w-7 h-7" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-semibold text-gray-400 leading-none mb-1">Download on the</p>
                    <p className="text-base font-bold leading-none">App Store</p>
                  </div>
                </button>
                <button disabled className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-2xl border border-gray-800 shadow-xl cursor-default pointer-events-none">
                  <PlayCircle className="w-7 h-7" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-semibold text-gray-400 leading-none mb-1">GET IT ON</p>
                    <p className="text-base font-bold leading-none">Google Play</p>
                  </div>
                </button>
              </div>
            </div>

            {/* App Mockups */}
            <div className="lg:w-1/2 relative w-full h-[340px] sm:h-[390px] md:h-[450px] flex items-center justify-center mt-6 lg:mt-0">
               <div className="relative w-full h-[600px] flex items-center justify-center scale-[0.56] sm:scale-[0.64] md:scale-[0.75] lg:scale-[0.80] origin-center">
                  
                  {/* Main Phone (Front) */}
                  <div className="absolute z-20 w-[300px] h-[600px] bg-gray-50 rounded-[3rem] border-[10px] border-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transform transition-all duration-700 hover:-translate-y-4">
                    {/* Notch */}
                    <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-3xl w-40 mx-auto z-50"></div>
                    
                    {/* App Header */}
                    <div className="bg-gradient-to-r from-jadko-primary to-blue-800 pt-14 pb-8 px-6 shadow-md relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-xl" />
                      <div className="flex justify-between items-center text-white mb-6 relative z-10">
                        <div>
                          <p className="text-xs text-blue-200 uppercase tracking-wide font-semibold mb-1">Welcome back</p>
                          <p className="font-bold text-xl">Divya Sharma</p>
                        </div>
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 shadow-inner">
                          <Bell className="w-5 h-5" />
                        </div>
                      </div>
                      
                      {/* Search / Action Bar */}
                      <div className="bg-white rounded-2xl p-3 flex items-center justify-between shadow-xl mx-2 transform translate-y-10 relative z-10 border border-gray-100">
                         <span className="text-gray-400 text-sm font-medium ml-2">Find a test or package...</span>
                         <div className="bg-jadko-accent rounded-xl p-2.5 text-white shadow-md">
                            <Activity className="w-4 h-4" />
                         </div>
                      </div>
                    </div>

                    {/* App Body */}
                    <div className="pt-16 px-6 pb-24 h-full overflow-hidden bg-[#f8f9fa]">
                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow">
                           <div className="w-14 h-14 bg-blue-50 text-jadko-primary rounded-full flex items-center justify-center">
                             <Calendar className="w-7 h-7" />
                           </div>
                           <span className="text-sm font-semibold text-gray-700">Book Test</span>
                        </div>
                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow">
                           <div className="w-14 h-14 bg-green-50 text-jadko-accent rounded-full flex items-center justify-center">
                             <FileText className="w-7 h-7" />
                           </div>
                           <span className="text-sm font-semibold text-gray-700">Reports</span>
                        </div>
                      </div>

                      {/* Recent Report Card */}
                      <div className="flex justify-between items-end mb-4">
                        <h3 className="font-bold text-gray-800 text-base">Recent Reports</h3>
                        <span className="text-xs text-jadko-primary font-semibold">View All</span>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-red-50 rounded-bl-full -z-0" />
                        <div className="flex justify-between items-start mb-4 relative z-10">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-red-50 text-jadko-secondary rounded-2xl flex items-center justify-center shadow-inner">
                               <Heart className="w-6 h-6" />
                            </div>
                            <div>
                              <p className="font-bold text-gray-800 text-sm mb-0.5">Comprehensive Health</p>
                              <p className="text-xs text-gray-500 font-medium">12 Oct 2026</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-50 relative z-10">
                          <span className="bg-green-100 text-green-700 text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Ready
                          </span>
                          <div className="flex items-center gap-1 text-jadko-primary text-xs font-bold bg-blue-50 px-3 py-1.5 rounded-full">
                            View <ChevronRight className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-md border-t border-gray-100 px-6 py-5 flex justify-between items-center rounded-b-[2rem] z-30">
                       <Activity className="w-6 h-6 text-jadko-primary" />
                       <Calendar className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors" />
                       <div className="w-14 h-14 bg-jadko-accent rounded-full flex items-center justify-center shadow-lg shadow-jadko-accent/30 -mt-10 text-white transform hover:scale-105 transition-transform border-4 border-white">
                          <span className="text-3xl font-light mb-1">+</span>
                       </div>
                       <FileText className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors" />
                       <Heart className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors" />
                    </div>
                  </div>

                  {/* Secondary Phone (Back) */}
                  <div className="absolute z-10 w-[270px] h-[550px] bg-white rounded-[2.5rem] border-[8px] border-gray-800 shadow-2xl opacity-90 transform rotate-[10deg] translate-x-28 translate-y-6 hidden md:block overflow-hidden transition-all duration-700 hover:rotate-[15deg] hover:translate-x-32">
                    <div className="absolute top-0 inset-x-0 h-5 bg-gray-800 rounded-b-2xl w-32 mx-auto z-50"></div>
                    <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-[1.5rem] p-6 pt-12">
                       <div className="w-1/2 h-4 bg-gray-300 rounded-full mb-3"></div>
                       <div className="w-3/4 h-8 bg-white/60 rounded-lg"></div>
                    </div>
                    <div className="p-5 space-y-4 bg-gray-50 h-full">
                      <div className="grid grid-cols-2 gap-3 mt-2">
                        <div className="h-28 bg-white rounded-2xl shadow-sm border border-gray-100 p-3">
                           <div className="w-8 h-8 rounded-full bg-blue-50 mb-3"></div>
                           <div className="w-full h-2 bg-gray-200 rounded-full mb-2"></div>
                           <div className="w-2/3 h-2 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="h-28 bg-white rounded-2xl shadow-sm border border-gray-100 p-3">
                           <div className="w-8 h-8 rounded-full bg-green-50 mb-3"></div>
                           <div className="w-full h-2 bg-gray-200 rounded-full mb-2"></div>
                           <div className="w-2/3 h-2 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="h-28 bg-white rounded-2xl shadow-sm border border-gray-100 p-3">
                           <div className="w-8 h-8 rounded-full bg-red-50 mb-3"></div>
                           <div className="w-full h-2 bg-gray-200 rounded-full mb-2"></div>
                           <div className="w-2/3 h-2 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="h-28 bg-white rounded-2xl shadow-sm border border-gray-100 p-3">
                           <div className="w-8 h-8 rounded-full bg-orange-50 mb-3"></div>
                           <div className="w-full h-2 bg-gray-200 rounded-full mb-2"></div>
                           <div className="w-2/3 h-2 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
