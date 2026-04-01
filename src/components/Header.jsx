import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-jadko-primary font-semibold hover:text-jadko-secondary transition-colors"
      : "text-gray-600 font-medium hover:text-jadko-primary transition-colors";
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="jadko-container h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/jadko-logo.png"
            alt="JADKO HEALTHCARE PRIVATE LIMITED"
            className="h-8 md:h-10 w-auto"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/150x50?text=JADKO+LOGO';
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/about" className={getLinkClass('/about')}>About</Link>
          <Link to="/packages" className={getLinkClass('/packages')}>Packages</Link>
          <Link to="/franchise" className={getLinkClass('/franchise')}>Franchise</Link>
          <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-jadko-primary text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="jadko-container py-4 flex flex-col gap-1">
            <Link to="/" className={`${getLinkClass('/')} py-3 border-b border-gray-50`} onClick={closeMenu}>Home</Link>
            <Link to="/about" className={`${getLinkClass('/about')} py-3 border-b border-gray-50`} onClick={closeMenu}>About</Link>
            <Link to="/packages" className={`${getLinkClass('/packages')} py-3 border-b border-gray-50`} onClick={closeMenu}>Packages</Link>
            <Link to="/franchise" className={`${getLinkClass('/franchise')} py-3 border-b border-gray-50`} onClick={closeMenu}>Franchise</Link>
            <Link to="/contact" className={`${getLinkClass('/contact')} py-3`} onClick={closeMenu}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
