import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';

import { Stepper } from 'components/Stepper';
import { type StepsType } from 'components/Stepper/Stepper.interfaces';
import { RegisterFormSchema, type RegisterFormData } from 'shared/RegisterForm';
import { zodResolver } from '@hookform/resolvers/zod';

import * as S from './Register.styles';
import { RegisterBackground } from './Background';
import { StepForms } from './StepForms';
import { type RegisterStepsKeys } from './Register.interfaces';

const REGISTER_STEPS: StepsType<number, RegisterStepsKeys>[] = [
  { number: 1, label: 'Dados Pessoais', key: 'personal' },
  { number: 2, label: 'Contato', key: 'contact' },
  { number: 3, label: 'Endereço', key: 'address' },
  { number: 4, label: 'Senha', key: 'password' },
];

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
        <RegisterBackground>
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
        </RegisterBackground>
      </S.RegisterContainer>
    </FormProvider>
  );
};
