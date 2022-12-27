import React, { useEffect } from 'react';

import { type ILoaderProps } from './Loader.interfaces';
import * as S from './Loader.styles';

export const Loader = ({ size, show }: ILoaderProps) => {
  useEffect(() => {
    if (show) document.body.classList.add('no-scroll');
    if (!show) document.body.classList.remove('no-scroll');
  }, [show]);

  return (
    <S.LoaderContainer size={size} show={show}>
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20"></circle>
      </svg>
    </S.LoaderContainer>
  );
};
