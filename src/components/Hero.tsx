import { motion } from 'framer-motion';
import { Heart, ArrowDown, Users, Award, MapPin } from 'lucide-react';

interface HeroProps {
  darkMode?: boolean;
}

const floatingParticles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  size: Math.random() * 8 + 4,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 4,
  duration: Math.random() * 4 + 4,
}));

export default function Hero({ darkMode: _darkMode }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-01-31-at-9.40.45-pm-dWxpDb2pNbCaxERZ.jpeg"
          alt="NayePankh Foundation"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.pexels.com/photos/13759377/pexels-photo-13759377.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600';
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        {/* Orange tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-transparent to-red-900/20" />
      </div>

      {/* Floating Particles */}
      {floatingParticles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-orange-400/30"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Animated circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[300, 500, 700].map((size, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-orange-500/10"
            style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 1.5 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-orange-500/30"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-orange-300 font-medium">UP Govt. | 80G & 12A Registered NGO</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
          >
            It's That Easy to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500">
              Bring a Smile
            </span>
            <br />
            on Their Faces
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-xl"
          >
            We don't ask for much — just help us with what you can. Be it{' '}
            <span className="text-orange-400 font-semibold">Money</span>,{' '}
            <span className="text-orange-400 font-semibold">Skill</span>, or{' '}
            <span className="text-orange-400 font-semibold">Your Time</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <motion.a
              href="#donate"
              className="shine flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-lg btn-primary shadow-xl shadow-orange-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart size={20} className="fill-white" />
              Donate Now
            </motion.a>
            <motion.a
              href="#about"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-lg border-2 border-white/40 hover:border-orange-400 hover:bg-orange-400/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: Users, value: '2L+', label: 'Lives Impacted' },
              { icon: Award, value: 'Govt. Reg.', label: '80G & 12A' },
              { icon: MapPin, value: '10+', label: 'Cities' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3 glass px-5 py-3 rounded-2xl border border-white/10">
                <div className="w-10 h-10 rounded-full bg-orange-500/30 flex items-center justify-center">
                  <Icon size={18} className="text-orange-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg leading-none">{value}</div>
                  <div className="text-white/60 text-xs mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={20} className="text-orange-400" />
      </motion.div>
    </section>
  );
}
