import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Users, MapPin, Heart, Calendar, Award, Handshake } from 'lucide-react';

interface ImpactProps {
  darkMode: boolean;
}

const stats = [
  { icon: Users, value: 200000, suffix: '+', label: 'Lives Impacted', color: 'from-orange-500 to-red-500', desc: 'Underprivileged individuals assisted' },
  { icon: MapPin, value: 10, suffix: '+', label: 'Cities', color: 'from-blue-500 to-indigo-600', desc: 'Across India including Kanpur & Ghaziabad' },
  { icon: Heart, value: 5000, suffix: '+', label: 'Volunteers', color: 'from-pink-500 to-rose-600', desc: 'Passionate volunteers & interns' },
  { icon: Calendar, value: 3, suffix: '+', label: 'Years of Service', color: 'from-green-500 to-teal-600', desc: 'Consistently uplifting communities' },
  { icon: Award, value: 100, suffix: '+', label: 'Events Organized', color: 'from-purple-500 to-violet-600', desc: 'Food drives, health camps, clothing & more' },
  { icon: Handshake, value: 50, suffix: '+', label: 'Partner Organizations', color: 'from-yellow-500 to-orange-500', desc: 'Collaborating for greater impact' },
];

const milestones = [
  {
    year: '2020',
    title: 'Foundation Established',
    desc: 'NayePankh Foundation was established with a vision to uplift underprivileged communities in Uttar Pradesh.',
  },
  {
    year: '2021',
    title: 'Government Registration',
    desc: 'Registered with UP Government and obtained 80G & 12A certification, enabling tax-exempt donations.',
  },
  {
    year: '2022',
    title: 'Expansion to Multiple Cities',
    desc: 'Extended operations to Ghaziabad, Lucknow and several other cities across Uttar Pradesh.',
  },
  {
    year: '2023',
    title: '2 Lakh Lives Impacted',
    desc: 'Reached the milestone of impacting over 2 lakh underprivileged individuals through various initiatives.',
  },
  {
    year: '2024',
    title: 'National Recognition',
    desc: 'Recognized as one of India\'s largest student-led NGOs with expanding internship and volunteer programs.',
  },
];

export default function Impact({ darkMode }: ImpactProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [milestoneRef, milestoneInView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      id="impact"
      className={`relative py-24 overflow-hidden ${darkMode ? 'bg-gray-950' : 'bg-white'}`}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
          ref={ref}
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
            darkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-50 text-orange-600'
          }`}>
            Our Impact
          </span>
          <h2 className={`text-4xl sm:text-5xl font-black mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Numbers That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Tell Our Story
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Every number represents a life touched, a smile brought, and hope restored in our communities
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative p-8 rounded-3xl border card-hover overflow-hidden ${
                  darkMode
                    ? 'bg-gray-800/60 border-gray-700/50'
                    : 'bg-white border-gray-100 shadow-lg'
                }`}
              >
                {/* Background gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-full -translate-y-8 translate-x-8`} />

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon size={24} className="text-white" />
                </div>

                <div className={`text-4xl font-black mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      suffix={stat.suffix}
                    />
                  ) : '0'}
                </div>
                <div className={`text-lg font-bold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  {stat.label}
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {stat.desc}
                </p>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`} />
              </motion.div>
            );
          })}
        </div>

        {/* Timeline */}
        <motion.div
          ref={milestoneRef}
          initial={{ opacity: 0, y: 30 }}
          animate={milestoneInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h3 className={`text-3xl font-black mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Journey
            </span>
          </h3>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Key milestones in our path of impact</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-red-500 -translate-x-1/2" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={milestoneInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className={`p-6 rounded-2xl border ${
                    darkMode ? 'bg-gray-800/60 border-gray-700/50' : 'bg-white border-gray-100 shadow-md'
                  } ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold mb-2">
                      {m.year}
                    </span>
                    <h4 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{m.title}</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{m.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 border-4 border-white dark:border-gray-950 shadow-lg flex-shrink-0 z-10" />

                {/* Empty space for other side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
