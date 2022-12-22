import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

import { Logo } from 'components/Logo';

import * as S from './Background.styles';
import { type IRegisterBackgroundProps } from './Background.interfaces';

export const RegisterBackground = ({ children }: IRegisterBackgroundProps) => {
  return (
    <S.BackgroundContainer>
      <S.LeftContainer>
        <S.CopyrightText>
          <Image alt="register-hero" src="/register2.svg" fill />
          Feito por{' '}
          <Link href="https://github.com/kevinpagliuca" target="_blank">
            Kevin Pagliuca
          </Link>
        </S.CopyrightText>
      </S.LeftContainer>
      <S.FloatBox>{children}</S.FloatBox>
      <S.RightContainer>
        <Logo white />
        <h1>Informe seus dados para continuar!</h1>
        <Link href="/login">
          Login
          <FiChevronRight size={32} />
        </Link>
      </S.RightContainer>
    </S.BackgroundContainer>
  );
};
