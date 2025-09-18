"use client";
import React from "react";
import FormikInputField from "../../components/formikInputField";
import FormikSelectField from "../../components/formikSelectField";
import { countryList } from "@/utils/countriesList";
import PhoneInputFormik from "../../components/formikPhoneInput";
import Button from "@/components/buttons/Button";
import Link from "next/link";

interface Props {
  setCollegeAdminFormStep: React.Dispatch<React.SetStateAction<number>>;
}

const CollegeAdminStep2: React.FC<Props> = ({ setCollegeAdminFormStep }) => {
  return (
    <>
      <FormikInputField
        id="legalCompanyName"
        label="Legal company name"
        name="legalCompanyName"
        placeholder="Legal company name "
        type="text"
        required
      />
      <FormikInputField
        id="companyRegistrationNumber"
        label="Company registration number"
        name="companyRegistrationNumber"
        placeholder="Company registration number "
        type="number"
        required
      />
      <FormikSelectField id="country" name="country" label="Country" required>
        <option value="">Select Contry</option>
        {countryList.map((country) => (
          <option key={country.code} value={country.name}>
            {country.name}
          </option>
        ))}
      </FormikSelectField>

      <FormikInputField
        id="companyAddress"
        required
        label="Company address"
        name="companyAddress"
        placeholder="Company address "
        type="text"
      />
      <PhoneInputFormik
        id="companyPhone"
        name="companyPhone"
        defaultCountry="EG"
        label="Company phone"
      />
      <div className="md:col-span-2 text-center flex flex-col sm:flex-row justify-center gap-4 items-center">
        <Button
          type="button"
          size="md"
          variant="primaryOutline"
          onClick={() => {
            setCollegeAdminFormStep(1);
          }}
          isLoading={false}
        >
          Back
        </Button>
        <Button
          type="submit"
          size="md"
          variant="primary"
          onClick={() => {}}
          isLoading={false}
        >
          Signup
        </Button>
      </div>
      <div className="md:col-span-2 text-center">
        <p className="text-gray 2xl:text-[32px] text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-black">
            {" "}
            Login
          </Link>{" "}
        </p>
      </div>
    </>
  );
};

export default CollegeAdminStep2;
