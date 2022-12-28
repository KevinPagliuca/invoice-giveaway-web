import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { type RecoverPassFormData } from 'shared/forms/RecoverPassForm';

import * as S from '../RecoverPass.styles';
import { type INewPassFormProps } from '../RecoverPass.interfaces';

export const NewPassFormContent = ({ userEmail }: INewPassFormProps) => {
  const {
    control,
    formState: { errors, isSubmitting },
  } = useFormContext<RecoverPassFormData>();

  return (
    <S.CommonFormContainer>
      <S.RecoverPassTitle>Redefinir senha</S.RecoverPassTitle>
      <S.RecoverPassSubtitle>
        Digite o código enviado no seu e-mail, e sua nova senha para conseguir alterá-la.
        <span>
          Verifique seu email: <strong>{userEmail}</strong>
        </span>
      </S.RecoverPassSubtitle>

      <Controller
        name="newPassword.code"
        control={control}
        render={({ field }) => (
          <Input label="Código" error={errors?.newPassword?.code} {...field} />
        )}
      />
      <Controller
        name="newPassword.password"
        control={control}
        render={({ field }) => (
          <Input
            label="Senha"
            type="password"
            withShowPassword
            error={errors?.newPassword?.password}
            {...field}
          />
        )}
      />
      <Controller
        name="newPassword.confirmation"
        control={control}
        render={({ field }) => (
          <Input
            label="Confirmar senha"
            type="password"
            withShowPassword
            error={errors?.newPassword?.confirmation}
            {...field}
          />
        )}
      />
      <S.CommonFormButtonWrapper>
        <Button type="submit" isLoading={isSubmitting} fullWidth>
          Enviar
        </Button>
      </S.CommonFormButtonWrapper>
    </S.CommonFormContainer>
  );
};
