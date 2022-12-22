import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

import { Logo } from 'components/Logo';

import * as S from './Background.styles';
import { type ILoginBackgroundProps } from './Background.interfaces';

export const LoginBackground = ({ children }: ILoginBackgroundProps) => {
  return (
    <S.BackgroundContainer>
      <S.LeftContainer>
        <Logo white />

        <h1>Bem vindo de volta !</h1>

        <Link href="/">
          <FiChevronLeft size={32} />
          Home
        </Link>
      </S.LeftContainer>
      <S.FloatBox>{children}</S.FloatBox>
      <S.RightContainer>
        <S.CopyrightText>
          <Image className="bubblePrimary" alt="bolha-1" src="/login.svg" fill />
          Feito por{' '}
          <Link href="https://github.com/kevinpagliuca" target="_blank">
            Kevin Pagliuca
          </Link>
        </S.CopyrightText>
      </S.RightContainer>
    </S.BackgroundContainer>
  );
};
