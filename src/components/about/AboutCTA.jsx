import React from 'react';
import { ArrowRight, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutCTA = () => {
  return (
    <section className="bg-jadko-primary py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-jadko-accent opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Join us in transforming diagnostic healthcare across India.
        </h2>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-12 font-light">
          Partner with JADKO to build the future of healthcare.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link 
            to="/#contact"
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-white text-jadko-primary rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)]"
          >
            Contact Us
          </Link>
          <Link 
            to="/#franchise"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 bg-jadko-secondary text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-[0_4px_20px_rgba(192,53,61,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(192,53,61,0.5)]"
          >
            <Building2 className="w-5 h-5" />
            Become a Franchise Partner
            <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
