"use client";
import { Formik } from "formik";
import React, { useState } from "react";
import { collegeAdminInitialValues } from "../../utils/initialValues";
import FormContainer from "../../components/formContainer";

import {
  collegeAdminValidationSchemaStep1,
  collegeAdminValidationSchemaStep2,
} from "../../utils/validationSchemas";
import Stepper from "./stepper";
import CollegeAdminStep1 from "./collegeAdminStep1";
import CollegeAdminStep2 from "./collegeAdminStep2";

const CollegeAdminForm = () => {
  const [collegeAdminFormStep, setCollegeAdminFormStep] = useState<number>(2);

  const schemas = [
    collegeAdminValidationSchemaStep1,
    collegeAdminValidationSchemaStep2,
  ];
  return (
    <>
      <Stepper currentStep={collegeAdminFormStep} />
      <Formik
        initialValues={collegeAdminInitialValues}
        validationSchema={schemas[collegeAdminFormStep - 1]}
        onSubmit={(values, {}) => {
          console.log("here");
          if (collegeAdminFormStep === 1) {
            setCollegeAdminFormStep(2);
          } else {
            // Final submission logic here
            console.log("Final Values:", values);
          }
        }}
      >
        <FormContainer key="college-admin-form">
          {collegeAdminFormStep === 1 && <CollegeAdminStep1 />}
          {collegeAdminFormStep === 2 && (
            <CollegeAdminStep2
              setCollegeAdminFormStep={setCollegeAdminFormStep}
            />
          )}
        </FormContainer>
      </Formik>
    </>
  );
};

export default CollegeAdminForm;
