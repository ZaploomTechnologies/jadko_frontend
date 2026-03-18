import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  ChevronDown, 
  ExternalLink, 
  Download,
  Zap,
  Users,
  ShieldCheck,
  Briefcase,
  CheckCircle,
  MessageCircle
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';

const ContactInfoCard = ({ icon: Icon, title, content, subContent }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
    <div className="w-12 h-12 rounded-xl bg-jadko-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6 text-jadko-accent" />
    </div>
    <h3 className="text-gray-900 font-bold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{content}</p>
    {subContent && <p className="text-jadko-accent text-[12px] font-semibold mt-2 uppercase tracking-wider">{subContent}</p>}
  </div>
);

const QuickLinkCard = ({ icon: Icon, label, colorClass }) => (
  <button className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 w-full md:w-auto">
    <div className={`w-10 h-10 rounded-lg ${colorClass} flex items-center justify-center`}>
      <Icon className="w-5 h-5 text-white" />
    </div>
    <span className="font-bold text-gray-800 text-sm">{label}</span>
  </button>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-2xl border-b-4 border-jadko-accent shadow-sm hover:shadow-md transition-all h-full">
    <div className="w-10 h-10 mb-4">
      <Icon className="w-10 h-10 text-jadko-accent" />
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl mb-3 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-jadko-primary text-sm md:text-base">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="p-4 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-50 bg-gray-50/30">
          {answer}
        </div>
      )}
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="bg-[#fbfeff]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-jadko-primary to-[#1e3a8a] z-0"></div>
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-jadko-secondary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="jadko-container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Let's Connect with JADKO
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-4 font-medium">
            We're here to help you with diagnostics, partnerships, and franchise opportunities.
          </p>
          <p className="text-sm md:text-base text-blue-200/80 max-w-2xl mx-auto mb-10">
            Reach out to our team for any queries regarding our health checkup packages or medical infrastructure services.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-jadko-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-white/10">
              <Phone className="w-5 h-5" />
              Call Now
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-jadko-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-black/10">
              <MessageSquare className="w-5 h-5" />
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="relative z-20 -mt-16 pb-20">
        <div className="jadko-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ContactInfoCard
              icon={MapPin}
              title="Office Address"
              content={"123 Health Plaza, Akshar,\nSurat, Gujarat - 395009"}
            />
            <ContactInfoCard
              icon={Phone}
              title="Phone Number"
              content={"+91 98765 43210"}
              subContent="Available 24/7 for emergencies"
            />
            <ContactInfoCard
              icon={Mail}
              title="Email Support"
              content={"contact@jadkohealthcare.com\nhelp@jadkohealthcare.com"}
            />
            <ContactInfoCard
              icon={Clock}
              title="Working Hours"
              content={"Mon - Sat: 08 AM - 08 PM\nSun: 09 AM - 01 PM"}
            />
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="jadko-container">
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 overflow-hidden flex flex-col lg:flex-row border border-gray-100">
            {/* Form Left */}
            <div className="flex-1 p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl font-black text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-500 mb-10 font-medium">Fill out the form below and our team will get back to you within 2 hours.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-jadko-primary/20 focus:bg-white transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-jadko-primary/20 focus:bg-white transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="name@email.com"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-jadko-primary/20 focus:bg-white transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">City</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Surat"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-jadko-primary/20 focus:bg-white transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Inquiry Type</label>
                  <div className="relative">
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-jadko-primary/20 focus:bg-white transition-all font-medium appearance-none">
                      <option>General Inquiry</option>
                      <option>Health Checkup Booking</option>
                      <option>Franchise Opportunity</option>
                      <option>Partnership Request</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                  <textarea 
                    rows="4"
                    placeholder="How can we help you today?"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-jadko-primary/20 focus:bg-white transition-all font-medium resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-jadko-secondary text-white py-4 rounded-xl font-black text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-200 hover:shadow-red-300 active:scale-[0.98]">
                  Submit Your Inquiry
                </button>
              </form>
            </div>

            {/* Image Right */}
            <div className="hidden lg:block w-[40%] relative">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" 
                alt="Support Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 bg-white p-6 rounded-2xl shadow-xl">
                <h4 className="text-jadko-primary font-black text-sm mb-2">Dedicated Support Team</h4>
                <p className="text-gray-500 text-[12px] leading-relaxed italic">
                  "Our mission is to provide you with the most reliable diagnostic data and healthcare support in Gujarat."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Group */}
      <section className="pb-20">
        <div className="jadko-container">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <QuickLinkCard icon={Phone} label="Call Us Now" colorClass="bg-indigo-600" />
            <QuickLinkCard icon={MessageCircle} label="WhatsApp Us" colorClass="bg-green-500" />
            <QuickLinkCard icon={MapPin} label="Locate Us" colorClass="bg-red-500" />
            <QuickLinkCard icon={Download} label="Brochure PDF" colorClass="bg-gray-700" />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="jadko-container">
          <div className="w-full h-[450px] rounded-[2rem] border border-gray-200 overflow-hidden shadow-md">
            <iframe
              title="JADKO Healthcare Location"
              src="https://maps.google.com/maps?q=Akshar+Surat+Gujarat+395009&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Why Reach Out Section */}
      <section className="py-24 bg-white">
        <div className="jadko-container">
          <SectionHeader
            title="Why Reach Out to Us?"
            highlight="Reach Out"
            subtitle="We are committed to providing fast, transparent, and expert support for all your healthcare needs."
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <FeatureCard 
              icon={Zap}
              title="Fast Response"
              description="We value your time. Our support desk typically responds to all digital inquiries within 2 business hours."
            />
            <FeatureCard 
              icon={Users}
              title="Expert Support"
              description="Get connected with medical professionals and logistics experts who understand your specific needs."
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="Transparent Communication"
              description="No hidden costs or fine prints. Whether it's pricing or franchise terms, we keep it crystal clear."
            />
            <FeatureCard 
              icon={Briefcase}
              title="Multiple Opportunities"
              description="From lab franchising to medical supplies, we offer a diverse range of growth paths for partners."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#f8fbff]">
        <div className="jadko-container max-w-4xl">
          <SectionHeader
            title="Frequently Asked Questions"
            highlight="Asked Questions"
            subtitle="We are committed to maintaining the highest global standards in diagnostics."
            centered={true}
          />
          <div className="mt-12">
            <FAQItem 
              question="How can I book a doorstep health checkup?"
              answer="You can book easily through our website, mobile app, or by calling our support line. Simply select your package, choose a preferred time slot, and our technician will arrive at your location for sample collection."
            />
             <FAQItem 
              question="What is the application process for a franchisee?"
              answer="The process involves initial registration, document verification, a consultation call with our team, site visit, and final agreement signing. We support you through every step of the setup and launch."
            />
             <FAQItem 
              question="Is doorstep collection available in all cities?"
              answer="Currently, we operate extensively in Surat and surrounding areas in Gujarat. We are rapidly expanding to other major cities. Please enter your pincode or contact support to check availability in your area."
            />
             <FAQItem 
              question="What is the typical response time for inquiries?"
              answer="For all digital inquiries made through our form or email, we aim to respond within 2 business hours. For emergency cases, please call our 24/7 helpline number directly."
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="jadko-container">
          <div className="bg-jadko-primary rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-blue-200">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Have Questions? Let's Talk.
              </h2>
              <p className="text-blue-100 font-medium">
                Our experts are ready to assist you in your healthcare journey.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button className="bg-jadko-secondary text-white px-10 py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg active:scale-95">
                Contact Now
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm px-10 py-4 rounded-xl font-bold transition-all active:scale-95">
                Apply for Franchise
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
