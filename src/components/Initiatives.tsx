import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Utensils, Heart, Shirt, Stethoscope, Users, Leaf, Star } from 'lucide-react';

interface InitiativesProps {
  darkMode: boolean;
}

const initiatives = [
  {
    icon: BookOpen,
    title: 'Education Drive',
    description: 'Providing quality education and learning resources to underprivileged children, ensuring every child gets the right to learn and grow.',
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
    darkBg: 'bg-blue-900/20',
    tag: 'Education',
  },
  {
    icon: Utensils,
    title: 'Food Distribution',
    description: 'Organizing regular food drives and meal distribution events to ensure no one in our community goes to bed hungry.',
    color: 'from-orange-500 to-red-500',
    bg: 'bg-orange-50',
    darkBg: 'bg-orange-900/20',
    tag: 'Food & Nutrition',
  },
  {
    icon: Shirt,
    title: 'Clothing Drive',
    description: 'Collecting and distributing clothes to those in need, especially during harsh winter months, providing warmth and dignity.',
    color: 'from-purple-500 to-pink-600',
    bg: 'bg-purple-50',
    darkBg: 'bg-purple-900/20',
    tag: 'Clothing',
  },
  {
    icon: Stethoscope,
    title: 'Health Camps',
    description: 'Conducting free medical camps and health awareness programs in underserved communities to promote well-being.',
    color: 'from-green-500 to-teal-600',
    bg: 'bg-green-50',
    darkBg: 'bg-green-900/20',
    tag: 'Healthcare',
  },
  {
    icon: Heart,
    title: 'Menstrual Hygiene',
    description: 'Distributing sanitary products and conducting hygiene awareness drives to support women and girls in rural areas.',
    color: 'from-pink-500 to-rose-600',
    bg: 'bg-pink-50',
    darkBg: 'bg-pink-900/20',
    tag: 'Women Empowerment',
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Building a stronger community through engagement, support programs, and crisis response initiatives.',
    color: 'from-yellow-500 to-orange-500',
    bg: 'bg-yellow-50',
    darkBg: 'bg-yellow-900/20',
    tag: 'Community',
  },
  {
    icon: Leaf,
    title: 'Environment',
    description: 'Tree plantation drives, clean-up campaigns, and environment awareness activities to protect our planet.',
    color: 'from-emerald-500 to-green-600',
    bg: 'bg-emerald-50',
    darkBg: 'bg-emerald-900/20',
    tag: 'Environment',
  },
  {
    icon: Star,
    title: 'Internship Programs',
    description: 'Offering meaningful internship opportunities for students to contribute their skills and gain real-world experience.',
    color: 'from-sky-500 to-blue-600',
    bg: 'bg-sky-50',
    darkBg: 'bg-sky-900/20',
    tag: 'Career',
  },
];

export default function Initiatives({ darkMode }: InitiativesProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      id="initiatives"
      ref={ref}
      className={`relative py-24 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
            darkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-600'
          }`}>
            What We Do
          </span>
          <h2 className={`text-4xl sm:text-5xl font-black mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Our Key{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Initiatives
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            From education to healthcare, food to clothing — we work across multiple domains to uplift underprivileged communities
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className={`group relative p-6 rounded-2xl border card-hover cursor-default ${
                  darkMode
                    ? `bg-gray-800/60 border-gray-700/50 hover:border-orange-500/30`
                    : `bg-white border-gray-100 hover:border-orange-200 shadow-sm hover:shadow-xl`
                }`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className="text-white" />
                </div>

                {/* Tag */}
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3 ${
                  darkMode ? item.darkBg + ' text-orange-300' : item.bg + ' text-gray-600'
                }`}>
                  {item.tag}
                </span>

                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {item.description}
                </p>

                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 p-10 text-center shadow-2xl shadow-orange-500/30"
        >
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.random() * 60 + 20,
                  height: Math.random() * 60 + 20,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-black text-white mb-3">Want to Volunteer?</h3>
            <p className="text-white/80 mb-6 text-lg">Join our team and be a part of the change. Every hand counts!</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-orange-600 font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Users size={18} />
              Join Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
