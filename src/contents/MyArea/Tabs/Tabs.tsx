import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import * as S from './Tabs.styles';
import { History } from './History';
import { CreateInvoice } from './CreateInvoice';

const tabs = [
  {
    key: 'history',
    label: 'Histórico',
    href: '/minha-area',
    content: History,
  },

  {
    key: 'new-invoice-note',
    label: 'Enviar nova NF',
    href: '/minha-area?tab=cadastrar-nota',
    tab: 'cadastrar-nota',
    content: CreateInvoice,
  },
];

export const Tabs = () => {
  const { query } = useRouter();
  const activeTab = query.tab as string;
  const TabContent = tabs?.find((tab) => tab.tab === activeTab)?.content;

  return (
    <S.TabsContainer>
      <S.TabsHeader>
        {tabs.map(({ href, label, tab, key }) => (
          <Link key={key} href={href}>
            <S.TabItem className={tab === activeTab ? 'active' : undefined}>{label}</S.TabItem>
          </Link>
        ))}
      </S.TabsHeader>

      <S.TabsContent>{TabContent && <TabContent />}</S.TabsContent>
    </S.TabsContainer>
  );
};
