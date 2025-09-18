"use client";
import { useField, useFormikContext } from "formik";
import { CountryCode } from "libphonenumber-js";
import PhoneInput, {
  DefaultInputComponentProps,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import SuperAcctress from "./superAcctress";

interface Props {
  name: string;
  id: string;
  label?: string;
  defaultCountry?: CountryCode;
}

function CustomInput(props: DefaultInputComponentProps) {
  return (
    <input
      {...props}
      className="w-full rounded-lg px-3 py-2 focus:outline-none"
    />
  );
}

export default function PhoneInputFormik({
  name,
  label,
  id,
  defaultCountry = "EG",
}: Props) {
  const { setFieldValue } = useFormikContext<unknown>();
  const [field, meta] = useField(name);

  const hasError = meta.touched && !!meta.error;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="font-medium 2xl:text-2xl text-base">
          {" "}
          {label}
          <SuperAcctress />
        </label>
      )}

      <PhoneInput
        {...field}
        defaultCountry={defaultCountry}
        international
        withCountryCallingCode
        value={field.value}
        inputComponent={CustomInput}
        onChange={(value) => setFieldValue(name, value)}
        className={`
          inline-block h-[clamp(48px,4.6vh,88px)]  
          w-[clamp(242px,26.7vw,672px)] md:w-[clamp(320px,26.7vw,672px)]
          text-[18px] rounded-[12px] ps-2
          border ${
            hasError ? "border-red-500" : "border-[#F5F5F5] bg-[#F5F5F5]"
          }
          focus-within:ring-2 ${
            hasError ? "focus-within:ring-red-500" : "focus-within:ring-primary"
          }
        `}
      />

      {hasError && <div className="text-red-500 text-sm">{meta.error}</div>}
    </div>
  );
}
