import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Input } from 'components/Input';
import { type EditProfileFormData } from 'shared/forms/UpdateProfileForm';
import { Button } from 'components/Button';

import { ADDRESS_FIELDS, CONTACT_FIELDS, PERSONAL_DATA_FIELDS } from './fields';
import * as S from './EditProfileForm.styles';

export const EditProfileForm = () => {
  const {
    control,
    formState: { errors, isSubmitting },
  } = useFormContext<EditProfileFormData>();

  const hasErrors = errors && Object.keys(errors).length > 0;
  return (
    <S.EditProfileFormContainer>
      <S.EditProfileFormTitle>Dados pessoais</S.EditProfileFormTitle>
      <S.EditProfileFormFieldsWrapper>
        {Object.values(PERSONAL_DATA_FIELDS).map((field) => {
          return (
            <Controller
              key={field.name}
              control={control}
              name={field.complexName}
              render={({ field: hookFormField }) => {
                return (
                  <S.EditProfileFormInputWrapper>
                    <Input
                      {...hookFormField}
                      label={field.label}
                      type={field.type}
                      mask={field.mask}
                      placeholder={field.placeholder}
                      error={errors?.personal?.[field.name]}
                      required={field.required}
                    />
                  </S.EditProfileFormInputWrapper>
                );
              }}
            />
          );
        })}
      </S.EditProfileFormFieldsWrapper>

      <S.Divider />

      <S.EditProfileFormTitle>Contato</S.EditProfileFormTitle>
      <S.EditProfileFormFieldsWrapper>
        {Object.values(CONTACT_FIELDS).map((field) => {
          return (
            <Controller
              key={field.name}
              control={control}
              name={field.complexName}
              render={({ field: { onChange, value } }) => {
                return (
                  <S.EditProfileFormInputWrapper>
                    <Input
                      name={field.complexName}
                      label={field.label}
                      onChange={onChange}
                      value={value}
                      type={field.type}
                      mask={field.mask}
                      placeholder={field.placeholder}
                      error={errors?.contact?.[field.name]}
                      required={field.required}
                    />
                  </S.EditProfileFormInputWrapper>
                );
              }}
            />
          );
        })}
      </S.EditProfileFormFieldsWrapper>

      <S.Divider />

      <S.EditProfileFormFieldsWrapper>
        <S.EditProfileFormTitle>Endereço</S.EditProfileFormTitle>
        {Object.values(ADDRESS_FIELDS).map((field) => {
          return (
            <Controller
              key={field.name}
              control={control}
              name={field.complexName}
              render={({ field: { onChange, value } }) => {
                return (
                  <S.EditProfileFormInputWrapper>
                    <Input
                      name={field.complexName}
                      label={field.label}
                      onChange={onChange}
                      value={value}
                      type={field.type}
                      mask={field.mask}
                      placeholder={field.placeholder}
                      error={errors?.address?.[field.name]}
                    />
                  </S.EditProfileFormInputWrapper>
                );
              }}
            />
          );
        })}
      </S.EditProfileFormFieldsWrapper>

      <S.EditProfileFormButtonWrapper>
        <Button fullWidth type="submit" disabled={hasErrors} isLoading={isSubmitting}>
          Salvar
        </Button>
      </S.EditProfileFormButtonWrapper>
    </S.EditProfileFormContainer>
  );
};
