export interface generalStepFormProps {
  setFormStep: React.Dispatch<React.SetStateAction<number>>;
}

export interface step1FormProps extends generalStepFormProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export interface step2FormProps extends generalStepFormProps {
  setOtp: React.Dispatch<React.SetStateAction<string>>;
}

export interface step3FormProps extends generalStepFormProps {
  otp: string;
  email: string;
}
