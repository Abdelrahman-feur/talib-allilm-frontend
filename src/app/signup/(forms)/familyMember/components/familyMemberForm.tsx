"use client";
import { Formik } from "formik";
import React from "react";
import { familyMemberInitialValues } from "../../utils/initialValues";
import { familyMemberValidationSchema } from "../../utils/validationSchemas";
import FormContainer from "../../components/formContainer";
import SharedFormSignupFields from "@/app/signup/components/sharedFormSignupFields";
import FormikUploadField from "../../components/FormikUploadField";
import FormikCheckBoxInput from "../../components/formikCheckBoxInput";
import SubmitAndLoginNavSection from "../../components/submitAndLoginNavSection";
import FormikInputField from "../../components/formikInputField";

const FamilyMemberForm = () => {
  return (
    <Formik
      initialValues={familyMemberInitialValues}
      validationSchema={familyMemberValidationSchema}
      onSubmit={() => {
        console.log("here");
      }}
    >
      <FormContainer key="student-form">
        <SharedFormSignupFields />
        <FormikInputField
          id="age"
          label="Age"
          name="age"
          placeholder="Enter your age"
          type="number"
          required
        />
        <FormikUploadField
          multiple={false}
          label="Upload Photo (optional)"
          name="uploadPhoto"
        />
        <FormikCheckBoxInput id="terms" name="terms" placeholder="" label="" />
        <SubmitAndLoginNavSection key="student-form" />
      </FormContainer>
    </Formik>
  );
};

export default FamilyMemberForm;
