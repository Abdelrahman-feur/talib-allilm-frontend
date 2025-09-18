import React from "react";
import StepForm from "./stepForm";
import FormikInputField from "@/app/signup/(forms)/components/formikInputField";
import { step1FormProps } from "../utils/sharedProps";

const ResetPasswordForm1: React.FC<step1FormProps> = ({
  setFormStep,
  setEmail,
}) => {
  return (
    <StepForm
      initialValues={{ email: "" }}
      onSubmit={(values) => {
        console.log(values.email);
        setEmail(values.email);
        setFormStep(2);
      }}
    >
      <FormikInputField
        id="email"
        label="Email"
        name="email"
        placeholder="Enter email"
        key="reset-password-email"
      />
    </StepForm>
  );
};

export default ResetPasswordForm1;
