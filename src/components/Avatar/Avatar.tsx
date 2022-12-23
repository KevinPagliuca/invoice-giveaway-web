import React from 'react';

import { getNameInitials } from './helpers';
import { type IAvatarProps } from './Avatar.interfaces';
import * as S from './Avatar.styles';

const sizes = {
  small: '2.5rem',
  medium: '4rem',
  large: '6rem',
} as const;

export const Avatar = ({ src, name = '', size = 'medium', round, ...rest }: IAvatarProps) => {
  if (src) {
    return (
      <S.AvatarWrapper size={sizes[size]} round={round} name={name}>
        <S.AvatarImage
          size={sizes[size]}
          round={round}
          src={src}
          title={name ?? rest?.title}
          {...rest}
        />
      </S.AvatarWrapper>
    );
  }

  return (
    <S.AvatarWrapper size={sizes[size]} round={round} name={name}>
      <S.AvatarInitials title={name ?? rest?.title} size={sizes[size]} {...rest}>
        {getNameInitials(name, 3)}
      </S.AvatarInitials>
    </S.AvatarWrapper>
  );
};

Avatar.displayName = 'AvatarComponent';
