import React from 'react';

import { withLayout } from 'utils/withLayout';

import * as S from './Dashboard.styles';
import { ProfileBox } from './ProfileBox';

const DashboardContentBase = () => {
  return (
    <S.DashboardContainer>
      <ProfileBox />
    </S.DashboardContainer>
  );
};

export const DashboardContent = withLayout(DashboardContentBase);
