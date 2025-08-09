import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, User, Eye, EyeOff, Mail, ArrowLeft, UserPlus, AlertCircle, CheckCircle } from 'lucide-react';
import Navigation from '../components/ui/Navigation';
import GoLearnLogo from '../components/ui/GoLearnLogo';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { User as SupabaseUser } from '@supabase/supabase-js';

type AuthMode = 'login' | 'register' | 'forgot-password';

const StaffPortalPage = () => {
  const [authMode, setAuthMode] = useState<AuthMode>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    role: 'staff'
  });

  const { signUp, signIn, resetPassword, user, signOut } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear message when user starts typing
    if (message) setMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      if (authMode === 'login') {
        const { error } = await signIn(formData.email, formData.password);
        if (error) {
          setMessage({ type: 'error', text: error.message });
        } else {
          setMessage({ type: 'success', text: 'Login successful! Welcome to the staff portal.' });
        }
      } else if (authMode === 'register') {
        if (formData.password !== formData.confirmPassword) {
          setMessage({ type: 'error', text: 'Passwords do not match.' });
          setLoading(false);
          return;
        }
        
        const { error } = await signUp(formData.email, formData.password, {
          full_name: formData.fullName,
          role: formData.role
        });
        
        if (error) {
          setMessage({ type: 'error', text: error.message });
        } else {
          setMessage({ 
            type: 'success', 
            text: 'Registration successful! Please check your email to verify your account.' 
          });
          setAuthMode('login');
        }
      } else if (authMode === 'forgot-password') {
        const { error } = await resetPassword(formData.email);
        if (error) {
          setMessage({ type: 'error', text: error.message });
        } else {
          setMessage({ 
            type: 'success', 
            text: 'Password reset email sent! Please check your inbox.' 
          });
        }
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      role: 'staff'
    });
    setMessage(null);
  };

  const switchMode = (mode: AuthMode) => {
    setAuthMode(mode);
    resetForm();
  };

  // If user is logged in, show dashboard
  if (user) {
    return <StaffDashboard user={user} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
        <motion.div
          className="max-w-md w-full mx-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <GoLearnLogo size="md" className="mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900">
                {authMode === 'login' && 'Staff Portal'}
                {authMode === 'register' && 'Create Staff Account'}
                {authMode === 'forgot-password' && 'Reset Password'}
              </h2>
              <p className="text-gray-600 mt-2">
                {authMode === 'login' && 'Access your staff dashboard'}
                {authMode === 'register' && 'Register as a new staff member'}
                {authMode === 'forgot-password' && 'Enter your email to reset password'}
              </p>
            </div>

            {/* Message Display */}
            <AnimatePresence>
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mb-6 p-4 rounded-lg flex items-center space-x-2 ${
                    message.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {message.type === 'success' ? (
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  )}
                  <span className="text-sm">{message.text}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Auth Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name (Register only) */}
              {authMode === 'register' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password (Login and Register) */}
              {authMode !== 'forgot-password' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              )}

              {/* Confirm Password (Register only) */}
              {authMode === 'register' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              )}

              {/* Role Selection (Register only) */}
              {authMode === 'register' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Role
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="staff">Staff Member</option>
                    <option value="admin">Administrator</option>
                    <option value="counselor">Counselor</option>
                  </select>
                </div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  <>
                    {authMode === 'login' && 'Sign In'}
                    {authMode === 'register' && 'Create Account'}
                    {authMode === 'forgot-password' && 'Send Reset Email'}
                  </>
                )}
              </motion.button>
            </form>

            {/* Mode Switching */}
            <div className="mt-6 space-y-3">
              {authMode === 'login' && (
                <>
                  <div className="text-center">
                    <button
                      onClick={() => switchMode('forgot-password')}
                      className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      Forgot your password?
                    </button>
                  </div>
                  <div className="text-center">
                    <span className="text-sm text-gray-600">Don't have an account? </span>
                    <button
                      onClick={() => switchMode('register')}
                      className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      Register here
                    </button>
                  </div>
                </>
              )}

              {authMode === 'register' && (
                <div className="text-center">
                  <span className="text-sm text-gray-600">Already have an account? </span>
                  <button
                    onClick={() => switchMode('login')}
                    className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Sign in here
                  </button>
                </div>
              )}

              {authMode === 'forgot-password' && (
                <div className="text-center">
                  <button
                    onClick={() => switchMode('login')}
                    className="text-sm text-emerald-600 hover:text-emerald-700 font-medium flex items-center justify-center space-x-1"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to Sign In</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StaffPortalPage;

// Separate component to keep hooks order consistent
function StaffDashboard({ user }: { user: SupabaseUser }) {
  const { signOut } = useAuth();
  type ApplicationRow = {
    id: number;
    serial_number: string | null;
    full_name: string;
    mobile: string | null;
    whatsapp: string | null;
    email: string | null;
    date_of_birth: string | null;
    interested_course: string | null;
    school_name: string | null;
    subjects_name: string | null;
    passing_year: string | null;
    subjects_appeared: string | null;
    father_name: string | null;
    mother_name: string | null;
    parent_mobile: string | null;
    parent_whatsapp: string | null;
    parent_email: string | null;
    status: 'new' | 'in_review' | 'accepted' | 'rejected';
    created_at: string;
  };

  const [applications, setApplications] = useState<ApplicationRow[]>([]);
  const [appsLoading, setAppsLoading] = useState(true);
  const [appsError, setAppsError] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'in_review' | 'accepted' | 'rejected'>('all');
  const [courseFilter, setCourseFilter] = useState<'all' | string>('all');
  const [selectedApp, setSelectedApp] = useState<ApplicationRow | null>(null);

  useEffect(() => {
    const loadApplications = async () => {
      setAppsLoading(true);
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) setAppsError(error.message);
      else {
        setApplications(data || []);
        setAppsError(null);
      }
      setAppsLoading(false);
    };
    loadApplications();

    const channel = supabase
      .channel('applications-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'applications' }, loadApplications)
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const updateStatus = async (id: number, status: 'new' | 'in_review' | 'accepted' | 'rejected') => {
    const { error } = await supabase.from('applications').update({ status }).eq('id', id);
    if (error) alert(`Failed to update status: ${error.message}`);
    else {
      setApplications(prev => prev.map(a => (a.id === id ? { ...a, status } : a)));
      if (selectedApp && selectedApp.id === id) setSelectedApp({ ...selectedApp, status });
    }
  };

  const deleteApplication = async (id: number) => {
    if (!confirm('Delete this application?')) return;
    const { error } = await supabase.from('applications').delete().eq('id', id);
    if (error) alert(`Failed to delete: ${error.message}`);
  };

  const courses = useMemo(() => {
    const set = new Set<string>();
    applications.forEach(a => { if (a.interested_course) set.add(a.interested_course); });
    return Array.from(set).sort();
  }, [applications]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return applications.filter(a => {
      const matchesQuery = q.length === 0
        ? true
        : [a.full_name, a.email ?? '', a.mobile ?? '', a.interested_course ?? '']
            .some(v => v.toLowerCase().includes(q));
      const matchesStatus = statusFilter === 'all' ? true : a.status === statusFilter;
      const matchesCourse = courseFilter === 'all' ? true : a.interested_course === courseFilter;
      return matchesQuery && matchesStatus && matchesCourse;
    });
  }, [applications, query, statusFilter, courseFilter]);

  const counts = useMemo(() => {
    const total = applications.length;
    const by = (s: ApplicationRow['status']) => applications.filter(a => a.status === s).length;
    return { total, new: by('new'), review: by('in_review'), accepted: by('accepted'), rejected: by('rejected') };
  }, [applications]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <GoLearnLogo size="md" className="mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900">Staff Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome, {user.user_metadata?.full_name || user.email}</p>
          </div>

          {/* Summary cards */}
          <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white p-6 rounded-lg shadow">
              <div className="text-sm opacity-90">Total</div>
              <div className="text-3xl font-bold mt-1">{counts.total}</div>
            </div>
            <div className="bg-white border p-6 rounded-lg">
              <div className="text-sm text-gray-600">New</div>
              <div className="text-3xl font-bold mt-1">{counts.new}</div>
            </div>
            <div className="bg-white border p-6 rounded-lg">
              <div className="text-sm text-gray-600">In Review</div>
              <div className="text-3xl font-bold mt-1">{counts.review}</div>
            </div>
            <div className="bg-white border p-6 rounded-lg">
              <div className="text-sm text-gray-600">Accepted</div>
              <div className="text-3xl font-bold mt-1">{counts.accepted}</div>
            </div>
          </section>

          {/* Filters */}
          <section className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="flex items-center gap-2 md:col-span-1">
              <svg className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 21l-4.3-4.3"/><circle cx="10" cy="10" r="7"/></svg>
              <input
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Search name, email, course..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div>
              <select
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
              >
                <option value="all">All statuses</option>
                <option value="new">New</option>
                <option value="in_review">In Review</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <div>
              <select
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={courseFilter}
                onChange={(e) => setCourseFilter(e.target.value as any)}
              >
                <option value="all">All courses</option>
                {courses.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </section>

          {/* Applications Table */}
          <section className="mt-6">
            <div className="border rounded-lg overflow-hidden">
              <div className="border-b p-4">
                <h2 className="text-lg font-semibold">Applications</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-gray-50 text-left">
                    <tr>
                      <th className="px-4 py-2">Sr</th>
                      <th className="px-4 py-2">Name</th>
                      <th className="px-4 py-2">Course</th>
                      <th className="px-4 py-2">School</th>
                      <th className="px-4 py-2">Passing</th>
                      <th className="px-4 py-2">Status</th>
                      <th className="px-4 py-2">Submitted</th>
                      <th className="px-4 py-2 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appsLoading && (
                      <tr><td className="px-4 py-6 text-gray-600" colSpan={8}>Loading applications...</td></tr>
                    )}
                    {appsError && !appsLoading && (
                      <tr><td className="px-4 py-6 text-red-600" colSpan={8}>{appsError}</td></tr>
                    )}
                    {!appsLoading && filtered.length === 0 && !appsError && (
                      <tr><td className="px-4 py-6 text-gray-600" colSpan={8}>No applications found.</td></tr>
                    )}
                    {filtered.map(app => (
                      <tr key={app.id} className="border-t hover:bg-gray-50">
                        <td className="px-4 py-2">{app.serial_number || '—'}</td>
                        <td className="px-4 py-2 font-medium">{app.full_name}</td>
                        <td className="px-4 py-2">{app.interested_course || '—'}</td>
                        <td className="px-4 py-2">{app.school_name || '—'}</td>
                        <td className="px-4 py-2">{app.passing_year || '—'}</td>
                        <td className="px-4 py-2">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            app.status === 'new' ? 'bg-gray-100 text-gray-700' :
                            app.status === 'in_review' ? 'bg-yellow-100 text-yellow-800' :
                            app.status === 'accepted' ? 'bg-green-100 text-green-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {app.status === 'in_review' ? 'In Review' : app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-4 py-2">{new Date(app.created_at).toLocaleDateString()}</td>
                        <td className="px-4 py-2 text-right space-x-2">
                          <button
                            className="inline-flex items-center gap-1 px-3 py-1.5 border rounded hover:bg-gray-50"
                            onClick={() => setSelectedApp(app)}
                          >
                            View
                          </button>
                          <button
                            className="inline-flex items-center gap-1 px-3 py-1.5 text-red-600 hover:bg-red-50 border rounded"
                            onClick={() => deleteApplication(app.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Details Modal */}
          {selectedApp && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" role="dialog" aria-modal="true">
              <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
                <div className="border-b px-6 py-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Application Details</h3>
                  <button className="text-gray-500 hover:text-gray-700" onClick={() => setSelectedApp(null)}>✕</button>
                </div>
                <div className="px-6 py-4 space-y-3 max-h-[70vh] overflow-auto">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-gray-500">Name</div>
                      <div className="font-medium">{selectedApp.full_name}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Email</div>
                      <div className="font-medium">{selectedApp.email || '—'}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Mobile</div>
                      <div className="font-medium">{selectedApp.mobile || '—'}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">WhatsApp</div>
                      <div className="font-medium">{selectedApp.whatsapp || '—'}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Course</div>
                      <div className="font-medium">{selectedApp.interested_course || '—'}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">School</div>
                      <div className="font-medium">{selectedApp.school_name || '—'}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Passing Year</div>
                      <div className="font-medium">{selectedApp.passing_year || '—'}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Submitted</div>
                      <div className="font-medium">{new Date(selectedApp.created_at).toLocaleString()}</div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="block text-sm text-gray-700 mb-1">Status</label>
                    <select
                      className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      value={selectedApp.status}
                      onChange={(e) => updateStatus(selectedApp.id, e.target.value as any)}
                    >
                      <option value="new">New</option>
                      <option value="in_review">In Review</option>
                      <option value="accepted">Accepted</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </div>
                </div>
                <div className="border-t px-6 py-4 flex justify-end gap-2">
                  <button
                    className="px-4 py-2 border rounded hover:bg-gray-50"
                    onClick={() => setSelectedApp(null)}
                  >
                    Close
                  </button>
                  <button
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    onClick={() => { deleteApplication(selectedApp.id); setSelectedApp(null); }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 text-center">
            <button
              onClick={() => {
                signOut().finally(() => window.location.reload());
              }}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}