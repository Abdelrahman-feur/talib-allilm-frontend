import React from "react";
import FormikInputField from "../(forms)/components/formikInputField";
import FormikPasswordField from "../(forms)/components/formikPasswordField";
import FormikSelectField from "../(forms)/components/formikSelectField";
import { countryList } from "@/utils/countriesList";
import PhoneInputFormik from "../(forms)/components/formikPhoneInput";

const SharedFormSignupFields = () => {
  return (
    <>
      <FormikInputField
        id="firstName"
        label="firstName"
        name="firstName"
        placeholder="First name "
        required
        type="text"
        key={""}
      />
      <FormikInputField
        id="lastName"
        label="Last Name"
        name="lastName"
        placeholder="Last name "
        type="text"
        required
      />
      <FormikInputField
        id="email"
        label="Email"
        name="email"
        placeholder="Email "
        type="text"
        required
      />

      <PhoneInputFormik
        id="phone"
        name="phone"
        defaultCountry="EG"
        label="Phone"
      />

      <FormikPasswordField
        id="password"
        label="Password"
        name="password"
        placeholder=" Enter your Password"
        required
      />
      <FormikPasswordField
        id="confirmPassword"
        label="confirm password"
        name="confirmPassword"
        placeholder="retype the password"
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
      <FormikSelectField id="gender" name="gender" label="Gender" required>
        <option value="">Select Gender</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </FormikSelectField>
      <FormikSelectField
        id="primaryLanguage"
        name="primaryLanguage"
        required
        label="Primary language"
      >
        {" "}
        <option value="">Select a language</option>
        <option value="male">English</option>
        <option value="female">Deuthch</option>
      </FormikSelectField>
    </>
  );
};

export default SharedFormSignupFields;
