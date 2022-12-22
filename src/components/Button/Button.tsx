import React from 'react';

import { type IButtonProps } from './Button.interfaces';
import * as S from './Button.styles';

export const Button = ({ children, ...props }: IButtonProps) => {
  return <S.Button {...props}>{children}</S.Button>;
};
