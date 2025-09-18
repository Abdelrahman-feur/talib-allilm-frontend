import React from "react";
import { formikFieldsprops } from "../utils/formikFieldsProps";
import PasswordInput from "@/components/inputs/passwordInput";
import { useField } from "formik";
import SuperAcctress from "./superAcctress";

const FormikPasswordField: React.FC<formikFieldsprops> = ({
  label,
  required,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col w-fit">
      <label
        htmlFor={props.id || props.name}
        className="2xl:text-2xl text-base"
      >
        {" "}
        {label} {required && <SuperAcctress />}
      </label>
      <PasswordInput
        {...field}
        {...props}
        value={field.value || ""}
        error={meta.touched && meta.error ? true : false}
        key={"passwordSignup"}
      />
      {meta.touched && meta.error ? (
        <div className="error text-red-400">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikPasswordField;
