import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

interface TeamProps {
  darkMode: boolean;
}

const teamMembers = [
  {
    name: 'Prashant Shukla',
    role: 'Founder & President',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
    quote: '"If we all do something, then together there is no problem that we cannot solve!"',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Rahul Verma',
    role: 'Vice President',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
    quote: '"Change begins with a single act of kindness."',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Priya Singh',
    role: 'Head of Operations',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
    quote: '"Every small effort adds up to make a big difference."',
    color: 'from-pink-500 to-rose-600',
  },
  {
    name: 'Amit Kumar',
    role: 'Head of Outreach',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
    quote: '"Reaching those who need us most — that is our mission."',
    color: 'from-green-500 to-teal-600',
  },
  {
    name: 'Sneha Gupta',
    role: 'Education Lead',
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
    quote: '"Education is the most powerful weapon to change the world."',
    color: 'from-purple-500 to-violet-600',
  },
  {
    name: 'Vikram Sharma',
    role: 'HR & Volunteer Manager',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
    quote: '"Our volunteers are our greatest strength."',
    color: 'from-yellow-500 to-orange-500',
  },
];

export default function Team({ darkMode }: TeamProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      id="team"
      ref={ref}
      className={`relative py-24 overflow-hidden ${darkMode ? 'bg-gray-950' : 'bg-white'}`}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
        </div>
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
            darkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-50 text-orange-600'
          }`}>
            Join Our Team
          </span>
          <h2 className={`text-4xl sm:text-5xl font-black mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Meet the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Changemakers
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Passionate individuals dedicated to creating a positive impact — one community at a time
          </p>
        </motion.div>

        {/* Founder Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mb-16 rounded-3xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 p-0.5 rounded-3xl">
            <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-[calc(1.5rem-2px)] p-8 sm:p-12`}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-orange-500 to-red-500 p-1">
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200"
                      alt="Prashant Shukla"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <Quote size={40} className="text-orange-500/30 mb-3 mx-auto md:mx-0" />
                  <p className={`text-xl sm:text-2xl font-semibold italic mb-4 leading-relaxed ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    "If we all do something, then together there is no problem that we cannot solve!"
                  </p>
                  <div>
                    <div className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Prashant Shukla</div>
                    <div className="text-orange-500 font-medium">Founder & President, NayePankh Foundation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden border card-hover ${
                darkMode
                  ? 'bg-gray-800/60 border-gray-700/50'
                  : 'bg-white border-gray-100 shadow-lg'
              }`}
            >
              {/* Top gradient */}
              <div className={`h-2 bg-gradient-to-r ${member.color}`} />

              <div className="p-6">
                {/* Profile */}
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} p-0.5 flex-shrink-0`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-[calc(0.75rem-2px)] object-cover"
                    />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {member.name}
                    </h3>
                    <span className={`text-sm font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <div className={`relative p-4 rounded-2xl mb-5 ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                  <Quote size={16} className="text-orange-500 mb-1 opacity-50" />
                  <p className={`text-sm italic leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {member.quote}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-2">
                  {[
                    { label: 'in', color: 'hover:bg-blue-500' },
                    { label: '📷', color: 'hover:bg-pink-500' },
                    { label: '𝕏', color: 'hover:bg-sky-500' },
                  ].map(({ label, color }, si) => (
                    <button
                      key={si}
                      className={`w-8 h-8 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center text-gray-400 hover:text-white ${color} transition-all duration-300 text-xs font-bold`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className={`mt-16 text-center p-10 rounded-3xl border-2 border-dashed border-orange-300 ${
            darkMode ? 'bg-orange-900/10' : 'bg-orange-50/50'
          }`}
        >
          <div className="text-4xl mb-4">🤝</div>
          <h3 className={`text-2xl font-black mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Want to Join Our Team?
          </h3>
          <p className={`mb-6 max-w-md mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            We welcome passionate individuals who want to make a difference. Join us as a volunteer, intern, or team member!
          </p>
          <a
            href="#contact"
            className="shine inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white btn-primary"
          >
            Get Involved Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
