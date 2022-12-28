import { type GetServerSidePropsContext } from 'next';

import { type IUser, type IAuthResponse, type IRecoverPassResponse } from 'interfaces/users';
import { api, removeAuth, setAuth, setupAPI } from 'services/api';
import { type RegisterFormData } from 'shared/forms/RegisterForm';
import { type AxiosErrorType } from 'interfaces/axios';
import { queryClient } from 'services/react-query';
import { REACT_QUERY_KEYS } from 'constants/react-query';
import { type LoginFormData } from 'shared/forms/LoginForm';
import { type EditProfileFormData } from 'shared/forms/UpdateProfileForm';
import { type RecoverPassFormData } from 'shared/forms/RecoverPassForm';

async function getMe(ctx?: GetServerSidePropsContext) {
  try {
    const apiClient = setupAPI(ctx);
    const { data } = await apiClient.get<IAuthResponse>('/user/me');
    return data;
  } catch (err) {
    const error = err as AxiosErrorType;
    const errorMessage =
      error.response?.data?.message || 'Ocorreu um erro inesperado, tente novamente mais tarde.';
    throw new Error(errorMessage);
  }
}

async function auth(credentials: LoginFormData) {
  try {
    const { data } = await api.post<IAuthResponse>('/user/auth', credentials);
    setAuth(data.token);
    queryClient.fetchQuery([REACT_QUERY_KEYS.GET_ME]);
    return data;
  } catch (err) {
    const error = err as AxiosErrorType;
    const errorMessage =
      error.response?.data?.message || 'Ocorreu um erro inesperado, tente novamente mais tarde.';
    throw new Error(errorMessage);
  }
}

async function register(user: RegisterFormData) {
  try {
    const userFormatted = {
      ...user.personal,
      ...user.contact,
      ...user.address,
      ...user.password,
    };
    const { data } = await api.post<IAuthResponse>('/user/register', userFormatted);
    setAuth(data.token);
    queryClient.fetchQuery([REACT_QUERY_KEYS.GET_ME]);

    return data;
  } catch (err) {
    const error = err as AxiosErrorType;
    const errorMessage =
      error.response?.data?.message || 'Ocorreu um erro inesperado, tente novamente mais tarde.';
    throw new Error(errorMessage);
  }
}

async function logout(ctx?: GetServerSidePropsContext) {
  queryClient.invalidateQueries();
  removeAuth(ctx);
}

async function update(user: EditProfileFormData) {
  try {
    const userFormatted = {
      ...user.personal,
      ...user.contact,
      ...user.address,
    };
    const { data } = await api.patch<IUser>('/user/update', userFormatted);
    queryClient.invalidateQueries([REACT_QUERY_KEYS.GET_ME]);
    return data;
  } catch (err) {
    const error = err as AxiosErrorType;
    const errorMessage =
      error.response?.data?.message || 'Ocorreu um erro inesperado, tente novamente mais tarde.';
    throw new Error(errorMessage);
  }
}

async function recoverPass(cpf: string) {
  try {
    const { data } = await api.post<IRecoverPassResponse>('/user/recover-password', { cpf });
    return data;
  } catch (err) {
    const error = err as AxiosErrorType;
    const errorMessage =
      error.response?.data?.message || 'Ocorreu um erro inesperado, tente novamente mais tarde.';
    throw new Error(errorMessage);
  }
}

async function resetPass(data: RecoverPassFormData) {
  try {
    const payload = { ...data.newPassword, ...data.recoverPass };
    await api.post('/user/reset-password', payload);
  } catch (err) {
    const error = err as AxiosErrorType;
    const errorMessage =
      error.response?.data?.message || 'Ocorreu um erro inesperado, tente novamente mais tarde.';
    throw new Error(errorMessage);
  }
}

export const usersService = {
  getMe,
  auth,
  register,
  logout,
  update,
  recoverPass,
  resetPass,
};
