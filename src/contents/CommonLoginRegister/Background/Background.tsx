import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Logo } from 'components/Logo';

import * as S from './Background.styles';
import { type IBackgroundProps } from './Background.interfaces';

export const Background = ({
  children,
  backlink,
  heroConfig,
  title,
  reverse,
}: IBackgroundProps) => {
  const Icon = reverse ? FiChevronRight : FiChevronLeft;

  return (
    <S.BackgroundContainer>
      <S.HeroContainer isReverse={!!reverse}>
        <Image alt={heroConfig.alt} src={heroConfig.path} fill />
        <S.CopyrightText isReverse={!!reverse}>
          Feito por{' '}
          <Link href="https://github.com/kevinpagliuca" target="_blank">
            Kevin Pagliuca
          </Link>
        </S.CopyrightText>
      </S.HeroContainer>
      <S.FloatBox>{children}</S.FloatBox>
      <S.TitleContainer isReverse={!!reverse}>
        <Logo whiteText />
        <h1>{title}</h1>

        <S.FloatBoxMobile>{children}</S.FloatBoxMobile>
        <Link href={backlink.href}>
          <Icon size={32} />
          {backlink.label}
        </Link>
      </S.TitleContainer>
    </S.BackgroundContainer>
  );
};
