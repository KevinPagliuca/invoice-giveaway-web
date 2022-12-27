import React from 'react';

import { Wrapper } from 'components/Wrapper';
import { withLayout } from 'utils/withLayout';

import * as S from './MyArea.styles';
import { ProfileBox } from './ProfileBox';
import { Tabs } from './Tabs';

const MyAreaBase = () => {
  return (
    <Wrapper>
      <S.MyAreaContainer>
        <ProfileBox />
        <Tabs />
      </S.MyAreaContainer>
    </Wrapper>
  );
};

export const MyAreaContent = withLayout(MyAreaBase);
