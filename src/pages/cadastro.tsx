import { type InferGetServerSidePropsType, type NextPage } from 'next';
import React from 'react';
import Head from 'next/head';

import { RegisterContent } from 'contents/Register';
import { withSSRPublic } from 'utils/withSSRPublic';

const Register: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = () => {
  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>
      <RegisterContent />
    </>
  );
};

export default Register;

export const getServerSideProps = withSSRPublic();
