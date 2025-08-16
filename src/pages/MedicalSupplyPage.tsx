import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Activity, ShoppingCart } from 'lucide-react';
import Header from '../components/layout/Header';
import ProductCard from '../components/ui/ProductCard';
import { products, categories } from '../data/products';
import { additionalProducts } from '../data/additionalProducts';
import { additionalMedicalSupplies, advancedMedicalEquipment } from '../data/remainingCategories';
import { useCart } from '../features/med-supply/hooks/useCart';
import QuantityModal from '../features/med-supply/components/QuantityModal';
import CartDrawer from '../features/med-supply/components/CartDrawer';
import SearchBar from '../features/med-supply/components/SearchBar';

const MedicalSupplyPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantityModal, setQuantityModal] = useState<{ open: boolean; productName: string; productId: number | null }>({ open: false, productName: '', productId: null });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { items, totalItems, addProduct, addCustom, updateQuantity, removeItem, toWhatsAppText } = useCart();
  const [search, setSearch] = useState('');

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

  const filteredProducts = (activeCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeCategory))
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()));

  const handleSendOrder = () => {
    const text = toWhatsAppText();
    if (!text) { alert('Your cart is empty. Add items first.'); return; }
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/+255693641585?text=${encoded}`;
    window.open(url, '_blank');
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

      {/* Search */}
      <SearchBar value={search} onChange={setSearch} />

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
              <ProductCard key={product.id} product={product} onAdd={(p) => setQuantityModal({ open: true, productName: p.name, productId: p.id })} />
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

      {/* Floating Cart Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <motion.button
          onClick={() => setDrawerOpen(true)}
          className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-slate-300 relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title="Order Medical Equipment"
        >
          <ShoppingCart className="w-6 h-6" />
          {totalItems > 0 && <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">{totalItems}</span>}
        </motion.button>
      </div>
      <QuantityModal
        isOpen={quantityModal.open}
        productName={quantityModal.productName}
        onClose={() => setQuantityModal({ open: false, productName: '', productId: null })}
        onConfirm={(q) => {
          const product = allProducts.find(p => p.id === quantityModal.productId);
          if (product) addProduct(product as any, q);
          setDrawerOpen(true);
        }}
      />

      <CartDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        items={items}
        onUpdateQty={updateQuantity}
        onRemove={removeItem}
        onAddCustom={addCustom}
        onSendWhatsApp={handleSendOrder}
      />
    </div>
  );
};

export default MedicalSupplyPage;