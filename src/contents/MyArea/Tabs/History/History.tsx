import React, { useMemo } from 'react';
import Link from 'next/link';

import { useInvoices } from 'hooks/invoices';
import { formatToNow } from 'helpers/formatters';
import { useActiveGiveaway } from 'hooks/giveway';
import { InvoiceCard } from 'components/InvoiceCard';
import { InvoiceStatusEnum } from 'interfaces/invoices';

import * as S from './History.styles';
import { MY_AREA_TABS } from '../Tabs';

export const History = () => {
  const { data: invoices, isLoading } = useInvoices();
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
          O próximo sorteio será <span>{formatToNow(activeGiveaway.endDate)}.</span>
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
        <S.HistoryContentTitle>Seu histórico</S.HistoryContentTitle>
        <S.HistoryContentSubtitle>
          Legenda
          <span>
            <S.LegendItem status={InvoiceStatusEnum.WINNER}>Ganhou</S.LegendItem>
            <S.LegendItem status={InvoiceStatusEnum.LOSER}>Não sorteado</S.LegendItem>
            <S.LegendItem status={InvoiceStatusEnum.PENDING}>Aguardando resultado</S.LegendItem>
            <S.LegendItem status={InvoiceStatusEnum.WAITING}>Aguardando novo sorteio</S.LegendItem>
          </span>
        </S.HistoryContentSubtitle>

        <S.HistoryGrid>
          {invoices?.map((item) => (
            <InvoiceCard key={item.id} invoice={item} />
          ))}
        </S.HistoryGrid>

        {invoices?.length === 0 && !isLoading && (
          <S.WithoutInvoices>
            Você não tem nenhuma Nota Fiscal cadastrada ainda{' '}
            <Link href={MY_AREA_TABS.newInvoice.href}>Clique aqui</Link> para cadastrar uma Nota
            Fiscal.
          </S.WithoutInvoices>
        )}
      </S.HistoryContent>
    </S.HistoryContainer>
  );
};
