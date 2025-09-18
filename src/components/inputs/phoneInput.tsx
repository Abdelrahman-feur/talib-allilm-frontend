import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";

export default function PhoneNumberField() {
  const [value, setValue] = useState<string>();

  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}
      defaultCountry="EG"
      international
      withCountryCallingCode
    />
  );
}
