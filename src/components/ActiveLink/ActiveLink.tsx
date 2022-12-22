import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { type IActiveLinkProps } from './ActiveLink.interfaces';

export const ActiveLink = ({ href, activeClassName, children }: IActiveLinkProps) => {
  const router = useRouter();
  const className = router.pathname === href ? activeClassName : null;

  return (
    <Link href={href} passHref>
      {React.cloneElement(children, { className })}
    </Link>
  );
};
