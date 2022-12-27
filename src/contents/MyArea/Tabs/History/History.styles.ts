import styled, { css } from 'styled-components';

import { type HistoryItemGridAttributes } from './History.interfaces';

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NextGiveaway = styled.h1`
  ${({ theme }) => css`
    font-size: 1.5rem;
    font-weight: 500;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacings.md};
    font-family: ${theme.fonts.secondary};

    span {
      font-weight: 700;
      color: ${theme.colors.secondary};
    }
  `}
`;

export const WithoutNextGiveaway = styled.h1`
  ${({ theme }) => css`
    font-size: 1.25rem;
    font-weight: 500;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacings.md};
    font-family: ${theme.fonts.primary};
    span {
      font-weight: 700;
      color: ${theme.colors.secondary};
    }
  `}
`;

export const HistoryContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.md};
  `}
`;

export const HistoryItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: ${theme.spacings.md};

    box-shadow: ${theme.shadows.grounded};
    padding: ${theme.spacings.md} ${theme.spacings.lg};
    border: 2px solid transparent;
    border-radius: 8px;

    height: 100%;
    transition: ${theme.transitions.default};
    cursor: pointer;

    &:hover {
      border-color: ${theme.colors.primary};
    }
  `}
`;

export const HistoryItemWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xs};
    width: 100px;

    &:not(:first-child):not(:last-child) {
      padding: 0 ${theme.spacings.md};
    }
  `}
`;

export const HistoryItemTitle = styled.h3<HistoryItemGridAttributes>`
  ${({ theme, gridArea }) => css`
    font-size: 1rem;
    font-weight: 700;
    color: ${theme.colors.headline};
    grid-area: ${gridArea};
    margin-bottom: ${theme.spacings.xs};
  `}
`;

export const HistoryItemValue = styled.span<HistoryItemGridAttributes>`
  ${({ theme, gridArea }) => css`
    font-size: 0.875rem;
    font-weight: 700;
    color: ${theme.colors.gray};
    grid-area: ${gridArea};

    strong {
      color: ${theme.colors.primary};
    }
  `}
`;

export const HistoryItemStatus = styled.span<HistoryItemGridAttributes>`
  ${({ theme, gridArea }) => css`
    font-size: 0.875rem;
    font-weight: 700;
    color: ${theme.colors.gray};
    grid-area: ${gridArea};

    strong {
      color: ${theme.colors.primary};
    }
  `}
`;

export const Divider = styled.div`
  ${({ theme }) => css`
    width: 2px;
    background-color: ${theme.colors.secondary};
    margin: 0 ${theme.spacings.md};
  `}
`;

export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.md};

    box-shadow: ${theme.shadows.grounded};
    padding: ${theme.spacings.md} ${theme.spacings.lg};
    border: 2px solid transparent;
    border-radius: 8px;

    height: 100%;
    transition: ${theme.transitions.default};
    cursor: pointer;

    &:hover {
      border-color: ${theme.colors.primary};
    }
  `}
`;

export const ItemRow = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${theme.spacings.sm};
  `}
`;

export const ItemColumn = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    strong {
      font-size: 1rem;
      font-weight: 700;
      color: ${theme.colors.headline};
      margin-bottom: ${theme.spacings.xs};
    }

    span {
      font-size: 0.875rem;
      font-weight: 700;
      color: ${theme.colors.gray};

      strong {
        color: ${theme.colors.primary};
      }
    }
  `}
`;
