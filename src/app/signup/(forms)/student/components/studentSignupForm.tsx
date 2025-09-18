"use client";
import { Formik } from "formik";
import React from "react";
import FormikUploadField from "../../components/FormikUploadField";
import FormikCheckBoxInput from "../../components/formikCheckBoxInput";
import { basicUserInitialvalue } from "../../utils/initialValues";
import { basicUserValidationSchema } from "../../utils/validationSchemas";
import SharedFormSignupFields from "../../../components/sharedFormSignupFields";
import FormContainer from "../../components/formContainer";
import SubmitAndLoginNavSection from "../../components/submitAndLoginNavSection";

const StudentSignupForm = () => {
  return (
    <Formik
      initialValues={basicUserInitialvalue}
      validationSchema={basicUserValidationSchema}
      onSubmit={() => {
        console.log("here");
      }}
    >
      <FormContainer key="student-form">
        <SharedFormSignupFields />
        <FormikUploadField
          multiple={false}
          label="Upload Photo (Optional)"
          name="uploadPhoto"
        />
        <FormikCheckBoxInput id="terms" name="terms" placeholder="" label="" />
        <SubmitAndLoginNavSection key="student-form" />
      </FormContainer>
    </Formik>
  );
};

export default StudentSignupForm;
