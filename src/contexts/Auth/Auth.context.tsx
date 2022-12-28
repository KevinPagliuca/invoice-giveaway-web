import React, { createContext, useCallback, useContext, useMemo } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import { type IUserLoginCredentials } from 'interfaces/users';
import { usersService } from 'services/users';
import { useMe } from 'hooks/users';
import { type RegisterFormData } from 'shared/forms/RegisterForm';
import { type EditProfileFormData } from 'shared/forms/UpdateProfileForm';

import { type IAuthProviderProps, type IAuthContextData } from './Auth.interfaces';

const AuthContext = createContext({} as IAuthContextData);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const router = useRouter();
  const { data, remove } = useMe();
  const user = useMemo(() => data?.user, [data]);

  const handleLogin = useCallback(async (credentials: IUserLoginCredentials) => {
    try {
      await usersService.auth(credentials);
      toast.success('Login realizado com sucesso, aguarde enquanto você é redirecionado.');
      router.push('/minha-area');
    } catch (err) {
      if (err instanceof Error) toast.error(err.message);
    }
  }, []);

  const handleLogout = useCallback(async () => {
    try {
      await usersService.logout();
      toast.info('Você escolheu sair 😔, aguarde enquanto te redirecionamos.');
      router.push('/');
      remove();
    } catch (err) {
      if (err instanceof Error) toast.error(err.message);
    }
  }, []);

  const handleRegister = useCallback(async (data: RegisterFormData) => {
    try {
      await usersService.register(data);
      toast.success('Cadastro realizado com sucesso!');
      router.push('/minha-area');
    } catch (err) {
      if (err instanceof Error) toast.error(err.message);
    }
  }, []);

  const handleUpdate = useCallback(async (data: EditProfileFormData) => {
    try {
      await usersService.update(data);
      toast.success('Cadastro atualizado com sucesso!');
    } catch (err) {
      if (err instanceof Error) toast.error(err.message);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        handleLogin,
        handleLogout,
        handleRegister,
        handleUpdate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
