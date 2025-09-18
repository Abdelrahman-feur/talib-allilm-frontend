"use client";
import SharedFormSignupFields from "@/app/signup/components/sharedFormSignupFields";
import React from "react";
import FormContainer from "../../components/formContainer";
import { Formik } from "formik";
import { collegeTeacherInitialValues } from "../../utils/initialValues";
import FormikInputField from "../../components/formikInputField";
import FormikUploadField from "../../components/FormikUploadField";
import FormikCheckBoxInput from "../../components/formikCheckBoxInput";
import SubmitAndLoginNavSection from "../../components/submitAndLoginNavSection";
import { collegeTeacherValidationSchema } from "../../utils/validationSchemas";

const CollegeTeacherForm = () => {
  return (
    <Formik
      initialValues={collegeTeacherInitialValues}
      validationSchema={collegeTeacherValidationSchema}
      onSubmit={() => {}}
    >
      <FormContainer key="college-teacher-form">
        <SharedFormSignupFields />
        <FormikInputField
          id="companyName"
          label="Legal company name"
          name="companyName"
          placeholder="Legal company name "
          required
          type="text"
          key={"college-teacher-companyName"}
        />
        <FormikInputField
          id="companyAddress"
          label="Company address"
          name="companyAddress"
          placeholder="Company address "
          required
          type="text"
          key={"college-teacher-companyAddress"}
        />
        <FormikUploadField
          multiple
          name="docs"
          label="Docs"
          required
          key="college-teacher-docs"
        />
        <FormikUploadField
          name="photo"
          multiple={false}
          label="Upload photo (optioal)"
          key="college-teacher-photo"
        />
        <FormikCheckBoxInput
          id="terms"
          name="terms"
          placeholder=""
          label=""
          key="college-teacher-form-check"
        />
        <SubmitAndLoginNavSection text="Next" />
      </FormContainer>
    </Formik>
  );
};

export default CollegeTeacherForm;
