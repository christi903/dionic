import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen } from 'lucide-react';

type CourseType = 'diploma' | 'undergraduate' | 'graduate' | 'phd';

interface SpecializationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
  specializations: string[];
  courseType?: CourseType;
}

const colorThemes = {
  // Diploma (Green)
  'diploma': {
    header: 'from-green-600 to-green-700',
    closeBtn: 'hover:bg-green-800',
    courseName: 'text-green-100',
    backBtn: 'bg-green-700 hover:bg-green-800 text-white',
    itemBg: 'from-green-50 to-green-100 border-green-200',
    itemDot: 'bg-green-500',
    count: 'text-green-600',
    footerBtn: 'bg-green-600 hover:bg-green-700'
  },
  // Undergraduate (Blue)
  'undergraduate': {
    header: 'from-blue-600 to-blue-700',
    closeBtn: 'hover:bg-blue-800',
    courseName: 'text-blue-100',
    backBtn: 'bg-blue-700 hover:bg-blue-800 text-white',
    itemBg: 'from-blue-50 to-blue-100 border-blue-200',
    itemDot: 'bg-blue-500',
    count: 'text-blue-600',
    footerBtn: 'bg-blue-600 hover:bg-blue-700'
  },
  // Graduate (Purple)
  'graduate': {
    header: 'from-purple-600 to-purple-700',
    closeBtn: 'hover:bg-purple-800',
    courseName: 'text-purple-100',
    backBtn: 'bg-purple-700 hover:bg-purple-800 text-white',
    itemBg: 'from-purple-50 to-purple-100 border-purple-200',
    itemDot: 'bg-purple-500',
    count: 'text-purple-600',
    footerBtn: 'bg-purple-600 hover:bg-purple-700'
  },
  // PhD (Amber)
  'phd': {
    header: 'from-amber-600 to-amber-700',
    closeBtn: 'hover:bg-amber-800',
    courseName: 'text-amber-100',
    backBtn: 'bg-amber-700 hover:bg-amber-800 text-white',
    itemBg: 'from-amber-50 to-amber-100 border-amber-200',
    itemDot: 'bg-amber-500',
    count: 'text-amber-600',
    footerBtn: 'bg-amber-600 hover:bg-amber-700'
  }
};

const SpecializationsModal: React.FC<SpecializationsModalProps> = ({
  isOpen,
  onClose,
  courseName,
  specializations,
  courseType = 'diploma'
}) => {
  const colors = colorThemes[courseType] || colorThemes.diploma;

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
              <div className={`bg-gradient-to-r ${colors.header} px-6 py-4 text-white`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <BookOpen className="h-6 w-6 mr-3" />
                    <h2 className="text-xl font-bold">Specializations</h2>
                  </div>
                  <button
                    onClick={onClose}
                    className={`p-2 ${colors.closeBtn} rounded-full transition-colors duration-200`}
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <p className={`${colors.courseName} text-sm ml-9`}>{courseName}</p>
                  <button
                    onClick={onClose}
                    className={`${colors.backBtn} text-sm font-medium px-3 py-1.5 rounded-lg flex items-center transition-colors duration-200`}
                  >
                    <X className="h-3.5 w-3.5 mr-1.5" /> Back to Courses
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {specializations.map((specialization, index) => (
                    <motion.div
                      key={index}
                      className={`bg-gradient-to-r ${colors.itemBg} rounded-lg p-4 hover:shadow-md transition-shadow duration-200`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <div className="flex items-center">
                        <div className={`w-3 h-3 ${colors.itemDot} rounded-full mr-3 flex-shrink-0`}></div>
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
                    <span className={`font-semibold ${colors.count}`}>
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
                  className={`w-full ${colors.footerBtn} text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200`}
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
