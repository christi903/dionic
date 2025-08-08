import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, BookOpen } from 'lucide-react';
import { DiplomaCourse } from '../../data/scholarships';

interface DiplomaCourseCardProps {
  course: DiplomaCourse;
}

const DiplomaCourseCard: React.FC<DiplomaCourseCardProps> = ({ course }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {course.duration}
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Course Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.name}</h3>
        
        {/* University and Country */}
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{course.university}, {course.country}</span>
        </div>

        {/* Duration */}
        <div className="flex items-center text-gray-600 mb-3">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm">Duration: {course.duration}</span>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{course.description}</p>

        {/* Specializations */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <BookOpen className="h-4 w-4 mr-2 text-green-600" />
            <span className="text-sm font-medium text-gray-800">Specializations:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {course.specializations.slice(0, 3).map((spec, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
              >
                {spec}
              </span>
            ))}
            {course.specializations.length > 3 && (
              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                +{course.specializations.length - 3} more
              </span>
            )}
          </div>
        </div>


      </div>
    </motion.div>
  );
};

export default DiplomaCourseCard;
