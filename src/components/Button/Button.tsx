import React from 'react';

import { type IButtonProps } from './Button.interfaces';
import * as S from './Button.styles';

export const Button = ({ children, isLoading, disabled, ...props }: IButtonProps) => {
  return (
    <S.Button disabled={isLoading || disabled} {...props}>
      {isLoading ? (
        <S.LoaderSvg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20"></circle>
        </S.LoaderSvg>
      ) : (
        children
      )}
    </S.Button>
  );
};
