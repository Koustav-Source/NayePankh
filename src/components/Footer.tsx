import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Initiatives', href: '#initiatives' },
  { label: 'Our Impact', href: '#impact' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Meet the Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

const initiatives = [
  'Education Drive',
  'Food Distribution',
  'Clothing Drive',
  'Health Camps',
  'Menstrual Hygiene',
  'Community Support',
  'Environment',
  'Internship Programs',
];

export default function Footer({ darkMode }: FooterProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={ref}
      className={`relative overflow-hidden ${darkMode ? 'bg-gray-950' : 'bg-gray-900'}`}
    >
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500" />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      </div>

      {/* Newsletter Banner */}
      <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 py-10 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-white mb-1">Stay Updated!</h3>
            <p className="text-white/80 text-sm">Get the latest news, events & updates from NayePankh Foundation</p>
          </div>
          <div className="flex w-full sm:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 sm:w-64 px-4 py-3 rounded-xl border-0 outline-none text-gray-800 text-sm bg-white"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl bg-gray-900 text-white font-bold text-sm hover:bg-gray-800 transition-colors flex-shrink-0"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-base">NP</span>
              </div>
              <div>
                <div className="font-black text-xl text-white">NayePankh</div>
                <div className="text-orange-400 text-xs font-medium tracking-widest uppercase">Foundation</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              A non-governmental organisation with a strong desire to help society and make it a better place for all. Service to mankind is the service to God.
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={14} className="text-orange-400 flex-shrink-0" />
                <span>+91 83185 00748</span>
              </div>
              <a href="mailto:contact@nayepankh.com" className="flex items-center gap-2 text-gray-400 text-sm hover:text-orange-400 transition-colors">
                <Mail size={14} className="text-orange-400 flex-shrink-0" />
                <span>contact@nayepankh.com</span>
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={14} className="text-orange-400 flex-shrink-0 mt-0.5" />
                <span>Kanpur, Uttar Pradesh, India</span>
              </div>
            </div>

            {/* Badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold border border-orange-500/20">
                UP Govt. Registered
              </span>
              <span className="px-2.5 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold border border-green-500/20">
                80G Certified
              </span>
              <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold border border-blue-500/20">
                12A Registered
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-bold text-lg mb-5 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
            </h4>
            <ul className="space-y-2.5 mt-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-orange-400 rounded-full group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Initiatives */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-bold text-lg mb-5 relative">
              Our Initiatives
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
            </h4>
            <ul className="space-y-2.5 mt-4">
              {initiatives.map((item) => (
                <li key={item}>
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Get Involved */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-bold text-lg mb-5 relative">
              Get Involved
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
            </h4>
            <div className="mt-4 space-y-3">
              {[
                { label: '❤️ Donate Now', href: '#donate', primary: true },
                { label: '🤝 Volunteer', href: '#contact', primary: false },
                { label: '💼 Intern With Us', href: '#contact', primary: false },
                { label: '🤝 Partner With Us', href: '#contact', primary: false },
              ].map(({ label, href, primary }) => (
                <a
                  key={label}
                  href={href}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    primary
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="mt-6">
              <p className="text-gray-500 text-xs mb-3 font-medium uppercase tracking-wider">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { emoji: '📸', link: 'https://instagram.com', label: 'Instagram' },
                  { emoji: '👍', link: 'https://facebook.com', label: 'Facebook' },
                  { emoji: '💼', link: 'https://linkedin.com', label: 'LinkedIn' },
                  { emoji: '▶️', link: 'https://youtube.com', label: 'YouTube' },
                ].map(({ emoji, link, label }) => (
                  <a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    title={label}
                    className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-orange-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 text-base hover:scale-110"
                  >
                    {emoji}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} NayePankh Foundation. All rights reserved. |{' '}
            <span className="text-orange-500">UP Govt. | 80G & 12A Registered</span>
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> for a better India
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/40 hover:scale-110 transition-transform duration-300 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
