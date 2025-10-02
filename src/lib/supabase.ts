import { createClient } from '@supabase/supabase-js';

// Get environment variables (Vite uses import.meta.env)
const supabaseUrl = 
  import.meta.env.VITE_SUPABASE_URL ||
  'https://khgjiimmydrepuhnoagx.supabase.co';

const supabaseAnonKey = 
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoZ2ppaW1teWRyZXB1aG5vYWd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3Mjg1MjcsImV4cCI6MjA3MDMwNDUyN30.ZdTScwcZsdSoWn-e9rpjimic-b7_otRIZYwlWPmBeTQ';

// Validate configuration
if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your-project-ref')) {
  console.warn('Supabase configuration incomplete. Using mock client.');
}

interface UserData {
  fullName?: string;
  [key: string]: unknown;
}

interface AuthCallback {
  (event: string, session: { user: unknown; access_token?: string; refresh_token?: string } | null): void;
}

// Create a mock client if environment variables are missing (for development)
const createMockClient = () => ({
  auth: {
    signUp: async () => ({ data: null, error: new Error('Supabase not configured') }),
    signInWithPassword: async () => ({ data: null, error: new Error('Supabase not configured') }),
    signOut: async () => ({ error: new Error('Supabase not configured') }),
    resetPasswordForEmail: async () => ({ data: null, error: new Error('Supabase not configured') }),
    getUser: async () => ({ data: { user: null }, error: new Error('Supabase not configured') }),
    onAuthStateChange: () => ({ data: { subscription: null } })
  },
  from: () => ({
    select: () => ({
      order: () => Promise.resolve({ data: [], error: null })
    }),
    insert: async () => ({ error: new Error('Supabase not configured') }),
    update: () => ({
      eq: () => Promise.resolve({ error: null })
    }),
    delete: () => ({
      eq: () => Promise.resolve({ error: null })
    })
  }),
  channel: () => ({
    on: () => ({
      subscribe: () => ({})
    })
  }),
  removeChannel: () => {}
});

// Create the client with better error handling
export const supabase = (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your-project-ref')) 
  ? createMockClient() 
  : createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      }
    });

// Auth helper functions
export const authHelpers = {
  // Sign up new user
  signUp: async (email: string, password: string, userData?: UserData) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    });
    return { data, error };
  },

  // Sign in user
  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    return { data, error };
  },

  // Sign out user
  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  // Reset password
  resetPassword: async (email: string) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`
    });
    return { data, error };
  },

  // Get current user
  getCurrentUser: async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
    return { user, error };
  },

  // Listen to auth changes
  onAuthStateChange: (callback: AuthCallback) => {
    return supabase.auth.onAuthStateChange(callback);
  }
};