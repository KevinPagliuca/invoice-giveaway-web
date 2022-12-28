import React, { useCallback } from 'react';

import { Avatar } from 'components/Avatar';
import { useAuth } from 'contexts/Auth';
import { Button } from 'components/Button';

import * as S from './ProfileBox.styles';
import { ModalEditProfile } from './ModalEditProfile';

export const ProfileBox = () => {
  const { user } = useAuth();
  const [email, domain] = user?.email?.split('@') ?? ['', ''];
  const [editModal, setEditModal] = React.useState(false);

  const onCloseModal = useCallback(() => {
    setEditModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setEditModal(true);
  }, []);

  const hideCPF = user?.cpf?.slice(4, 11);

  return (
    <S.ProfileBoxContainer>
      <Avatar name="Kevin Pagliuca" round size="large" />
      <S.ProfileInfosContainer>
        <S.ProfileName>{user?.name}</S.ProfileName>
        <S.ProfileTextLine>
          Email: <span>{email}</span>@{domain}
        </S.ProfileTextLine>
        <S.ProfileTextLine>
          CPF:{' '}
          <span>
            ***.<strong>{hideCPF}</strong>.***
          </span>
        </S.ProfileTextLine>
      </S.ProfileInfosContainer>

      <Button type="button" fullWidth onClick={onOpenModal}>
        Editar dados
      </Button>

      <ModalEditProfile open={editModal} onOpenChange={onCloseModal} />
    </S.ProfileBoxContainer>
  );
};
