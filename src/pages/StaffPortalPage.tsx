import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import Navigation from '../components/ui/Navigation';
import Sidebar from '../features/staff-portal/components/Sidebar';
import DashboardOverview from '../features/staff-portal/components/DashboardOverview';
import ApplicationsTable from '../features/staff-portal/components/ApplicationsTable';
import ApplicationDetailsModal from '../features/staff-portal/components/ApplicationDetailsModal';
import StaffPortalLayout from '../features/staff-portal/StaffPortalLayout';
import HeaderBar from '../features/staff-portal/components/HeaderBar';
import AuthCard from '../features/auth/AuthCard';
import { Application, StaffPortalView } from '../features/staff-portal/types';

const StaffPortalPage = () => {
  const { user, loading: authLoading, signIn, signOut, signUp, resetPassword } = useAuth();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // deprecated local auth form state removed in favor of AuthCard
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

  // sign in handled by AuthCard

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
        <AuthCard signIn={signIn} signUp={signUp} resetPassword={resetPassword} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <StaffPortalLayout>
        <Sidebar activeView={view} onChangeView={setView} onSignOut={handleSignOut} />
        <main className="flex-1 min-w-0">
          <HeaderBar
            title={view === 'dashboard' ? 'Dashboard' : 'Applications'}
            userName={(user.user_metadata as any)?.fullName || null}
            userEmail={user.email}
          />
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