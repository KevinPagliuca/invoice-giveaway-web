import React, { useMemo } from 'react';

import { formatCurrency } from 'helpers/formatters';

import { type IInvoiceCardProps } from './InvoiceCard.interfaces';
import * as S from './InvoiceCard.styles';

export const InvoiceCard = ({
  invoice: { luckyCode, number, status, totalValue, giveaway },
}: IInvoiceCardProps) => {
  const CardHeader = useMemo(() => {
    if (giveaway) {
      return (
        <S.InvoiceCardHeader>
          <strong>Cód. Sorteio:</strong>
          <span>{giveaway?.reference}</span>
        </S.InvoiceCardHeader>
      );
    } else {
      return (
        <S.InvoiceCardHeader>
          <strong>Aguardando próx. sorteio</strong>
        </S.InvoiceCardHeader>
      );
    }
  }, [giveaway]);

  return (
    <S.InvoiceCardContainer status={status}>
      {CardHeader}
      <S.InvoiceCardBody>
        <S.ItemWrapper>
          <S.Title>Cód. da sorte</S.Title>
          <S.Value>{luckyCode}</S.Value>
        </S.ItemWrapper>
        <S.ItemWrapper>
          <S.Title>Nº da NF</S.Title>
          <S.Value>{number}</S.Value>
        </S.ItemWrapper>
        <S.ItemWrapper>
          <S.Title>Valor da NF</S.Title>
          <S.Value>{formatCurrency(totalValue)}</S.Value>
        </S.ItemWrapper>
      </S.InvoiceCardBody>
    </S.InvoiceCardContainer>
  );
};
