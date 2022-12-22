import Link from 'next/link';

import styled, { css } from 'styled-components';

export const FooterContainer = styled.div`
  ${({ theme }) => css`
    height: ${theme.sizes.footerHeight};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.paragraph};
    display: flex;
    align-items: center;
    width: 100%;
  `}
`;

export const FooterContent = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0 auto;
    max-width: ${theme.sizes.pageMaxWidth};
    gap: ${theme.spacings.xl};
    padding: ${theme.spacings.xl} 0;

    @media (max-width: ${theme.sizes.pageMaxWidth}) {
      padding-right: ${theme.spacings.md};
      padding-left: ${theme.spacings.md};
    }
  `}
`;

export const FooterLeftSide = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.md};
  `}
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.primary};
    font-size: 1rem;
    font-weight: 500;
    padding: 0 ${theme.spacings.lg};

    & + & {
      border-left: 2px solid ${theme.colors.primary};
    }
  `}
`;

export const FooterCenterSide = styled.div``;

export const FooterRightSide = styled.div`
  display: flex;
  align-items: center;
`;
