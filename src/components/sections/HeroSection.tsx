
import { motion, easeOut, easeInOut } from 'framer-motion';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };

  const titleVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  const letterVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0,
      rotateX: -90
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.6,
        delay: 1.2 + (i * 0.1),
        ease: easeInOut
      }
    })
  };

  const highlightVariants = {
    hidden: { 
      scale: 0,
      rotate: -10,
      y: 20
    },
    visible: {
      scale: 1,
      rotate: 0,
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 2.5,
        ease: easeInOut
      }
    }
  };

  const subtitleVariants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8,
        delay: 0.3,
        ease: easeOut
      }
    }
  };

  // Split the title into individual letters for animation
  const titleText = "Bridging Healthcare";
  const educationText = "Education";

  return (
    <motion.main 
      className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          variants={titleVariants}
          className="mb-6"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            {/* First part: "Bridging Healthcare" */}
            <div className="flex justify-center items-center flex-wrap">
              {titleText.split('').map((letter, index) => (
                <motion.span
                  key={`title-${index}`}
                  custom={index}
                  variants={letterVariants}
                  className="inline-block"
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    color: "#60A5FA",
                    textShadow: "0 0 20px rgba(96, 165, 250, 0.8)"
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>
            
            {/* Special "&" symbol */}
            <motion.span 
              className="text-blue-400 inline-block mx-4"
              variants={highlightVariants}
              whileHover={{ 
                scale: 1.3, 
                rotate: 360,
                color: "#FBBF24"
              }}
            >
              &
            </motion.span>
            
            {/* Second part: "Education" */}
            <div className="flex justify-center items-center flex-wrap">
              {educationText.split('').map((letter, index) => (
                <motion.span
                  key={`education-${index}`}
                  custom={index + titleText.length}
                  variants={letterVariants}
                  className="inline-block"
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    color: "#34D399",
                    textShadow: "0 0 20px rgba(52, 211, 153, 0.8)"
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>
          </h2>
        </motion.div>
        
        <motion.div
          variants={subtitleVariants}
          className="mb-12"
        >
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 3.2 }}
              className="inline-block"
            >
              Dionic Company
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 3.4 }}
              className="inline-block"
            >
              proudly serves Tanzania through two specialized divisions:
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.6 }}
              className="inline-block text-blue-300 font-medium"
            >
              providing world-class medical equipment
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.8 }}
              className="inline-block"
            >
              and opening doors to global education opportunities.
            </motion.span>
          </p>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default HeroSection;
