import { type GetServerSideProps, type GetServerSidePropsContext } from 'next';

import { getActiveToken } from 'services/api';

export function withSSRPublic<P extends object>(fn?: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext) => {
    const token = getActiveToken(ctx);

    if (token) {
      return {
        redirect: {
          destination: '/minha-area',
          permanent: false,
        },
      };
    }

    if (fn) return await fn(ctx);

    return {
      props: {},
    };
  };
}
