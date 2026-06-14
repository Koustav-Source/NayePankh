import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', type: 'General Inquiry' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '', type: 'General Inquiry' }); }, 4000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 83185 00748',
      link: 'tel:+918318500748',
      color: 'from-green-500 to-teal-600',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@nayepankh.com',
      link: 'mailto:contact@nayepankh.com',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kanpur, Uttar Pradesh, India',
      link: 'https://maps.google.com/?q=Kanpur,Uttar+Pradesh,India',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: 'Mon–Sat: 9AM – 6PM',
      link: '#',
      color: 'from-purple-500 to-violet-600',
    },
  ];

  const inquiryTypes = ['General Inquiry', 'Volunteer', 'Internship', 'Donation', 'Partnership', 'Media'];

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative py-24 overflow-hidden ${darkMode ? 'bg-gray-950' : 'bg-white'}`}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl" />
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
            Get In Touch
          </span>
          <h2 className={`text-4xl sm:text-5xl font-black mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Let's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Connect
            </span>
          </h2>
          <p className={`text-lg max-w-xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Whether you want to volunteer, donate, partner, or simply learn more — we'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={i}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={`flex items-center gap-4 p-5 rounded-2xl border card-hover block ${
                    darkMode ? 'bg-gray-800/60 border-gray-700/50' : 'bg-gray-50 border-gray-100'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className={`text-xs font-semibold uppercase tracking-wide mb-0.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {info.label}
                    </div>
                    <div className={`font-semibold text-sm ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className={`p-6 rounded-2xl border ${darkMode ? 'bg-gray-800/60 border-gray-700/50' : 'bg-gray-50 border-gray-100'}`}
            >
              <h4 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Follow Us</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'Instagram', emoji: '📸', color: 'bg-gradient-to-br from-pink-500 to-purple-600', link: 'https://instagram.com/nayepankh' },
                  { label: 'Facebook', emoji: '👍', color: 'bg-blue-600', link: 'https://facebook.com/nayepankh' },
                  { label: 'LinkedIn', emoji: '💼', color: 'bg-blue-700', link: 'https://linkedin.com/company/nayepankh' },
                  { label: 'YouTube', emoji: '▶️', color: 'bg-red-600', link: 'https://youtube.com/nayepankh' },
                ].map(({ label, emoji, color, link }) => (
                  <a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl ${color} text-white text-sm font-medium hover:scale-105 hover:shadow-lg transition-all duration-300`}
                  >
                    <span>{emoji}</span>
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={`lg:col-span-3 rounded-3xl border overflow-hidden shadow-xl ${
              darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white border-gray-100'
            }`}
          >
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6">
              <h3 className="text-xl font-black text-white mb-1">Send Us a Message</h3>
              <p className="text-white/80 text-sm">We'll get back to you within 24 hours</p>
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
                <h3 className={`text-2xl font-black mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Message Sent! 🎉</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Thank you for reaching out! Our team will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Inquiry Type */}
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Inquiry Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setForm({ ...form, type })}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                          form.type === type
                            ? 'bg-orange-500 text-white'
                            : darkMode
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            : 'bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-600'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-semibold mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all text-sm ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:border-orange-500'
                          : 'bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:border-orange-400'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-semibold mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all text-sm ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:border-orange-500'
                          : 'bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:border-orange-400'
                      }`}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className={`block text-sm font-semibold mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all text-sm ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:border-orange-500'
                        : 'bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:border-orange-400'
                    }`}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className={`block text-sm font-semibold mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="What is this about?"
                    className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all text-sm ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:border-orange-500'
                        : 'bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:border-orange-400'
                    }`}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className={`block text-sm font-semibold mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message *</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    placeholder="Tell us how you'd like to get involved or what you need help with..."
                    className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all text-sm resize-none ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:border-orange-500'
                        : 'bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:border-orange-400'
                    }`}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 rounded-xl font-black text-white btn-primary flex items-center justify-center gap-2 shine"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
