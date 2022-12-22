import Link from 'next/link';

import styled, { css } from 'styled-components';

import { LogoTitleSizes, type LogoContainerAttributes } from './Logo.interfaces';

export const LogoContainer = styled(Link)<LogoContainerAttributes>`
  ${({ theme, size, white }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.md};
    filter: drop-shadow(${theme.shadows.raised});

    h1 {
      font-size: ${LogoTitleSizes[size]}
      font-weight: bold;
      font-family: ${theme.fonts.secondary};
      color: ${white ? theme.colors.white : theme.colors.headline};
      letter-spacing: 2px;
    }
  `}
`;
