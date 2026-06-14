import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Heart, CheckCircle, Shield, Star } from 'lucide-react';

interface DonateProps {
  darkMode: boolean;
}

const amounts = [100, 250, 500, 1000, 2500, 5000];

const causes = [
  { label: 'Education', icon: '📚', desc: 'Support a child\'s education' },
  { label: 'Food', icon: '🍱', desc: 'Feed underprivileged families' },
  { label: 'Healthcare', icon: '🏥', desc: 'Medical support for needy' },
  { label: 'General', icon: '❤️', desc: 'Where it\'s needed most' },
];

const impact = [
  { amount: '₹100', impact: 'Provides a meal for 2 children' },
  { amount: '₹500', impact: 'Buys school supplies for a child' },
  { amount: '₹1000', impact: 'Covers a month\'s medical expense' },
  { amount: '₹5000', impact: 'Sponsors a child\'s education for a month' },
];

export default function Donate({ darkMode }: DonateProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [selectedAmount, setSelectedAmount] = useState<number | null>(500);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedCause, setSelectedCause] = useState('General');
  const [submitted, setSubmitted] = useState(false);

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="donate"
      ref={ref}
      className={`relative py-24 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-orange-500/10 to-transparent rounded-[50%] blur-3xl" />
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
            Make a Difference
          </span>
          <h2 className={`text-4xl sm:text-5xl font-black mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Donate &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Change Lives
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Your donation is tax-exempt under 80G of the Indian Income Tax Act. Every rupee makes a difference!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`rounded-3xl overflow-hidden border shadow-xl ${
              darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white border-gray-100'
            }`}
          >
            {/* Card Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <Heart size={24} className="fill-white" />
                <h3 className="text-xl font-black">Make a Donation</h3>
              </div>
              <p className="text-white/80 text-sm">All donations are 80G tax exempted</p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-10 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={40} className="text-green-500" />
                </div>
                <h3 className={`text-2xl font-black mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Thank You! 🙏
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Your generous donation will help us change more lives. We'll send a confirmation to your email.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleDonate} className="p-6 space-y-6">
                {/* Select Cause */}
                <div>
                  <label className={`block text-sm font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Choose Your Cause
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {causes.map((cause) => (
                      <button
                        key={cause.label}
                        type="button"
                        onClick={() => setSelectedCause(cause.label)}
                        className={`p-3 rounded-xl border-2 text-left transition-all ${
                          selectedCause === cause.label
                            ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                            : darkMode
                            ? 'border-gray-600 hover:border-gray-500'
                            : 'border-gray-200 hover:border-orange-200'
                        }`}
                      >
                        <div className="text-xl mb-1">{cause.icon}</div>
                        <div className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{cause.label}</div>
                        <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{cause.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Select Amount */}
                <div>
                  <label className={`block text-sm font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Select Amount (₹)
                  </label>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {amounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                        className={`py-2.5 rounded-xl border-2 font-bold text-sm transition-all ${
                          selectedAmount === amt && !customAmount
                            ? 'border-orange-500 bg-orange-500 text-white'
                            : darkMode
                            ? 'border-gray-600 text-gray-300 hover:border-orange-500'
                            : 'border-gray-200 text-gray-700 hover:border-orange-300'
                        }`}
                      >
                        ₹{amt.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                    className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all text-sm ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500'
                        : 'bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:border-orange-400'
                    }`}
                  />
                </div>

                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-semibold mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all text-sm ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500'
                          : 'bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:border-orange-400'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-semibold mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all text-sm ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500'
                          : 'bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:border-orange-400'
                      }`}
                    />
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  className="w-full py-4 rounded-xl font-black text-white btn-primary flex items-center justify-center gap-2 text-base shine"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Heart size={18} className="fill-white" />
                  Donate ₹{customAmount || (selectedAmount?.toLocaleString()) || '—'} Now
                </motion.button>

                <div className={`flex items-center justify-center gap-2 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  <Shield size={14} className="text-green-500" />
                  100% Secure & Tax Exempted under 80G
                </div>
              </form>
            )}
          </motion.div>

          {/* Right - Impact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className={`text-2xl font-black mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Your Donation Impact
              </h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                See how your contribution can make a real difference in someone's life
              </p>
            </div>

            {impact.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className={`flex items-center gap-4 p-5 rounded-2xl border ${
                  darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white border-gray-100 shadow-sm'
                }`}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-black text-sm">{item.amount}</span>
                </div>
                <div>
                  <div className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{item.impact}</div>
                </div>
              </motion.div>
            ))}

            {/* Trust badges */}
            <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white border-gray-100 shadow-sm'}`}>
              <h4 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Why Trust Us?</h4>
              <div className="space-y-3">
                {[
                  { icon: Shield, text: 'UP Government Registered NGO' },
                  { icon: CheckCircle, text: '80G & 12A Tax Exemption Certified' },
                  { icon: Star, text: '100% Transparent Fund Usage' },
                  { icon: Heart, text: '2 Lakh+ Lives Already Impacted' },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icon size={18} className="text-orange-500 flex-shrink-0" />
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Other ways to help */}
            <div className={`p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-200/50`}>
              <h4 className={`font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Other Ways to Help</h4>
              <div className="flex flex-wrap gap-2">
                {['Volunteer', 'Intern With Us', 'Donate Clothes', 'Organize Events', 'Spread Awareness'].map((way) => (
                  <span key={way} className="px-3 py-1.5 rounded-full bg-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-semibold">
                    {way}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
