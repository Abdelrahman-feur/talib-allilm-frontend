"use client";
import React from "react";
import { formikSelectprops } from "../utils/formikFieldsProps";
import { useField } from "formik";
import SelectField from "@/components/inputs/selectField";
import SuperAcctress from "./superAcctress";

const FormikSelectField: React.FC<formikSelectprops> = ({
  label,
  children,
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
      <SelectField
        {...field}
        {...props}
        value={field.value || ""}
        error={meta.touched && meta.error ? true : false}
      >
        {children && children}
      </SelectField>
      {meta.touched && meta.error ? (
        <div className="error text-red-400">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikSelectField;
