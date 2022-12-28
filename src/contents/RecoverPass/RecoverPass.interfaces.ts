export enum RecoverPassFormStepsEnum {
  RECOVER_PASS = 'RECOVER_PASS',
  // SEND_CODE = 'SEND_CODE',
  NEW_PASSWORD = 'NEW_PASSWORD',
}

export interface IRecoverPassFormProps {
  onSubmitStep: () => Promise<void>;
}

export interface INewPassFormProps {
  userEmail: string;
}

export interface IRecoverPassContentProps {
  recoverData?: {
    email: string;
    cpf: string;
    code: string;
  };
}
