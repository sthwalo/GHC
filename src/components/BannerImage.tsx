import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BannerImageProps {
  className?: string;
}

const BannerImage: React.FC<BannerImageProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    '/images/slide/1.png',
    '/images/slide/2.png',
    '/images/slide/3.png',
    '/images/slide/4.png',
    '/images/slide/5.png',
    '/images/slide/6.png',
    '/images/slide/7.png',
    '/images/slide/8.png'
  ];

  useEffect(() => {
    console.log('Current slide:', currentIndex);
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex === slides.length - 1 ? 0 : prevIndex + 1;
        console.log('Changing to slide:', nextIndex);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Preload images
  useEffect(() => {
    slides.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className={className}>
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={slides[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => console.error('Image failed to load:', slides[currentIndex])}
          />
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow Navigation */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-20 backdrop-blur-sm transition-all duration-200"
          onClick={() => setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)}
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-20 backdrop-blur-sm transition-all duration-200"
          onClick={() => setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1)}
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BannerImage;
