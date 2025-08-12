
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-64 bg-gray-200 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="space-y-2">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
                             <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
