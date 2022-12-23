import { rgba } from 'polished';
import styled, { css } from 'styled-components';

import { getRandomColor } from './helpers';
import { type AvatarAttributes } from './Avatar.interfaces';

export const AvatarWrapper = styled.div<AvatarAttributes>`
  ${({ theme, size, round, name }) => {
    const randomColor = name ? getRandomColor(name) : theme.colors.primary;
    const randomColorWithOpacity = rgba(randomColor, 0.5);

    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${size};
      height: ${size};
      border-radius: ${round ? '50%' : '0'};
      background: ${randomColor};
      filter: drop-shadow(0 0 0.325rem ${randomColorWithOpacity});
      position: relative;
    `;
  }}
`;

export const AvatarImage = styled.img<AvatarAttributes>`
  ${({ size, round }) => css`
    width: ${size};
    height: ${size};
    border-radius: ${round ? '50%' : '0'};
    object-fit: contain;
    aspect-ratio: 16/9;
  `}
`;

export const AvatarInitials = styled.span<AvatarAttributes>`
  ${({ theme, size }) => css`
    font-family: 'Roboto Slab', Arial, sans-serif;
    font-weight: 500;
    font-size: calc(${size} / 3);
    color: ${theme.colors.white};
  `}
`;
