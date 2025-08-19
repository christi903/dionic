import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCheck } from 'lucide-react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';

type View = 'login' | 'register' | 'forgot';

interface UserData {
  fullName?: string;
}

interface AuthCardProps {
  signIn: (email: string, password: string) => Promise<{ error?: { message: string } | null }>;
  signUp: (email: string, password: string, userData?: UserData) => Promise<{ error?: { message: string } | null }>;
  resetPassword: (email: string) => Promise<{ error?: { message: string } | null }>;
}

const AuthCard: React.FC<AuthCardProps> = ({ signIn, signUp, resetPassword }) => {
  const [view, setView] = useState<View>('login');

  return (
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
        <p className="text-gray-600">Access the application management system</p>
      </div>

      {view === 'login' && (
        <>
          <LoginForm onSubmit={signIn} />
          <div className="mt-4 text-sm text-center text-gray-600">
            <button onClick={() => setView('forgot')} className="text-blue-600 hover:underline">Forgot password?</button>
          </div>
          <div className="mt-2 text-sm text-center text-gray-600">
            Don’t have an account?{' '}
            <button onClick={() => setView('register')} className="text-blue-600 hover:underline">Register</button>
          </div>
        </>
      )}

      {view === 'register' && (
        <>
          <RegisterForm onSubmit={(email, password, fullName) => signUp(email, password, { fullName })} />
          <div className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{' '}
            <button onClick={() => setView('login')} className="text-blue-600 hover:underline">Sign In</button>
          </div>
          <div className="mt-3 text-xs text-gray-500 text-center">
            Registration is restricted to approved staff emails only.
          </div>
        </>
      )}

      {view === 'forgot' && (
        <>
          <ForgotPasswordForm onSubmit={resetPassword} />
          <div className="mt-4 text-sm text-center text-gray-600">
            Remembered it?{' '}
            <button onClick={() => setView('login')} className="text-blue-600 hover:underline">Back to Sign In</button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default AuthCard;


