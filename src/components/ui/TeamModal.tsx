import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, Globe, Award, Users, BookOpen, GraduationCap, Heart } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  specializations: string[];
  image: string;
  email?: string;
  phone?: string;
  experience: string;
  icon: React.ReactNode;
}

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TeamModal: React.FC<TeamModalProps> = ({ isOpen, onClose }) => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Senior Education Counselor',
      bio: 'With over 10 years of experience in international education, Dr. Johnson specializes in helping students navigate complex admission processes.',
      specializations: ['University Admissions', 'Scholarship Applications', 'Academic Planning'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      email: 'sarah@golearnglobal.com',
      phone: '+255 123 456 789',
      experience: '10+ Years',
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Visa & Immigration Specialist',
      bio: 'Michael has successfully processed over 1000 student visas with a 98% success rate across multiple countries.',
      specializations: ['Visa Processing', 'Immigration Law', 'Document Preparation'],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      email: 'michael@golearnglobal.com',
      phone: '+255 123 456 790',
      experience: '8+ Years',
      icon: <Globe className="h-6 w-6" />
    },
    {
      id: 3,
      name: 'Priya Sharma',
      role: 'Scholarship Coordinator',
      bio: 'Priya has helped students secure over $2M in scholarships and financial aid from universities worldwide.',
      specializations: ['Scholarship Research', 'Financial Aid', 'Merit Applications'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      email: 'priya@golearnglobal.com',
      phone: '+255 123 456 791',
      experience: '7+ Years',
      icon: <Award className="h-6 w-6" />
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'Country Specialist - Europe & UK',
      bio: 'James specializes in European universities and has extensive knowledge of UK education systems and requirements.',
      specializations: ['European Universities', 'UK Education System', 'IELTS Preparation'],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      email: 'james@golearnglobal.com',
      phone: '+255 123 456 792',
      experience: '9+ Years',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      id: 5,
      name: 'Fatima Al-Rashid',
      role: 'Student Support Coordinator',
      bio: 'Fatima provides comprehensive pre-departure and post-arrival support, ensuring students feel confident and prepared.',
      specializations: ['Student Support', 'Cultural Orientation', 'Accommodation'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      email: 'fatima@golearnglobal.com',
      phone: '+255 123 456 793',
      experience: '6+ Years',
      icon: <Heart className="h-6 w-6" />
    },
    {
      id: 6,
      name: 'David Kim',
      role: 'Country Specialist - Asia & Australia',
      bio: 'David has deep expertise in Asian and Australian education systems, helping students explore opportunities in these regions.',
      specializations: ['Asian Universities', 'Australian Education', 'Cultural Adaptation'],
      image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      email: 'david@golearnglobal.com',
      phone: '+255 123 456 794',
      experience: '8+ Years',
      icon: <Users className="h-6 w-6" />
    }
  ];

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const contentVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        damping: 25, 
        stiffness: 300 
      }
    },
    exit: { scale: 0.8, opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            variants={contentVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600 text-white p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Meet Our Expert Team</h2>
                  <p className="text-blue-100">Dedicated professionals committed to your success</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Profile Image */}
                    <div className="relative mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-gradient-to-r from-blue-400 to-emerald-400"
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white p-2 rounded-full">
                        {member.icon}
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                      <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                        {member.experience}
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">{member.bio}</p>

                    {/* Specializations */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-emerald-700 mb-2">Specializations:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.specializations.map((spec, idx) => (
                          <span
                            key={idx}
                            className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2 text-sm">
                      {member.email && (
                        <div className="flex items-center text-gray-600">
                          <Mail className="h-4 w-4 mr-2 text-blue-500" />
                          <span>{member.email}</span>
                        </div>
                      )}
                      {member.phone && (
                        <div className="flex items-center text-gray-600">
                          <Phone className="h-4 w-4 mr-2 text-emerald-500" />
                          <span>{member.phone}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Team Stats */}
              <div className="mt-12 bg-gradient-to-r from-blue-50 via-amber-50 to-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600">
                  Our Team's Collective Impact
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                    <div className="text-gray-700 text-sm">Years Combined Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 mb-1">2000+</div>
                    <div className="text-gray-700 text-sm">Students Guided</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-amber-600 mb-1">98%</div>
                    <div className="text-gray-700 text-sm">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-1">30+</div>
                    <div className="text-gray-700 text-sm">Countries Covered</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamModal;