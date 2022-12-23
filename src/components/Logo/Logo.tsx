import Image from 'next/image';
import React from 'react';

import { LogoImageSizes, type ILogoProps } from './Logo.interfaces';
import * as S from './Logo.styles';

export const Logo = ({ size = 'small', whiteText }: ILogoProps) => {
  return (
    <S.LogoContainer href="/">
      <Image
        src="/towty-logo.png"
        alt="towty-logo"
        height={LogoImageSizes[size]}
        width={LogoImageSizes[size]}
      />
      <S.LogoText whiteText={whiteText} size={size}>
        TOWTY
      </S.LogoText>
    </S.LogoContainer>
  );
};
