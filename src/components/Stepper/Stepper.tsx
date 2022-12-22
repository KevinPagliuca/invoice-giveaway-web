import React, { useCallback } from 'react';

import { type IStepperProps } from './Stepper.interfaces';
import * as S from './Stepper.styles';

export const Stepper = ({
  currentStep,
  steps,
  activeStep,
  disableChangeStep = false,
  onChangeActiveStep,
}: IStepperProps) => {
  const handleChangeStep = useCallback(
    (step: number) => {
      if (step > currentStep) return;
      onChangeActiveStep(step);
    },
    [activeStep, currentStep]
  );

  return (
    <S.StepperContainer>
      {steps.map((step) => {
        const isCurrentStep = step.number === currentStep;
        const isCompleted = step.number < currentStep;
        const isActive = step.number === activeStep;
        const isDisabled = step.number > currentStep || (disableChangeStep && !isActive);

        return (
          <S.StepperItem
            key={step.number}
            stepNumber={step.number}
            isCompleted={isCompleted}
            isCurrentStep={isCurrentStep}
            onClick={() => !isDisabled && handleChangeStep(step.number)}
            isActive={isActive}
            isDisabled={isDisabled}
          >
            <S.StepperLabel
              key={step.number}
              isCompleted={isCompleted}
              isCurrentStep={isCurrentStep}
              isActive={isActive}
              isDisabled={isDisabled}
            >
              {step.label}
            </S.StepperLabel>
          </S.StepperItem>
        );
      })}
    </S.StepperContainer>
  );
};
