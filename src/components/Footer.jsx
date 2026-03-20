import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-white pt-16">
      {/* Main Footer Content */}
      <div className="container pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-10 md:mb-16">
          {/* Brand Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <img src="/jadko-logo.png" alt="JADKO Logo" className="h-20 w-auto mb-2" />
            <p className="text-gray-600 mb-8 leading-relaxed max-w-sm">
              Providing accessible, affordable, and accurate diagnostic services across India. Bridging the gap in healthcare through technology and expertise.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1DEHD4KzmY/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-jadko-primary hover:bg-jadko-primary hover:text-white transition-all cursor-pointer">
                 <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/jadko_healthcare?utm_source=qr&igsh=MW9pYng5anJwd2R5MA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-jadko-primary hover:bg-jadko-primary hover:text-white transition-all cursor-pointer">
                 <Instagram className="w-5 h-5" />
              </a>
              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-jadko-primary hover:bg-jadko-primary hover:text-white transition-all cursor-pointer">
                 <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-jadko-primary hover:bg-jadko-primary hover:text-white transition-all cursor-pointer">
                 <Linkedin className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-jadko-primary font-bold mb-8 text-lg uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#home" className="hover:text-jadko-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-jadko-primary transition-colors">About JADKO</a></li>
              <li><a href="#services" className="hover:text-jadko-primary transition-colors">Diagnostic Packages</a></li>
              <li><a href="#franchise" className="hover:text-jadko-primary transition-colors">Franchise Opportunities</a></li>
              <li><a href="#contact" className="hover:text-jadko-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-jadko-primary font-bold mb-8 text-lg uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start group">
                <MapPin className="w-6 h-6 text-jadko-accent mt-1" />
                <span className="text-gray-600">302, SARDAR COMPLEX, NILAMPARK CO. OP.HOU. SOC, Katargam, Surat City, Surat- 395004, Gujarat</span>
              </li>
              <li className="flex gap-4 items-start group">
                <Phone className="w-6 h-6 text-jadko-accent mt-1" />
                <span className="text-gray-600 font-bold text-lg">+91-1800-456-7890</span>
              </li>
              <li className="flex gap-4 items-start group">
                <Mail className="w-6 h-6 text-jadko-accent mt-1" />
                <span className="text-gray-600">jadkohealthcare@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Location/Map */}
          <div>
             <h4 className="text-jadko-primary font-bold mb-8 text-lg uppercase tracking-wider">Our Reach</h4>
             <div className="rounded-2xl overflow-hidden h-48 w-full border border-gray-200 shadow-sm">
               <iframe
                 title="JADKO HEALTHCARE PRIVATE LIMITED Location"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8486115058777!2d72.82251707471993!3d21.237850980565316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04eb658d28b8f%3A0x3658b7a720114ac5!2sSardar%20Complex!5e0!3m2!1sen!2sin!4v1773908241395!5m2!1sen!2sin"
                 width="100%"
                 height="100%"
                 style={{ border: 0 }}
                 allowFullScreen=""
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2025 JADKO HEALTHCARE PRIVATE LIMITED. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-jadko-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-jadko-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
