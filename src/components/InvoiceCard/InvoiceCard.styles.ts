import { InvoiceStatusEnum } from 'interfaces/invoices';
import styled, { css } from 'styled-components';

import { type InvoiceCardContainerAttributes } from './InvoiceCard.interfaces';

export const getInvoiceStatusColor = (status: InvoiceStatusEnum) => {
  switch (status) {
    case InvoiceStatusEnum.WAITING:
      return css`
        background-color: ${({ theme }) => theme.colors.border};
      `;
    case InvoiceStatusEnum.PENDING:
      return css`
        background-color: ${({ theme }) => theme.colors.primary};
      `;
    case InvoiceStatusEnum.WINNER:
      return css`
        background-color: ${({ theme }) => theme.colors.success};
      `;

    case InvoiceStatusEnum.LOSER:
      return css`
        background-color: ${({ theme }) => theme.colors.error};
      `;
    default:
      return css`
        background-color: ${({ theme }) => theme.colors.border};
      `;
  }
};

export const InvoiceCardContainer = styled.div<InvoiceCardContainerAttributes>`
  ${({ theme, status }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 12px;
    max-width: 20rem;
    width: 100%;
    box-shadow: ${theme.shadows.grounded};
    background-color: ${theme.colors.background};
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 8px;
      ${getInvoiceStatusColor(status)};
    }
  `}
`;

export const InvoiceCardHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${theme.colors.primary};
    padding: ${theme.spacings.md} ${theme.spacings.lg};
    gap: ${theme.spacings.md};

    strong {
      font-size: 1rem;
      font-weight: 700;
      color: ${theme.colors.headline};
    }

    span {
      font-size: 0.875rem;
      font-weight: 700;
      color: ${theme.colors.primary};
    }
  `}
`;

export const InvoiceCardBody = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${theme.spacings.md} ${theme.spacings.lg};
    gap: ${theme.spacings.md};
  `}
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.headline};
`;

export const Value = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;
