import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialsProps {
  darkMode: boolean;
}

const testimonials = [
  {
    name: 'Ananya Mishra',
    role: 'Intern, NayePankh Foundation',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=150&w=150',
    text: 'Interning with NayePankh Foundation was a life-changing experience. I witnessed firsthand how a small group of dedicated students can change thousands of lives. The work we did in food distribution and education will stay with me forever.',
    rating: 5,
    city: 'Kanpur',
  },
  {
    name: 'Rohan Tiwari',
    role: 'Volunteer',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=150&w=150',
    text: 'I joined NayePankh Foundation as a volunteer during my college days and it completely changed my perspective on life. Seeing the smiles on children\'s faces after a meal distribution event is priceless. This organization is truly making India better.',
    rating: 5,
    city: 'Ghaziabad',
  },
  {
    name: 'Kavya Sharma',
    role: 'Education Drive Beneficiary Parent',
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=150&w=150',
    text: 'Because of NayePankh Foundation, my daughter now has access to books, stationery and quality education support. The team visits our community regularly and genuinely cares about the children\'s futures. We are eternally grateful.',
    rating: 5,
    city: 'Kanpur',
  },
  {
    name: 'Suresh Yadav',
    role: 'Community Member',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=150&w=150',
    text: 'During the harsh winter, NayePankh Foundation distributed warm clothes and blankets to our entire community. Their dedication to helping the underprivileged without expecting anything in return is truly inspiring. God bless them all.',
    rating: 5,
    city: 'Lucknow',
  },
  {
    name: 'Divya Patel',
    role: 'HR Intern',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=150&w=150',
    text: 'The internship program at NayePankh Foundation gave me real-world experience in HR, volunteer management, and non-profit operations. The team is incredibly supportive and I learned more here than in any classroom. Highly recommend!',
    rating: 5,
    city: 'Delhi',
  },
];

export default function Testimonials({ darkMode }: TestimonialsProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveIndex((activeIndex + 1) % testimonials.length);

  return (
    <section
      ref={ref}
      className={`relative py-24 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-orange-50 to-red-50'}`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Quote size={400} className="absolute -top-20 -left-20 text-orange-500/5 rotate-12" />
        <Quote size={300} className="absolute -bottom-10 -right-10 text-red-500/5 rotate-180" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Testimonials
          </span>
          <h2 className={`text-4xl sm:text-5xl font-black mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Voices of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Impact
            </span>
          </h2>
          <p className={`text-lg max-w-xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Hear from the people whose lives have been touched by NayePankh Foundation
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className={`relative rounded-3xl p-8 sm:p-12 border shadow-2xl ${
            darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white border-gray-100'
          }`}>
            {/* Quote icon */}
            <div className="absolute top-6 right-8 opacity-10">
              <Quote size={80} className="text-orange-500" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Text */}
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-lg sm:text-xl leading-relaxed mb-8 italic ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}
            >
              "{testimonials[activeIndex].text}"
            </motion.p>

            {/* Author */}
            <motion.div
              key={`author-${activeIndex}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 p-0.5">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <div className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-orange-500 font-medium text-sm">{testimonials[activeIndex].role}</div>
                <div className={`text-xs mt-0.5 flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  <span>📍</span>
                  {testimonials[activeIndex].city}
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? 'w-8 h-2.5 bg-orange-500'
                        : `w-2.5 h-2.5 ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-orange-200'}`
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className={`w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    darkMode
                      ? 'border-gray-600 text-gray-400 hover:border-orange-500 hover:text-orange-400'
                      : 'border-gray-200 text-gray-400 hover:border-orange-400 hover:text-orange-500'
                  }`}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Side previews */}
        <div className="hidden lg:grid grid-cols-3 gap-4 mt-8">
          {testimonials
            .filter((_, i) => i !== activeIndex)
            .slice(0, 3)
            .map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                onClick={() => setActiveIndex(testimonials.indexOf(t))}
                className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  darkMode
                    ? 'bg-gray-800/40 border-gray-700 hover:border-orange-500/40'
                    : 'bg-white/70 border-gray-100 hover:border-orange-200 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className={`text-sm font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{t.name}</div>
                    <div className="text-xs text-orange-500">{t.role}</div>
                  </div>
                </div>
                <p className={`text-xs line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>"{t.text}"</p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
