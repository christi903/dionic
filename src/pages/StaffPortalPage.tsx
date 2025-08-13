import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UserCheck } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import Navigation from '../components/ui/Navigation';
import Sidebar from '../features/staff-portal/components/Sidebar';
import DashboardOverview from '../features/staff-portal/components/DashboardOverview';
import ApplicationsTable from '../features/staff-portal/components/ApplicationsTable';
import ApplicationDetailsModal from '../features/staff-portal/components/ApplicationDetailsModal';
import StaffPortalLayout from '../features/staff-portal/StaffPortalLayout';
import { Application, StaffPortalView } from '../features/staff-portal/types';

const StaffPortalPage = () => {
  const { user, loading: authLoading, signIn, signOut } = useAuth();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [signingIn, setSigningIn] = useState(false);
  const [view, setView] = useState<StaffPortalView>('dashboard');

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

  // utilities moved into child components

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
      <StaffPortalLayout>
        <Sidebar activeView={view} onChangeView={setView} onSignOut={handleSignOut} />
        <main className="flex-1 min-w-0">
          <div className="h-16 bg-white border-b flex items-center px-4 md:px-6">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">{view === 'dashboard' ? 'Dashboard' : 'Applications'}</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
            {view === 'dashboard' ? (
              <DashboardOverview applications={applications} />
            ) : (
              <ApplicationsTable
                applications={applications}
                loading={loading}
                onOpen={(app) => { setSelectedApplication(app); setIsModalOpen(true); }}
                onDelete={deleteApplication}
              />
            )}
          </div>
        </main>
      </StaffPortalLayout>

      <ApplicationDetailsModal
        isOpen={isModalOpen}
        application={selectedApplication}
        onClose={() => setIsModalOpen(false)}
        onUpdateStatus={updateApplicationStatus}
      />
    </div>
  );
};

export default StaffPortalPage;