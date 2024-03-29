import { breakpoints } from 'constants/breakpoints';
import styled, { css } from 'styled-components';
import { generateUnderlineHoverAnimation } from 'styles/animations';

import { type SidesAttributes } from './Background.interfaces';

export const BackgroundContainer = styled.div`
  display: grid;
  flex: 1;
  position: relative;
  overflow: hidden;
`;

export const TitleContainer = styled.div<SidesAttributes>`
  ${({ theme, isReverse }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: ${theme.spacings.xxl};
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 50%;
    z-index: 1;

    ${isReverse &&
    css`
      align-items: flex-end;
      left: unset;
      right: 0;
    `}

    > h1 {
      font-size: 2rem;
      font-family: ${theme.fonts.secondary};
      max-width: 18rem;
      text-align: ${isReverse ? 'right' : 'left'};
    }

    > a {
      font-size: 1.5rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      flex-direction: ${isReverse ? 'row-reverse' : 'row'};
      font-family: ${theme.fonts.secondary};
      gap: ${theme.spacings.sm};
      cursor: pointer;
    }

    @media (max-width: ${breakpoints.smallDesktop}) {
      width: 100%;
      position: relative;
      left: unset;
      right: unset;
      top: unset;
      bottom: unset;
      align-items: center;
      gap: ${theme.spacings.xl};

      h1 {
        max-width: 100%;
      }
    }
  `}
`;

export const FloatBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: ${theme.spacings.xxxl} auto;
    z-index: 4;

    @media (max-width: ${breakpoints.smallDesktop}) {
      display: none;
    }
  `}
`;
export const FloatBoxMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 4;

  @media (min-width: ${breakpoints.smallDesktop}) {
    display: none;
  }
`;

export const HeroContainer = styled.div<SidesAttributes>`
  ${({ theme, isReverse }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: ${theme.colors.white};
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 50%;
    z-index: 1;

    ${isReverse &&
    css`
      align-items: flex-end;
      right: unset;
      left: 0;
    `}

    img {
      filter: drop-shadow(
        ${theme.shadows.custom({
          color: theme.colors.primary,
          type: 'grounded',
        })}
      );
    }

    @media (max-width: ${breakpoints.smallDesktop}) {
      display: none;
    }
  `}
`;

export const CopyrightText = styled.span<SidesAttributes>`
  ${({ theme, isReverse }) => css`
    font-size: 1rem;
    margin-top: auto;
    margin-right: ${!isReverse ? 'unset' : 'auto'};
    margin-left: ${!isReverse ? 'auto' : 'unset'};
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
