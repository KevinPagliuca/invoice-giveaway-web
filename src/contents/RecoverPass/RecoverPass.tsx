import React, { useCallback, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { Background } from 'contents/CommonLoginRegister';
import { type RecoverPassFormData, RecoverPassFormSchema } from 'shared/forms/RecoverPassForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { usersService } from 'services/users';

import * as S from './RecoverPass.styles';
import { type IRecoverPassContentProps, RecoverPassFormStepsEnum } from './RecoverPass.interfaces';
import { NewPassFormContent, RecoverPassFormContent } from './StepForms';

export const RecoverPassContent = ({ recoverData }: IRecoverPassContentProps) => {
  const hasRecoverData = !!recoverData?.code && !!recoverData?.cpf && !!recoverData?.email;

  const router = useRouter();
  const [step, setStep] = useState<RecoverPassFormStepsEnum>(
    hasRecoverData ? RecoverPassFormStepsEnum.NEW_PASSWORD : RecoverPassFormStepsEnum.RECOVER_PASS
  );
  const [userEmail, setUserEmail] = useState(recoverData?.email || '');

  const methods = useForm<RecoverPassFormData>({
    mode: 'onChange',
    resolver: zodResolver(RecoverPassFormSchema),
    defaultValues: {
      recoverPass: { cpf: recoverData?.cpf || '' },
      newPassword: { code: recoverData?.code || '' },
    },
  });

  const onSubmitRecover = useCallback(async () => {
    try {
      const { cpf } = methods.getValues('recoverPass');
      const { email, message } = await usersService.recoverPass(cpf);
      toast.success(message);
      setUserEmail(email);
      setStep(RecoverPassFormStepsEnum.NEW_PASSWORD);
    } catch (err) {
      if (err instanceof Error) toast.error(err.message);
    }
  }, []);

  const onSubmit = useCallback(
    methods.handleSubmit(async (data) => {
      try {
        await usersService.resetPass(data);
        toast.success('Senha alterada com sucesso');
        router.push('/login');
      } catch (err) {
        if (err instanceof Error) toast.error(err.message);
      }
    }),
    []
  );

  const FormComponent = useMemo(
    () => ({
      [RecoverPassFormStepsEnum.RECOVER_PASS]: (
        <RecoverPassFormContent onSubmitStep={onSubmitRecover} />
      ),
      [RecoverPassFormStepsEnum.NEW_PASSWORD]: <NewPassFormContent userEmail={userEmail} />,
    }),
    [userEmail]
  );

  const activeForm = FormComponent[step];

  return (
    <FormProvider {...methods}>
      <S.RecoverPassContainer>
        <Background
          backlink={{ href: '/login', label: 'Voltar para Login' }}
          title="Recuperar Senha"
          heroConfig={{ path: '/login.svg', alt: 'Login Illustration' }}
          reverse
        >
          <S.RecoverPassContent onSubmit={onSubmit}>{activeForm}</S.RecoverPassContent>
        </Background>
      </S.RecoverPassContainer>
    </FormProvider>
  );
};
