import { type InferGetServerSidePropsType, type NextPage } from 'next';
import React from 'react';
import Head from 'next/head';

import { LoginContent } from 'contents/Login';
import { withSSRPublic } from 'utils/withSSRPublic';

const Login: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContent />
    </>
  );
};

export default Login;

export const getServerSideProps = withSSRPublic();
