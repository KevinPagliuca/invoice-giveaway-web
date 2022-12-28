import React, { useCallback } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { type RegisterFormData } from 'shared/forms/RegisterForm';
import { type RegisterStepsKeys } from 'constants/global';

import { CONTACT_FIELDS as fields } from './fields';
import * as S from '../StepForms.styles';
import { type IFormComponentProps } from '../StepForms.interfaces';

const stepKey: RegisterStepsKeys = 'contact';

export const Contact = ({
  handleNextStep,
  handlePreviousStep,
  disableBackButton,
  showBackButton,
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
      <S.StepFormTitle>Contato</S.StepFormTitle>
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
          type={'button'}
          fullWidth
          disabled={hasErrors}
          isLoading={isSubmitting}
          onClick={onSubmit}
        >
          {showSaveButton ? 'Salvar' : 'Avançar'}
        </Button>
      </S.StepButtonWrapper>
    </>
  );
};
