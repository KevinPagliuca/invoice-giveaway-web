import { getInvoiceStatusColor } from 'components/InvoiceCard/InvoiceCard.styles';
import { type InvoiceStatusEnum } from 'interfaces/invoices';
import styled, { css } from 'styled-components';
import { generateUnderlineHoverAnimation } from 'styles/animations';

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NextGiveaway = styled.h1`
  ${({ theme }) => css`
    font-size: 1.25rem;
    font-weight: 500;
    color: ${theme.colors.headline};
    margin-bottom: ${theme.spacings.md};

    span {
      font-weight: 700;
      color: ${theme.colors.primary};
    }
  `}
`;

export const WithoutNextGiveaway = styled.h1`
  ${({ theme }) => css`
    font-size: 1.25rem;
    font-weight: 500;
    color: ${theme.colors.headline};
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
    gap: ${theme.spacings.lg};
    padding-top: ${theme.spacings.md};
    width: 100%;
    border-top: 1px solid ${theme.colors.primary};
  `}
`;

export const HistoryContentTitle = styled.h2`
  ${({ theme }) => css`
    font-size: 1.5rem;
    line-height: 1;
    font-weight: 500;
    color: ${theme.colors.paragraph};
  `}
`;

export const HistoryContentSubtitle = styled.p`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 1rem;
    font-weight: 700;
    color: ${theme.colors.paragraph};
    gap: ${theme.spacings.sm};

    > span {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      font-size: 0.875rem;
      font-weight: 400;
      color: ${theme.colors.paragraph};
      gap: ${theme.spacings.sm};
    }
  `};
`;

export const LegendItem = styled.span<{ status: InvoiceStatusEnum }>`
  ${({ theme, status }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.sm};

    &::before {
      content: '';
      display: block;
      border-radius: 50%;
      width: 1rem;
      height: 1rem;
      ${getInvoiceStatusColor(status)};
      box-shadow: ${theme.shadows.grounded};
    }
  `}
`;

export const HistoryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacings.xl};
  width: 100%;
`;

export const WithoutInvoices = styled.span`
  ${({ theme }) => css`
    font-size: 1rem;
    font-weight: 500;
    color: ${theme.colors.paragraph};

    a {
      color: ${theme.colors.primary};
      ${generateUnderlineHoverAnimation(theme.colors.primary)}
    }
  `}
`;
