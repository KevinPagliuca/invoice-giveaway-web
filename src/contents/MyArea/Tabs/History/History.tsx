import React, { useMemo } from 'react';

import { useInvoices } from 'hooks/invoices';
import { formatCurrency, formatDate, formatISODate, formatToNow } from 'helpers/formatters';
import { useActiveGiveaway } from 'hooks/giveway';

import * as S from './History.styles';

export const History = () => {
  const { data: invoices } = useInvoices();
  const { data: activeGiveaway } = useActiveGiveaway();

  const NextGiveawayText = useMemo(() => {
    if (activeGiveaway) {
      const text = formatToNow(activeGiveaway.endDate);

      if (text.includes('há')) {
        return (
          <S.WithoutNextGiveaway>
            Último sorteio realizado <span>{formatToNow(activeGiveaway.endDate)}.</span>
          </S.WithoutNextGiveaway>
        );
      }
      return (
        <S.NextGiveaway>
          Próximo sorteio <span>{formatToNow(activeGiveaway.endDate)}.</span>
        </S.NextGiveaway>
      );
    } else {
      return <S.WithoutNextGiveaway>Sem próximos sorteios agendados.</S.WithoutNextGiveaway>;
    }
  }, [activeGiveaway]);

  return (
    <S.HistoryContainer>
      {NextGiveawayText}
      <S.HistoryContent>
        {invoices?.map((item) => (
          <S.Item key={item.id}>
            <S.ItemRow>
              <S.ItemColumn>
                <strong>Número da NF</strong>
                <span> {item.number}</span>
              </S.ItemColumn>
              <S.ItemColumn>
                <strong>Data da NF</strong>
                <span> {formatDate(formatISODate(item.date))}</span>
              </S.ItemColumn>

              <S.ItemColumn>
                <strong>Valor da NF</strong>
                <span> {formatCurrency(item.totalValue)}</span>
              </S.ItemColumn>

              <S.ItemColumn>
                <strong>Cód. da Sorte</strong>
                <span> {item.luckyNumber}</span>
              </S.ItemColumn>
            </S.ItemRow>
          </S.Item>
        ))}
      </S.HistoryContent>
    </S.HistoryContainer>
  );
};
