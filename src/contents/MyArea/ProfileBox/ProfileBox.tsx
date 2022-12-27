import React, { useCallback } from 'react';
import { RiSettings2Line } from 'react-icons/ri';

import { Avatar } from 'components/Avatar';
import { useAuth } from 'contexts/Auth';
import { differenceInYears } from 'date-fns';

import * as S from './ProfileBox.styles';
import { ModalEditProfile } from './ModalEditProfile';

export const ProfileBox = () => {
  const [editModal, setEditModal] = React.useState(false);

  const { user } = useAuth();
  const userEmail = { email: user?.email.split('@')[0], domain: user?.email.split('@')[1] };

  const userAge = user?.birthDate && differenceInYears(new Date(), new Date(user.birthDate));

  const onCloseModal = useCallback(() => {
    setEditModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setEditModal(true);
  }, []);

  return (
    <S.ProfileBoxContainer>
      <S.EditProfileButton title="Editar dados" onClick={onOpenModal}>
        <RiSettings2Line size={24} />
      </S.EditProfileButton>
      <Avatar name="Kevin Pagliuca" round size="large" />
      <S.ProfileInfosContainer>
        <S.ProfileName>{user?.name}</S.ProfileName>
        <S.ProfileTextLine>
          <span>{userEmail.email}</span>@{userEmail.domain}
        </S.ProfileTextLine>
        <S.ProfileTextLine>
          <span>{userAge}</span> anos
        </S.ProfileTextLine>
      </S.ProfileInfosContainer>

      <ModalEditProfile open={editModal} onOpenChange={onCloseModal} />
    </S.ProfileBoxContainer>
  );
};
