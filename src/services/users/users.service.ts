import { type GetServerSidePropsContext } from 'next';

import { type IAuthResponse } from 'interfaces/users';
import { api, removeAuth, setAuth, setupAPI } from 'services/api';
import { type LoginFormData } from 'shared/LoginForm';
import { type RegisterFormData } from 'shared/RegisterForm';
import { type AxiosErrorType } from 'interfaces/axios';
import { queryClient } from 'services/react-query';
import { REACT_QUERY_KEYS } from 'constants/react-query';

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

export const usersService = {
  getMe,
  auth,
  logout,
  register,
};
