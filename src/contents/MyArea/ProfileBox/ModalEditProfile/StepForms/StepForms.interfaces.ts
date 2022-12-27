import { type StepsType } from 'components/Stepper';
import { type EditProfileStepsKeys } from 'constants/global';

export interface IStepFormsProps {
  steps: StepsType<number, EditProfileStepsKeys>[];
  currentStep: number;
  activeStep: number;
  onChangeCurrentStep: (step: number) => void;
  onChangeActiveStep: (step: number) => void;
  onSubmit: () => void;
}

export interface IFormComponentProps {
  handleNextStep: (isSave: boolean) => void;
  handlePreviousStep: () => void;
  showBackButton: boolean;
  disableBackButton: boolean;
  showFinishButton: boolean;
  showSaveButton: boolean;
}
