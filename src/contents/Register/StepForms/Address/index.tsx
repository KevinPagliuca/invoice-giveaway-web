import React, { useCallback } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { type RegisterFormData } from 'shared/forms/RegisterForm';
import { type RegisterStepsKeys } from 'constants/global';

import { ADDRESS_FIELDS as fields } from './fields';
import * as S from '../StepForms.styles';
import { type IFormComponentProps } from '../StepForms.interfaces';

const stepKey: RegisterStepsKeys = 'address';

export const Address = ({
  handleNextStep,
  handlePreviousStep,
  disableBackButton,
  showBackButton,
  showFinishButton,
  showSaveButton,
}: IFormComponentProps) => {
  const {
    control,
    formState: { errors, isSubmitting },
    trigger,
  } = useFormContext<RegisterFormData>();

  const onSubmit = useCallback(async () => {
    const isValid = await trigger(stepKey);
    if (isValid) return handleNextStep?.(showSaveButton);
  }, []);

  const hasErrors = errors?.[stepKey] && Object.keys(errors?.[stepKey]).length > 0;

  return (
    <>
      <S.StepFormTitle>Endereço</S.StepFormTitle>
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
          onClick={onSubmit}
        >
          {showSaveButton ? 'Salvar' : 'Avançar'}
        </Button>
      </S.StepButtonWrapper>
    </>
  );
};
