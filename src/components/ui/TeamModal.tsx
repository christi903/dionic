import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  email?: string;
  phone?: string;
}

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TeamModal: React.FC<TeamModalProps> = ({ isOpen, onClose }) => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Mussa Dionis Karwani',
      role: 'Director',
      image: '/team/member1.jpg',
      email: 'musadionis58@gmail.com',
      phone: '+255 123 456 789',
    },
    {
      id: 2,
      name: 'Karim Zumo Makame',
      role: 'Chief Executive Officer',
      image: '/team/member2.jpg',
      email: 'karimzumomakame@gmail.com',
      phone: '+255 123 456 790',
    },
    {
      id: 3,
      name: 'Abdulrahim Yusuf',
      role: 'Chief Operations Officer',
      image: '/team/member3.jpg',
      email: 'abdulrahimyusuf34@gmail.com',
      phone: '+255 123 456 791',
    }
  ];

  // Using inline motion props to avoid strict Variants typing issues in framer-motion v12

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { type: 'spring', damping: 25, stiffness: 300 } }}
            exit={{ y: 20, opacity: 0 }}
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
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-blue-400 shadow-lg"
                      />
                    </div>

                    {/* Member Info */}
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-semibold">{member.role}</p>
                    </div>

                    {/* Contact Info */}
                    <div className="mb-4" />

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
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamModal;