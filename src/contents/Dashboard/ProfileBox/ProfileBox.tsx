import React from 'react';
import { RiSettings2Line } from 'react-icons/ri';

import { Wrapper } from 'components/Wrapper';
import { Avatar } from 'components/Avatar';

import * as S from './ProfileBox.styles';

export const ProfileBox = () => {
  return (
    <Wrapper>
      <S.ProfileBoxContainer>
        <S.EditProfileButton title="Editar dados">
          <RiSettings2Line size={24} />
        </S.EditProfileButton>
        <Avatar name="Kevin Pagliuca" round size="large" />
        <S.ProfileInfosContainer>
          <S.ProfileName>Kevin Pagliuca</S.ProfileName>
          <S.ProfileTextLine>
            <span>kevin.pagliuca</span>@gmail.com
          </S.ProfileTextLine>
          <S.ProfileTextLine>
            <span>23</span> anos
          </S.ProfileTextLine>
          <S.ProfileTextLine>
            Nível <span>1</span>
          </S.ProfileTextLine>

          <S.ProfileTextLine>
            Membro desde: <span>01/01/2021</span>
          </S.ProfileTextLine>
        </S.ProfileInfosContainer>
      </S.ProfileBoxContainer>
    </Wrapper>
  );
};
