import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
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
          {/* Modern Truck Body */}
          <path d="M15 35 L25 30 L70 30 L80 35 L80 45 L15 45 Z" fill="#1E40AF"/>
          
          {/* Modern Truck Cab */}
          <path d="M60 25 L75 25 L75 35 L60 35 Z" fill="#1E40AF"/>
          
          {/* Windshield */}
          <path d="M62 27 L73 27 L73 33 L62 33 Z" fill="#3B82F6"/>
          
          {/* Modern Wheels */}
          <circle cx="25" cy="50" r="6" fill="#0F172A" stroke="#374151" strokeWidth="1"/>
          <circle cx="25" cy="50" r="3" fill="#6B7280"/>
          <circle cx="65" cy="50" r="6" fill="#0F172A" stroke="#374151" strokeWidth="1"/>
          <circle cx="65" cy="50" r="3" fill="#6B7280"/>
          
          {/* Motion Lines */}
          <line x1="8" y1="32" x2="18" y2="32" stroke="#3B82F6" strokeWidth="2" opacity="0.8"/>
          <line x1="8" y1="36" x2="15" y2="36" stroke="#3B82F6" strokeWidth="2" opacity="0.6"/>
          <line x1="8" y1="40" x2="12" y2="40" stroke="#3B82F6" strokeWidth="2" opacity="0.4"/>
          
          {/* Medical Cross Circle */}
          <circle cx="45" cy="35" r="12" fill="#059669"/>
          <rect x="42" y="29" width="6" height="12" fill="white"/>
          <rect x="39" y="32" width="12" height="6" fill="white"/>
          
          {/* Dynamic Swirling Elements */}
          <path d="M20 15 Q45 8 70 20" stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.7"/>
          <path d="M20 45 Q45 52 70 40" stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.7"/>
          
          {/* Additional Motion Effects */}
          <circle cx="12" cy="35" r="1" fill="#3B82F6" opacity="0.6"/>
          <circle cx="10" cy="38" r="0.8" fill="#3B82F6" opacity="0.4"/>
        </svg>
      </div>
      
      {/* Company Name */}
      <div className="flex flex-col">
        <span className="text-emerald-600 font-bold text-lg">DIONIS</span>
        <span className="text-slate-800 text-xs font-semibold">COMPANY MEDITECH SUPPLY</span>
      </div>
    </motion.div>
  );
};

export default Logo;
