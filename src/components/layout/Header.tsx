
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowLeft } from 'lucide-react';
import Logo from '../ui/Logo';

interface HeaderProps {
  showBackButton?: boolean;
  backTo?: string;
  backText?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  showBackButton = false, 
  backTo = "/", 
  backText = "Back to Home" 
}) => {
  return (
    <motion.header 
      className="py-6 px-4 sm:px-6 lg:px-8"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {showBackButton && (
                         <Link 
               to={backTo} 
               className="flex items-center text-slate-600 hover:text-slate-700 transition-colors mr-4"
             >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="font-medium">{backText}</span>
            </Link>
          )}
          <div className="text-white">
            <Logo size="sm" className="text-white" />
          </div>
        </div>
        <div className="hidden sm:flex items-center space-x-6 text-white text-sm">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>+255693641585</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>Musadionis58@gmail.com</span>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
