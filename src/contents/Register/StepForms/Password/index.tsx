import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { type RegisterFormData } from 'shared/RegisterForm';
import { type RegisterStepsKeys } from 'constants/global';

import { PASSWORD_DATA_FIELDS as fields } from './fields';
import * as S from '../StepForms.styles';
import { type IFormComponentProps } from '../StepForms.interfaces';

const stepKey: RegisterStepsKeys = 'password';

export const Password = ({
  handlePreviousStep,
  disableBackButton,
  showBackButton,
  showSaveButton,
  showFinishButton,
}: IFormComponentProps) => {
  const {
    control,
    formState: { errors, isSubmitting },
  } = useFormContext<RegisterFormData>();

  const hasErrors = errors && Object.keys(errors).length > 0;

  return (
    <>
      <S.StepFormTitle>Senha</S.StepFormTitle>

      {Object.values(fields).map((field) => {
        return (
          <Controller
            key={field.name}
            control={control}
            name={field.complexName}
            render={({ field: { onChange, value } }) => {
              return (
                <S.StepInputWrapper>
                  <Input
                    name={field.complexName}
                    label={field.label}
                    onChange={onChange}
                    value={value}
                    type={field.type}
                    mask={field.mask}
                    placeholder={field.placeholder}
                    error={errors?.[stepKey]?.[field.name]}
                    withShowPassword={field?.withShowPassword}
                    required={field.required}
                  />
                </S.StepInputWrapper>
              );
            }}
          />
        );
      })}

      <S.StepButtonWrapper>
        {showBackButton && (
          <Button fullWidth disabled={disableBackButton} onClick={handlePreviousStep}>
            Voltar
          </Button>
        )}
        <Button
          type={showFinishButton ? 'submit' : 'button'}
          fullWidth
          disabled={isSubmitting || hasErrors}
        >
          {showFinishButton ? 'Finalizar' : showSaveButton ? 'Salvar' : 'Avançar'}
        </Button>
      </S.StepButtonWrapper>
    </>
  );
};
