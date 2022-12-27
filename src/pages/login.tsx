import { type InferGetServerSidePropsType, type NextPage } from 'next';
import React from 'react';

import { LoginContent } from 'contents/Login';
import { withSSRPublic } from 'utils/withSSRPublic';

const Login: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = () => {
  return <LoginContent />;
};

export default Login;

export const getServerSideProps = withSSRPublic();
