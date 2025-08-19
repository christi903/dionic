import { motion } from 'framer-motion';

interface GoLearnLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const GoLearnLogo: React.FC<GoLearnLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <motion.div 
      className={`flex items-center ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo Image */}
      <img 
        src="/golearn.jpg" 
        alt="GoLearn Global Logo" 
        className={`${sizeClasses[size]} object-contain mr-3`}
      />
    </motion.div>
  );
};

export default GoLearnLogo;
