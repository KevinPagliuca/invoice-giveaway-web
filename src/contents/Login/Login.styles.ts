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

export const LoginContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${theme.spacings.xl} ${theme.spacings.xxl};
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
    margin-bottom: ${theme.spacings.md};
  `}
`;

export const LoginForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacings.md};
    width: 100%;
  `}
`;

export const ForgotPasswordLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.paragraph};
    font-size: 1rem;
    line-height: 1.4;
    width: fit-content;
    margin-left: auto;
    transition: ${theme.transitions.slow};

    &:hover {
      color: ${theme.colors.primary};
    }

    ${generateUnderlineHoverAnimation(theme.colors.primary)};
  `}
`;

export const SignUpText = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: ${theme.spacings.md};
    color: ${theme.colors.paragraph};

    a {
      color: ${theme.colors.primary};
      font-weight: 700;
      line-height: 1.6;
      ${generateUnderlineHoverAnimation(theme.colors.primary)};
    }
  `};
`;
