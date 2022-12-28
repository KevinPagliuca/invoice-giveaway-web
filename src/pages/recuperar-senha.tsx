import React, { useEffect } from 'react';
import { type InferGetServerSidePropsType, type NextPage } from 'next';
import Head from 'next/head';

import { RecoverPassContent } from 'contents/RecoverPass';
import { withSSRPublic } from 'utils/withSSRPublic';

const RecoverPassword: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props
) => {
  useEffect(() => {
    window.history.pushState({}, '', '/recuperar-senha');
  }, []);

  return (
    <>
      <Head>
        <title>Recuperação de senha</title>
      </Head>
      <RecoverPassContent recoverData={props} />
    </>
  );
};

export default RecoverPassword;

export const getServerSideProps = withSSRPublic(async (ctx) => {
  const { cpf = null, email = null, code = null } = ctx.query;

  return {
    props: {
      cpf: cpf as string,
      email: email as string,
      code: code as string,
    },
  };
});
