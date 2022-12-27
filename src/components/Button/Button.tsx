import React from 'react';

import { type IButtonProps } from './Button.interfaces';
import * as S from './Button.styles';

export const Button = ({ children, isLoading, disabled, ...props }: IButtonProps) => {
  return (
    <S.Button disabled={isLoading || disabled} {...props}>
      {children}
    </S.Button>
  );
};
