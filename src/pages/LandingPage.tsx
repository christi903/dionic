import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Stethoscope, GraduationCap, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with merged images */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-green-900/90"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full bg-gradient-to-br from-transparent via-blue-500/20 to-green-500/20"></div>
        </div>
        {/* Medical equipment overlay */}
        <div 
          className="absolute left-0 top-0 h-full w-1/2 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
          }}
        ></div>
        {/* Graduation overlay */}
        <div 
          className="absolute right-0 top-0 h-full w-1/2 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.header 
          className="py-6 px-4 sm:px-6 lg:px-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-white">
              <h1 className="text-2xl sm:text-3xl font-bold">Dionic Company</h1>
              <p className="text-blue-200 text-sm">Excellence in Healthcare & Education</p>
            </div>
            <div className="hidden sm:flex items-center space-x-6 text-white text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+255 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@dioniccompany.com</span>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Hero Section */}
        <motion.main 
          className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Bridging Healthcare <span className="text-blue-400">&</span> Education
            </motion.h2>
            
            <motion.p 
              className="text-lg sm:text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Dionic Company proudly serves Tanzania through two specialized divisions: 
              providing world-class medical equipment and opening doors to global education opportunities.
            </motion.p>

            {/* Service Selection Cards */}
            <motion.div 
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              variants={itemVariants}
            >
              {/* Medical Supply Card */}
              <Link to="/medical-supply" className="group">
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:border-blue-400/50"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-center">
                    <div className="bg-blue-500/20 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                      <Stethoscope className="h-10 w-10 text-blue-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">MedioTech Supply</h3>
                    <p className="text-blue-100 mb-6 leading-relaxed">
                      Premium medical instruments, equipment, and supplies for healthcare facilities across Tanzania. 
                      Quality you can trust, service you can rely on.
                    </p>
                    <div className="flex items-center justify-center text-blue-300 group-hover:text-blue-200 transition-colors">
                      <span className="font-medium">Explore Medical Solutions</span>
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* Scholarship Card */}
              <Link to="/scholarships" className="group">
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:border-green-400/50"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-center">
                    <div className="bg-green-500/20 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                      <GraduationCap className="h-10 w-10 text-green-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Go Learn Global</h3>
                    <p className="text-green-100 mb-6 leading-relaxed">
                      Transform your future with international scholarship opportunities. 
                      We connect Tanzanian students with world-class universities globally.
                    </p>
                    <div className="flex items-center justify-center text-green-300 group-hover:text-green-200 transition-colors">
                      <span className="font-medium">Discover Scholarships</span>
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.main>

        {/* Footer */}
        <motion.footer 
          className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10"
          variants={itemVariants}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="text-white">
                <h3 className="font-semibold mb-2">Dionic Company</h3>
                <p className="text-blue-200 text-sm">Your trusted partner in healthcare and education excellence.</p>
              </div>
              <div className="text-white">
                <h3 className="font-semibold mb-2">Contact Information</h3>
                <div className="space-y-1 text-sm text-blue-200">
                  <div className="flex items-center justify-center md:justify-start">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Dar es Salaam, Tanzania</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>+255 123 456 789</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>info@dioniccompany.com</span>
                  </div>
                </div>
              </div>
              <div className="text-white">
                <h3 className="font-semibold mb-2">Our Mission</h3>
                <p className="text-blue-200 text-sm">Empowering Tanzania through quality healthcare solutions and global education opportunities.</p>
              </div>
            </div>
            <div className="border-t border-white/10 mt-6 pt-6 text-center">
              <p className="text-blue-300 text-sm">© 2024 Dionic Company. All rights reserved.</p>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default LandingPage;