import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Stethoscope, GraduationCap, ArrowRight } from 'lucide-react';

const ServiceCards: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.4,
        delayChildren: 4.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9,
      rotateY: -15
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 0.6,
        delay: 0.3,
        ease: "backOut"
      }
    }
  };

  const textVariants = {
    hidden: { 
      y: 20, 
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5,
        delay: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Medical Supply Card */}
      <Link to="/medical-supply" className="group">
        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:border-blue-400/50"
          variants={cardVariants}
          whileHover={{ 
            y: -8,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="text-center">
            <motion.div 
              className="bg-blue-500/20 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors"
              variants={iconVariants}
            >
              <Stethoscope className="h-10 w-10 text-blue-300" />
            </motion.div>
            <motion.div variants={textVariants}>
              <h3 className="text-2xl font-bold text-white mb-4">MedioTech Supply</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Premium medical instruments, equipment, and supplies for healthcare facilities across Tanzania. 
                Quality you can trust, service you can rely on.
              </p>
              <div className="flex items-center justify-center text-blue-300 group-hover:text-blue-200 transition-colors">
                <span className="font-medium">Explore Medical Solutions</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Link>

      {/* Scholarship Card */}
      <Link to="/scholarships" className="group">
        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:border-green-400/50"
          variants={cardVariants}
          whileHover={{ 
            y: -8,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="text-center">
            <motion.div 
              className="bg-green-500/20 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-green-500/30 transition-colors"
              variants={iconVariants}
            >
              <GraduationCap className="h-10 w-10 text-green-300" />
            </motion.div>
            <motion.div variants={textVariants}>
              <h3 className="text-2xl font-bold text-white mb-4">Go Learn Global</h3>
              <p className="text-green-100 mb-6 leading-relaxed">
                Transform your future with international scholarship opportunities. 
                We connect Tanzanian students with world-class universities globally.
              </p>
              <div className="flex items-center justify-center text-green-300 group-hover:text-green-200 transition-colors">
                <span className="font-medium">Discover Scholarships</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ServiceCards;
