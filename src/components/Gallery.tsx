import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface GalleryProps {
  darkMode: boolean;
}

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/13759377/pexels-photo-13759377.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700',
    alt: 'Children in need',
    category: 'Community',
    span: 'col-span-2 row-span-2',
  },
  {
    url: 'https://images.pexels.com/photos/3231359/pexels-photo-3231359.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    alt: 'Education initiative',
    category: 'Education',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/16118310/pexels-photo-16118310.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    alt: 'Children celebrating',
    category: 'Events',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/6646981/pexels-photo-6646981.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    alt: 'Food distribution',
    category: 'Food Drive',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/6646952/pexels-photo-6646952.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    alt: 'Volunteers packing',
    category: 'Volunteers',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/12818151/pexels-photo-12818151.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    alt: 'Children in queue',
    category: 'Community',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/28141441/pexels-photo-28141441.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    alt: 'Health camp',
    category: 'Healthcare',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/6647115/pexels-photo-6647115.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    alt: 'Aid distribution',
    category: 'Food Drive',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/31864391/pexels-photo-31864391.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    alt: 'Student learning',
    category: 'Education',
    span: '',
  },
];

const categories = ['All', 'Education', 'Food Drive', 'Healthcare', 'Community', 'Volunteers', 'Events'];

export default function Gallery({ darkMode }: GalleryProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section
      id="gallery"
      ref={ref}
      className={`relative py-24 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
            darkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-600'
          }`}>
            Gallery
          </span>
          <h2 className={`text-4xl sm:text-5xl font-black mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Moments of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Change
            </span>
          </h2>
          <p className={`text-lg max-w-xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A glimpse into our work — every photo tells a story of hope, compassion, and impact
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30'
                  : darkMode
                  ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                  : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((img, i) => (
            <motion.div
              key={img.url + activeCategory}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer img-zoom ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              style={{ aspectRatio: i === 0 ? '1/1' : '4/3' }}
              onClick={() => setLightbox(img.url)}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-3 group-hover:translate-y-0">
                <span className="text-xs font-semibold text-orange-400 mb-1">{img.category}</span>
                <span className="text-white text-sm font-medium">{img.alt}</span>
              </div>
              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <ZoomIn size={16} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
            onClick={() => setLightbox(null)}
          >
            <X size={24} />
          </button>
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={lightbox}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
}
