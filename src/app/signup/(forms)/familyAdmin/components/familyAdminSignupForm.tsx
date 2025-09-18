"use client";
import { Formik } from "formik";
import React from "react";
import { familyAdminInitialValues } from "../../utils/initialValues";
import { familyAdminValidationSchema } from "../../utils/validationSchemas";
import FormContainer from "../../components/formContainer";
import SharedFormSignupFields from "@/app/signup/components/sharedFormSignupFields";
import SubmitAndLoginNavSection from "../../components/submitAndLoginNavSection";
import FormikInputField from "../../components/formikInputField";
import FormikUploadField from "../../components/FormikUploadField";

const FamilyAdminSignupForm = () => {
  return (
    <Formik
      initialValues={familyAdminInitialValues}
      validationSchema={familyAdminValidationSchema}
      onSubmit={() => {
        console.log("here");
      }}
    >
      <FormContainer key="family-admin-form">
        <SharedFormSignupFields />
        <FormikInputField
          id="familyMemeberCount"
          name="familyMemeberCount"
          label="family memeber count"
          type="number"
          required
          placeholder="enter count from 1 to 10"
        />
        <FormikUploadField
          name="photo"
          label="Upload photo (optional)"
          key={"family-admin-photo"}
        />
        <SubmitAndLoginNavSection key="family-admin-submit" />
      </FormContainer>
    </Formik>
  );
};

export default FamilyAdminSignupForm;
