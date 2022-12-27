import { type ReactNode } from 'react';

export interface ILoaderContextData {
  loaderState: boolean;
  handleChangeLoaderState: (state: boolean) => void;
}

export interface ILoaderProviderProps {
  children: ReactNode;
}
