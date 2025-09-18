"use client";
import { Formik } from "formik";
import React from "react";
import FormContainer from "../../components/formContainer";
import SharedFormSignupFields from "@/app/signup/components/sharedFormSignupFields";
import FormikSelectField from "../../components/formikSelectField";
import { teacherInitialValues } from "../../utils/initialValues";
import FormikMultiSelect from "../../components/formikMultiSelect";
import FormikUploadField from "../../components/FormikUploadField";
import FormikCheckBoxInput from "../../components/formikCheckBoxInput";
import SubmitAndLoginNavSection from "../../components/submitAndLoginNavSection";
import { teacherValidationSchema } from "../../utils/validationSchemas";
import FormikInputField from "../../components/formikInputField";

const TeacherSignup = () => {
  return (
    <Formik
      initialValues={teacherInitialValues}
      validationSchema={teacherValidationSchema}
      onSubmit={() => {
        console.log("here");
      }}
    >
      {({ values }) => (
        <FormContainer key="teacher-form">
          <SharedFormSignupFields />
          <FormikMultiSelect
            required
            options={[{ value: "tajweed", label: "tajweed" }]}
            id="subjectsToTeach"
            name="subjectsToTeach"
            label="Subjects to teach"
            key="teacher-subject"
          />
          <FormikSelectField
            required
            label="price"
            id="price.priceType"
            name="price.priceType"
          >
            <option value="">select price type</option>
            <option value="perHour">per hour</option>
            <option value="free">free</option>
            <option value="perCourse">per course</option>
          </FormikSelectField>

          {values &&
            (values.price.priceType === "perCourse" ||
              values.price.priceType === "perHour") && (
              <FormikInputField
                id="price.amount"
                required
                label="price"
                name="price.amount"
                placeholder="enter the price"
                type="number"
              />
            )}
          <FormikUploadField name="docs" label="Docs" required />
          <FormikUploadField name="photo" label="Upload photo (optional)" />
          <FormikCheckBoxInput
            id="terms"
            name="terms"
            placeholder=""
            label=""
            key="tracher-form"
          />
          <SubmitAndLoginNavSection key="teacher-form" />
        </FormContainer>
      )}
    </Formik>
  );
};

export default TeacherSignup;
