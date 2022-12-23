import Link from 'next/link';

import styled, { css } from 'styled-components';

import { type LogoTextAttributes, LogoTitleSizes } from './Logo.interfaces';

export const LogoContainer = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.md};
    filter: drop-shadow(${theme.shadows.raised});
  `}
`;

export const LogoText = styled.h1<LogoTextAttributes>`
  ${({ theme, size, whiteText }) => css`
 font-size: ${LogoTitleSizes[size]}
 font-weight: bold;
 font-family: ${theme.fonts.secondary};
 color: ${whiteText ? theme.colors.white : theme.colors.headline};
 letter-spacing: 2px;
 `}
`;
