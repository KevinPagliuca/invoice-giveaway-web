/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  type GetServerSidePropsResult,
  type GetServerSidePropsContext,
  type PreviewData,
} from 'next';

import { type DehydratedState } from '@tanstack/react-query';
import { type ParsedUrlQuery } from 'querystring';

declare module 'next' {
  export type ResultDehydratedState = {
    dehydratedState: DehydratedState;
  };

  export type GetServerSidePropsTyped<
    P extends { [key: string]: any } = { [key: string]: any },
    Q extends ParsedUrlQuery = ParsedUrlQuery,
    D extends PreviewData = PreviewData
  > = (
    context: GetServerSidePropsContext<Q, D>,
    dehydratedState: ResultDehydratedState
  ) => Promise<GetServerSidePropsResult<P>>;
}
