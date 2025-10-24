import { useApolloClient } from '@apollo/client/react';
import { t } from '@lingui/core/macro';
import { useLocation, useNavigate } from '@tanstack/react-router';
import cookies from 'js-cookie';
import { ReactNode, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { redirectAfterLoginField, userTokenField } from '../../../config/constants';

import { AuthContext } from './context';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [logging, setLogging] = useState(true);
  const [isAuth, setAuth] = useState(false);

  const client = useApolloClient();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = cookies.get(userTokenField);
    if (token) {
      setAuth(!!token);
    }
    setLogging(false);
  }, []);

  const logout = async () => {
    cookies.remove(userTokenField);
    localStorage.removeItem('order');
    setAuth(false);
    await client.resetStore().then(() => toast.success(t`Account logged out`));
  };

  const login = async () => {
    await client.resetStore().then(() => toast.success(t`Welcome Back`));
    setAuth(true);
  };

  const toLogin = () => {
    cookies.set(redirectAfterLoginField, location.pathname);
    navigate({ to: '/' });
  };

  return <AuthContext.Provider value={{ isAuth, login, logout, toLogin, logging }}>{children}</AuthContext.Provider>;
}
