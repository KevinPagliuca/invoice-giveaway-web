import React, { useMemo } from 'react';

import { Logo } from 'components/Logo';

import * as S from './Footer.styles';

export const Footer = () => {
  const footerLinks = useMemo(() => {
    return [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Sobre',
        href: '/sobre-nos',
      },
      {
        label: 'Contato',
        href: '/contato',
      },
      {
        label: 'Ranking',
        href: '/ranking',
      },
    ];
  }, []);
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.FooterLeftSide>
          <Logo size="large" white />
          <S.FooterLinksContainer>
            {footerLinks.map((link) => (
              <S.FooterLink key={link.label} href={link.href}>
                {link.label}
              </S.FooterLink>
            ))}
          </S.FooterLinksContainer>
        </S.FooterLeftSide>
      </S.FooterContent>
    </S.FooterContainer>
  );
};
