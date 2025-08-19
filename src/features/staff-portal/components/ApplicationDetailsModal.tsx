import React, { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Application } from '../types';
import { X, Edit3, User, GraduationCap, Users, CheckCircle, AlertCircle, Clock, Eye } from 'lucide-react';

interface ApplicationDetailsModalProps {
  isOpen: boolean;
  application: Application | null;
  onClose: () => void;
  onUpdateStatus: (id: number, status: string) => void;
}

const getStatusColor = (status: string) => {
  switch (status?.toLowerCase()) {
    case 'approved': return 'text-green-600 bg-green-100';
    case 'rejected': return 'text-red-600 bg-red-100';
    case 'pending': return 'text-yellow-600 bg-yellow-100';
    case 'under review': return 'text-blue-600 bg-blue-100';
    default: return 'text-gray-600 bg-gray-100';
  }
};

const getStatusIcon = (status: string) => {
  switch (status?.toLowerCase()) {
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

const ApplicationDetailsModal: React.FC<ApplicationDetailsModalProps> = ({ isOpen, application, onClose, onUpdateStatus }) => {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (!printRef.current) return;
    const printContents = printRef.current.innerHTML;
    const win = window.open('', '', 'height=900,width=800');
    if (!win) return;
    win.document.write('<html><head><title>Application Details</title>');
    win.document.write('<style>body{font-family: ui-sans-serif,system-ui; padding:24px;} .grid{display:grid; gap:12px;} .section{border:1px solid #e5e7eb; border-radius:12px; padding:16px; margin-bottom:16px;} .header{background:#111827; color:white; padding:16px; border-radius:12px;} h1{margin:0; font-size:20px;} h2{margin:8px 0; font-size:16px;} .row{display:flex; gap:12px;} .label{color:#4b5563; font-size:12px;} .value{font-weight:600;}</style>');
    win.document.write('</head><body>');
    win.document.write(printContents);
    win.document.write('</body></html>');
    win.document.close();
    win.focus();
    win.print();
    win.close();
  };

  return (
    <AnimatePresence>
      {isOpen && application && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-700 text-white px-6 py-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{application.full_name}</div>
                    <div className="text-xs text-blue-100">Application #{application.id} • {formatDate(application.created_at)}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(application.status)} bg-white/20 text-white border border-white/30 flex items-center gap-1`}>
                    {getStatusIcon(application.status)}
                    <span className="capitalize">{application.status}</span>
                  </div>
                  <button onClick={handlePrint} className="px-3 py-1.5 rounded-lg bg-white/90 text-gray-900 text-sm font-medium hover:bg-white">Print PDF</button>
                  <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg"><X className="h-5 w-5" /></button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Personal */}
                <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-5">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-600">Full Name</p>
                      <p className="font-semibold text-gray-900">{application.full_name}</p>
                    </div>
                    {application.date_of_birth && (
                      <div>
                        <p className="text-xs text-gray-600">Date of Birth</p>
                        <p className="font-semibold text-gray-900">{new Date(application.date_of_birth).toLocaleDateString()} ({calculateAge(application.date_of_birth)} years)</p>
                      </div>
                    )}
                    {application.email && (
                      <div>
                        <p className="text-xs text-gray-600">Email</p>
                        <p className="font-semibold text-gray-900">{application.email}</p>
                      </div>
                    )}
                    {application.mobile && (
                      <div>
                        <p className="text-xs text-gray-600">Mobile</p>
                        <p className="font-semibold text-gray-900">{application.mobile}</p>
                      </div>
                    )}
                    {application.whatsapp && (
                      <div>
                        <p className="text-xs text-gray-600">WhatsApp</p>
                        <p className="font-semibold text-gray-900">{application.whatsapp}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Academic */}
                <div className="rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100 p-5">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center mr-3">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Academic Information</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {application.interested_course && (
                      <div className="md:col-span-2">
                        <p className="text-xs text-gray-600">Interested Course</p>
                        <p className="font-semibold text-gray-900">{application.interested_course}</p>
                      </div>
                    )}
                    {application.education_level_completed && (
                      <div>
                        <p className="text-xs text-gray-600">Education Level Completed</p>
                        <p className="font-semibold text-gray-900">{application.education_level_completed}</p>
                      </div>
                    )}
                    {application.school_name && (
                      <div>
                        <p className="text-xs text-gray-600">School/Institution</p>
                        <p className="font-semibold text-gray-900">{application.school_name}</p>
                      </div>
                    )}
                    {application.subjects_name && (
                      <div className="md:col-span-2">
                        <p className="text-xs text-gray-600">Subjects/Course</p>
                        <p className="font-semibold text-gray-900">{application.subjects_name}</p>
                      </div>
                    )}
                    {application.passing_year && (
                      <div>
                        <p className="text-xs text-gray-600">Passing Year</p>
                        <p className="font-semibold text-gray-900">{application.passing_year}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Parent/Guardian */}
                {(application.father_name || application.mother_name || application.parent_email || application.parent_mobile || application.parent_whatsapp) && (
                  <div className="lg:col-span-2 rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100 p-5">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Parent/Guardian Information</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {application.father_name && (
                        <div>
                          <p className="text-xs text-gray-600">Father's Name</p>
                          <p className="font-semibold text-gray-900">{application.father_name}</p>
                        </div>
                      )}
                      {application.mother_name && (
                        <div>
                          <p className="text-xs text-gray-600">Mother's Name</p>
                          <p className="font-semibold text-gray-900">{application.mother_name}</p>
                        </div>
                      )}
                      {application.parent_email && (
                        <div>
                          <p className="text-xs text-gray-600">Parent Email</p>
                          <p className="font-semibold text-gray-900">{application.parent_email}</p>
                        </div>
                      )}
                      {application.parent_mobile && (
                        <div>
                          <p className="text-xs text-gray-600">Parent Mobile</p>
                          <p className="font-semibold text-gray-900">{application.parent_mobile}</p>
                        </div>
                      )}
                      {application.parent_whatsapp && (
                        <div>
                          <p className="text-xs text-gray-600">Parent WhatsApp</p>
                          <p className="font-semibold text-gray-900">{application.parent_whatsapp}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Status update */}
              <div className="mt-6 bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Edit3 className="h-5 w-5 mr-2" />
                  Update Application Status
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['new', 'pending', 'under review', 'approved', 'rejected'].map((status) => (
                    <button
                      key={status}
                      onClick={() => onUpdateStatus(application.id, status)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        application.status === status
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

              {/* Print template (hidden) */}
              <div className="hidden" ref={printRef}>
                <div className="header">
                  <h1>Application Details</h1>
                  <div>#{application.id} • {formatDate(application.created_at)}</div>
                </div>
                <div className="section">
                  <h2>Personal Information</h2>
                  <div className="grid">
                    <div className="row"><div className="label">Full Name</div><div className="value">{application.full_name}</div></div>
                    {application.date_of_birth && <div className="row"><div className="label">Date of Birth</div><div className="value">{new Date(application.date_of_birth).toLocaleDateString()} ({calculateAge(application.date_of_birth)} years)</div></div>}
                    {application.email && <div className="row"><div className="label">Email</div><div className="value">{application.email}</div></div>}
                    {application.mobile && <div className="row"><div className="label">Mobile</div><div className="value">{application.mobile}</div></div>}
                    {application.whatsapp && <div className="row"><div className="label">WhatsApp</div><div className="value">{application.whatsapp}</div></div>}
                  </div>
                </div>
                <div className="section">
                  <h2>Academic Information</h2>
                  <div className="grid">
                    {application.interested_course && <div className="row"><div className="label">Interested Course</div><div className="value">{application.interested_course}</div></div>}
                    {application.education_level_completed && <div className="row"><div className="label">Education Level Completed</div><div className="value">{application.education_level_completed}</div></div>}
                    {application.school_name && <div className="row"><div className="label">School/Institution</div><div className="value">{application.school_name}</div></div>}
                    {application.subjects_name && <div className="row"><div className="label">Subjects/Course</div><div className="value">{application.subjects_name}</div></div>}
                    {application.passing_year && <div className="row"><div className="label">Passing Year</div><div className="value">{application.passing_year}</div></div>}
                  </div>
                </div>
                {(application.father_name || application.mother_name || application.parent_email || application.parent_mobile || application.parent_whatsapp) && (
                  <div className="section">
                    <h2>Parent/Guardian Information</h2>
                    <div className="grid">
                      {application.father_name && <div className="row"><div className="label">Father's Name</div><div className="value">{application.father_name}</div></div>}
                      {application.mother_name && <div className="row"><div className="label">Mother's Name</div><div className="value">{application.mother_name}</div></div>}
                      {application.parent_email && <div className="row"><div className="label">Parent Email</div><div className="value">{application.parent_email}</div></div>}
                      {application.parent_mobile && <div className="row"><div className="label">Parent Mobile</div><div className="value">{application.parent_mobile}</div></div>}
                      {application.parent_whatsapp && <div className="row"><div className="label">Parent WhatsApp</div><div className="value">{application.parent_whatsapp}</div></div>}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ApplicationDetailsModal;


