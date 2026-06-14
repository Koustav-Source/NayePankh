import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Initiatives from './components/Initiatives';
import Impact from './components/Impact';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Donate from './components/Donate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.style.backgroundColor = darkMode ? '#0f0f0f' : '#ffffff';
  }, [darkMode]);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-orange-950"
          >
            {/* Animated logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: 'backOut' }}
              className="relative mb-8"
            >
              {/* Outer rings */}
              {[60, 80, 100].map((size, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-orange-500/20"
                  style={{
                    width: size,
                    height: size,
                    top: '50%',
                    left: '50%',
                    marginLeft: -size / 2,
                    marginTop: -size / 2,
                  }}
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-2xl shadow-orange-500/50 relative z-10">
                <span className="text-white font-black text-2xl">NP</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <h1 className="text-3xl font-black text-white mb-1">NayePankh Foundation</h1>
              <p className="text-orange-400 text-sm font-medium tracking-widest uppercase">Uplifting Underprivileged People</p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 w-48 h-1 bg-gray-700 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
                className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-4 text-gray-500 text-sm"
            >
              Loading...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className={`${darkMode ? 'dark' : ''}`}
      >
        <div className={`min-h-screen ${darkMode ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-900'} transition-colors duration-500`}>
          <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
          <Hero darkMode={darkMode} />
          <Ticker darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Initiatives darkMode={darkMode} />
          <Impact darkMode={darkMode} />

          {/* Full-width image break */}
          <div className="relative h-64 sm:h-80 overflow-hidden img-zoom">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YKbL494Mv8Ip3qgy/nyomtatott-184780375-AVLW214Gz2IpXNn4.jpg"
              alt="Team"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.pexels.com/photos/6646952/pexels-photo-6646952.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=1600';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/60 via-black/50 to-red-900/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center px-4"
              >
                <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 leading-tight">
                  "Service to Mankind is the
                  <span className="text-orange-400"> Service to God</span>"
                </h2>
                <p className="text-white/70 text-lg">— NayePankh Foundation</p>
              </motion.div>
            </div>
          </div>

          <Gallery darkMode={darkMode} />
          <Testimonials darkMode={darkMode} />
          <Team darkMode={darkMode} />
          <Donate darkMode={darkMode} />

          {/* Map Section */}
          <div className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center mb-10"
              >
                <h2 className={`text-3xl font-black mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Find Us on the{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    Map
                  </span>
                </h2>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Based in Kanpur, Uttar Pradesh — operating across India
                </p>
              </motion.div>
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-500/20 h-80 sm:h-96">
                <iframe
                  title="NayePankh Foundation Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7231.7690064!2d80.34599!3d26.44960!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <Contact darkMode={darkMode} />
          <Footer darkMode={darkMode} />
        </div>
      </motion.div>
    </>
  );
}
