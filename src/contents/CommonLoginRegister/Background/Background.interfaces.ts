import { type ReactNode } from 'react';

export interface IBackgroundProps {
  children: ReactNode;
  title: string;
  backlink: { label: string; href: string };
  heroConfig: {
    path: string;
    alt: string;
  };
  reverse?: boolean;
}

export type SidesAttributes = {
  isReverse: boolean;
};
