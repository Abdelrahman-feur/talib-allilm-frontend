import React from "react";
import StepForm from "./stepForm";
import OTPInput from "@/components/inputs/custopmOtpInput";
import { FormikConsumer } from "formik";
import { step2FormProps } from "../utils/sharedProps";

const ResetPasswordForm2: React.FC<step2FormProps> = ({
  setFormStep,
  setOtp,
}) => {
  return (
    <StepForm
      initialValues={{ otp: "" }}
      onSubmit={(values) => {
        console.log(values.otp);
        setOtp(values.otp);
        setFormStep(3);
      }}
    >
      <FormikConsumer>
        {({ setFieldValue, setFieldTouched, values, errors, touched }) => (
          <>
            <OTPInput
              length={6}
              autoFocus={true}
              value={values.otp}
              onBlur={() => setFieldTouched("otp", true)}
              onChange={(val) => setFieldValue("otp", val)}
            />
            {touched.otp && errors.otp && typeof errors.otp === "string" && (
              <p className="text-sm text-red-500">{errors.otp}</p>
            )}
          </>
        )}
      </FormikConsumer>
    </StepForm>
  );
};

export default ResetPasswordForm2;
