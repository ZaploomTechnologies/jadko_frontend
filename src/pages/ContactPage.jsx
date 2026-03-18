import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
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

const ContactInfoCard = ({ icon: Icon, title, content, subContent, iconColor, bgColor, borderColor }) => (
  <div className={`bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group border ${borderColor} border-b-4`}>
    <div className={`w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center mb-4 group-hover:animate-wiggle`}>
      <Icon className={`w-6 h-6 ${iconColor}`} />
    </div>
    <h3 className="text-gray-900 font-bold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{content}</p>
    {subContent && <p className="text-jadko-accent text-[12px] font-semibold mt-2 uppercase tracking-wider">{subContent}</p>}
  </div>
);

const QuickLinkCard = ({ icon: Icon, label, colorClass, onClick }) => (
  <button onClick={onClick} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl hover:bg-white/20 transition-all hover:-translate-y-1 w-full md:w-auto">
    <div className={`w-10 h-10 rounded-lg ${colorClass} flex items-center justify-center`}>
      <Icon className="w-5 h-5 text-white" />
    </div>
    <span className="font-bold text-white text-sm">{label}</span>
  </button>
);

const FeatureCard = ({ icon: Icon, title, description, iconColor, borderBottomColor, bgColor }) => (
  <div
    className="feature-card bg-white p-6 rounded-2xl shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-300 transition-all duration-300 h-full"
    style={{ border: `1px solid ${borderBottomColor}`, borderBottom: `4px solid ${borderBottomColor}` }}
  >
    <div className={`feature-icon w-10 h-10 rounded-xl ${bgColor} flex items-center justify-center mb-4`}>
      <Icon className={`w-6 h-6 ${iconColor}`} />
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

const contactInitial = {
  name: '',
  phone: '',
  email: '',
  city: '',
  inquiryType: 'General Inquiry',
  message: '',
};

const validateContact = (fields) => {
  const errors = {};
  if (!fields.name.trim()) {
    errors.name = 'Full name is required.';
  } else if (fields.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }
  if (!fields.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!/^[6-9]\d{9}$/.test(fields.phone.replace(/\s+/g, ''))) {
    errors.phone = 'Enter a valid 10-digit Indian phone number.';
  }
  if (fields.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!fields.city.trim()) {
    errors.city = 'City is required.';
  }
  return errors;
};

const ContactPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [contactForm, setContactForm] = useState(contactInitial);
  const [contactErrors, setContactErrors] = useState({});
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
    if (contactErrors[name]) {
      setContactErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const errs = validateContact(contactForm);
    if (Object.keys(errs).length > 0) {
      setContactErrors(errs);
      return;
    }
    setContactSubmitted(true);
  };

  const contactInputClass = (field) =>
    `w-full px-4 py-2.5 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all font-medium text-sm ${
      contactErrors[field]
        ? 'border-red-400 focus:ring-red-200'
        : 'border-gray-100 focus:ring-jadko-primary/20'
    }`;

  useEffect(() => {
    if (location.hash === '#contact-form') {
      setTimeout(() => {
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.hash]);

  const goToFranchiseForm = () => {
    navigate('/franchise');
    setTimeout(() => {
      document.getElementById('franchise-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

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
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <QuickLinkCard icon={Phone} label="Call Us Now" colorClass="bg-indigo-600" onClick={() => window.location.href = 'tel:+919033608708'} />
            <QuickLinkCard icon={MessageCircle} label="WhatsApp Us" colorClass="bg-green-500" onClick={() => window.open('https://wa.me/919033608708', '_blank')} />
            <QuickLinkCard icon={MapPin} label="Locate Us" colorClass="bg-red-500" />
            <QuickLinkCard icon={Download} label="Brochure PDF" colorClass="bg-gray-700" />
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
              iconColor="text-rose-500"
              bgColor="bg-rose-50"
              borderColor="border-rose-300"
            />
            <ContactInfoCard
              icon={Phone}
              title="Phone Number"
              content={"+91 98765 43210"}
              subContent="Available 24/7 for emergencies"
              iconColor="text-blue-500"
              bgColor="bg-blue-50"
              borderColor="border-blue-300"
            />
            <ContactInfoCard
              icon={Mail}
              title="Email Support"
              content={"contact@jadkohealthcare.com\nhelp@jadkohealthcare.com"}
              iconColor="text-amber-500"
              bgColor="bg-amber-50"
              borderColor="border-amber-300"
            />
            <ContactInfoCard
              icon={Clock}
              title="Working Hours"
              content={"Mon - Sat: 08 AM - 08 PM\nSun: 09 AM - 01 PM"}
              iconColor="text-emerald-500"
              bgColor="bg-emerald-50"
              borderColor="border-emerald-300"
            />
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="contact-form" className="py-10">
        <div className="jadko-container">
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 overflow-hidden flex flex-col lg:flex-row border border-gray-100">
            {/* Form Left */}
            <div className="flex-1 p-6 md:p-8 lg:p-10">
              <h2 className="text-2xl font-black text-gray-900 mb-1">Send Us a Message</h2>
              <p className="text-gray-500 mb-5 font-medium text-sm">Fill out the form below and our team will get back to you within 2 hours.</p>

              {contactSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                  <h3 className="text-2xl font-black text-gray-900">Message Sent!</h3>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Thank you for reaching out. Our team will get back to you within 2 hours.
                  </p>
                  <button
                    onClick={() => { setContactForm(contactInitial); setContactSubmitted(false); setContactErrors({}); }}
                    className="mt-2 text-jadko-primary font-bold text-sm underline underline-offset-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
              <form className="space-y-4" onSubmit={handleContactSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactChange}
                      placeholder="Enter your name"
                      className={contactInputClass('name')}
                    />
                    {contactErrors.name && <p className="text-red-500 text-xs mt-1">{contactErrors.name}</p>}
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleContactChange}
                      placeholder="+91 XXXXX XXXXX"
                      className={contactInputClass('phone')}
                    />
                    {contactErrors.phone && <p className="text-red-500 text-xs mt-1">{contactErrors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address <span className="text-gray-400 font-normal">(Optional)</span></label>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactChange}
                      placeholder="name@email.com"
                      className={contactInputClass('email')}
                    />
                    {contactErrors.email && <p className="text-red-500 text-xs mt-1">{contactErrors.email}</p>}
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700 ml-1">City</label>
                    <input
                      type="text"
                      name="city"
                      value={contactForm.city}
                      onChange={handleContactChange}
                      placeholder="e.g., Surat"
                      className={contactInputClass('city')}
                    />
                    {contactErrors.city && <p className="text-red-500 text-xs mt-1">{contactErrors.city}</p>}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700 ml-1">Inquiry Type</label>
                  <div className="relative">
                    <select
                      name="inquiryType"
                      value={contactForm.inquiryType}
                      onChange={handleContactChange}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-jadko-primary/20 focus:bg-white transition-all font-medium appearance-none text-sm"
                    >
                      <option>General Inquiry</option>
                      <option>Health Checkup Booking</option>
                      <option>Franchise Opportunity</option>
                      <option>Partnership Request</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700 ml-1">Message <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    rows="3"
                    placeholder="How can we help you today?"
                    className={`${contactInputClass('message')} resize-none`}
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-jadko-secondary text-white py-3 rounded-xl font-black text-base hover:bg-red-700 transition-all shadow-xl shadow-red-200 hover:shadow-red-300 active:scale-[0.98]">
                  Submit Your Inquiry
                </button>
              </form>
              )}
            </div>

            {/* Image Right */}
            <div className="hidden lg:block w-[40%] relative">
              <img 
                src="/call-center.png" 
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
              iconColor="text-amber-500"
              borderBottomColor="#fbbf24"
              bgColor="bg-amber-50"
            />
            <FeatureCard
              icon={Users}
              title="Expert Support"
              description="Get connected with medical professionals and logistics experts who understand your specific needs."
              iconColor="text-blue-500"
              borderBottomColor="#60a5fa"
              bgColor="bg-blue-50"
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Transparent Communication"
              description="No hidden costs or fine prints. Whether it's pricing or franchise terms, we keep it crystal clear."
              iconColor="text-green-500"
              borderBottomColor="#4ade80"
              bgColor="bg-green-50"
            />
            <FeatureCard
              icon={Briefcase}
              title="Multiple Opportunities"
              description="From lab franchising to medical supplies, we offer a diverse range of growth paths for partners."
              iconColor="text-purple-500"
              borderBottomColor="#c084fc"
              bgColor="bg-purple-50"
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
              <button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="bg-jadko-secondary text-white px-10 py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg active:scale-95">
                Contact Now
              </button>
              <button onClick={goToFranchiseForm} className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm px-10 py-4 rounded-xl font-bold transition-all active:scale-95">
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
