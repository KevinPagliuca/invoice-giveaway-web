import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import * as S from './Tabs.styles';
import { History } from './History';
import { CreateInvoice } from './CreateInvoice';

export const MY_AREA_TABS = {
  history: {
    label: 'Histórico',
    href: '/minha-area',
    tab: undefined,
    content: History,
  },
  newInvoice: {
    label: 'Enviar nova NF',
    href: '/minha-area?tab=cadastrar-nota',
    tab: 'cadastrar-nota',
    content: CreateInvoice,
  },
};

export const Tabs = () => {
  const { query } = useRouter();
  const activeTab = query?.tab as string;
  const TabContent = Object.values(MY_AREA_TABS).find(({ tab }) => tab === activeTab)?.content;

  return (
    <S.TabsContainer>
      <S.TabsHeader>
        {Object.entries(MY_AREA_TABS).map(([key, { href, label, tab }]) => (
          <Link key={key} href={href}>
            <S.TabItem className={tab === activeTab ? 'active' : undefined}>{label}</S.TabItem>
          </Link>
        ))}
      </S.TabsHeader>

      <S.TabsContent>{TabContent && <TabContent />}</S.TabsContent>
    </S.TabsContainer>
  );
};
