import { type GetServerSidePropsTyped, type GetServerSidePropsContext } from 'next';

import { dehydrate } from '@tanstack/react-query';
import { REACT_QUERY_KEYS } from 'constants/react-query';
import { getActiveToken, removeAuth } from 'services/api';
import { queryClient } from 'services/react-query';
import { usersService } from 'services/users';

function removeAuthAndRedirect(ctx: GetServerSidePropsContext) {
  removeAuth(ctx);
  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
}

export function withSSRAuth<P extends Record<string, unknown>>(fn?: GetServerSidePropsTyped<P>) {
  return async (ctx: GetServerSidePropsContext) => {
    try {
      const token = getActiveToken(ctx);
      if (!token) return removeAuthAndRedirect(ctx);

      if (token) {
        await queryClient.prefetchQuery({
          queryKey: [REACT_QUERY_KEYS.GET_ME],
          queryFn: () => usersService.getMe(ctx),
          staleTime: 1000 * 60 * 5, // 5 minutes,
          retry: false,
        });
      }

      const SSRProps = {
        dehydratedState: dehydrate(queryClient),
      };

      const hasMeQuery = SSRProps.dehydratedState.queries.find((query) =>
        query.queryKey.includes(REACT_QUERY_KEYS.GET_ME)
      );

      if (!hasMeQuery) queryClient.invalidateQueries();

      if (fn) return await fn(ctx, SSRProps);
      return {
        props: SSRProps,
      };
    } catch (err) {
      return removeAuthAndRedirect(ctx);
    }
  };
}
