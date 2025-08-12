import { useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { authHelpers } from '../lib/supabase';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const { user } = await authHelpers.getCurrentUser();
      setUser(user);
      setLoading(false);
    };

    getInitialSession();

    // Listen for auth changes
    let subscription: { unsubscribe: () => void } | null = null;
    
    try {
      const authState = authHelpers.onAuthStateChange(
        (event, session) => {
          setSession(session);
          setUser(session?.user ?? null);
          setLoading(false);
        }
      );
      
      subscription = authState?.data?.subscription || null;
    } catch (error) {
      console.error('Error setting up auth state listener:', error);
      setLoading(false);
    }

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);

  return {
    user,
    session,
    loading,
    signUp: authHelpers.signUp,
    signIn: authHelpers.signIn,
    signOut: authHelpers.signOut,
    resetPassword: authHelpers.resetPassword
  };
};