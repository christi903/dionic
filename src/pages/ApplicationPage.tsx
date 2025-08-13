import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { motion } from 'framer-motion';
import { Send, User, GraduationCap, Users, BookOpen, Globe } from 'lucide-react';
import Navigation from '../components/ui/Navigation';
import GoLearnLogo from '../components/ui/GoLearnLogo';

const ApplicationPage = () => {
  const [formData, setFormData] = useState({
    // Student Details
    serialNumber: '',
    fullName: '',
    mobile: '',
    whatsapp: '',
    email: '',
    dateOfBirth: '',
    interestedCourse: '',
    
    // Academic Details
    educationLevelCompleted: '',
    schoolName: '',
    subjectsName: '',
    passingYear: '',
    
    // Parent/Guardian Details
    fatherName: '',
    motherName: '',
    parentMobile: '',
    parentWhatsapp: '',
    parentEmail: ''
  });

  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const payload = {
      serial_number: formData.serialNumber || null,
      full_name: formData.fullName,
      mobile: formData.mobile || null,
      whatsapp: formData.whatsapp || null,
      email: formData.email || null,
      date_of_birth: formData.dateOfBirth ? new Date(formData.dateOfBirth).toISOString().slice(0, 10) : null,
      interested_course: formData.interestedCourse || null,
      school_name: formData.schoolName || null,
      subjects_name: formData.subjectsName || null,
      passing_year: formData.passingYear || null,
      education_level_completed: formData.educationLevelCompleted || null,
      father_name: formData.fatherName || null,
      mother_name: formData.motherName || null,
      parent_mobile: formData.parentMobile || null,
      parent_whatsapp: formData.parentWhatsapp || null,
      parent_email: formData.parentEmail || null,
    };

    const { error } = await supabase.from('applications').insert([payload]);

    if (error) {
      alert(`Failed to submit application: ${error.message}`);
    } else {
      alert('Application submitted successfully! We will contact you soon.');
      setFormData({
        serialNumber: '',
        fullName: '',
        mobile: '',
        whatsapp: '',
        email: '',
        dateOfBirth: '',
        interestedCourse: '',
        educationLevelCompleted: '',
        schoolName: '',
        subjectsName: '',
        passingYear: '',
        fatherName: '',
        motherName: '',
        parentMobile: '',
        parentWhatsapp: '',
        parentEmail: ''
      });
    }

    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-emerald-50">
      <Navigation />
      
      {/* Enhanced Header Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-800 text-white py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Centered and Larger Logo */}
            <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
              <GoLearnLogo size="lg" className="text-white drop-shadow-lg" />
            </div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-emerald-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Student Application Form
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              From Home to Horizon - <span className="text-emerald-200 font-semibold">Go Learn Global</span>
            </motion.p>
            
            {/* Decorative Icons */}
            <motion.div 
              className="flex items-center justify-center space-x-8 mt-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center space-x-2 text-blue-200">
                <BookOpen className="h-6 w-6" />
                <span className="text-sm font-medium">Academic Excellence</span>
              </div>
              <div className="w-px h-8 bg-blue-300"></div>
              <div className="flex items-center space-x-2 text-emerald-200">
                <Globe className="h-6 w-6" />
                <span className="text-sm font-medium">Global Opportunities</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Application Form */}
      <section className="py-16 -mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Enhanced Form Header */}
            <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 text-white py-8 px-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-2">INQUIRY FORM</h2>
                <p className="text-purple-100 text-lg">Start Your Global Education Journey Today</p>
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-12 translate-y-12"></div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-10">
              {/* Serial Number - Enhanced Styling */}
              <div className="flex justify-end">
                <div className="w-48">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Sr. No:
                  </label>
                  <input
                    type="text"
                    name="serialNumber"
                    value={formData.serialNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                    placeholder="Enter serial number"
                  />
                </div>
              </div>

              {/* Student Details Section - Enhanced */}
              <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Student Details</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name: <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mobile: <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-300"
                      placeholder="Enter mobile number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      WhatsApp:
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-300"
                      placeholder="Enter WhatsApp number"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email: <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date of Birth: <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-300"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Interested Course:
                    </label>
                    <textarea
                      name="interestedCourse"
                      value={formData.interestedCourse}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-300 resize-none"
                      placeholder="Describe the course you're interested in..."
                    />
                  </div>
                </div>
              </div>

              {/* Academic Details Section - Enhanced */}
              <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6 border border-emerald-100">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Academic Details</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Education level completed:
                    </label>
                    <input
                      type="text"
                      name="educationLevelCompleted"
                      value={formData.educationLevelCompleted}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-300"
                      placeholder="e.g., O'Level, A'Level, Diploma, Bachelor's"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      School/College/University Name: <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-300"
                      placeholder="Enter your school/college/university name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subjects/Combination/Course Taken:
                    </label>
                    <input
                      type="text"
                      name="subjectsName"
                      value={formData.subjectsName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-300"
                      placeholder="Enter subjects/combination/course"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Passing Year:
                    </label>
                    <input
                      type="text"
                      name="passingYear"
                      value={formData.passingYear}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-300"
                      placeholder="Enter passing year"
                    />
                  </div>
                </div>
              </div>

              {/* Parent/Guardian Details Section - Enhanced */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Parent/Guardian Details (Optional)</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Father's Name:
                    </label>
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-300"
                      placeholder="Enter father's name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mother's Name:
                    </label>
                    <input
                      type="text"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-300"
                      placeholder="Enter mother's name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mobile:
                    </label>
                    <input
                      type="tel"
                      name="parentMobile"
                      value={formData.parentMobile}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-300"
                      placeholder="Enter parent's mobile"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      WhatsApp:
                    </label>
                    <input
                      type="tel"
                      name="parentWhatsapp"
                      value={formData.parentWhatsapp}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-300"
                      placeholder="Enter parent's WhatsApp"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email:
                    </label>
                    <input
                      type="email"
                      name="parentEmail"
                      value={formData.parentEmail}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-300"
                      placeholder="Enter parent's email"
                    />
                  </div>
                </div>
              </div>

              {/* Enhanced Submit Button */}
              <div className="flex justify-center pt-8">
                <motion.button
                  type="submit"
                  disabled={submitting}
                  className="bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:via-emerald-700 hover:to-blue-800 transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  whileHover={{ scale: submitting ? 1 : 1.02 }}
                  whileTap={{ scale: submitting ? 1 : 0.98 }}
                >
                  <Send className="h-6 w-6" />
                  <span>{submitting ? 'Submitting...' : 'Submit Application'}</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationPage;