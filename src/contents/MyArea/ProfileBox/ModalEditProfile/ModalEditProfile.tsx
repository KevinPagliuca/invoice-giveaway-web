import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';

import { Modal } from 'components/Modal';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from 'contexts/Auth';
import { formatDate } from 'helpers/formatters';
import { UpdateProfileFormSchema, type EditProfileFormData } from 'shared/forms/UpdateProfileForm';

import { type IModalEditProfileProps } from './ModalEditProfile.interfaces';
import * as S from './ModalEditProfile.styles';
import { EditProfileForm } from './EditProfileForm';

export const ModalEditProfile = ({ onOpenChange, open: isOpen }: IModalEditProfileProps) => {
  const { user, handleUpdate } = useAuth();

  const methods = useForm<EditProfileFormData>({
    mode: 'onChange',
    resolver: zodResolver(UpdateProfileFormSchema),
    defaultValues: {
      personal: {
        name: user?.name,
        birthDate: user?.birthDate && formatDate(user?.birthDate),
        rg: user?.rg ?? '',
      },
      address: {
        zipCode: user?.zipCode,
        street: user?.street,
        number: user?.number,
        complement: user?.complement ?? '',
        district: user?.district,
        city: user?.city,
        state: user?.state,
      },
      contact: {
        email: user?.email,
        mainPhone: user?.mainPhone,
        secondaryPhone: user?.secondaryPhone ?? '',
      },
    },
  });

  const onSubmit = useCallback(
    methods.handleSubmit(async (data) => {
      try {
        await handleUpdate(data);
        onOpenChange(false);
      } catch {}
    }),
    []
  );

  return (
    <FormProvider {...methods}>
      <Modal open={isOpen} onOpenChange={onOpenChange}>
        <S.ModalEditProfileContainer
          animate={isOpen ? 'show' : 'hide'}
          initial="hide"
          exit="hide"
          variants={{
            show: {
              opacity: 1,
              scale: 1,
              translateY: 0,
              transition: { duration: 0.3 },
            },
            hide: {
              opacity: 0,
              scale: 1,
              translateY: '100%',
              transition: { duration: 0.3 },
            },
          }}
        >
          <S.ModalContent>
            <S.ModalHeader>
              <S.ModalTitle>Atualizar meus dados</S.ModalTitle>
              <S.CloseButton onClick={() => onOpenChange(false)}>
                <FiX size={32} />
              </S.CloseButton>
            </S.ModalHeader>

            <S.ModalBody>
              <S.Form onSubmit={onSubmit}>
                <EditProfileForm />
              </S.Form>
            </S.ModalBody>
          </S.ModalContent>
        </S.ModalEditProfileContainer>
      </Modal>
    </FormProvider>
  );
};
