import Link from 'next/link';

import { rgba } from 'polished';
import styled, { css } from 'styled-components';
import { generateUnderlineHoverAnimation } from 'styles/animations';

export const LoginContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xl};
    background: ${theme.colors.white};
    flex: 1;
    width: 100%;
  `}
`;

export const BackLink = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.sm};
    color: ${theme.colors.headline};
    font-size: ${theme.fonts.primary};
    font-weight: 700;
    transition: ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`;

export const LoginContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${theme.spacings.xxl};
    box-shadow: ${theme.shadows.spreded};
    backdrop-filter: blur(4px);
    background-color: ${rgba(theme.colors.white, 0.85)};
    border-radius: 25px;
    width: 28rem;
  `}
`;

export const LoginTitle = styled.h4`
  ${({ theme }) => css`
    font-size: 2rem;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.headline};
    margin-bottom: ${theme.spacings.xxl};
  `}
`;

export const LoginForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacings.lg};
    width: 100%;
  `}
`;

export const SignUpText = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: ${theme.spacings.xxl};

    a {
      color: ${theme.colors.primary};
      font-weight: 700;
      line-height: 1.6;
      ${generateUnderlineHoverAnimation(theme.colors.primary)};
    }
  `};
`;
