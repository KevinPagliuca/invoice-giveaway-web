import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { type EditProfileStepsKeys } from 'constants/global';
import { type EditProfileFormData } from 'shared/UpdateProfileForm';

import { Personal } from './Personal';
import { Contact } from './Contact';
import { Address } from './Address';
import { StepFormContainer } from './StepForms.styles';
import { type IFormComponentProps, type IStepFormsProps } from './StepForms.interfaces';

const forms: Record<EditProfileStepsKeys, (props: IFormComponentProps) => JSX.Element> = {
  contact: Contact,
  personal: Personal,
  address: Address,
};

export const StepForms = ({
  steps,
  activeStep,
  currentStep,
  onChangeActiveStep,
  onChangeCurrentStep,
  onSubmit,
}: IStepFormsProps) => {
  const activeStepKey = useMemo(() => steps[activeStep - 1].key, [activeStep, steps]);

  const ActiveStepComponent = useMemo(() => {
    return forms[activeStepKey];
  }, [activeStepKey]);

  const { formState, trigger } = useFormContext<EditProfileFormData>();

  const errors = formState?.errors as Record<keyof EditProfileFormData, object>;

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
