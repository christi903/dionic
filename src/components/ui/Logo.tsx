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
      {/* Logo Image */}
      <div className={`${sizeClasses[size]} relative mr-3`}>
        <img 
          src="/logo.jpg" 
          alt="Dionis Company Logo" 
          className="w-full h-full object-contain rounded-md"
        />
      </div>
      
      {/* Company Name */}
      <div className="flex flex-col">
        <span className="text-emerald-600 font-bold text-lg">DIONIS</span>
        <span className="text-[#161f6d] text-xs font-semibold">COMPANY MEDITECH SUPPLY</span>
      </div>
    </motion.div>
  );
};

export default Logo;
