import Image from 'next/image';
import React from 'react';

import { LogoImageSizes, type ILogoProps } from './Logo.interfaces';
import * as S from './Logo.styles';

export const Logo = ({ size = 'small', white }: ILogoProps) => {
  return (
    <S.LogoContainer href="/" white={white} size={size}>
      <Image
        src="/towty-logo.png"
        alt="towty-logo"
        height={LogoImageSizes[size]}
        width={LogoImageSizes[size]}
      />
      <h1>TOWTY</h1>
    </S.LogoContainer>
  );
};
