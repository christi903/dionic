import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Stethoscope, Heart, Activity, Shield, Phone, Mail, Star, CheckCircle } from 'lucide-react';

const MedicalSupplyPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Digital Stethoscope',
      category: 'diagnostic',
      price: 'TSh 850,000',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      description: 'Advanced digital stethoscope with noise cancellation and recording capabilities.',
      features: ['Bluetooth connectivity', 'Noise reduction', 'Audio recording']
    },
    {
      id: 2,
      name: 'Blood Pressure Monitor',
      category: 'diagnostic',
      price: 'TSh 180,000',
      image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      description: 'Accurate digital blood pressure monitor with large LCD display.',
      features: ['Digital display', 'Memory storage', 'Irregular heartbeat detection']
    },
    {
      id: 3,
      name: 'Surgical Instruments Set',
      category: 'surgical',
      price: 'TSh 1,200,000',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      description: 'Complete surgical instrument set made from high-grade stainless steel.',
      features: ['Stainless steel', 'Autoclave safe', 'Complete set']
    },
    {
      id: 4,
      name: 'Patient Monitor',
      category: 'monitoring',
      price: 'TSh 3,500,000',
      image: 'https://images.pexels.com/photos/8376205/pexels-photo-8376205.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      description: 'Multi-parameter patient monitor with ECG, SpO2, and blood pressure.',
      features: ['Multi-parameter', 'Alarm system', 'Data storage']
    },
    {
      id: 5,
      name: 'Ultrasound Machine',
      category: 'imaging',
      price: 'TSh 8,500,000',
      image: 'https://images.pexels.com/photos/8376334/pexels-photo-8376334.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      description: 'Portable ultrasound machine with high-resolution imaging capabilities.',
      features: ['High resolution', 'Portable design', 'Multiple probes']
    },
    {
      id: 6,
      name: 'Defibrillator',
      category: 'emergency',
      price: 'TSh 4,200,000',
      image: 'https://images.pexels.com/photos/8376205/pexels-photo-8376205.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      description: 'Automated external defibrillator with voice prompts and LCD display.',
      features: ['Voice prompts', 'LCD display', 'Automatic analysis']
    }
  ];

  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Quality Assurance',
      description: 'All our medical equipment meets international quality standards and certifications.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Expert Support',
      description: '24/7 technical support and maintenance services for all equipment.'
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: 'Training & Installation',
      description: 'Complete installation and staff training for optimal equipment utilization.'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">MedioTech Supply</span>
            </div>
            <div className="hidden sm:flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span>+255 123 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                <span>mediotech@dioniccompany.com</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Premium Medical Equipment
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Equipping Tanzania's healthcare facilities with world-class medical instruments 
              and equipment for better patient care and medical outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-blue-200">
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-2" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>FDA Approved</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>2 Year Warranty</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MedioTech Supply?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are committed to providing the highest quality medical equipment with comprehensive support services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Explore our comprehensive selection of medical equipment and instruments.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {['all', 'diagnostic', 'surgical', 'monitoring', 'imaging', 'emergency'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Inquire
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Ready to Equip Your Healthcare Facility?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact our medical equipment specialists for personalized consultations and quotes.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-blue-800 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-blue-200">+255 123 456 789</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-800 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-blue-200">mediotech@dioniccompany.com</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-800 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-blue-200">Dar es Salaam, Tanzania</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Stethoscope className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-2xl font-bold">MedioTech Supply</span>
            </div>
            <p className="text-gray-400 mb-4">
              Part of Dionic Company - Your trusted partner in healthcare excellence
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Dionic Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MedicalSupplyPage;