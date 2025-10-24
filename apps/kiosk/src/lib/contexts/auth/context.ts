import { createContext } from 'react';

export interface AuthContextValue {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
  toLogin: (nextPath?: string) => void;
  logging: boolean;
}

export const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export const AuthConsumer = AuthContext.Consumer;
