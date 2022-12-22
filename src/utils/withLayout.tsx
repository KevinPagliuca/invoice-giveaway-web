import React from 'react';

import { DefaultLayout } from 'layouts/DefaultLayout';

export function withLayout<T>(Component: React.FC) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (props: T extends object ? T : any) => {
    return (
      <DefaultLayout>
        <Component {...props} />
      </DefaultLayout>
    );
  };
}
