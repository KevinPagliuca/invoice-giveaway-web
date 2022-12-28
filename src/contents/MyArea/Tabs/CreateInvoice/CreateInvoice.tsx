import React, { useCallback } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { useRouter } from 'next/router';

import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { InvoiceNote } from 'components/InvoiceNote';
import { useCreateInvoice } from 'hooks/invoices';
import {
  CreateInvoiceFormSchema,
  type CreateInvoiceFormData,
} from 'shared/forms/CreateInvoiceForm';

import * as S from './CreateInvoice.styles';
import { NEW_INVOICE_FORM_FIELDS } from './helpers';

export const CreateInvoice = () => {
  const router = useRouter();
  const { mutateAsync } = useCreateInvoice();

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<CreateInvoiceFormData>({
    resolver: zodResolver(CreateInvoiceFormSchema),
  });

  const onSubmit = useCallback(
    handleSubmit(async (data) => {
      try {
        await mutateAsync(data);
        reset({
          cnpj: '',
          number: '',
          date: '',
          totalValue: '',
        });
        router.push('/minha-area');
      } catch {}
    }),
    []
  );

  const watchedValues = useWatch({ control });

  const hasErrors = errors && Object.keys(errors).length > 0;

  return (
    <S.CreateInvoiceContainer>
      <S.CreateInvoiceAdvice>
        Cadastre sua <span>Nota Fiscal</span> somente se você <span>não informou</span> o seu CPF no
        caixa do estabelecimento em que você fez a compra.
      </S.CreateInvoiceAdvice>

      <S.CreateInvoiceContent>
        <InvoiceNote
          cnpj={watchedValues?.cnpj}
          coo={watchedValues?.number}
          date={watchedValues?.date}
          totalValue={watchedValues?.totalValue}
        />

        <S.CreateInvoiceForm onSubmit={onSubmit}>
          <h2>Informe os dados da NF</h2>
          {Object.values(NEW_INVOICE_FORM_FIELDS).map((objectField) => (
            <Controller
              key={objectField.name}
              control={control}
              name={objectField.name}
              render={({ field }) => (
                <Input
                  {...field}
                  type={objectField.type}
                  label={objectField.label}
                  mask={objectField.mask}
                  currency={objectField?.currency}
                  onValueChange={(value) => field.onChange(value)}
                  error={errors[objectField.name]}
                />
              )}
            />
          ))}

          <Button type="submit" disabled={isSubmitting || hasErrors}>
            Cadastrar
          </Button>
        </S.CreateInvoiceForm>
      </S.CreateInvoiceContent>
    </S.CreateInvoiceContainer>
  );
};
