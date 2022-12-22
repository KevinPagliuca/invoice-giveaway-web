import styled, { css } from 'styled-components';

import { type HeaderNavWrapperAttributes } from './Header.intefaces';

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    color: ${theme.colors.paragraph};
    display: flex;
    align-items: center;
    flex: 1;
    box-shadow: ${theme.shadows.custom({
      color: theme.colors.primary,
      type: 'grounded',
    })};
  `}
`;

export const HeaderContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: ${theme.sizes.pageMaxWidth};
    height: ${theme.sizes.headerHeight};
    flex: 1;

    @media (max-width: ${theme.sizes.pageMaxWidth}) {
      padding: 0 1rem;
    }
  `}
`;

export const HeaderNavWrapper = styled.nav<HeaderNavWrapperAttributes>`
  ${({ theme, width, offset }) => css`
    display: flex;
    align-items: center;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: ${offset}px;
      height: 4px;
      width: ${width}px;
      background-color: ${theme.colors.primary};
      transition: ${theme.transitions.default};
    }
  `}
`;

export const HeaderLink = styled.span`
  ${({ theme }) => css`
    font-size: 1.25rem;
    z-index: 1;
    font-weight: 700;
    color: ${theme.colors.headline};
    padding: ${theme.spacings.md};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transition: ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.primary};
    }

    &.active {
      color: ${theme.colors.primary};
    }
  `}
`;
