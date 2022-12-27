import { type GetServerSidePropsContext } from 'next';

import { envs } from 'constants/envs';
import axios from 'axios';
import { parseCookies, setCookie } from 'nookies';

export const api = setupAPI();

export function setupAPI(ctx?: GetServerSidePropsContext) {
  const token = getActiveToken(ctx);

  const api = axios.create({
    baseURL: envs.API_URL,
  });

  if (token) api.defaults.headers.authorization = `Bearer ${token}`;
  return api;
}

export function setAuth(token: string, ctx?: GetServerSidePropsContext) {
  setCookie(ctx, envs.TOKEN_KEY_NAME, token, {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
  });
  api.defaults.headers.authorization = `Bearer ${token}`;
}

export function removeAuth(ctx?: GetServerSidePropsContext) {
  setCookie(ctx, envs.TOKEN_KEY_NAME, '', {
    maxAge: 0,
    path: '/',
  });
  api.defaults.headers.authorization = '';
}

export function getActiveToken(ctx?: GetServerSidePropsContext) {
  const cookies = parseCookies(ctx);
  return cookies[envs.TOKEN_KEY_NAME];
}
