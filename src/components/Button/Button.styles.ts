import { darken } from 'polished';
import styled, { css } from 'styled-components';

import { type ButtonAttributes } from './Button.interfaces';

export const Button = styled.button<ButtonAttributes>`
  ${({ theme, fullWidth }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 0;
    border-radius: 8px;
    padding: ${theme.spacings.md} ${theme.spacings.lg};
    font-size: 1.125rem;
    font-weight: 600;
    max-height: ${theme.sizes.buttonHeight};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.sm};
    outline: 0;
    transition: ${theme.transitions.default};
    flex: ${fullWidth ? '1' : '0'};
    width: ${fullWidth ? '100%' : 'auto'};

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus {
      background-color: ${darken(0.1, theme.colors.primary)};
      box-shadow: ${theme.shadows.custom({
        color: theme.colors.primary,
        type: 'floating',
      })};
    }
  `}
`;
