import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { type IActiveLinkProps } from './ActiveLink.interfaces';

export const ActiveLink = ({
  activeClassName,
  shouldMatchExactHref = false,
  children,
  ...rest
}: IActiveLinkProps) => {
  let isActive = false;

  const { asPath } = useRouter();

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {React.cloneElement(children, { className: isActive ? activeClassName : undefined })}
    </Link>
  );
};
