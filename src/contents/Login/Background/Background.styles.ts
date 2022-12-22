import styled, { css } from 'styled-components';
import { generateUnderlineHoverAnimation } from 'styles/animations';

export const BackgroundContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex: 1;
  position: relative;
  overflow: hidden;
`;

export const LeftContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${theme.spacings.xxl};
    background: ${theme.colors.primary};
    color: ${theme.colors.white};

    h1 {
      font-size: 2.5rem;
      font-family: ${theme.fonts.secondary};
      max-width: 18rem;
      text-align: left;
    }

    a {
      font-size: 1.5rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      font-family: ${theme.fonts.secondary};
      gap: ${theme.spacings.sm};
      cursor: pointer;
    }
  `}
`;

export const FloatBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const RightContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: ${theme.colors.white};
    position: relative;

    img {
      filter: drop-shadow(
        ${theme.shadows.custom({
          color: theme.colors.primary,
          type: 'grounded',
        })}
      );
    }
  `}
`;

export const CopyrightText = styled.span`
  ${({ theme }) => css`
    font-size: 1rem;
    margin-top: auto;
    margin-left: auto;
    color: ${theme.colors.headline};
    padding: ${theme.spacings.xxl};

    a {
      color: ${theme.colors.primary};
      transition: ${theme.transitions.default};
      font-weight: 700;
      position: relative;

      ${generateUnderlineHoverAnimation(theme.colors.primary)};
    }
  `}
`;
