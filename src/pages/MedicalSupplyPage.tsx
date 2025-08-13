import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Activity, ShoppingCart, X, Send } from 'lucide-react';
import Header from '../components/layout/Header';
import ProductCard from '../components/ui/ProductCard';
import { products, categories } from '../data/products';
import { additionalProducts } from '../data/additionalProducts';
import { additionalMedicalSupplies, advancedMedicalEquipment } from '../data/remainingCategories';

const MedicalSupplyPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderText, setOrderText] = useState('');

  // Combine all products
  const allProducts = [...products, ...additionalProducts, ...additionalMedicalSupplies, ...advancedMedicalEquipment];

  // Medication-related background images
  const medicationImages = [
    'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1920&h=1080&q=80', // Pills and medications
    'https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=1920&h=1080&q=80', // Medical bottles and vials
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&h=1080&q=80', // Pharmacy and medication management
    'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?auto=format&fit=crop&w=1920&h=1080&q=80'  // Medical syringes and injections
  ];

  // Auto-rotate background images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % medicationImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [medicationImages.length]);

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
    ? allProducts 
    : allProducts.filter(product => product.category === activeCategory);

  const handleSendOrder = () => {
    if (!orderText.trim()) {
      alert('Please enter your medical equipment requirements.');
      return;
    }

    const message = `Hello! I would like to order the following medical equipment:\n\n${orderText}\n\nPlease provide pricing and availability information. Thank you!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+255752006879?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setOrderText('');
    setIsOrderModalOpen(false);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Header showBackButton={true} />
        </div>
      </header>

             {/* Hero Section with Dynamic Background */}
       <section className="relative text-white py-16 overflow-hidden">
        {/* Background Images Slideshow */}
        <div className="absolute inset-0">
          {medicationImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold mb-6 text-white drop-shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              MediTech Supply
            </motion.h1>
            <motion.p 
              className="text-xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-md"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Premium medical instruments, equipment, and supplies for healthcare facilities across Tanzania. 
              Quality you can trust, service you can rely on.
            </motion.p>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex space-x-2">
            {medicationImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                                 className={`px-6 py-2 rounded-full font-medium transition-colors ${
                   activeCategory === category.id
                     ? 'bg-slate-600 text-white'
                     : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                 }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive support to ensure your medical equipment operates at peak performance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg bg-gray-50"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                                 <div className="text-slate-600 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Order Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <motion.button
          onClick={() => setIsOrderModalOpen(true)}
          className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-slate-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title="Order Medical Equipment"
        >
          <ShoppingCart className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Order Modal */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <ShoppingCart className="h-6 w-6 mr-3" />
                  <h2 className="text-xl font-bold">Order Medical Equipment</h2>
                </div>
                <button
                  onClick={() => setIsOrderModalOpen(false)}
                  className="p-2 hover:bg-slate-800 rounded-full transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Please describe the medical equipment you need. Include quantities, specifications, and any other requirements.
              </p>
              
              <textarea
                value={orderText}
                onChange={(e) => setOrderText(e.target.value)}
                placeholder="Example: 
- 5x Digital Thermometers
- 2x Blood Pressure Monitors
- 10x Surgical Gloves (Size L)
- 1x Pulse Oximeter

Please include pricing and delivery information."
                className="w-full h-40 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 resize-none"
                rows={8}
              />
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setIsOrderModalOpen(false)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendOrder}
                  className="px-6 py-3 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white rounded-lg transition-all duration-200 flex items-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Order via WhatsApp</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default MedicalSupplyPage;