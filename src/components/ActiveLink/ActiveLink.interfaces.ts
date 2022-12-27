import { type LinkProps } from 'next/link';
import { type ReactElement } from 'react';

export interface IActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
  shouldMatchExactHref?: boolean;
}
