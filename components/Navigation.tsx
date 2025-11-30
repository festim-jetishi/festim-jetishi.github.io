import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../logo_short.jpeg';
import { Magnetic } from './ui/Magnetic';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Start', href: '#home' },
    { name: 'Über Uns', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Kontakt', href: '#contact' },
  ];

  // Dynamic Styles based on State
  const containerClasses = isScrolled
    ? 'bg-[#FDFCF8]/90 backdrop-blur-md border-stone-200 text-primary py-4'
    : 'bg-transparent border-transparent text-white py-6';

  const linkColor = isScrolled ? 'text-primary' : 'text-white';
  
  const buttonClasses = isScrolled
    ? 'bg-primary text-white border-transparent hover:bg-brand-green hover:text-primary'
    : 'bg-transparent text-white border-white hover:border-brand-green hover:text-brand-green';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b ${containerClasses}`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between relative">
          
          {/* Logo (Left) */}
          <a href="#" className="flex items-center gap-2 z-50 relative group">
            <img src={logo} alt="Röllinger" className="h-10 w-auto object-contain" />
            <span 
              className={`font-serif text-xl tracking-tight font-medium transition-colors duration-300 ${isScrolled || mobileMenuOpen ? 'text-primary' : 'text-white'}`}
            >
              Röllinger GmbH
            </span>
          </a>

          {/* Links (Center) - Absolute Positioned to ensure perfect centering */}
          <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-8">
            {navLinks.map((link) => (
              <Magnetic key={link.name}>
                <a
                  href={link.href}
                  className={`text-[13px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 hover:text-brand-green ${linkColor} inline-block px-2`}
                >
                  {link.name}
                </a>
              </Magnetic>
            ))}
          </nav>

          {/* CTA Button (Right) */}
          <div className="hidden md:block">
            <Magnetic strength={50}>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300 inline-block ${buttonClasses}`}
              >
                Anfrage
              </motion.a>
            </Magnetic>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden relative z-50 p-2 transition-colors duration-300 ${isScrolled || mobileMenuOpen ? 'text-primary' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FDFCF8] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  href={link.href}
                  className="font-serif text-4xl text-primary hover:text-stone-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                href="#contact"
                className="mt-8 px-10 py-4 bg-primary text-white rounded-full text-sm uppercase tracking-widest"
                onClick={() => setMobileMenuOpen(false)}
              >
                Anfrage starten
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
