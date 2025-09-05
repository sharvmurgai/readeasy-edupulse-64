import React, { createContext, useContext, useEffect, useState } from 'react';
import { api, User } from '@/lib/api';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
  signUp: (email: string, password: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated on app load
    const checkAuth = async () => {
      const token = localStorage.getItem('auth_token');
      if (token) {
        api.setToken(token);
        const response = await api.getCurrentUser();
        if (response.success && response.data) {
          setUser(response.data);
        } else {
          // Invalid token, clear it
          api.setToken(null);
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const signIn = async (email: string, password: string) => {
    const response = await api.signIn(email, password);
    if (response.success && response.data) {
      setUser(response.data.user);
      return {};
    }
    return { error: response.error || 'Login failed' };
  };

  const signUp = async (email: string, password: string) => {
    const response = await api.signUp(email, password);
    if (response.success && response.data) {
      setUser(response.data.user);
      api.setToken(response.data.token);
      return {};
    }
    return { error: response.error || 'Signup failed' };
  };

  const signOut = async () => {
    await api.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}