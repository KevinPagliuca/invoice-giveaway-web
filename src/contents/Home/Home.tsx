import React from 'react';

import { withLayout } from 'utils/withLayout';

import * as S from './Home.styles';
import { HomeBanner } from './Banner';
import { Participation } from './Participation';

const HomeContentBase = () => {
  return (
    <S.HomeContainer>
      <HomeBanner />
      <Participation />
    </S.HomeContainer>
  );
};

export const HomeContent = withLayout(HomeContentBase);
