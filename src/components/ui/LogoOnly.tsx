import { motion } from 'framer-motion';

interface LogoOnlyProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LogoOnly: React.FC<LogoOnlyProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <motion.div 
      className={`${sizeClasses[size]} relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src="/logo.jpg" 
        alt="Dionis Company Logo" 
        className="w-full h-full object-contain rounded-md"
      />
    </motion.div>
  );
};

export default LogoOnly;
