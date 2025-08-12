
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="text-white">
            <h3 className="font-semibold mb-2">Dionis Company MediTech Supply</h3>
                         <p className="text-slate-200 text-sm">Your trusted partner in healthcare and education excellence.</p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold mb-2">Contact Information</h3>
                         <div className="space-y-1 text-sm text-slate-200">
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Dar es Salaam, Tanzania</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="h-4 w-4 mr-2" />
                <span>+255752006879</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="h-4 w-4 mr-2" />
                <span>musadionis58@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="text-white">
            <h3 className="font-semibold mb-2">Our Mission</h3>
                         <p className="text-slate-200 text-sm">Empowering Tanzania through quality healthcare solutions and global education opportunities.</p>
          </div>
        </div>
        <div className="border-t border-white/10 mt-6 pt-6 text-center">
                     <p className="text-slate-300 text-sm">© 2025 Dionis Company MediTech Supply. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
