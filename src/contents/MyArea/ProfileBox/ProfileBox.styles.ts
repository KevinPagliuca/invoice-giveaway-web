import styled, { css } from 'styled-components';

export const ProfileBoxContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background-color: ${theme.colors.white};

    padding: ${theme.spacings.xl};
    gap: ${theme.spacings.md};
    min-width: 20rem;
    height: fit-content;

    position: sticky;
    top: calc(${theme.sizes.headerHeight} + ${theme.spacings.xl});
    box-shadow: ${theme.shadows.spreded};
  `}
`;

export const ProfileInfosContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxs};
    width: 100%;
  `}
`;

export const ProfileName = styled.h4`
  ${({ theme }) => css`
    font-size: 1.275rem;
    font-weight: 700;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.secondary};
  `}
`;

export const ProfileTextLine = styled.span`
  ${({ theme }) => css`
    font-size: 1rem;
    font-weight: 400;
    color: ${theme.colors.paragraph};

    span {
      font-weight: 700;
      color: ${theme.colors.primary};
    }
  `}
`;
