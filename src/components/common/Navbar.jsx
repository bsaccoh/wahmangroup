import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useAppContext } from '../../context/AppContext';
import { sectors } from '../../data/sectors';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Sectors', path: '/sectors', hasDropdown: true },
  { name: 'Sustainability', path: '/sustainability' },
  { name: 'News', path: '/news' },
  { name: 'Investors', path: '/investors' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useAppContext();
  const location = useLocation();
  const drawerRef = useRef(null);
  const hamburgerRef = useRef(null);

  const handleDrawerKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
      hamburgerRef.current?.focus();
      return;
    }
    if (e.key !== 'Tab') return;
    const focusable = drawerRef.current?.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable || focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, [closeMobileMenu]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      drawerRef.current?.addEventListener('keydown', handleDrawerKeyDown);
      const firstFocusable = drawerRef.current?.querySelector(
        'a[href], button:not([disabled])'
      );
      firstFocusable?.focus();
    }
    return () => {
      drawerRef.current?.removeEventListener('keydown', handleDrawerKeyDown);
    };
  }, [isMobileMenuOpen, handleDrawerKeyDown]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMobileMenu();
    setIsDropdownOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const isDarkHeaderPage = location.pathname === '/' || /^\/sectors\/[^/]+$/.test(location.pathname);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-navy/95 backdrop-blur-md shadow-lg py-3'
            : isDarkHeaderPage
            ? 'bg-transparent py-5'
            : 'bg-navy-dark py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="WAHMAN ABU Group Home">
            <div className="w-11 h-11 rounded-lg bg-white p-1.5 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-gold/30 transition-shadow duration-300">
              <svg viewBox="0 0 44 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Small left accent diamond */}
                <polygon points="7,0 10,7 7,14 4,7" fill="#1a35b0"/>
                {/* Small right accent diamond */}
                <polygon points="37,0 40,7 37,14 34,7" fill="#1a35b0"/>
                {/* Left gold diamond */}
                <polygon points="15,1 23,17 15,33 7,17" fill="#C9A84C"/>
                {/* Right gold diamond */}
                <polygon points="29,1 37,17 29,33 21,17" fill="#C9A84C"/>
                {/* Center blue diamond */}
                <polygon points="22,6 30,18 22,30 14,18" fill="#1a35b0"/>
              </svg>
            </div>
            <div>
              <span className="text-white font-heading font-bold text-lg tracking-wide leading-none">
                WAHMAN ABU
              </span>
              <span className="text-gold text-xs block mt-0.5 font-body tracking-[0.2em] uppercase">
                Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsDropdownOpen(false)}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-1 gold-underline ${
                      isActive ? 'text-gold' : 'text-white/80 hover:text-white'
                    }`
                  }
                >
                  {link.name}
                  {link.hasDropdown && (
                    <MdKeyboardArrowDown
                      className={`text-lg transition-transform duration-300 ${
                        isDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </NavLink>

                {/* Sectors Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-navy-dark/95 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl overflow-hidden"
                      >
                        <div className="py-2">
                          {sectors.map((sector) => (
                            <Link
                              key={sector.id}
                              to={`/sectors/${sector.id}`}
                              className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
                            >
                              <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: sector.color }}
                              />
                              <span className="text-sm">{sector.name}</span>
                            </Link>
                          ))}
                          <div className="border-t border-white/10 mt-1 pt-1">
                            <Link
                              to="/sectors"
                              className="flex items-center gap-3 px-4 py-3 text-gold hover:text-gold-light hover:bg-white/5 transition-colors duration-200 text-sm font-medium"
                            >
                              View All Sectors →
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-gold to-gold-dark text-navy-dark font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            ref={hamburgerRef}
            onClick={toggleMobileMenu}
            className="lg:hidden text-white text-2xl p-2 hover:text-gold transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-drawer"
          >
            {isMobileMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={closeMobileMenu}
            />

            {/* Drawer */}
            <motion.div
              ref={drawerRef}
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-navy-dark z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <span className="text-white font-heading font-bold text-lg">Menu</span>
                  <button
                    onClick={closeMobileMenu}
                    className="text-white/60 hover:text-white text-2xl"
                    aria-label="Close menu"
                  >
                    <HiX />
                  </button>
                </div>

                {/* Links */}
                <div className="flex-1 overflow-y-auto py-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `block px-6 py-3.5 text-base font-medium border-l-2 transition-all duration-200 ${
                            isActive
                              ? 'text-gold border-gold bg-gold/5'
                              : 'text-white/70 border-transparent hover:text-white hover:border-gold/50'
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>

                      {/* Mobile Sectors submenu */}
                      {link.hasDropdown && (
                        <div className="pl-8 border-l-2 border-white/5 ml-6">
                          {sectors.map((sector) => (
                            <Link
                              key={sector.id}
                              to={`/sectors/${sector.id}`}
                              className="block px-4 py-2 text-sm text-white/50 hover:text-white transition-colors"
                            >
                              {sector.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="p-6 border-t border-white/10">
                  <Link
                    to="/contact"
                    className="block w-full py-3.5 bg-gradient-to-r from-gold to-gold-dark text-navy-dark font-semibold text-center rounded-lg hover:shadow-lg hover:shadow-gold/25 transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
