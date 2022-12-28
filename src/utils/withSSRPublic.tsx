import {
  type GetServerSidePropsResult,
  type GetServerSideProps,
  type GetServerSidePropsContext,
} from 'next';

import { getActiveToken } from 'services/api';

export function withSSRPublic<P extends object>(fn?: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
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
      props: {} as P,
    };
  };
}
