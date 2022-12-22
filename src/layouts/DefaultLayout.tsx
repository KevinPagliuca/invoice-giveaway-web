import React from 'react';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import { type IDefaultLayoutProps } from './DefaultLayout.interfaces';
import * as S from './DefaultLayout.styles';

export const DefaultLayout = ({ children }: IDefaultLayoutProps) => {
  return (
    <S.DefaultLayoutContainer>
      <Header />
      <S.DefaultLayoutContent>{children}</S.DefaultLayoutContent>
      <Footer />
    </S.DefaultLayoutContainer>
  );
};
