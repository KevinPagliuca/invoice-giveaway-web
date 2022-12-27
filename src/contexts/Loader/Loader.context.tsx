import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import router from 'next/router';

import { Loader } from 'components/Loader';

import { type ILoaderContextData, type ILoaderProviderProps } from './Loader.interfaces';

export const LoaderContext = createContext({} as ILoaderContextData);

export const LoaderProvider = ({ children }: ILoaderProviderProps) => {
  const [loaderState, setLoaderState] = useState(false);

  const handleStart = useCallback(() => {
    setLoaderState(true);
  }, []);

  const handleStop = useCallback(() => {
    setLoaderState(false);
  }, []);

  const handleChangeLoaderState = useCallback((state: boolean) => {
    setLoaderState(state);
  }, []);

  useEffect(() => {
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router.events]);

  return (
    <LoaderContext.Provider value={{ loaderState, handleChangeLoaderState }}>
      <Loader show={loaderState} size="6.5rem" />
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
