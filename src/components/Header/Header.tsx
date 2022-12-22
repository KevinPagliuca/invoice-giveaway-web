import React, { type MouseEvent, useCallback, useState } from 'react';

import { ActiveLink } from 'components/ActiveLink/ActiveLink';
import { Logo } from 'components/Logo';

import * as S from './Header.styles';

const headerLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Sobre',
    href: '/sobre-nos',
  },
  {
    label: 'Ranking',
    href: '/ranking',
  },
  {
    label: 'Login',
    href: '/login',
  },
];

export const Header = () => {
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
          {headerLinks.map((link) => (
            <ActiveLink activeClassName="active" key={link.label} href={link.href}>
              <S.HeaderLink onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {link.label}
              </S.HeaderLink>
            </ActiveLink>
          ))}
        </S.HeaderNavWrapper>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
