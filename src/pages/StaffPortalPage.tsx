import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lock, User, Eye, EyeOff, Mail, ArrowLeft, AlertCircle, CheckCircle,
  LayoutDashboard, Users, FileText, LogOut, Search, Filter,
  Calendar, Phone, GraduationCap, X, Menu, Bell, Download,
  TrendingUp, Clock, Award
} from 'lucide-react';
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

  const { signUp, signIn, resetPassword, user } = useAuth();

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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <Navigation />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
        <motion.div
          className="max-w-md w-full mx-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <GoLearnLogo size="md" className="mx-auto mb-4" />
              </motion.div>
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
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
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
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
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
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
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
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
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
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
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
                      className="text-sm text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                    >
                      Forgot your password?
                    </button>
                  </div>
                  <div className="text-center">
                    <span className="text-sm text-gray-600">Don't have an account? </span>
                    <button
                      onClick={() => switchMode('register')}
                      className="text-sm text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
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
                    className="text-sm text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                  >
                    Sign in here
                  </button>
                </div>
              )}

              {authMode === 'forgot-password' && (
                <div className="text-center">
                  <button
                    onClick={() => switchMode('login')}
                    className="text-sm text-emerald-600 hover:text-emerald-700 font-medium flex items-center justify-center space-x-1 transition-colors"
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

// Enhanced Dashboard Component
function StaffDashboard({ user }: { user: SupabaseUser }) {
  const { signOut } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  
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
    education_level_completed: string | null;
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

    // Handle realtime subscription with proper error handling
    let channel: any = null;
    try {
      // Check if the supabase client supports realtime
      if (supabase.channel && typeof supabase.channel === 'function') {
        // Use type assertion to bypass strict typing for mock client
        const supabaseAny = supabase as any;
        channel = supabaseAny
          .channel('applications-changes')
          .on('postgres_changes', { 
            event: '*', 
            schema: 'public', 
            table: 'applications' 
          }, () => {
            loadApplications();
          })
          .subscribe();
      }
    } catch (error) {
      console.warn('Realtime subscription failed:', error);
    }

    return () => {
      if (channel && supabase.removeChannel && typeof supabase.removeChannel === 'function') {
        try {
          (supabase as any).removeChannel(channel);
        } catch (error) {
          console.warn('Failed to remove channel:', error);
        }
      }
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
    else {
      setApplications(prev => prev.filter(a => a.id !== id));
      if (selectedApp && selectedApp.id === id) setSelectedApp(null);
    }
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

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'applications', label: 'Applications', icon: Users },
    { id: 'logout', label: 'Log Out', icon: LogOut },
  ];

  const handleLogout = async () => {
    if (!confirm('Are you sure you want to log out?')) return;
      await signOut();
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <motion.div
        className={`bg-white shadow-xl border-r border-gray-200 transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-16'
        }`}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-4">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <GoLearnLogo size="sm" />
              </motion.div>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        <nav className="mt-8">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === 'logout') {
                  handleLogout();
                } else {
                  setActiveTab(item.id);
                }
              }}
              className={`w-full flex items-center px-4 py-3 text-left hover:bg-emerald-50 transition-colors ${
                activeTab === item.id ? 'bg-emerald-100 border-r-2 border-emerald-600 text-emerald-700' : 'text-gray-600'
              }`}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {sidebarOpen && (
                <motion.span
                  className="ml-3 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {item.label}
                </motion.span>
              )}
            </button>
          ))}
        </nav>

        {/* User Profile & Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className={`flex items-center ${sidebarOpen ? 'justify-between' : 'justify-center'}`}>
            {sidebarOpen && (
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {user.user_metadata?.full_name || 'Staff Member'}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                </div>
              </div>
            )}
            <button
              onClick={handleLogout}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              title="Logout"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {activeTab === 'dashboard' && 'Dashboard'}
                {activeTab === 'applications' && 'Applications Management'}
              </h1>
              <p className="text-gray-600 mt-1">
                {activeTab === 'dashboard' && 'Welcome to your staff dashboard'}
                {activeTab === 'applications' && 'Manage student applications'}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" title="Notifications">
                <Bell className="h-5 w-5" />
              </button>
              <button
                onClick={handleLogout}
                className="px-3 py-1.5 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
                title="Log out"
              >
                <LogOut className="h-4 w-4" />
                <span>Log Out</span>
              </button>
              <div className="text-sm text-gray-600">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-6">
          {activeTab === 'dashboard' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-emerald-100 text-sm">Total Applications</p>
                      <p className="text-3xl font-bold mt-1">{counts.total}</p>
                    </div>
                    <Users className="h-8 w-8 text-emerald-200" />
                  </div>
                  <div className="mt-4 flex items-center text-emerald-100 text-sm">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>+12% from last month</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">New Applications</p>
                      <p className="text-3xl font-bold mt-1 text-blue-600">{counts.new}</p>
                    </div>
                    <Clock className="h-8 w-8 text-blue-500" />
                  </div>
                  <div className="mt-4 text-gray-500 text-sm">Pending review</div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">In Review</p>
                      <p className="text-3xl font-bold mt-1 text-yellow-600">{counts.review}</p>
                    </div>
                    <FileText className="h-8 w-8 text-yellow-500" />
                  </div>
                  <div className="mt-4 text-gray-500 text-sm">Being processed</div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Accepted</p>
                      <p className="text-3xl font-bold mt-1 text-green-600">{counts.accepted}</p>
                    </div>
                    <Award className="h-8 w-8 text-green-500" />
                  </div>
                  <div className="mt-4 text-gray-500 text-sm">Successfully approved</div>
                </div>
              </div>

              {/* Recent Applications */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Applications</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {applications.slice(0, 5).map((app) => (
                      <div key={app.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 text-emerald-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{app.full_name}</p>
                            <p className="text-sm text-gray-600">{app.interested_course || 'No course specified'}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            app.status === 'new' ? 'bg-gray-100 text-gray-700' :
                            app.status === 'in_review' ? 'bg-yellow-100 text-yellow-800' :
                            app.status === 'accepted' ? 'bg-green-100 text-green-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {app.status === 'in_review' ? 'In Review' : app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                          </span>
                          <button
                            onClick={() => setSelectedApp(app)}
                            className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'applications' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Filters */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Search applications..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </div>
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none"
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value as any)}
                      aria-label="Filter applications by status"
                    >
                      <option value="all">All Statuses</option>
                      <option value="new">New</option>
                      <option value="in_review">In Review</option>
                      <option value="accepted">Accepted</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </div>
                  <div>
                    <select
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      value={courseFilter}
                      onChange={(e) => setCourseFilter(e.target.value as any)}
                    >
                      <option value="all">All Courses</option>
                      {courses.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Applications Table */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">School/College/University</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {appsLoading && (
                        <tr>
                          <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                            <div className="flex items-center justify-center space-x-2">
                              <div className="w-6 h-6 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
                              <span>Loading applications...</span>
                            </div>
                          </td>
                        </tr>
                      )}
                      {appsError && !appsLoading && (
                        <tr>
                          <td colSpan={6} className="px-6 py-12 text-center text-red-600">
                            <AlertCircle className="h-8 w-8 mx-auto mb-2" />
                            <p>{appsError}</p>
                          </td>
                        </tr>
                      )}
                      {!appsLoading && filtered.length === 0 && !appsError && (
                        <tr>
                          <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                            <Users className="h-8 w-8 mx-auto mb-2" />
                            <p>No applications found.</p>
                          </td>
                        </tr>
                      )}
                      {filtered.map((app) => (
                        <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                <User className="h-5 w-5 text-emerald-600" />
                              </div>
                              <div className="ml-4">
                                <button
                                  onClick={() => setSelectedApp(app)}
                                  className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
                                >
                                  {app.full_name}
                                </button>
                                <div className="text-sm text-gray-500">{app.email || 'No email'}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {app.interested_course || '—'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {app.school_name || '—'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              app.status === 'new' ? 'bg-gray-100 text-gray-800' :
                              app.status === 'in_review' ? 'bg-yellow-100 text-yellow-800' :
                              app.status === 'accepted' ? 'bg-green-100 text-green-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {app.status === 'in_review' ? 'In Review' : app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(app.created_at).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                            <button
                              onClick={() => setSelectedApp(app)}
                              className="text-emerald-600 hover:text-emerald-900 transition-colors"
                            >
                              View
                            </button>
                            <button
                              onClick={() => deleteApplication(app.id)}
                              className="text-red-600 hover:text-red-900 transition-colors"
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
            </motion.div>
          )}

          {/* Reports section removed */}

          {/* Settings section removed */}
        </main>
      </div>

      {/* Application Details Modal */}
      <AnimatePresence>
        {selectedApp && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">Application Details</h3>
                    <p className="text-emerald-100 mt-1">Complete student information</p>
                  </div>
                  <button
                    onClick={() => setSelectedApp(null)}
                    className="p-2 hover:bg-emerald-700 rounded-lg transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 max-h-[calc(90vh-200px)] overflow-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Student Information */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <User className="h-5 w-5 mr-2 text-emerald-600" />
                        Student Information
                      </h4>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-gray-500">Full Name</label>
                            <p className="text-gray-900 font-medium">{selectedApp.full_name}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-500">Serial Number</label>
                            <p className="text-gray-900 font-medium">{selectedApp.serial_number || '—'}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-gray-500">Email</label>
                            <p className="text-gray-900 font-medium flex items-center">
                              <Mail className="h-4 w-4 mr-2 text-gray-400" />
                              {selectedApp.email || '—'}
                            </p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-500">Mobile</label>
                            <p className="text-gray-900 font-medium flex items-center">
                              <Phone className="h-4 w-4 mr-2 text-gray-400" />
                              {selectedApp.mobile || '—'}
                            </p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-gray-500">WhatsApp</label>
                            <p className="text-gray-900 font-medium">{selectedApp.whatsapp || '—'}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-500">Date of Birth</label>
                            <p className="text-gray-900 font-medium flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                              {selectedApp.date_of_birth ? new Date(selectedApp.date_of_birth).toLocaleDateString() : '—'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Academic Information */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2 text-emerald-600" />
                        Academic Information
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-gray-500">Interested Course</label>
                          <p className="text-gray-900 font-medium">{selectedApp.interested_course || '—'}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Education level completed</label>
                          <p className="text-gray-900 font-medium">{selectedApp.education_level_completed || '—'}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">School/College/University Name</label>
                          <p className="text-gray-900 font-medium">{selectedApp.school_name || '—'}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-gray-500">Subjects/Combination/Course Taken</label>
                            <p className="text-gray-900 font-medium">{selectedApp.subjects_name || '—'}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-500">Passing Year</label>
                            <p className="text-gray-900 font-medium">{selectedApp.passing_year || '—'}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Parent/Guardian Information */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Users className="h-5 w-5 mr-2 text-emerald-600" />
                        Parent/Guardian Information
                      </h4>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-gray-500">Father's Name</label>
                            <p className="text-gray-900 font-medium">{selectedApp.father_name || '—'}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-500">Mother's Name</label>
                            <p className="text-gray-900 font-medium">{selectedApp.mother_name || '—'}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-gray-500">Parent Mobile</label>
                            <p className="text-gray-900 font-medium flex items-center">
                              <Phone className="h-4 w-4 mr-2 text-gray-400" />
                              {selectedApp.parent_mobile || '—'}
                            </p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-500">Parent WhatsApp</label>
                            <p className="text-gray-900 font-medium">{selectedApp.parent_whatsapp || '—'}</p>
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Parent Email</label>
                          <p className="text-gray-900 font-medium flex items-center">
                            <Mail className="h-4 w-4 mr-2 text-gray-400" />
                            {selectedApp.parent_email || '—'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Application Status */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-emerald-600" />
                        Application Status
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-gray-500 mb-2 block">Current Status</label>
                          <select
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                            value={selectedApp.status}
                            onChange={(e) => updateStatus(selectedApp.id, e.target.value as any)}
                          >
                            <option value="new">New</option>
                            <option value="in_review">In Review</option>
                            <option value="accepted">Accepted</option>
                            <option value="rejected">Rejected</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Submitted On</label>
                          <p className="text-gray-900 font-medium flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                            {new Date(selectedApp.created_at).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setSelectedApp(null)}
                    className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                <button
                  onClick={() => {
                    // simple wrapper to avoid missing name errors
                    const format = (label: string, value: string | null) => `\n      <div style=\"margin: 6px 0;\">\n        <div style=\\\"font-size:12px;color:#64748b\\\">${label}</div>\n        <div style=\\\"font-size:14px;color:#0f172a;font-weight:600\\\">${value ? String(value) : '—'}</div>\n      </div>`;
                    const app = selectedApp;
                    if (!app) return;
                    const html = `<!doctype html>\n      <html>\n        <head>\n          <meta charset=\\\"utf-8\\\" />\n          <title>Application - ${app.full_name}</title>\n          <style>\n            @page { size: A4; margin: 16mm; }\n            body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; color: #111827; }\n            .header { display:flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }\n            .title { font-size: 22px; font-weight: 800; }\n            .badge { padding: 4px 8px; border-radius: 9999px; background: #eef2ff; color: #3730a3; font-weight: 600; font-size: 12px; }\n            .section { margin-top: 16px; border-top: 1px solid #e5e7eb; padding-top: 12px; }\n            .section h3 { font-size: 16px; font-weight: 700; margin: 0 0 8px; }\n            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 16px; }\n          </style>\n        </head>\n        <body>\n          <div class=\\\"header\\\">\n            <div class=\\\"title\\\">Application Details</div>\n            <div class=\\\"badge\\\">${app.status === 'in_review' ? 'In Review' : app.status.charAt(0).toUpperCase() + app.status.slice(1)}</div>\n          </div>\n          <div>Submitted: ${new Date(app.created_at).toLocaleString()}</div>\n\n          <div class=\\\"section\\\">\n            <h3>Student Information</h3>\n            <div class=\\\"grid\\\">\n              ${format('Full Name', app.full_name)}\n              ${format('Serial Number', app.serial_number)}\n              ${format('Email', app.email)}\n              ${format('Mobile', app.mobile)}\n              ${format('WhatsApp', app.whatsapp)}\n              ${format('Date of Birth', app.date_of_birth ? new Date(app.date_of_birth).toLocaleDateString() : null)}\n            </div>\n          </div>\n\n          <div class=\\\"section\\\">\n            <h3>Academic Information</h3>\n            ${format('Interested Course', app.interested_course)}\n            ${format('Education level completed', app.education_level_completed)}\n            ${format('School/College/University Name', app.school_name)}\n            <div class=\\\"grid\\\">\n              ${format('Subjects/Combination/Course Taken', app.subjects_name)}\n              ${format('Passing Year', app.passing_year)}\n            </div>\n          </div>\n\n          <div class=\\\"section\\\">\n            <h3>Parent/Guardian Information</h3>\n            <div class=\\\"grid\\\">\n              ${format("Father's Name", app.father_name)}\n              ${format("Mother's Name", app.mother_name)}\n              ${format('Parent Mobile', app.parent_mobile)}\n              ${format('Parent WhatsApp', app.parent_whatsapp)}\n              ${format('Parent Email', app.parent_email)}\n            </div>\n          </div>\n        </body>\n      </html>`;
                    const printWindow = window.open('', '_blank');
                    if (!printWindow) { alert('Please allow pop-ups to export the PDF.'); return; }
                    printWindow.document.open();
                    printWindow.document.write(html);
                    printWindow.document.close();
                    printWindow.focus();
                    setTimeout(() => { printWindow.print(); printWindow.close(); }, 300);
                  }}
                  className="px-4 py-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-colors flex items-center space-x-2"
                >
                    <Download className="h-4 w-4" />
                  <span>Export PDF</span>
                  </button>
                </div>
                <button
                  onClick={() => {
                    deleteApplication(selectedApp.id);
                    setSelectedApp(null);
                  }}
                  className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete Application
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}