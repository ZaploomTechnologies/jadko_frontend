import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path 
      ? "text-jadko-primary font-semibold hover:text-jadko-secondary transition-colors"
      : "text-gray-600 font-medium hover:text-jadko-primary transition-colors";
  };
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="jadko-container h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/jadko-logo.png" 
            alt="JADKO Healthcare" 
            className="h-20 w-auto"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/150x50?text=JADKO+LOGO';
            }}
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/about" className={getLinkClass('/about')}>About</Link>
          <Link to="/franchise" className={getLinkClass('/franchise')}>Franchise</Link>
          <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
        </nav>

        {/* CTA */}
        {/* <div className="flex items-center">
          <button className="bg-jadko-secondary text-white px-6 py-2.5 rounded-full font-bold hover:bg-red-700 transition-all transform hover:scale-105 active:scale-95 shadow-md">
            Book a Test
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
