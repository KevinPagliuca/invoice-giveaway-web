export type StepsType<T extends number = number, K extends string = string> = {
  number: T;
  label: string;
  key: K;
};

export interface IStepperProps {
  steps: StepsType[];
  currentStep: number;
  onChangeActiveStep: (step: number) => void;
  activeStep: number;
  disableChangeStep?: boolean;
}

export type StepperItemAttributes = {
  stepNumber: number;
  isCurrentStep: boolean;
  isCompleted: boolean;
  isActive: boolean;
  isDisabled: boolean;
};

export type StepperLabelAttributes = {
  isCurrentStep: boolean;
  isCompleted: boolean;
  isActive: boolean;
  isDisabled: boolean;
};
