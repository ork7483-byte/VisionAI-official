import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconMenu2, IconX, IconChevronDown } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'BRAND', path: '/brand' },
  { name: 'TECH', path: '/tech' },
];

const HIDDEN_LINKS = [
  { name: 'HOME', path: '/' },
  { name: 'WHAT WE DO', path: '/service-copy' },
  { name: 'ABOUT', path: '/about' },
  { name: 'CONTACT', path: '/contact' },
];

export default function NavBarCopy() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHiddenOpen, setIsHiddenOpen] = useState(false);
  const hiddenRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (hiddenRef.current && !hiddenRef.current.contains(e.target as Node)) {
        setIsHiddenOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu & dropdown on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsHiddenOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-white border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
          <Link to="/" className="font-oswald font-bold text-2xl md:text-[28px] tracking-tight text-gray-900">
            VISION AI
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[13px] font-bold tracking-widest transition-colors ${
                    isActive ? 'text-brand' : 'text-gray-900 hover:text-brand'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Hidden Pages Dropdown */}
            <div className="relative" ref={hiddenRef}>
              <button
                onClick={() => setIsHiddenOpen(!isHiddenOpen)}
                className={`flex items-center gap-1 text-[13px] font-bold tracking-widest transition-colors ${
                  isHiddenOpen ? 'text-brand' : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                숨김페이지
                <IconChevronDown
                  size={14}
                  stroke={2}
                  className={`transition-transform duration-200 ${isHiddenOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {isHiddenOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-3 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 overflow-hidden"
                  >
                    {HIDDEN_LINKS.map((link) => {
                      const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '/vision-home');
                      return (
                        <Link
                          key={link.name}
                          to={link.path}
                          className={`block px-5 py-2.5 text-[13px] font-bold tracking-widest transition-colors ${
                            isActive ? 'text-brand bg-gray-50' : 'text-gray-600 hover:text-brand hover:bg-gray-50'
                          }`}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-gray-900"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <IconMenu2 size={24} stroke={2} />
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            <div className="px-6 h-20 flex items-center justify-between border-b border-gray-100">
              <Link to="/" className="font-oswald font-bold text-2xl tracking-tight text-gray-900">
                VISION AI
              </Link>
              <button
                className="p-2 -mr-2 text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <IconX size={24} stroke={2} />
              </button>
            </div>
            <div className="flex-1 px-6 py-12 flex flex-col space-y-8">
              {NAV_LINKS.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-3xl font-bold flex items-center space-x-4 ${
                        isActive ? 'text-brand' : 'text-gray-900'
                      }`}
                    >
                      <span className="text-sm font-oswald text-gray-300 font-normal">
                        0{index + 1}
                      </span>
                      <span>{link.name}</span>
                    </Link>
                  </motion.div>
                );
              })}

              {/* Hidden Pages Section */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs font-bold text-gray-300 tracking-widest mb-4">숨김페이지</p>
                <div className="flex flex-col space-y-6">
                  {HIDDEN_LINKS.map((link, index) => {
                    const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '/vision-home');
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (NAV_LINKS.length + index) * 0.1 + 0.2 }}
                      >
                        <Link
                          to={link.path}
                          className={`text-2xl font-bold flex items-center space-x-4 ${
                            isActive ? 'text-brand' : 'text-gray-400'
                          }`}
                        >
                          <span>{link.name}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
