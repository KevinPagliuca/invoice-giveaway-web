import React, { type MouseEvent, useCallback, useState } from 'react';

import { ActiveLink } from 'components/ActiveLink/ActiveLink';
import { Logo } from 'components/Logo';
import { useAuth } from 'contexts/Auth';

import * as S from './Header.styles';

const headerLinks = [
  {
    label: 'Home',
    href: '/',
    isPrivate: false,
    exact: true,
  },
  {
    label: 'Minha área',
    href: '/minha-area',
    isPrivate: true,
  },
  {
    label: 'Sobre nós',
    href: '/sobre-nos',
    isPrivate: false,
    onlyUnauthenticated: true,
    disabled: true,
  },
  {
    label: 'Ranking',
    href: '/ranking',
    isPrivate: true,
    disabled: true,
  },

  {
    label: 'Login',
    href: '/login',
    isPrivate: false,
    onlyUnauthenticated: true,
  },
  {
    label: 'Registro',
    href: '/cadastro',
    isPrivate: false,
    onlyUnauthenticated: true,
  },
];

export const Header = () => {
  const { isAuthenticated, handleLogout } = useAuth();
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
            if (
              (link.isPrivate && !isAuthenticated) ||
              (link.onlyUnauthenticated && isAuthenticated)
            )
              return null;
            return (
              <ActiveLink
                activeClassName="active"
                key={link.label}
                href={link.href}
                shouldMatchExactHref={link?.exact}
              >
                <S.HeaderLink
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  disabled={link?.disabled}
                >
                  {link.label}
                </S.HeaderLink>
              </ActiveLink>
            );
          })}
          {isAuthenticated && (
            <S.HeaderLink
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleLogout}
            >
              Sair
            </S.HeaderLink>
          )}
        </S.HeaderNavWrapper>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
