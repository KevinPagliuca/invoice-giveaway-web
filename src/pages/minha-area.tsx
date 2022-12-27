import { type InferGetServerSidePropsType, type NextPage } from 'next';
import React from 'react';

import { MyAreaContent } from 'contents/MyArea';
import { withSSRAuth } from 'utils/withSSRAuth';

const MyArea: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = () => {
  return <MyAreaContent />;
};

export default MyArea;

export const getServerSideProps = withSSRAuth();
