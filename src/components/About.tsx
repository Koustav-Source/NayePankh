import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Globe, Heart, Sparkles } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const highlights = [
  'UP Government Registered Organization',
  'Tax exemption under 80G & 12A',
  'One of India\'s largest student-led NGOs',
  'Active in Kanpur, Ghaziabad & more cities',
  'Assisted 2 Lakh+ underprivileged individuals',
  'Driven by passionate volunteers & interns',
];

export default function About({ darkMode }: AboutProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="about"
      ref={ref}
      className={`relative py-24 overflow-hidden ${darkMode ? 'bg-gray-950' : 'bg-white'}`}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
            darkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-50 text-orange-600'
          }`}>
            About Us
          </span>
          <h2 className={`text-4xl sm:text-5xl font-black mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Think Global,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Act Local
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Revolutionizing society one community at a time through compassion, dedication, and collective action
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl img-zoom">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-05-at-9.13.05-am-AzGEo7LOeZi2gn9v.jpeg"
                alt="NayePankh Foundation team"
                className="w-full h-[500px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.pexels.com/photos/16118310/pexels-photo-16118310.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className={`absolute -bottom-6 -right-6 p-5 rounded-2xl shadow-2xl ${
                darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <Heart size={24} className="text-white fill-white" />
                </div>
                <div>
                  <div className={`text-2xl font-black ${darkMode ? 'text-white' : 'text-gray-900'}`}>2L+</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Lives Touched</div>
                </div>
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -top-4 -left-4 bg-gradient-to-br from-orange-500 to-red-500 text-white px-4 py-2 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-2">
                <Globe size={16} />
                <span className="text-sm font-bold">10+ Cities</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={20} className="text-orange-500" />
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Our Story</span>
            </div>
            <h3 className={`text-3xl font-black mb-6 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                NayePankh Foundation
              </span>
            </h3>

            <p className={`text-base leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <strong className={darkMode ? 'text-white' : 'text-gray-900'}>NayePankh Foundation</strong> is a non-governmental organisation with a strong desire to help society and make it a better place for all. By doing everything in our power and to make our vision successful, we require your vital support.
            </p>
            <p className={`text-base leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Service to mankind is the service to God. We are one of the <strong className="text-orange-500">Biggest Student-Led NGOs of India</strong> with operations extended in Kanpur, Ghaziabad, and various other cities. Let's revolutionise the society together!
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#initiatives"
                className="shine px-7 py-3 rounded-full font-bold text-white btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Initiatives
              </motion.a>
              <motion.a
                href="#donate"
                className="px-7 py-3 rounded-full font-bold btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Support Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
