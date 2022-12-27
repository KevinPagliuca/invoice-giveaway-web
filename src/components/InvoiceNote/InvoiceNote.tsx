import React from 'react';

import { formatCurrency } from 'helpers/formatters';

import { type IInvoiceNoteProps } from './InvoiceNote.interfaces';
import * as S from './InvoiceNote.styles';

export const InvoiceNote = ({
  cnpj = 'XX.XXX.XXX/XXX-XX',
  coo = 'XXXXXX',
  date = 'XX/XX/XXXX',
  totalValue = '0',
}: IInvoiceNoteProps) => {
  const formattedValue = formatCurrency(totalValue);

  return (
    <S.InvoiceNoteContainer>
      <strong>CUPOM FISCAL</strong>
      <S.InvoiceNoteHeader>
        <S.InvoiceNoteText bold>{date}</S.InvoiceNoteText>
        <S.RowSkeletonWrapper>
          <S.InvoiceNoteSkeleton width={70} height="1rem" />
          <S.InvoiceNoteSkeleton width={30} height="1rem" />
        </S.RowSkeletonWrapper>
        <S.InvoiceNoteText>
          COO: <b>{coo}</b>
        </S.InvoiceNoteText>
      </S.InvoiceNoteHeader>

      <S.InvoiceNoteContent>
        <S.InvoiceNoteSkeleton width={200} height="1rem" />
        <S.InvoiceNoteText>
          CNPJ: <b>{cnpj}</b>
        </S.InvoiceNoteText>
        <S.InvoiceNoteSkeleton width={130} height="1rem" />
        <S.InvoiceNoteSkeleton width={230} height="1rem" />
      </S.InvoiceNoteContent>

      <S.InvoiceNoteContent>
        <S.InvoiceNoteSkeleton width={200} height="1rem" />
      </S.InvoiceNoteContent>

      <S.InvoiceNoteFooter>
        <S.InvoiceNoteText>TOTAL</S.InvoiceNoteText>
        <S.InvoiceNoteText bold>{formattedValue}</S.InvoiceNoteText>
      </S.InvoiceNoteFooter>
    </S.InvoiceNoteContainer>
  );
};
