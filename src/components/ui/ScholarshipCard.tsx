
import { motion } from 'framer-motion';
import { MapPin, Calendar, DollarSign, CheckCircle } from 'lucide-react';

interface Scholarship {
  id: number;
  title: string;
  university: string;
  country: string;
  type: string;
  value: string;
  duration: string;
  deadline: string;
  image: string;
  description: string;
  requirements: string[];
}

interface ScholarshipCardProps {
  scholarship: Scholarship;
}

const ScholarshipCard: React.FC<ScholarshipCardProps> = ({ scholarship }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img 
          src={scholarship.image} 
          alt={scholarship.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{scholarship.title}</h3>
                 <p className="text-slate-600 font-medium mb-2">{scholarship.university}</p>
        
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{scholarship.country}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{scholarship.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center text-gray-600">
            <DollarSign className="h-4 w-4 mr-1" />
            <span>{scholarship.value}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{scholarship.duration}</span>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Requirements:</p>
          <div className="space-y-1">
            {scholarship.requirements.map((requirement, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-3 w-3 text-emerald-500 mr-2 flex-shrink-0" />
                <span>{requirement}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t">
          <p className="text-sm text-red-600 font-medium">
            Deadline: {scholarship.deadline}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ScholarshipCard;
