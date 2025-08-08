import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import ServiceCards from '../components/sections/ServiceCards';

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background images array
  const backgroundImages = [
    {
      url: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      overlay: 'from-slate-900/95 via-blue-900/85 to-emerald-900/90',
      description: 'Medical Equipment'
    },
    {
      url: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      overlay: 'from-emerald-900/95 via-slate-800/85 to-blue-900/90',
      description: 'Education & Learning'
    },
    {
      url: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      overlay: 'from-blue-900/95 via-emerald-800/85 to-slate-900/90',
      description: 'Healthcare Excellence'
    },
    {
      url: 'https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      overlay: 'from-slate-900/95 via-blue-900/85 to-emerald-900/90',
      description: 'Global Opportunities'
    }
  ];

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.3,
      transition: {
        duration: 1,
        delay: 0.5
      }
    }
  };

  const imageVariants = {
    enter: { 
      opacity: 0,
      scale: 1.1
    },
    center: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 1.5
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${backgroundImages[currentImageIndex].url}')`
            }}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
          />
        </AnimatePresence>
        
        {/* Gradient Overlay */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-r ${backgroundImages[currentImageIndex].overlay}`}
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
        />
        
        {/* Additional Overlay */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          variants={overlayVariants}
        >
          <div className="h-full w-full bg-gradient-to-br from-transparent via-blue-500/20 to-green-500/20"></div>
        </motion.div>

        {/* Image Description Indicator */}
        <motion.div
          className="absolute bottom-4 left-4 z-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-sm">
            {backgroundImages[currentImageIndex].description}
          </div>
        </motion.div>

        {/* Slideshow Progress Indicator */}
        <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
          {backgroundImages.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              onClick={() => setCurrentImageIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <motion.div 
        className="relative z-10 min-h-screen flex flex-col"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Header />
        <HeroSection />
        <ServiceCards />
        <Footer />
      </motion.div>
    </div>
  );
};

export default LandingPage;