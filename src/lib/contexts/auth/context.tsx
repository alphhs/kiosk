import { createContext, useContext } from 'react';

interface AuthContextType {
  isAuth: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  toLogin: () => void;
  logging: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
