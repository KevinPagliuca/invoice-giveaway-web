import React from 'react';

import { type IWrapperProps } from './Wrapper.interfaces';
import * as S from './Wrapper.styles';

export const Wrapper = ({ children, bg }: IWrapperProps) => {
  return (
    <S.WrapperContainer bg={bg}>
      <S.WrapperContent>{children}</S.WrapperContent>
    </S.WrapperContainer>
  );
};
