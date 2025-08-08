import { motion } from 'framer-motion';

interface GoLearnLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

const GoLearnLogo: React.FC<GoLearnLogoProps> = ({ className = '', size = 'md', showTagline = true }) => {
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
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} relative mr-3`}>
        <svg 
          viewBox="0 0 100 60" 
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Globe */}
          <circle cx="50" cy="30" r="20" fill="none" stroke="#1E40AF" strokeWidth="2"/>
          <path d="M30 30 L70 30" stroke="#1E40AF" strokeWidth="1" opacity="0.6"/>
          <path d="M50 10 L50 50" stroke="#1E40AF" strokeWidth="1" opacity="0.6"/>
          <path d="M35 15 Q50 10 65 15" stroke="#1E40AF" strokeWidth="1" opacity="0.4"/>
          <path d="M35 45 Q50 50 65 45" stroke="#1E40AF" strokeWidth="1" opacity="0.4"/>
          
          {/* Graduation Cap */}
          <rect x="40" y="8" width="20" height="8" fill="#1E40AF"/>
          <path d="M35 16 L65 16 L60 25 L40 25 Z" fill="#1E40AF"/>
          <circle cx="45" cy="20" r="1" fill="white"/>
          <path d="M45 20 L45 28" stroke="#1E40AF" strokeWidth="1"/>
          
          {/* Airplane */}
          <path d="M25 45 Q50 35 75 45" stroke="#F97316" strokeWidth="2" fill="none"/>
          <path d="M70 42 L75 45 L70 48" fill="#F97316"/>
          <path d="M72 43 L74 45 L72 47" fill="white"/>
          
          {/* Motion Trail */}
          <path d="M20 48 Q45 38 70 48" stroke="#F97316" strokeWidth="1" opacity="0.3" fill="none"/>
        </svg>
      </div>
      
      {/* Company Name */}
      <div className="flex flex-col">
        <span className="text-blue-800 font-bold text-lg">GoLearn</span>
        <span className="text-blue-800 font-bold text-lg">Global</span>
        {showTagline && (
          <span className="text-orange-500 text-xs font-medium">From Home to Horizon – Go Learn</span>
        )}
      </div>
    </motion.div>
  );
};

export default GoLearnLogo;
