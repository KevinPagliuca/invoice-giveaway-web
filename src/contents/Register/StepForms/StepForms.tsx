import React, { useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { type RegisterFormData } from 'shared/RegisterForm';
import { useAuth } from 'contexts/Auth';
import { type RegisterStepsKeys } from 'constants/global';

import { type IFormComponentProps, type IStepFormsProps } from './StepForms.interfaces';
import { Personal } from './Personal';
import { Contact } from './Contact';
import { Address } from './Address';
import { Password } from './Password';
import { StepFormContainer } from './StepForms.styles';

const forms: Record<RegisterStepsKeys, (props: IFormComponentProps) => JSX.Element> = {
  contact: Contact,
  personal: Personal,
  address: Address,
  password: Password,
};

export const StepForms = ({
  steps,
  activeStep,
  currentStep,
  onChangeActiveStep,
  onChangeCurrentStep,
}: IStepFormsProps) => {
  const { handleRegister } = useAuth();
  const activeStepKey = useMemo(() => steps[activeStep - 1].key, [activeStep, steps]);

  const ActiveStepComponent = useMemo(() => {
    return forms[activeStepKey];
  }, [activeStepKey]);

  const { formState, handleSubmit, trigger } = useFormContext<RegisterFormData>();

  const errors = formState?.errors as Record<keyof RegisterFormData, object>;

  const handleNextStep = async (isSaving: boolean) => {
    const isValid = await trigger(activeStepKey);
    if (!isValid) return;
    if (isSaving) return onChangeActiveStep(currentStep);
    onChangeCurrentStep(currentStep + 1);
    onChangeActiveStep(activeStep + 1);
  };

  const handlePreviousStep = async () => {
    const isValid = await trigger(activeStepKey);
    if (!isValid) return;
    onChangeCurrentStep(currentStep - 1);
    onChangeActiveStep(activeStep - 1);
  };

  const hasErrors =
    errors && errors?.[activeStepKey] && Object.keys(errors[activeStepKey]).length > 0;

  const onSubmit = useCallback(handleSubmit(handleRegister), []);

  return (
    <StepFormContainer onSubmit={onSubmit}>
      <ActiveStepComponent
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
        showSaveButton={currentStep > activeStep}
        showBackButton={activeStep === currentStep && currentStep !== 1}
        showFinishButton={activeStep === currentStep && currentStep === steps.length}
        disableBackButton={currentStep === 1 || hasErrors}
      />
    </StepFormContainer>
  );
};
