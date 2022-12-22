import { type ReactElement } from 'react';

export interface IActiveLinkProps {
  href: string;
  children: ReactElement;
  activeClassName: string;
}
