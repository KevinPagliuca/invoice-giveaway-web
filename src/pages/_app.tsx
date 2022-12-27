import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { type AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { GlobalStyles } from 'styles/globals';
import { AuthProvider } from 'contexts/Auth';
import { queryClient } from 'services/react-query';
import { LoaderProvider } from 'contexts/Loader';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Hydrate state={pageProps?.dehydratedState}>
        <ThemeProvider theme={theme}>
          <LoaderProvider>
            <AuthProvider>
              <GlobalStyles />
              <Component {...pageProps} />
              <ToastContainer theme="dark" />
            </AuthProvider>
          </LoaderProvider>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
