import React from "react";
import StepForm from "./stepForm";
import FormikPasswordField from "@/app/signup/(forms)/components/formikPasswordField";
import { step3FormProps } from "../utils/sharedProps";

const ResetPasswordForm3: React.FC<step3FormProps> = ({
  setFormStep,
  email,
  otp,
}) => {
  return (
    <StepForm
      initialValues={{ password: "", confirmPassword: "" }}
      onSubmit={(values) => {
        console.log(values.email);
        setFormStep(4);
      }}
    >
      <section className="flex flex-col items-center  gap-[5vh]">
        <FormikPasswordField
          id="password"
          name="password"
          label="New password"
          placeholder="Enter new password"
        />
        <FormikPasswordField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm new password"
          placeholder="Confirm new password"
        />
      </section>
    </StepForm>
  );
};

export default ResetPasswordForm3;
