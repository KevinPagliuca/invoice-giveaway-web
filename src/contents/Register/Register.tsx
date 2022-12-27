import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';

import { Stepper } from 'components/Stepper';
import { RegisterFormSchema, type RegisterFormData } from 'shared/RegisterForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { Background } from 'contents/CommonLoginRegister';
import { REGISTER_STEPS } from 'constants/global';

import * as S from './Register.styles';
import { StepForms } from './StepForms';

export const RegisterContent = () => {
  const methods = useForm<RegisterFormData>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(RegisterFormSchema),
  });
  const errors = methods.formState?.errors;
  const hasErrors = errors && Object.keys(errors).length > 0;

  const [currentStep, setCurrentStep] = useState(REGISTER_STEPS[0].number);
  const [activeStep, setActiveStep] = useState(REGISTER_STEPS[0].number);

  const onChangeActiveStep = useCallback((number: number) => {
    setActiveStep(number);
  }, []);

  const onChangeCurrentStep = useCallback((number: number) => {
    setCurrentStep(number);
  }, []);

  return (
    <FormProvider {...methods}>
      <S.RegisterContainer>
        <Background
          backlink={{ href: '/login', label: 'Ir para Login' }}
          heroConfig={{ path: '/register.svg', alt: 'Register Illustration' }}
          title="Faça seu cadastro para começar!"
          reverse
        >
          <S.RegisterContent>
            <S.RegisterTitle>Cadastro</S.RegisterTitle>
            <Stepper
              currentStep={currentStep}
              activeStep={activeStep}
              onChangeActiveStep={onChangeActiveStep}
              steps={REGISTER_STEPS}
              disableChangeStep={hasErrors}
            />

            <S.RegisterForm>
              <StepForms
                steps={REGISTER_STEPS}
                activeStep={activeStep}
                currentStep={currentStep}
                onChangeCurrentStep={onChangeCurrentStep}
                onChangeActiveStep={onChangeActiveStep}
              />
            </S.RegisterForm>
            <S.SignUpText>
              Já tenho uma conta!<Link href="/login">Fazer Login</Link>
            </S.SignUpText>
          </S.RegisterContent>
        </Background>
      </S.RegisterContainer>
    </FormProvider>
  );
};
