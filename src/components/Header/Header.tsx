import React, { type MouseEvent, useCallback, useState } from 'react';

import { ActiveLink } from 'components/ActiveLink/ActiveLink';
import { Logo } from 'components/Logo';

import * as S from './Header.styles';

const headerLinks = [
  {
    label: 'Home',
    href: '/',
    isPrivate: false,
  },
  {
    label: 'Dashboard',
    href: '/dashboard',
    isPrivate: true,
  },
  {
    label: 'Sobre nós',
    href: '/sobre-nos',
    isPrivate: false,
    onlyUnauthenticated: true,
  },
  {
    label: 'Ranking',
    href: '/ranking',
    isPrivate: true,
  },

  {
    label: 'Login',
    href: '/login',
    isPrivate: false,
    onlyUnauthenticated: true,
  },
];

export const Header = () => {
  const isAuth = false;
  const [hoveredLink, setHoveredLink] = useState({ offset: 0, width: 0 });

  const handleMouseEnter = useCallback(
    (event: MouseEvent<HTMLSpanElement>) => {
      const offset = event.currentTarget.offsetLeft;
      const width = event.currentTarget.clientWidth;

      setHoveredLink({ offset, width });
    },
    [hoveredLink]
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredLink({ offset: 0, width: 0 });
  }, []);

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <Logo size="small" />
        <S.HeaderNavWrapper offset={hoveredLink.offset} width={hoveredLink.width}>
          {headerLinks.map((link) => {
            if ((link.isPrivate && !isAuth) || (link.onlyUnauthenticated && isAuth)) return null;
            return (
              <ActiveLink activeClassName="active" key={link.label} href={link.href}>
                <S.HeaderLink onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  {link.label}
                </S.HeaderLink>
              </ActiveLink>
            );
          })}
        </S.HeaderNavWrapper>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
