import SharedFormSignupFields from "@/app/signup/components/sharedFormSignupFields";
import React from "react";
import FormikUploadField from "../../components/FormikUploadField";
import FormikCheckBoxInput from "../../components/formikCheckBoxInput";
import SubmitAndLoginNavSection from "../../components/submitAndLoginNavSection";

const CollegeAdminStep1 = () => {
  return (
    <>
      <SharedFormSignupFields />
      <FormikUploadField
        multiple
        name="docs"
        label="Docs"
        required
        key="college-admin-docs"
      />
      <FormikUploadField
        name="photo"
        multiple={false}
        label="Upload photo (optioal)"
        key="college-admin-photo"
      />
      <FormikCheckBoxInput
        id="terms"
        name="terms"
        placeholder=""
        label=""
        key="college-admin-form-check"
      />
      <SubmitAndLoginNavSection text="Next" />
    </>
  );
};

export default CollegeAdminStep1;
