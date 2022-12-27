import styled, { css } from 'styled-components';

export const TabsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 12px;

    padding: ${theme.spacings.md} ${theme.spacings.xl};
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadows.floating};
  `}
`;

export const TabsHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${theme.colors.primary};
      box-shadow: ${theme.shadows.grounded};
    }
  `}
`;

export const TabItem = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    border: 0;
    color: ${theme.colors.paragraph};
    font-size: 1.125rem;
    font-weight: 700;
    padding: ${theme.spacings.md};
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    border-bottom: 4px solid transparent;

    &.active {
      color: ${theme.colors.primary};
      border-bottom: 4px solid ${theme.colors.primary};
    }
  `}
`;

export const TabsContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.lg} 0;
  `}
`;
