import React, { useCallback, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { type RecoverPassFormData } from 'shared/forms/RecoverPassForm';

import * as S from '../RecoverPass.styles';
import { type IRecoverPassFormProps } from '../RecoverPass.interfaces';

export const RecoverPassFormContent = ({ onSubmitStep }: IRecoverPassFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext<RecoverPassFormData>();

  const hasErrors = errors && Object.keys(errors).length > 0;

  const onSubmit = useCallback(async () => {
    const isValid = await trigger('recoverPass');
    setIsLoading(true);
    if (isValid) await onSubmitStep();
    setIsLoading(false);
  }, []);

  return (
    <S.CommonFormContainer>
      <S.RecoverPassTitle>Recuperar Senha</S.RecoverPassTitle>
      <S.RecoverPassSubtitle>
        Informe seu CPF para receber um código de recuperação de senha no e-mail de seu cadastro
      </S.RecoverPassSubtitle>

      <Controller
        name="recoverPass.cpf"
        control={control}
        render={({ field }) => (
          <Input label="CPF" mask="999.999.999-99" error={errors?.recoverPass?.cpf} {...field} />
        )}
      />
      <S.CommonFormButtonWrapper>
        <Button
          type="button"
          onClick={onSubmit}
          disabled={hasErrors}
          isLoading={isLoading}
          fullWidth
        >
          Avançar
        </Button>
      </S.CommonFormButtonWrapper>
    </S.CommonFormContainer>
  );
};
