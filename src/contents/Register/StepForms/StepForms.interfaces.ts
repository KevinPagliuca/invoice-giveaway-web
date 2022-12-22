import { type StepsType } from 'components/Stepper/Stepper.interfaces';

import { type RegisterStepsKeys } from '../Register.interfaces';

export interface IRegisterStepFormsProps {
  steps: StepsType<number, RegisterStepsKeys>[];
  currentStep: number;
  activeStep: number;
  onChangeCurrentStep: (step: number) => void;
  onChangeActiveStep: (step: number) => void;
}

export interface IRegisterFormComponentProps {
  handleNextStep: (isSave: boolean) => void;
  handlePreviousStep: () => void;
  showBackButton: boolean;
  disableBackButton: boolean;
  showFinishButton: boolean;
  showSaveButton: boolean;
}
