import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { rgba } from 'polished';
import styled, { css } from 'styled-components';
import { colors } from 'styles/theme';

import { type InvoiceNoteNormalTextAttributes } from './InvoiceNote.interfaces';

const dashedTopBorderStyles = css`
  border-top: 1px dashed ${({ theme }) => theme.colors.black};
`;

const dashedBottomBorderStyles = css`
  border-bottom: 1px dashed ${({ theme }) => theme.colors.black};
`;

export const InvoiceNoteContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;

    background: ${rgba(theme.colors.warning, 0.4)};
    border-radius: 10px;
    padding: ${theme.spacings.lg};

    > strong {
      font-size: 1.125rem;
      font-weight: 700;
      color: ${theme.colors.black};
      text-align: center;
      margin-bottom: ${theme.spacings.md};
    }
  `}
`;

export const InvoiceNoteText = styled.span<InvoiceNoteNormalTextAttributes>`
  ${({ theme, bold }) => css`
    font-size: 0.875rem;
    font-weight: ${bold ? 700 : 400};
    color: ${theme.colors.black};

    &:last-child {
      text-align: right;
    }
  `}
`;

export const InvoiceNoteHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacings.md} 0;

  ${dashedTopBorderStyles};
`;

export const RowSkeletonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.xs};
`;

export const InvoiceNoteSkeleton = styled(Skeleton).attrs({
  baseColor: rgba(colors.border, 0.25),
  highlightColor: rgba(colors.border, 0.4),
  duration: 0,
})``;

export const InvoiceNoteContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.sm};
  padding: ${({ theme }) => theme.spacings.md} 0;
  ${dashedTopBorderStyles};
`;

export const InvoiceNoteFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacings.md} 0;
  ${dashedTopBorderStyles};
  ${dashedBottomBorderStyles};
`;
