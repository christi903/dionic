import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, BookOpen } from 'lucide-react';
import { GraduateCourse } from '../../data/scholarships';
import SpecializationsModal from './SpecializationsModal';

interface GraduateCourseCardProps {
  course: GraduateCourse;
}

const GraduateCourseCard: React.FC<GraduateCourseCardProps> = ({ course }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewAllSpecializations = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SpecializationsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        courseName={course.name}
        specializations={course.specializations}
        courseType="graduate"
      />
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
          <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
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
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-2 text-purple-600" />
                <span className="text-sm font-medium text-gray-800">Specializations:</span>
              </div>
              <button
                onClick={handleViewAllSpecializations}
                className="text-purple-600 hover:text-purple-700 text-xs font-medium px-3 py-1 rounded-full border border-purple-200 hover:border-purple-300 transition-colors duration-200"
              >
                View All ({course.specializations.length})
              </button>
            </div>
            <div className="flex flex-wrap gap-1">
              {course.specializations.slice(0, 3).map((spec, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full"
                >
                  {spec}
                </span>
              ))}
              {course.specializations.length > 3 && (
                <button
                  onClick={handleViewAllSpecializations}
                  className="bg-purple-600 hover:bg-purple-700 text-white text-xs px-3 py-1 rounded-full transition-colors duration-200"
                >
                  +{course.specializations.length - 3} more
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default GraduateCourseCard;
