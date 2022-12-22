import styled, { css } from 'styled-components';

export const HomeBannerContainer = styled.section`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xxxl} 0;
    gap: ${theme.spacings.xxl};
    filter: drop-shadow(${theme.shadows.grounded});
  `}
`;

export const HomeBannerContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.xl};
  `}
`;

export const HomeBannerTitle = styled.h1`
  ${({ theme }) => css`
    font-size: 3rem;
    font-weight: 700;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.headline};
    text-align: center;
  `}
`;

export const HomeBannerSubtitle = styled.h4`
  ${({ theme }) => css`
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.6;
    color: ${theme.colors.paragraph};
    font-family: ${theme.fonts.secondary};
    text-align: center;
  `}
`;

export const HomeBannerHightlightedText = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;

export const HomeBannerAdditionalNotice = styled.span`
  ${({ theme }) => css`
    font-size: 1.5rem;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.secondary};
    text-align: center;
    margin-top: auto;
  `}
`;
