import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen } from 'lucide-react';

interface SpecializationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
  specializations: string[];
  courseType?: 'diploma' | 'undergraduate' | 'graduate' | 'phd';
}

const SpecializationsModal: React.FC<SpecializationsModalProps> = ({
  isOpen,
  onClose,
  courseName,
  specializations,
  courseType = 'diploma'
}) => {
  // Color scheme based on course type
  const colors = (() => {
    switch(courseType) {
      case 'undergraduate':
        return {
          primary: 'blue',
          primary600: 'blue-600',
          primary700: 'blue-700',
          primary800: 'blue-800',
          primary50: 'blue-50',
          primary100: 'blue-100',
          primary200: 'blue-200',
          primary500: 'blue-500'
        };
      case 'graduate':
        return {
          primary: 'purple',
          primary600: 'purple-600',
          primary700: 'purple-700',
          primary800: 'purple-800',
          primary50: 'purple-50',
          primary100: 'purple-100',
          primary200: 'purple-200',
          primary500: 'purple-500'
        };
      case 'phd':
        return {
          primary: 'amber',
          primary600: 'amber-600',
          primary700: 'amber-700',
          primary800: 'amber-800',
          primary50: 'amber-50',
          primary100: 'amber-100',
          primary200: 'amber-200',
          primary500: 'amber-500'
        };
      case 'diploma':
      default:
        return {
          primary: 'green',
          primary600: 'green-600',
          primary700: 'green-700',
          primary800: 'green-800',
          primary50: 'green-50',
          primary100: 'green-100',
          primary200: 'green-200',
          primary500: 'green-500'
        };
    }
  })();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
              {/* Header */}
              <div className={`bg-gradient-to-r from-${colors.primary600} to-${colors.primary700} px-6 py-4 text-white`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <BookOpen className="h-6 w-6 mr-3" />
                    <h2 className="text-xl font-bold">Specializations</h2>
                  </div>
                  <button
                    onClick={onClose}
                    className={`p-2 hover:bg-${colors.primary800} rounded-full transition-colors duration-200`}
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <p className={`text-${colors.primary100} text-sm ml-9`}>{courseName}</p>
                  <button
                    onClick={onClose}
                    className={`text-${colors.primary100} hover:text-white text-sm font-medium flex items-center`}
                  >
                    <X className="h-4 w-4 mr-1" /> Back to Courses
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {specializations.map((specialization, index) => (
                    <motion.div
                      key={index}
                      className={`bg-gradient-to-r from-${colors.primary50} to-${colors.primary100} border border-${colors.primary200} rounded-lg p-4 hover:shadow-md transition-shadow duration-200`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <div className="flex items-center">
                        <div className={`w-3 h-3 bg-${colors.primary500} rounded-full mr-3 flex-shrink-0`}></div>
                        <span className="text-gray-800 font-medium text-sm">
                          {specialization}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Summary */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-center text-gray-600 text-sm">
                    <span className={`font-semibold text-${colors.primary600}`}>
                      {specializations.length}
                    </span>{' '}
                    specializations available in this program
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-6 py-4">
                <button
                  onClick={onClose}
                  className={`w-full bg-${colors.primary600} hover:bg-${colors.primary700} text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200`}
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SpecializationsModal;
