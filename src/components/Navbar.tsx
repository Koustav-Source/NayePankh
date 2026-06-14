import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Heart } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Initiatives', href: '#initiatives' },
  { label: 'Impact', href: '#impact' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map(l => l.href.slice(1));
      for (const sec of sections.reverse()) {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sec);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? darkMode
            ? 'bg-gray-950/95 shadow-2xl shadow-orange-900/20 backdrop-blur-xl border-b border-orange-900/20'
            : 'bg-white/95 shadow-2xl shadow-orange-200/40 backdrop-blur-xl border-b border-orange-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/40">
                <span className="text-white text-lg font-black">NP</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                <Heart size={8} className="text-orange-600 fill-orange-600" />
              </div>
            </div>
            <div>
              <div className={`font-black text-lg leading-none ${darkMode ? 'text-white' : scrolled ? 'text-gray-900' : 'text-white'}`}>
                NayePankh
              </div>
              <div className={`text-[10px] font-medium tracking-widest uppercase ${scrolled ? 'text-orange-500' : 'text-orange-300'}`}>
                Foundation
              </div>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                  activeSection === link.href.slice(1)
                    ? 'text-orange-500'
                    : darkMode
                    ? scrolled ? 'text-gray-300 hover:text-orange-400' : 'text-white/90 hover:text-orange-300'
                    : scrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white/90 hover:text-orange-200'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-orange-500 rounded-full transition-all duration-300 ${
                    activeSection === link.href.slice(1) ? 'w-6' : 'w-0 group-hover:w-4'
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'bg-orange-500/20 text-orange-400 hover:bg-orange-500/30'
                  : scrolled
                  ? 'bg-orange-50 text-orange-500 hover:bg-orange-100'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <motion.a
              href="#donate"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white btn-primary shine"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart size={15} className="fill-white" />
              Donate Now
            </motion.a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2.5 rounded-full transition-all ${
                darkMode ? 'text-white bg-white/10' : scrolled ? 'text-gray-800 bg-gray-100' : 'text-white bg-white/20'
              }`}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden overflow-hidden ${darkMode ? 'bg-gray-950' : 'bg-white'} border-t ${darkMode ? 'border-gray-800' : 'border-orange-100'}`}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl font-medium transition-all ${
                    activeSection === link.href.slice(1)
                      ? 'bg-orange-50 text-orange-500 font-semibold'
                      : darkMode
                      ? 'text-gray-300 hover:bg-gray-800 hover:text-orange-400'
                      : 'text-gray-700 hover:bg-orange-50 hover:text-orange-500'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#donate"
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white btn-primary"
                onClick={() => setIsOpen(false)}
              >
                <Heart size={15} className="fill-white" />
                Donate Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
