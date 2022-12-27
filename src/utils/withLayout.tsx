import React from 'react';
import Head from 'next/head';

import { DefaultLayout } from 'layouts/DefaultLayout';

export function withLayout<T extends object>(Component: React.FC<T>, title?: string) {
  return (props: T) => {
    return (
      <DefaultLayout>
        <Head>
          <title>{title || 'Towty'}</title>
        </Head>
        <Component {...props} />
      </DefaultLayout>
    );
  };
}
