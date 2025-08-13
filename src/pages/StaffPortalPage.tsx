import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  GraduationCap, 
  School, 
  Users, 
  Eye, 
  X, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  BookOpen,
  MapPin,
  MessageSquare,
  UserCheck,
  Trash2,
  Edit3
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import Navigation from '../components/ui/Navigation';

interface Application {
  id: number;
  full_name: string;
  mobile: string | null;
  whatsapp: string | null;
  email: string | null;
  date_of_birth: string | null;
  interested_course: string | null;
  education_level_completed: string | null;
  school_name: string | null;
  subjects_name: string | null;
  passing_year: string | null;
  father_name: string | null;
  mother_name: string | null;
  parent_mobile: string | null;
  parent_whatsapp: string | null;
  parent_email: string | null;
  status: string;
  created_at: string;
}

const StaffPortalPage = () => {
  const { user, loading: authLoading, signIn, signOut } = useAuth();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [signingIn, setSigningIn] = useState(false);

  useEffect(() => {
    if (user) {
      fetchApplications();
    }
  }, [user]);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setApplications(data || []);
    } catch (error) {
      console.error('Error fetching applications:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setSigningIn(true);
    
    try {
      const { error } = await signIn(credentials.email, credentials.password);
      if (error) {
        alert(`Sign in failed: ${error.message}`);
      }
    } catch (error) {
      console.error('Sign in error:', error);
      alert('An unexpected error occurred during sign in');
    } finally {
      setSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setApplications([]);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const updateApplicationStatus = async (id: number, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('applications')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;
      
      // Update local state
      setApplications(prev => 
        prev.map(app => 
          app.id === id ? { ...app, status: newStatus } : app
        )
      );
      
      // Update selected application if it's the one being updated
      if (selectedApplication?.id === id) {
        setSelectedApplication(prev => prev ? { ...prev, status: newStatus } : null);
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status');
    }
  };

  const deleteApplication = async (id: number) => {
    if (!confirm('Are you sure you want to delete this application?')) return;
    
    try {
      const { error } = await supabase
        .from('applications')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setApplications(prev => prev.filter(app => app.id !== id));
      if (selectedApplication?.id === id) {
        setSelectedApplication(null);
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error('Error deleting application:', error);
      alert('Failed to delete application');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved': return 'text-green-600 bg-green-100';
      case 'rejected': return 'text-red-600 bg-red-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'under review': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved': return <CheckCircle className="h-4 w-4" />;
      case 'rejected': return <AlertCircle className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'under review': return <Eye className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center justify-center p-4">
        <motion.div
          className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserCheck className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Staff Portal</h1>
            <p className="text-gray-600">Sign in to access the application management system</p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={credentials.email}
                onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={signingIn}
              className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {signingIn ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Staff Portal</h1>
              <p className="text-gray-600 mt-1">Manage student applications and inquiries</p>
            </div>
            <button
              onClick={handleSignOut}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Applications List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Applications</h2>
            <p className="text-gray-600 text-sm mt-1">Total: {applications.length} applications</p>
          </div>

          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading applications...</p>
            </div>
          ) : applications.length === 0 ? (
            <div className="p-8 text-center">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No applications found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Interest</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applied</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applications.map((application) => (
                    <tr key={application.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mr-3">
                            <User className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{application.full_name}</div>
                            <div className="text-sm text-gray-500">ID: {application.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{application.email || 'N/A'}</div>
                        <div className="text-sm text-gray-500">{application.mobile || 'N/A'}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">
                          {application.interested_course || 'Not specified'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                          {getStatusIcon(application.status)}
                          <span className="ml-1 capitalize">{application.status}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(application.created_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <button
                          onClick={() => {
                            setSelectedApplication(application);
                            setIsModalOpen(true);
                          }}
                          className="text-blue-600 hover:text-blue-900 transition-colors duration-150"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => deleteApplication(application.id)}
                          className="text-red-600 hover:text-red-900 transition-colors duration-150"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Application Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedApplication && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-700 text-white px-8 py-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{selectedApplication.full_name}</h2>
                      <p className="text-blue-100 text-sm">Application ID: {selectedApplication.id}</p>
                      <p className="text-blue-100 text-sm">Submitted: {formatDate(selectedApplication.created_at)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedApplication.status)} bg-white/20 text-white border border-white/30`}>
                      {getStatusIcon(selectedApplication.status)}
                      <span className="ml-1 capitalize">{selectedApplication.status}</span>
                    </div>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 overflow-y-auto max-h-[calc(90vh-140px)]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Personal Information */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Personal Information</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Full Name</p>
                          <p className="text-gray-900 font-semibold">{selectedApplication.full_name}</p>
                        </div>
                      </div>
                      
                      {selectedApplication.date_of_birth && (
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Date of Birth</p>
                            <p className="text-gray-900">
                              {new Date(selectedApplication.date_of_birth).toLocaleDateString()} 
                              <span className="text-gray-600 ml-2">({calculateAge(selectedApplication.date_of_birth)} years old)</span>
                            </p>
                          </div>
                        </div>
                      )}
                      
                      {selectedApplication.email && (
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Email</p>
                            <p className="text-gray-900">{selectedApplication.email}</p>
                          </div>
                        </div>
                      )}
                      
                      {selectedApplication.mobile && (
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Mobile</p>
                            <p className="text-gray-900">{selectedApplication.mobile}</p>
                          </div>
                        </div>
                      )}
                      
                      {selectedApplication.whatsapp && (
                        <div className="flex items-center">
                          <MessageSquare className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">WhatsApp</p>
                            <p className="text-gray-900">{selectedApplication.whatsapp}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center mr-3">
                        <GraduationCap className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Academic Information</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {selectedApplication.interested_course && (
                        <div className="flex items-start">
                          <BookOpen className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Interested Course</p>
                            <p className="text-gray-900 leading-relaxed">{selectedApplication.interested_course}</p>
                          </div>
                        </div>
                      )}
                      
                      {selectedApplication.education_level_completed && (
                        <div className="flex items-center">
                          <GraduationCap className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Education Level Completed</p>
                            <p className="text-gray-900">{selectedApplication.education_level_completed}</p>
                          </div>
                        </div>
                      )}
                      
                      {selectedApplication.school_name && (
                        <div className="flex items-center">
                          <School className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">School/Institution</p>
                            <p className="text-gray-900">{selectedApplication.school_name}</p>
                          </div>
                        </div>
                      )}
                      
                      {selectedApplication.subjects_name && (
                        <div className="flex items-start">
                          <BookOpen className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Subjects/Course</p>
                            <p className="text-gray-900">{selectedApplication.subjects_name}</p>
                          </div>
                        </div>
                      )}
                      
                      {selectedApplication.passing_year && (
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Passing Year</p>
                            <p className="text-gray-900">{selectedApplication.passing_year}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Parent/Guardian Information */}
                  {(selectedApplication.father_name || selectedApplication.mother_name || selectedApplication.parent_email || selectedApplication.parent_mobile) && (
                    <div className="lg:col-span-2 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                      <div className="flex items-center mb-6">
                        <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                          <Users className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Parent/Guardian Information</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectedApplication.father_name && (
                          <div className="flex items-center">
                            <User className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-gray-700">Father's Name</p>
                              <p className="text-gray-900">{selectedApplication.father_name}</p>
                            </div>
                          </div>
                        )}
                        
                        {selectedApplication.mother_name && (
                          <div className="flex items-center">
                            <User className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-gray-700">Mother's Name</p>
                              <p className="text-gray-900">{selectedApplication.mother_name}</p>
                            </div>
                          </div>
                        )}
                        
                        {selectedApplication.parent_email && (
                          <div className="flex items-center">
                            <Mail className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-gray-700">Parent Email</p>
                              <p className="text-gray-900">{selectedApplication.parent_email}</p>
                            </div>
                          </div>
                        )}
                        
                        {selectedApplication.parent_mobile && (
                          <div className="flex items-center">
                            <Phone className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-gray-700">Parent Mobile</p>
                              <p className="text-gray-900">{selectedApplication.parent_mobile}</p>
                            </div>
                          </div>
                        )}
                        
                        {selectedApplication.parent_whatsapp && (
                          <div className="flex items-center">
                            <MessageSquare className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-gray-700">Parent WhatsApp</p>
                              <p className="text-gray-900">{selectedApplication.parent_whatsapp}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Status Update Section */}
                <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Edit3 className="h-5 w-5 mr-2" />
                    Update Application Status
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {['new', 'pending', 'under review', 'approved', 'rejected'].map((status) => (
                      <button
                        key={status}
                        onClick={() => updateApplicationStatus(selectedApplication.id, status)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                          selectedApplication.status === status
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                        }`}
                      >
                        {getStatusIcon(status)}
                        <span className="ml-2 capitalize">{status}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StaffPortalPage;