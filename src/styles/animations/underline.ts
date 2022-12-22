import { css } from 'styled-components';

export const generateUnderlineHoverAnimation = (color: string) => css`
  position: relative;
  ${({ theme }) => css`
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background: ${color};
      transition: ${theme.transitions.slow};
    }

    &:hover::after {
      width: 100%;
    }

    &:not(:hover)::after {
      left: auto;
      right: 0;
    }
  `}
`;
